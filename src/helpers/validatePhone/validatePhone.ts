import * as yup from "yup";

export const validatePhone = (phone: number | string | undefined): boolean =>
    yup
        .number()
        .integer()
        .positive()
        .test((phone) => !!(phone && phone.toString().length >= 8 && phone.toString().length <= 14))
        .isValidSync(phone);
