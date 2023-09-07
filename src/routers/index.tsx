import { lazy, Suspense } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { AppRoutes } from "@/constants";
import { RequireAuth } from "@/hocs";

const HomePage = lazy(() => import("@/pages/HomePage/homePage"));
const FeedPage = lazy(() => import("@/pages/FeedPage/feedPage"));
const ProfilePage = lazy(() => import("@/pages/ProfilePage/profilePage"));
const ErrorPage = lazy(() => import("@/pages/ErrorPage/errorPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/notFoundPage"));
const SignInPage = lazy(() => import("@/pages/SignInPage/signInPage"));
const SignUpPage = lazy(() => import("@/pages/SignUpPage/signUpPage"));

export const MainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path={AppRoutes.HOME} errorElement={<ErrorPage />}>
            <Route
                index
                element={
                    <Suspense>
                        <HomePage />
                    </Suspense>
                }
            />
            <Route element={<RequireAuth />}>
                <Route path={AppRoutes.PROFILE} element={<ProfilePage />} />
                <Route path={AppRoutes.FEED} element={<FeedPage />} />
            </Route>
            <Route
                path={AppRoutes.SIGN_IN}
                element={
                    <Suspense>
                        <SignInPage />
                    </Suspense>
                }
            />
            <Route
                path={AppRoutes.SIGN_UP}
                element={
                    <Suspense>
                        <SignUpPage />
                    </Suspense>
                }
            />
            <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
    )
);
