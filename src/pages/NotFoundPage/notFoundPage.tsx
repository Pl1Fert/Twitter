import { FC } from "react";
import { useNavigate } from "react-router-dom";

import logo from "@/assets/images/twitter.svg";
import { Button } from "@/components/UI";
import { AppRoutes } from "@/constants";

import { Container, SubTitle, Text, Title } from "./notFoundPage.styled";

const NotFoundPage: FC = () => {
    const navigate = useNavigate();
    const onClick = (): void => navigate(AppRoutes.HOME, { replace: true });

    return (
        <section>
            <Container>
                <img src={logo} alt="logo" />
                <Title>404</Title>
                <SubTitle>UH OH! You&apos;re lost.</SubTitle>
                <Text>
                    The page you are looking for does not exist. How you got here is a mystery. But
                    you can click the button below to go back to the homepage.
                </Text>
                <Button primary content="Home" width="50%" onClick={onClick} />
            </Container>
        </section>
    );
};

export default NotFoundPage;
