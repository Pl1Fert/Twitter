import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import googleIcon from "@/assets/icons/google-icon.svg";
import picture from "@/assets/images/big-picture.png";
import logo from "@/assets/images/twitter.svg";
import { HomeFooter } from "@/components";
import { Button } from "@/components/UI";
import { AppRoutes } from "@/constants";
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
    const onClick = (): void => navigate(AppRoutes.SIGN_UP, { replace: true });
    const dispatch = useAppDispatch();
    const onGoogleClick = (): void => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
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
                        type: "success",
                        message: "You successfully logged in",
                    })
                );
            })
            .catch((error: FirebaseError) => {
                const errorMessage = error.message;

                dispatch(
                    notificationActions.addNotification({ type: "error", message: errorMessage })
                );
            });
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
                            type="button"
                            width="70%"
                            icon={googleIcon}
                            content="Sign up with Google"
                            outline
                            onClick={onGoogleClick}
                        />
                        <Button
                            type="button"
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
