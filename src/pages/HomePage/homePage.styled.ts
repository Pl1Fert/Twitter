import { Link } from "react-router-dom";
import styled from "styled-components";

import { DEFAULT_COLORS } from "@/styles/colors";

export const Row = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 40px;
`;

export const Column = styled.div`
    padding-top: 160px;

    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    margin-bottom: 40px;

    font-size: 64px;
`;

export const Subtitle = styled.h2`
    margin-bottom: 30px;

    font-size: 32px;
`;

export const Image = styled.img`
    width: 58%;
`;

export const Logo = styled.img`
    width: 50px;
    height: 40px;
    margin-bottom: 55px;
`;

export const ButtonsColumn = styled.div`
    margin-bottom: 30px;

    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Text = styled.p`
    max-width: 70%;
    margin-bottom: 20px;

    font-size: 14px;
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
