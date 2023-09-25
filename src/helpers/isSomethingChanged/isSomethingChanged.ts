import { IProfileEditFields, IUser } from "@/interfaces";

export const isSomethingChanged = (data: IProfileEditFields, user: IUser): boolean =>
    user.name === data.name &&
    user.email === data.email &&
    user.phone === data.phone &&
    user.birthDate === data.birthDate &&
    user.description === data.description &&
    !data.newPassword;
