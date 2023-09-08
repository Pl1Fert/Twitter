/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import logo from "@/assets/images/twitter.svg";
import { Button, Input, Select } from "@/components/UI";
import { AppRoutes, ButtonType, MONTH_NAMES } from "@/constants";
import { getDaysNumbers, getYearNumbers } from "@/helpers";
import { ISignUpFormFields } from "@/interfaces";
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
} from "./signUpPage.styled";

const SignUpPage: FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, isDirty },
    } = useForm<ISignUpFormFields>({ mode: "onBlur", resolver: yupResolver(SignUpScheme) });

    const onFormSubmit = (data: ISignUpFormFields): void => {
        alert(JSON.stringify(data));
        reset();
    };

    return (
        <Section>
            <Logo src={logo} alt="logo" />
            <Title>Create an account</Title>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <Inputs>
                    <Input placeholder="Name" {...register("name")} />
                    <Input placeholder="Phone number" {...register("phone")} />
                    <Input placeholder="Email" {...register("email")} />
                </Inputs>
                <ErorrsWrapper>
                    {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
                    {errors?.phone && <p>{errors?.phone?.message || "Error!"}</p>}
                    {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
                </ErorrsWrapper>
                <StyledLink to={AppRoutes.HOME}>Use Email</StyledLink>
                <SubTitle>Date of birth</SubTitle>
                <Text>
                    Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis
                    bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo
                    mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus.
                    Nibh mi massa in molestie a sit. Elit congue.
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
                    disabled={!isValid || !isDirty}
                />
            </form>
        </Section>
    );
};

export default SignUpPage;
