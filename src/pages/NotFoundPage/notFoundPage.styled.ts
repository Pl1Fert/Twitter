import styled from "styled-components";

export const Wrapper = styled.section`
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
`;

export const Container = styled.div`
    width: 500px;
    height: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
`;

export const Title = styled.h1`
    margin-bottom: 10px;
    margin-top: 20px;

    font-size: ${({ theme }) => theme.fontSize.f64};
`;

export const SubTitle = styled.h2`
    margin-bottom: 10px;
`;

export const Text = styled.p`
    margin-bottom: 50px;
`;
