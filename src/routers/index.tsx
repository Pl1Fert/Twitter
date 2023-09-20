import { lazy } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { AppRoutes } from "@/constants";
import { CheckAuth, RequireAuth } from "@/hocs";
import { MainLayout, SuspenseLayout } from "@/layouts";

const HomePage = lazy(() => import("@/pages/HomePage/homePage"));
const FeedPage = lazy(() => import("@/pages/FeedPage/feedPage"));
const ProfilePage = lazy(() => import("@/pages/ProfilePage/profilePage"));
const ErrorPage = lazy(() => import("@/pages/ErrorPage/errorPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/notFoundPage"));
const SignInPage = lazy(() => import("@/pages/SignInPage/signInPage"));
const SignUpPage = lazy(() => import("@/pages/SignUpPage/signUpPage"));
const Tweetpage = lazy(() => import("@/pages/TweetPage/tweetPage"));

export const MainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path={AppRoutes.HOME} errorElement={<ErrorPage />}>
            <Route element={<CheckAuth />}>
                <Route element={<SuspenseLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path={AppRoutes.SIGN_IN} element={<SignInPage />} />
                    <Route path={AppRoutes.SIGN_UP} element={<SignUpPage />} />
                </Route>
            </Route>
            <Route element={<RequireAuth />}>
                <Route element={<MainLayout />}>
                    <Route path={AppRoutes.PROFILE + AppRoutes.ID} element={<ProfilePage />} />
                    <Route path={AppRoutes.FEED} element={<FeedPage />} />
                    <Route path={AppRoutes.TWEET + AppRoutes.ID} element={<Tweetpage />} />
                </Route>
            </Route>
            <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
    )
);
