import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
    max-width: 600px;
    margin: 0 auto;
    padding-top: 40px;

    display: flex;
    flex-direction: column;

    @media (max-width: 600px) {
        padding: 40px 20px 0;
    }
`;

export const Title = styled.h1`
    margin-bottom: 30px;

    font-size: ${({ theme }) => theme.fontSize.f42};

    @media (max-width: 500px) {
        font-size: ${({ theme }) => theme.fontSize.f35};
    }
`;

export const Wrapper = styled.div`
    height: 100%;

    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
`;

export const StyledLink = styled(Link)`
    max-width: fit-content;
    border-bottom: 1px solid transparent;

    font-size: ${({ theme }) => theme.fontSize.f14};

    color: ${({ theme }) => theme.fontColors.blue};

    transition: all 0.3s linear;

    &:hover {
        border-color: ${({ theme }) => theme.fontColors.blue};
    }
`;

export const Inputs = styled.div`
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Logo = styled.img`
    width: 50px;
    height: 40px;
    margin-bottom: 30px;

    @media (max-width: 500px) {
        width: 40px;
        height: 30px;

        margin-bottom: 20px;
    }
`;

export const SubTitle = styled.h2`
    margin-top: 15px;

    font-size: ${({ theme }) => theme.fontSize.f16};
`;

export const Text = styled.p`
    margin: 20px 0;

    font-size: ${({ theme }) => theme.fontSize.f14};
    line-height: 24px;
`;

export const Selects = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ErorrsWrapper = styled.div`
    margin-bottom: 10px;

    display: flex;
    justify-content: flex-start;
    gap: 10px;

    font-size: ${({ theme }) => theme.fontSize.f12};

    color: ${({ theme }) => theme.fontColors.red};
`;
