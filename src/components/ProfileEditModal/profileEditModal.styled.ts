import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Modal = styled.div`
    position: relative;

    width: 1000px;
    height: 500px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    box-shadow: 0 0 5px ${({ theme }) => theme.shadowColor};
    border-radius: 6px;
    background-color: ${({ theme }) => theme.backgroundColor};

    @media screen and (max-width: 1000px) {
        padding-top: 30px;
        width: 100%;
    }

    @media screen and (max-width: 780px) {
        height: auto;
        padding-bottom: 10px;
    }
`;

export const Image = styled.img`
    position: absolute;
    top: 4%;
    right: 3%;

    width: 25px;
    height: 25px;

    cursor: pointer;
`;

export const Row = styled.div`
    margin-bottom: 25px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    @media screen and (max-width: 780px) {
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    @media screen and (max-width: 650px) {
        flex-direction: column;
    }
`;
export const Form = styled.form`
    width: 100%;
`;

export const Center = styled.div`
    margin-bottom: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 780px) {
        &:first-of-type {
            justify-content: flex-start;
        }
    }
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.textColor};

    @media screen and (max-width: 780px) {
        width: 40%;
    }

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`;
