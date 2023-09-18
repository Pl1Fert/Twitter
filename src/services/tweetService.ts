import { addDoc, collection } from "firebase/firestore";
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
    });
};

export const TweetService = {
    sendTweet,
};
