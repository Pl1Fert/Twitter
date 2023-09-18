import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

import logo from "@/assets/images/twitter.svg";
import { Button, Input } from "@/components/UI";
import {
    AppRoutes,
    ButtonType,
    DbCollections,
    InputType,
    NotificationMessages,
    NotificationTypes,
} from "@/constants";
import { db } from "@/firebase";
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

    const onFormSubmit = async (data: ISignInFormFields): Promise<void> => {
        const auth = getAuth();
        const { phoneOrEmail, password } = data;
        const email = validateEmail(phoneOrEmail) ? phoneOrEmail : "";

        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);

            const { uid } = user;
            const token = await user.getIdToken();

            const usersCollectionRef = collection(db, DbCollections.users);

            const response = await getDocs(usersCollectionRef);

            const data = response.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
            const userData = data.find((item) => item.data.id === uid);

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
