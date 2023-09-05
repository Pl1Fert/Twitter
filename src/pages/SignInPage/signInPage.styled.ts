import { Link } from "react-router-dom";
import styled from "styled-components";

import { DEFAULT_COLORS } from "@/styles/colors";

export const Section = styled.section`
    max-width: 450px;
    margin: calc(350px - 25vh) auto 0;

    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    margin-bottom: 40px;

    font-size: 42px;
`;

export const StyledLink = styled(Link)`
    max-width: fit-content;
    margin-top: 40px;
    margin-left: auto;
    border-bottom: 1px solid transparent;
    color: ${DEFAULT_COLORS.blueFont};

    transition: all 0.3s linear;

    &:hover {
        border-color: ${DEFAULT_COLORS.blueFont};
    }
`;

export const Inputs = styled.div`
    margin-bottom: 25px;

    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Logo = styled.img`
    width: 50px;
    height: 40px;
    margin-bottom: 40px;
`;
