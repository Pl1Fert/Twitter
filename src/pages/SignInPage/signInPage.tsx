import { FC } from "react";

import logo from "@/assets/images/twitter.svg";
import { Button, Input } from "@/components/UI";
import { AppRoutes } from "@/constants";

import { Inputs, Logo, Section, StyledLink, Title } from "./signInPage.styled";

const SignInPage: FC = () => (
    <Section>
        <Logo src={logo} alt="logo" />
        <Title>Log in to Twitter</Title>
        <form action="">
            <Inputs>
                <Input name="phoneOrEmail" placeholder="Phone number, email address" />
                <Input name="password" placeholder="Password" />
            </Inputs>
            <Button type="submit" primary content="Log In" />
        </form>
        <StyledLink to={AppRoutes.SIGN_UP}>Sign up to Twitter</StyledLink>
    </Section>
);

export default SignInPage;
