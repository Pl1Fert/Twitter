import { memo, ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AppRoutes } from "@/constants";
import { useAppSelector } from "@/hooks";
import { userSelector } from "@/store/selectors";

interface IProps {
    children?: ReactNode;
}

export const CheckAuth = memo<IProps>(({ children }) => {
    const { token } = useAppSelector(userSelector);

    if (token) {
        return <Navigate to={AppRoutes.PROFILE} replace />;
    }

    return children || <Outlet />;
});
