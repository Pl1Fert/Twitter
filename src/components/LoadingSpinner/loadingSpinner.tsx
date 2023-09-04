import { FC } from "react";

import { Ring, Span } from "./loadingSpinner.styled";

export const LoadingSpinner: FC = () => (
    <Ring>
        <h3>Loading</h3>
        <Span />
    </Ring>
);
