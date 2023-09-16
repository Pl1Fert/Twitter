import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { ENV_VARS } from "./constants";

const firebaseConfig = {
    apiKey: ENV_VARS.VITE_FIREBASE_API_KEY,
    authDomain: ENV_VARS.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: ENV_VARS.VITE_FIREBASE_PROJECT_ID,
    storageBucket: ENV_VARS.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: ENV_VARS.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: ENV_VARS.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
