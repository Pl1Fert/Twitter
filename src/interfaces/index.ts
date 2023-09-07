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
    isVisible: boolean;
    message: string;
}

export interface IUser {
    id?: string;
    name?: string;
    email?: string;
    phone?: string;
    token?: string;
    birthDate?: string;
}
