import { FC } from "react";
import { useNavigate } from "react-router-dom";

import googleIcon from "@/assets/icons/google-icon.svg";
import picture from "@/assets/images/big-picture.png";
import logo from "@/assets/images/twitter.svg";
import {
    AppRoutes,
    ButtonType,
    FOOTER_LINKS,
    NotificationMessages,
    NotificationTypes,
} from "@/constants";
import { isFirebaseError } from "@/helpers";
import { useAppDispatch } from "@/hooks";
import { UserService } from "@/services";
import { notificationActions } from "@/store/slices/notificationSlice";
import { userActions } from "@/store/slices/userSlice";
import { Button } from "@/UI";

import {
    ButtonsColumn,
    Column,
    Image,
    List,
    ListItem,
    Logo,
    Row,
    Span,
    StyledLink,
    Subtitle,
    Text,
    Title,
    Wrapper,
} from "./homePage.styled";

const HomePage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onClick = (): void => navigate(AppRoutes.SIGN_UP, { replace: true });

    const onGoogleClick = async (): Promise<void> => {
        try {
            const data = await UserService.signUpWithGoogle();

            dispatch(userActions.setUser(data));

            dispatch(
                notificationActions.addNotification({
                    type: NotificationTypes.success,
                    message: NotificationMessages.loggedIn,
                })
            );
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
        <Wrapper>
            <Row>
                <Image src={picture} alt="art" loading="lazy" />
                <Column>
                    <Logo src={logo} alt="logo" loading="lazy" />
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
                        By singing up you agree to the <Span>Terms of Service</Span> and{" "}
                        <Span>Privacy Policy</Span>, including <Span>Cookie Use</Span>.
                    </Text>
                    <Text>
                        Already have an account?{" "}
                        <StyledLink to={AppRoutes.SIGN_IN}>Log in</StyledLink>
                    </Text>
                </Column>
            </Row>
            <List>
                {FOOTER_LINKS.map(({ id, content }) => (
                    <ListItem key={id}>{content}</ListItem>
                ))}
            </List>
        </Wrapper>
    );
};

export default HomePage;
