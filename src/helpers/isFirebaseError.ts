import { FirebaseError } from "firebase/app";

export const isFirebaseError = (x: unknown): x is FirebaseError => {
    if (x && typeof x === "object" && "code" in x) {
        return true;
    }

    return false;
};
