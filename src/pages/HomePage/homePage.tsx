import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import googleIcon from "@/assets/icons/google-icon.svg";
import picture from "@/assets/images/big-picture.png";
import logo from "@/assets/images/twitter.svg";
import { HomeFooter } from "@/components";
import { Button } from "@/components/UI";
import { AppRoutes, ButtonType, NotificationMessages, NotificationTypes } from "@/constants";
import { isFirebaseError } from "@/helpers";
import { useAppDispatch } from "@/hooks";
import { notificationActions } from "@/store/slices/notificationSlice";
import { userActions } from "@/store/slices/userSlice";

import {
    ButtonsColumn,
    Column,
    Image,
    Logo,
    Row,
    Span,
    StyledLink,
    Subtitle,
    Text,
    Title,
} from "./homePage.styled";

const HomePage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onClick = (): void => navigate(AppRoutes.SIGN_UP, { replace: true });

    const onGoogleClick = async (): Promise<void> => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);

            const credentials = GoogleAuthProvider.credentialFromResult(result);
            const token = credentials?.accessToken;
            const { user } = result;
            const { displayName, phoneNumber, email, uid } = user;

            dispatch(
                userActions.setUser({
                    name: displayName,
                    phone: phoneNumber,
                    email,
                    id: uid,
                    token: token || null,
                    birthDate: null,
                })
            );

            dispatch(
                notificationActions.addNotification({
                    type: NotificationTypes.success,
                    message: NotificationMessages.loggedIn,
                })
            );

            navigate(AppRoutes.PROFILE, { replace: true });
        } catch (error) {
            if (isFirebaseError(error)) {
                const errorMessage = error.message;

                dispatch(
                    notificationActions.addNotification({
                        type: NotificationTypes.error,
                        message: errorMessage,
                    })
                );
            }
        }
    };

    return (
        <main>
            <Row>
                <Image src={picture} alt="art" />
                <Column>
                    <Logo src={logo} alt="logo" />
                    <Title>Happening now</Title>
                    <Subtitle>Join Twitter today</Subtitle>
                    <ButtonsColumn>
                        <Button
                            type={ButtonType.button}
                            width="70%"
                            icon={googleIcon}
                            content="Sign up with Google"
                            outline
                            onClick={onGoogleClick}
                        />
                        <Button
                            type={ButtonType.button}
                            width="70%"
                            content="Sign up with Email"
                            outline
                            onClick={onClick}
                        />
                    </ButtonsColumn>
                    <Text>
                        By singing up you agree to the <Span>Terms of Service</Span> and
                        <Span>Privacy Policy</Span>, including <Span>Cookie Use</Span>.
                    </Text>
                    <Text>
                        Already have an account?{" "}
                        <StyledLink to={AppRoutes.SIGN_IN}>Log in</StyledLink>
                    </Text>
                </Column>
            </Row>
            <HomeFooter />
        </main>
    );
};

export default HomePage;
