import { addDoc, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

import { DbCollections } from "@/constants";
import { db, storage } from "@/firebase";

const uploadImage = async (uploadedImage: File | null): Promise<string | null> => {
    if (!uploadedImage) {
        return null;
    }

    const imageName = `images/${uploadedImage.name + Date.now()}`;

    const imageRef = ref(storage, imageName);
    await uploadBytes(imageRef, uploadedImage);

    return imageName;
};

const sendTweet = async (
    value: string,
    name: string | null,
    email: string | null,
    uploadedImage: File | null
) => {
    const tweetsCollectionRef = collection(db, DbCollections.tweets);
    const imageName = await uploadImage(uploadedImage);

    await addDoc(tweetsCollectionRef, {
        name,
        email,
        text: value,
        likes: 0,
        createdAt: new Date(),
        image: imageName,
        likedByUsers: [],
    });
};

const updateTweets = async (name: string, email: string) => {
    const q = query(collection(db, DbCollections.tweets), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (doc) => {
        await updateDoc(doc.ref, {
            name,
            email,
        });
    });
};

export const TweetService = {
    sendTweet,
    updateTweets,
};
