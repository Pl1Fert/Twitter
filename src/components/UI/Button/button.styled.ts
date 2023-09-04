import styled, { css } from "styled-components";

import { DEFAULT_COLORS } from "@/styles/colors";

const OutlineButton = css`
    border: 1px solid ${DEFAULT_COLORS.greyBorder};
    background: transparent;

    &:hover {
        border-color: black;
    }
`;

const PrimaryButton = css`
    border: none;

    background-color: ${DEFAULT_COLORS.blueBackground};
    color: ${DEFAULT_COLORS.whiteFont};

    &:hover {
        background-color: ${DEFAULT_COLORS.hoverBlueBackground};
    }
`;

export const StyledButton = styled.button<{
    $width?: string;
    $icon?: string;
    $primary?: boolean;
    $outline?: boolean;
}>`
    width: ${({ $width }) => $width || "100%"};
    padding: ${({ $icon }) => ($icon ? "10px" : "15px")} 0;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    font-weight: 500;

    outline: none;
    border-radius: 40px;

    transition: all 0.3s linear;

    ${({ $primary }) => $primary && PrimaryButton}
    ${({ $outline }) => $outline && OutlineButton}

    cursor: pointer;
`;
