import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { LeftAside, LoadingSpinner, RightAside } from "@/components";

const Section = styled.section`
    display: flex;
    justify-content: center;
    gap: 35px;

    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
`;

export const MainLayout: FC = () => (
    <Section>
        <LeftAside />
        <Suspense fallback={<LoadingSpinner />}>
            <Outlet />
        </Suspense>
        <RightAside />
    </Section>
);
