import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
    max-width: 450px;
    margin: 0 auto;
    padding-top: 200px;

    display: flex;
    flex-direction: column;

    @media (max-width: 600px) {
        padding: 150px 20px 0;
    }
`;

export const Wrapper = styled.div`
    height: 100%;

    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
`;

export const Title = styled.h1`
    margin-bottom: 40px;

    font-size: 42px;

    @media (max-width: 500px) {
        font-size: 35px;
    }
`;

export const StyledLink = styled(Link)`
    max-width: fit-content;
    margin-top: 40px;
    margin-left: auto;
    border-bottom: 1px solid transparent;

    color: ${({ theme }) => theme.fontColors.blue};

    transition: all 0.3s linear;

    &:hover {
        border-color: ${({ theme }) => theme.fontColors.blue};
    }
`;

export const Inputs = styled.div`
    margin-bottom: 20px;

    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Logo = styled.img`
    width: 50px;
    height: 40px;
    margin-bottom: 40px;

    @media (max-width: 500px) {
        width: 40px;
        height: 30px;

        margin-bottom: 20px;
    }
`;
