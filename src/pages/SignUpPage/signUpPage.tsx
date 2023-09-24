import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import logo from "@/assets/images/twitter.svg";
import {
    AppRoutes,
    ButtonType,
    InputType,
    MONTH_NAMES,
    NotificationMessages,
    NotificationTypes,
} from "@/constants";
import {
    formatDate,
    getDaysNumbers,
    getYearNumbers,
    isFirebaseError,
    isValidDate,
} from "@/helpers";
import { useAppDispatch } from "@/hooks";
import { ISignUpFormFields } from "@/interfaces";
import { UserService } from "@/services";
import { notificationActions } from "@/store/slices/notificationSlice";
import { userActions } from "@/store/slices/userSlice";
import { Button, Input, Select } from "@/UI";
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

    const onFormSubmit = async (data: ISignUpFormFields): Promise<void> => {
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
            const { uid, token } = await UserService.signUp(
                name,
                email,
                password,
                phone,
                birthDate
            );

            dispatch(
                userActions.setUser({
                    name,
                    phone,
                    email,
                    id: uid,
                    token: token || null,
                    birthDate,
                    description: null,
                })
            );

            dispatch(
                notificationActions.addNotification({
                    type: NotificationTypes.success,
                    message: NotificationMessages.signedUp,
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
        } finally {
            reset();
        }
    };

    return (
        <Wrapper>
            <Section>
                <Logo src={logo} alt="logo" />
                <Title>Create an account</Title>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <Inputs>
                        <Input
                            placeholder="Name"
                            {...register("name")}
                            errorMessage={errors?.name?.message}
                        />
                        <Input
                            placeholder="Phone number"
                            {...register("phone")}
                            errorMessage={errors?.phone?.message}
                        />
                        <Input
                            placeholder="Email"
                            {...register("email")}
                            errorMessage={errors?.email?.message}
                        />
                        <Input
                            type={InputType.password}
                            placeholder="Password"
                            {...register("password")}
                            errorMessage={errors?.password?.message}
                        />
                    </Inputs>
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
