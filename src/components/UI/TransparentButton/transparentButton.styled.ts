import styled from "styled-components";

import { DEFAULT_COLORS } from "@/styles/colors";

export const Button = styled.button<{
    $width?: string;
    $borderColor?: string;
    $icon?: string;
}>`
    border: 1px solid ${({ $borderColor }) => $borderColor || DEFAULT_COLORS.greyBorder};
    width: ${({ $width }) => $width || "100%"};
    padding: ${({ $icon }) => ($icon ? "10px" : "15px")} 0;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    font-weight: 500;

    outline: none;
    background: transparent;
    border-radius: 40px;

    transition: all 0.3s linear;

    cursor: pointer;

    &:hover {
        border-color: black;
    }
`;
