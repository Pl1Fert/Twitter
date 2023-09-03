import styled from "styled-components";

export const Container = styled.div`
    width: 500px;
    height: 500px;
    margin: calc(50vh - 250px) auto 0;
`;

export const SectionInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
`;

export const Title = styled.h1`
    margin-bottom: 10px;

    font-size: 65px;

    color: black;
`;

export const SubTitle = styled.h2`
    color: black;
`;

export const Text = styled.p`
    margin-bottom: 50px;

    color: black;
`;

export const Button = styled.button`
    padding: 10px 30px;
    border-radius: 20px;

    outline: none;
    font: inherit;
    font-weight: 500;
    text-transform: uppercase;

    border: none;
    color: white;
    background-color: black;

    transition: all 0.3s linear;

    cursor: pointer;

    &:hover {
        background-color: grey;
    }
`;
