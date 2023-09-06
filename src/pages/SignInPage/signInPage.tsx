/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import logo from "@/assets/images/twitter.svg";
import { Button, Input } from "@/components/UI";
import { AppRoutes } from "@/constants";
import { ISignInFormFields } from "@/interfaces";
import { SignInScheme } from "@/validators";

import { ErorrsWrapper, Inputs, Logo, Section, StyledLink, Title } from "./signInPage.styled";

const SignInPage: FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<ISignInFormFields>({ mode: "onBlur", resolver: yupResolver(SignInScheme) });

    const onFormSubmit = (data: ISignInFormFields): void => {
        alert(JSON.stringify(data));
        reset();
    };

    return (
        <Section>
            <Logo src={logo} alt="logo" />
            <Title>Log in to Twitter</Title>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <Inputs>
                    <Input
                        placeholder="Phone number, email address"
                        {...register("phoneOrEmail")}
                    />
                    <Input placeholder="Password" {...register("password")} />
                </Inputs>
                <ErorrsWrapper>
                    {errors?.phoneOrEmail && <p>{errors?.phoneOrEmail?.message || "Error!"}</p>}
                    {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
                </ErorrsWrapper>
                <Button type="submit" primary content="Log In" disabled={!isValid} />
            </form>
            <StyledLink to={AppRoutes.SIGN_UP}>Sign up to Twitter</StyledLink>
        </Section>
    );
};

export default SignInPage;
