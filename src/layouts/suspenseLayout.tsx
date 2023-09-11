import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { LoadingSpinner } from "@/components";

export const SuspenseLayout: FC = () => (
    <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
    </Suspense>
);
