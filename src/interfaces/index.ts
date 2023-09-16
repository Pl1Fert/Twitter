import { Timestamp } from "firebase/firestore";

import { NotificationTypes } from "@/constants";

export interface ISignUpFormFields {
    name: string;
    phone: string;
    email: string;
    password: string;
    month: string;
    year: string;
    day: string;
}

export interface ISignInFormFields {
    phoneOrEmail: string;
    password: string;
}

export interface ITheme {
    isDarkTheme: boolean;
}

export interface INotification {
    id: number;
    type: NotificationTypes;
    message: string;
}

export interface IUser {
    id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    token: string | null;
    birthDate: string | null;
    idInDb: string | null;
    description: string | null;
}

export interface INavBarLink {
    id: number;
    title: string;
    to: string;
    icon: string;
    activeIcon: string;
}

export interface IProfileFields {
    name: string;
    email: string;
    phone: string;
    newPassword?: string;
    confirmPassword?: string;
    birthDate: string;
    description?: string;
}

export interface ITweet {
    name: string;
    email: string;
    text: string;
    likes: number;
    createdAt: Timestamp;
    selfLiked: boolean;
}
