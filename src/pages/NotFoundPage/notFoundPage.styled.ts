import styled from "styled-components";

export const Container = styled.div`
    width: 500px;
    height: 500px;
    margin: calc(50vh - 250px) auto 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
`;

export const Title = styled.h1`
    margin-bottom: 10px;
    margin-top: 20px;

    font-size: 65px;
`;

export const SubTitle = styled.h2`
    margin-bottom: 10px;
`;

export const Text = styled.p`
    margin-bottom: 50px;
`;
