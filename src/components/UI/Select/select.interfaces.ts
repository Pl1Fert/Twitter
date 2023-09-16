import { PropsWithRef } from "react";

export interface ISelectProps extends PropsWithRef<JSX.IntrinsicElements["select"]> {
    width?: string;
    options: string[];
}
