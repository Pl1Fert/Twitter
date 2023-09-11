import styled, { css } from "styled-components";

const OutlineButton = css`
    border: 1px solid ${({ theme }) => theme.button.border.primary};
    background: transparent;
    color: ${({ theme }) => theme.button.textColor.outline};

    &:hover {
        border-color: ${({ theme }) => theme.button.border.hover};
    }
`;

const PrimaryButton = css`
    border: none;

    background-color: ${({ theme }) => theme.button.backgroundColor.primary};
    color: ${({ theme }) => theme.button.textColor.primary};

    &:hover {
        background-color: ${({ theme }) => theme.button.backgroundColor.hover};
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

    &:disabled {
        background-color: ${({ theme }) => theme.button.backgroundColor.disabled};
        cursor: default;
    }

    @media (max-width: 1150px) {
        font-size: 18px;
    }

    @media (max-width: 380px) {
        font-size: 14px;
    }
`;
