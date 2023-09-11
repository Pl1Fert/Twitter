import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { LeftAside, LoadingSpinner, RightAside } from "@/components";

const Section = styled.section`
    height: 100%;
    padding-top: 30px;

    display: flex;
    justify-content: center;
    gap: 35px;
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
