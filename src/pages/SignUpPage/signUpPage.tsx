import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

import logo from "@/assets/images/twitter.svg";
import { Button, Input, Select } from "@/components/UI";
import {
    AppRoutes,
    ButtonType,
    DbCollections,
    InputType,
    MONTH_NAMES,
    NotificationMessages,
    NotificationTypes,
} from "@/constants";
import { db } from "@/firebase";
import {
    formatDate,
    getDaysNumbers,
    getYearNumbers,
    isFirebaseError,
    isValidDate,
} from "@/helpers";
import { useAppDispatch } from "@/hooks";
import { ISignUpFormFields } from "@/interfaces";
import { notificationActions } from "@/store/slices/notificationSlice";
import { userActions } from "@/store/slices/userSlice";
import { SignUpScheme } from "@/validators";

import {
    ErorrsWrapper,
    Inputs,
    Logo,
    Section,
    Selects,
    StyledLink,
    SubTitle,
    Text,
    Title,
    Wrapper,
} from "./signUpPage.styled";

const SignUpPage: FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, isDirty, isSubmitting },
    } = useForm<ISignUpFormFields>({ mode: "onBlur", resolver: yupResolver(SignUpScheme) });
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onFormSubmit = async (data: ISignUpFormFields): Promise<void> => {
        const auth = getAuth();
        const { email, password, name, phone, month, year, day } = data;
        if (!isValidDate(year, month, day)) {
            dispatch(
                notificationActions.addNotification({
                    type: NotificationTypes.error,
                    message: NotificationMessages.notValidDate,
                })
            );
            reset();

            return;
        }

        const birthDate = formatDate(year, month, day);

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(user, {
                displayName: name,
            });

            const { uid } = user;
            const token = await user.getIdToken();

            const usersCollectionRef = collection(db, DbCollections.users);

            const response = await addDoc(usersCollectionRef, {
                name,
                phone,
                email,
                id: uid,
                birthDate,
            });

            dispatch(
                userActions.setUser({
                    name,
                    phone,
                    email,
                    id: uid,
                    token: token || null,
                    birthDate,
                    idInDb: response.id,
                    description: null,
                })
            );

            dispatch(
                notificationActions.addNotification({
                    type: NotificationTypes.success,
                    message: NotificationMessages.signedUp,
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
                <Title>Create an account</Title>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <Inputs>
                        <Input placeholder="Name" {...register("name")} />
                        <Input placeholder="Phone number" {...register("phone")} />
                        <Input placeholder="Email" {...register("email")} />
                        <Input
                            type={InputType.password}
                            placeholder="Password"
                            {...register("password")}
                        />
                    </Inputs>
                    <ErorrsWrapper>
                        {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
                        {errors?.phone && <p>{errors?.phone?.message || "Error!"}</p>}
                        {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
                        {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
                    </ErorrsWrapper>
                    <StyledLink to={AppRoutes.HOME}>Use Email</StyledLink>
                    <SubTitle>Date of birth</SubTitle>
                    <Text>
                        Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis
                        bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur
                        leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget
                        tellus. Nibh mi massa in molestie a sit. Elit congue.
                    </Text>
                    <Selects>
                        <Select
                            placeholder="Month"
                            width="30%"
                            options={MONTH_NAMES}
                            {...register("month")}
                        />
                        <Select
                            placeholder="Day"
                            width="30%"
                            options={getDaysNumbers()}
                            {...register("day")}
                        />
                        <Select
                            placeholder="Year"
                            width="30%"
                            options={getYearNumbers()}
                            {...register("year")}
                        />
                    </Selects>
                    <ErorrsWrapper>
                        {errors?.month && <p>{errors?.month?.message || "Error!"}</p>}
                        {errors?.day && <p>{errors?.day?.message || "Error!"}</p>}
                        {errors?.year && <p>{errors?.year?.message || "Error!"}</p>}
                    </ErorrsWrapper>
                    <Button
                        type={ButtonType.submit}
                        primary
                        content="Next"
                        disabled={!isValid || !isDirty || isSubmitting}
                    />
                </form>
            </Section>
        </Wrapper>
    );
};

export default SignUpPage;
