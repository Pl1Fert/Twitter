import styled from "styled-components";

export const Section = styled.section`
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.backgroundColor};
`;

export const Title = styled.h1`
    margin-top: 20px;

    font-size: 40px;
`;
