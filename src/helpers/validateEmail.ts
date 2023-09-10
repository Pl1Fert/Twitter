import * as yup from "yup";

export const validateEmail = (email: string | undefined): boolean =>
    yup.string().email().isValidSync(email);
