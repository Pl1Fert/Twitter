import styled from "styled-components";

export const Section = styled.section`
    height: 100%;

    display: flex;
    justify-content: center;
    gap: 35px;

    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
`;

export const Main = styled.main`
    padding-top: 30px;
    width: 50%;

    border-right: 1px solid ${({ theme }) => theme.border};
    border-left: 1px solid ${({ theme }) => theme.border};
`;
