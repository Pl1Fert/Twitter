import { PropsWithRef } from "react";

export interface ISelectProps extends PropsWithRef<JSX.IntrinsicElements["select"]> {
    width?: string;
    placeholder: string;
    name: string;
    options: string[];
}
