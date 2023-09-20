import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateEmail,
    updatePassword,
} from "firebase/auth";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    query,
    setDoc,
    updateDoc,
    where,
} from "firebase/firestore";

import { DbCollections, NotificationMessages } from "@/constants";
import { db } from "@/firebase";
import { validateEmail, validatePhone } from "@/helpers";
import { IProfileEditFields, ISignInFormFields, IUser } from "@/interfaces";

const updateUserInfo = async (
    data: IProfileEditFields,
    id: string | null,
    email: string | null
): Promise<void> => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user || !id) {
        throw new Error(NotificationMessages.notSignedIn);
    }

    const userRef = doc(db, DbCollections.users, id);

    if (email !== data.email) {
        await updateEmail(auth.currentUser, data.email);
    } else if (data.newPassword) {
        await updatePassword(auth.currentUser, data.newPassword);
    }

    await updateDoc(userRef, {
        name: data.name,
        email: data.email,
        phone: data.phone,
        birthDate: data.birthDate,
        description: data.description,
    });
};

const signUpWithGoogle = async (): Promise<IUser> => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const credentials = GoogleAuthProvider.credentialFromResult(result);
    const token = credentials?.accessToken;
    const { user } = result;
    const { displayName, phoneNumber, email, uid } = user;

    const docRef = doc(db, DbCollections.users, uid);
    const docSnap = await getDoc(docRef);

    const returnData: IUser = {
        id: null,
        name: null,
        email: null,
        token: null,
        phone: null,
        birthDate: null,
        description: null,
    };

    if (docSnap.exists()) {
        const data = docSnap.data() as IUser;
        return { ...data, token: token || null } as IUser;
    }

    await setDoc(docRef, {
        name: displayName,
        phone: phoneNumber,
        email,
        id: uid,
    });

    return {
        ...returnData,
        id: uid,
        name: displayName,
        phone: phoneNumber,
        email,
        token: token || null,
    } as IUser;
};

const signIn = async (inputData: ISignInFormFields) => {
    const auth = getAuth();
    const { phoneOrEmail, password } = inputData;
    let emailFromDb = "";

    const phone = validatePhone(phoneOrEmail) ? phoneOrEmail : null;
    if (phone) {
        const q = query(collection(db, DbCollections.users), where("phone", "==", phone), limit(1));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            emailFromDb = doc.data().email as string;
        });
    }

    const email = validateEmail(phoneOrEmail) ? phoneOrEmail : emailFromDb;
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    const { uid } = user;
    const token = await user.getIdToken();

    const usersCollectionRef = collection(db, DbCollections.users);

    const response = await getDocs(usersCollectionRef);

    const data = response.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
    const userData = data.find((item) => item.data.id === uid);

    return { userData, token, uid };
};

const signUp = async (
    name: string,
    email: string,
    password: string,
    phone: string,
    birthDate: string
) => {
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    const { uid } = user;
    const token = await user.getIdToken();

    await setDoc(doc(db, DbCollections.users, uid), {
        name,
        phone,
        email,
        id: uid,
        birthDate,
    });

    return { uid, token };
};

export const UserService = {
    updateUserInfo,
    signUpWithGoogle,
    signIn,
    signUp,
};
