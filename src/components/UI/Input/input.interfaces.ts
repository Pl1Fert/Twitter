import { PropsWithRef } from "react";

export interface IInputProps extends PropsWithRef<JSX.IntrinsicElements["input"]> {
    width?: string;
    placeholder: string;
    name: string;
}
