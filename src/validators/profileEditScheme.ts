import * as yup from "yup";

import { isValidDate, validateEmail, validatePhone } from "@/helpers";
import { IProfileEditFields } from "@/interfaces";

export const ProfileEditScheme: yup.ObjectSchema<IProfileEditFields> = yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(1, "Name must contain at least 1 character")
        .max(20, "Name must contain maximum 20 characters"),
    phone: yup
        .string()
        .required("Phone is required")
        .test("phone", "Phone is invalid", (value) => validatePhone(parseInt(value ?? "0", 10))),
    email: yup
        .string()
        .required("Email is required")
        .test("phone", "Email is invalid", (value) => validateEmail(value)),
    newPassword: yup
        .string()
        .test(
            "check password",
            "Password must contain at least 1 character",
            (password) => !password || password.length >= 1
        ),
    confirmPassword: yup.string().oneOf([yup.ref("newPassword")], "Passwords must match"),
    birthDate: yup
        .string()
        .required()
        .test("birthDate", "Date is invalid", (value) => {
            if (value) {
                const date = value.split("/");
                return !isValidDate(date[0], date[1], date[2]);
            }

            return false;
        }),
    description: yup.string().max(128, "Description must contain maximum 128 characters"),
});
