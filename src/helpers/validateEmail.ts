import * as yup from "yup";

export const validateEmail = (email: string | undefined) => yup.string().email().isValidSync(email);
