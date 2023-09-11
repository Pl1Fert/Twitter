import styled from "styled-components";

import { DEFAULT_COLORS } from "@/styles/colors";

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

    box-shadow: 0 0 5px ${DEFAULT_COLORS.greyShadow};
    border-radius: 6px;
    background-color: ${DEFAULT_COLORS.whiteFont};

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

    color: ${DEFAULT_COLORS.blackFont};
    border-radius: 6px;

    transition: all 0.3s linear;
    resize: none;

    &:focus {
        border-color: ${DEFAULT_COLORS.blackFont};
    }

    &::placeholder {
        font: inherit;
        font-size: 18px;
        color: ${DEFAULT_COLORS.greyFont};
    }
`;
