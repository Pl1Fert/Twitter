import { Link } from "react-router-dom";
import styled from "styled-components";

import { DEFAULT_COLORS } from "@/styles/colors";

export const Section = styled.section`
    max-width: 600px;
    margin: 0 auto;
    padding-top: 50px;

    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    margin-bottom: 40px;

    font-size: 42px;
`;

export const StyledLink = styled(Link)`
    max-width: fit-content;
    border-bottom: 1px solid transparent;

    font-size: 15px;

    color: ${DEFAULT_COLORS.blueFont};

    transition: all 0.3s linear;

    &:hover {
        border-color: ${DEFAULT_COLORS.blueFont};
    }
`;

export const Inputs = styled.div`
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Logo = styled.img`
    width: 50px;
    height: 40px;
    margin-bottom: 40px;
`;

export const SubTitle = styled.h2`
    margin-top: 15px;

    font-size: 16px;
`;

export const Text = styled.p`
    margin: 30px 0;
    font-size: 14px;
    line-height: 24px;
`;

export const Selects = styled.div`
    margin-bottom: 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;
