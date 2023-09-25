import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import logo from "@/assets/images/twitter.svg";
import {
    AppRoutes,
    ButtonType,
    InputType,
    NotificationMessages,
    NotificationTypes,
} from "@/constants";
import { isFirebaseError } from "@/helpers";
import { useAppDispatch } from "@/hooks";
import { ISignInFormFields } from "@/interfaces";
import { UserService } from "@/services";
import { notificationActions } from "@/store/slices/notificationSlice";
import { userActions } from "@/store/slices/userSlice";
import { Button, Input } from "@/UI";
import { SignInScheme } from "@/validators";

import { Inputs, Logo, Section, StyledLink, Title, Wrapper } from "./signInPage.styled";

const SignInPage: FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, isDirty, isSubmitting },
    } = useForm<ISignInFormFields>({ mode: "onBlur", resolver: yupResolver(SignInScheme) });
    const dispatch = useAppDispatch();

    const onFormSubmit = async (data: ISignInFormFields): Promise<void> => {
        try {
            const { userData, token, uid } = await UserService.signIn(data);

            dispatch(
                userActions.setUser({
                    name: (userData?.data.name as string) || null,
                    phone: (userData?.data.phone as string) || null,
                    email: (userData?.data.email as string) || null,
                    id: uid,
                    token: token || null,
                    birthDate: (userData?.data.birthDate as string) || null,
                    description: (userData?.data.description as string) || null,
                })
            );

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

        reset();
    };

    return (
        <Wrapper>
            <Section>
                <Logo src={logo} alt="logo" />
                <Title>Log in to Twitter</Title>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <Inputs>
                        <Input
                            placeholder="Phone number, email address"
                            {...register("phoneOrEmail")}
                            errorMessage={errors?.phoneOrEmail?.message}
                        />
                        <Input
                            type={InputType.password}
                            placeholder="Password"
                            {...register("password")}
                            errorMessage={errors?.password?.message}
                        />
                    </Inputs>
                    <Button
                        type={ButtonType.submit}
                        primary
                        content="Log In"
                        disabled={!isValid || !isDirty || isSubmitting}
                    />
                </form>
                <StyledLink to={AppRoutes.SIGN_UP}>Sign up to Twitter</StyledLink>
            </Section>
        </Wrapper>
    );
};

export default SignInPage;
