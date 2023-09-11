import { Link } from "react-router-dom";
import styled from "styled-components";

import { DEFAULT_COLORS } from "@/styles/colors";

export const Row = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 40px;

    @media (max-width: 1050px) {
        align-items: center;
    }
`;

export const Column = styled.div`
    padding-top: 160px;

    display: flex;
    flex-direction: column;

    @media (max-width: 1050px) {
        margin: 0 auto;

        align-items: center;
    }

    @media (max-width: 650px) {
        padding-top: 100px;
    }

    @media (max-width: 380px) {
        padding-top: 50px;
    }
`;

export const Title = styled.h1`
    margin-bottom: 40px;

    font-size: 64px;

    @media (max-width: 1150px) {
        font-size: 44px;
    }

    @media (max-width: 500px) {
        font-size: 35px;
    }
`;

export const Subtitle = styled.h2`
    margin-bottom: 30px;

    font-size: 32px;

    @media (max-width: 1150px) {
        font-size: 24px;
    }

    @media (max-width: 500px) {
        font-size: 20px;
    }
`;

export const Image = styled.img`
    width: 58%;

    @media (max-width: 1050px) {
        display: none;
    }
`;

export const Logo = styled.img`
    width: 50px;
    height: 40px;
    margin-bottom: 55px;

    @media (max-width: 500px) {
        width: 40px;
        height: 30px;

        margin-bottom: 20px;
    }
`;

export const ButtonsColumn = styled.div`
    margin-bottom: 30px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1050px) {
        width: 100%;

        align-items: center;
    }
`;

export const Text = styled.p`
    max-width: 70%;
    margin-bottom: 20px;

    font-size: 14px;

    @media (max-width: 1050px) {
        text-align: center;
    }
`;

export const Span = styled.span`
    color: ${DEFAULT_COLORS.blueFont};

    cursor: default;
`;

export const StyledLink = styled(Link)`
    border-bottom: 1px solid transparent;

    color: ${DEFAULT_COLORS.blueFont};

    transition: all 0.3s linear;

    &:hover {
        border-color: ${DEFAULT_COLORS.blueFont};
    }
`;
