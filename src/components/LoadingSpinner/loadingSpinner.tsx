import { FC } from "react";

import { Container, Ring, Span } from "./loadingSpinner.styled";

export const LoadingSpinner: FC = () => (
    <Container>
        <Ring>
            <h3>Loading</h3>
            <Span />
        </Ring>
    </Container>
);
