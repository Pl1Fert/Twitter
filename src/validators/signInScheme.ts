import * as yup from "yup";

import { validateEmail, validatePhone } from "@/helpers";
import { ISignInFormFields } from "@/interfaces";

export const SignInScheme: yup.ObjectSchema<ISignInFormFields> = yup.object().shape({
    phoneOrEmail: yup
        .string()
        .required("Email / Phone is required")
        .test(
            "phoneOrEmail",
            "Email / Phone is invalid",
            (value) => validateEmail(value) || validatePhone(parseInt(value ?? "0", 10))
        ),
    password: yup
        .string()
        .min(1, "Password must contain at least 1 character")
        .max(128, "Password must contain maximum 128 characters")
        .required("Password is required!"),
});
