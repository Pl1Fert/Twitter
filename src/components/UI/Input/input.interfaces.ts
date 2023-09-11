import { PropsWithRef } from "react";

import { InputType } from "@/constants";

export interface IInputProps extends PropsWithRef<JSX.IntrinsicElements["input"]> {
    width?: string;
    placeholder: string;
    name: string;
    type?: InputType;
}
