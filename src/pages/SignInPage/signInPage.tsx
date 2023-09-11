import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import logo from "@/assets/images/twitter.svg";
import { Button, Input } from "@/components/UI";
import {
    AppRoutes,
    ButtonType,
    InputType,
    NotificationMessages,
    NotificationTypes,
} from "@/constants";
import { isFirebaseError, validateEmail } from "@/helpers";
import { useAppDispatch } from "@/hooks";
import { ISignInFormFields } from "@/interfaces";
import { notificationActions } from "@/store/slices/notificationSlice";
import { userActions } from "@/store/slices/userSlice";
import { SignInScheme } from "@/validators";

import {
    ErorrsWrapper,
    Inputs,
    Logo,
    Section,
    StyledLink,
    Title,
    Wrapper,
} from "./signInPage.styled";

const SignInPage: FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, isDirty, isSubmitting },
    } = useForm<ISignInFormFields>({ mode: "onBlur", resolver: yupResolver(SignInScheme) });
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onFormSubmit = async (data: ISignInFormFields): Promise<void> => {
        const auth = getAuth();
        const { phoneOrEmail, password } = data;
        const email = validateEmail(phoneOrEmail) ? phoneOrEmail : "";

        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);

            const { uid, displayName, phoneNumber } = user;
            const token = await user.getIdToken();

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
                        />
                        <Input
                            type={InputType.password}
                            placeholder="Password"
                            {...register("password")}
                        />
                    </Inputs>
                    <ErorrsWrapper>
                        {errors?.phoneOrEmail && <p>{errors?.phoneOrEmail?.message || "Error!"}</p>}
                        {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
                    </ErorrsWrapper>
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
