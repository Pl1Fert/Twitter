import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 50;

    width: 500px;
    height: 500px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    box-shadow: 0 0 5px ${({ theme }) => theme.shadowColor};
    border-radius: 6px;
    background-color: ${({ theme }) => theme.backgroundColor};

    transform: translate(-50%, -50%);
`;

export const Image = styled.img`
    position: absolute;
    top: 5%;
    right: 5%;

    width: 25px;
    height: 25px;

    cursor: pointer;
`;

export const Textarea = styled.textarea`
    margin-top: 50px;
    padding: 15px;
    width: 100%;
    height: 60%;

    outline: none;
    font: inherit;
    font-size: 18px;

    color: ${({ theme }) => theme.input.textColor.primary};
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.input.border.primary};

    transition: all 0.3s linear;
    resize: none;

    &:focus {
        border-color: ${({ theme }) => theme.input.border.focused};
    }

    &::placeholder {
        font: inherit;
        font-size: 18px;

        color: ${({ theme }) => theme.input.placeholder.primary};
    }
`;
