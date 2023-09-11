import * as yup from "yup";

import { validateEmail, validatePhone } from "@/helpers";
import { ISignUpFormFields } from "@/interfaces";

export const SignUpScheme: yup.ObjectSchema<ISignUpFormFields> = yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(1, "Name must contain at least 1 character")
        .max(20, "Name must contain maximum 20 characters"),
    phone: yup
        .string()
        .required("Email / Phone is required")
        .test("phone", "Email / Phone is invalid", (value) =>
            validatePhone(parseInt(value ?? "0", 10))
        ),
    email: yup
        .string()
        .required("Email is required")
        .test("phone", "Email is invalid", (value) => validateEmail(value)),
    password: yup
        .string()
        .min(1, "Password must contain at least 1 character")
        .max(128, "Password must contain maximum 128 characters")
        .required("Password is required!"),
    month: yup.string().required("Month is required"),
    year: yup.string().required("Year is required"),
    day: yup.string().required("Day is required"),
});
