import { FC } from "react";

import logo from "@/assets/images/twitter.svg";
import { Button, Input, Select } from "@/components/UI";
import { AppRoutes, MONTH_NAMES } from "@/constants";
import { getDaysNumbers, getYearNumbers } from "@/utils";

import {
    Inputs,
    Logo,
    Section,
    Selects,
    StyledLink,
    SubTitle,
    Text,
    Title,
} from "./signUpPage.styled";

const SignUpPage: FC = () => (
    <Section>
        <Logo src={logo} alt="logo" />
        <Title>Create an account</Title>
        <form action="">
            <Inputs>
                <Input name="name" placeholder="Name" />
                <Input name="phone" placeholder="Phone number" />
                <Input name="email" placeholder="Email" />
            </Inputs>
            <StyledLink to={AppRoutes.HOME}>Use Email</StyledLink>
            <SubTitle>Date of birth</SubTitle>
            <Text>
                Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum
                ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel
                eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in
                molestie a sit. Elit congue.
            </Text>
            <Selects>
                <Select name="month" placeholder="Month" width="30%" options={MONTH_NAMES} />
                <Select name="day" placeholder="Day" width="30%" options={getDaysNumbers()} />
                <Select name="year" placeholder="Year" width="30%" options={getYearNumbers()} />
            </Selects>
            <Button type="submit" primary content="Next" />
        </form>
    </Section>
);

export default SignUpPage;
