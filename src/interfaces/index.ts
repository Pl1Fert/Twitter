export interface ISignUpFormFields {
    name: string;
    phone: string;
    email: string;
    month: string;
    year: string;
    day: string;
}

export interface ISignInFormFields {
    phoneOrEmail: string;
    password: string;
}

export interface ITheme {
    darkTheme: boolean;
}

export interface INotification {
    id: number;
    type: "success" | "warning" | "error";
    message: string;
}

export interface IUser {
    id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    token: string | null;
    birthDate: string | null;
}
