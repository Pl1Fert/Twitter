import styled from "styled-components";

export const Section = styled.section`
    height: auto;
    min-height: 100%;

    display: flex;
    justify-content: center;
    gap: 35px;

    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};

    @media screen and (max-width: 1160px) {
        padding: 0 20px;
        gap: 20px;
    }

    @media screen and (max-width: 550px) {
        gap: 10px;
        padding: 0 10px;
    }
`;

export const Main = styled.main`
    padding-top: 30px;
    width: 50%;

    border-right: 1px solid ${({ theme }) => theme.border};
    border-left: 1px solid ${({ theme }) => theme.border};

    @media screen and (max-width: 1000px) {
        width: 70%;
    }

    @media screen and (max-width: 750px) {
        width: 90%;
    }

    @media screen and (max-width: 550px) {
        width: 95%;
    }
`;
