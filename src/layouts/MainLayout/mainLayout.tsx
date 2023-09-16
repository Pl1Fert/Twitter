import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { LeftAside, LoadingSpinner, RightAside } from "@/components";

import { Main, Section } from "./mainLayout.styled";

export const MainLayout: FC = () => (
    <Section>
        <LeftAside />
        <Suspense fallback={<LoadingSpinner />}>
            <Main>
                <Outlet />
            </Main>
        </Suspense>
        <RightAside />
    </Section>
);
