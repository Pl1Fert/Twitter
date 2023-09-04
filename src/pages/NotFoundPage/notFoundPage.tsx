import { FC } from "react";
import { Link } from "react-router-dom";

import { AppRoutes } from "@/constants";

import { Button, Container, SectionInner, SubTitle, Text, Title } from "./notFoundPage.styled";

const NotFoundPage: FC = () => (
    <section>
        <Container>
            <SectionInner>
                <div>
                    <Title>404</Title>
                    <SubTitle>UH OH! You&apos;re lost.</SubTitle>
                    <Text>
                        The page you are looking for does not exist. How you got here is a mystery.
                        But you can click the button below to go back to the homepage.
                    </Text>
                    <Button>
                        <Link to={AppRoutes.HOME}>Home</Link>
                    </Button>
                </div>
            </SectionInner>
        </Container>
    </section>
);

export default NotFoundPage;
