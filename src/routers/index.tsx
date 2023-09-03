import { lazy } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { AppRoutes } from "@/constants";

const HomePage = lazy(() => import("@/pages/HomePage/homePage"));
const ProfilePage = lazy(() => import("@/pages/ProfilePage/profilePage"));
const ErrorPage = lazy(() => import("@/pages/ErrorPage/errorPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/notFoundPage"));
const SignInPage = lazy(() => import("@/pages/SignInPage/signInPage"));
const SignUpPage = lazy(() => import("@/pages/SignUpPage/signUpPage"));

export const MainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path={AppRoutes.HOME} errorElement={<ErrorPage />}>
            <Route index element={<HomePage />} />
            <Route path={AppRoutes.PROFILE} element={<ProfilePage />} />
            <Route path={AppRoutes.SIGN_IN} element={<SignInPage />} />
            <Route path={AppRoutes.SIGN_UP} element={<SignUpPage />} />
            <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
    )
);
