import styled from "styled-components";

import arrow from "@/assets/icons/arrow-down.svg";

export const StyledSelect = styled.select<{ $width?: string }>`
    width: ${({ $width }) => $width || "100%"};
    border: 1px solid ${({ theme }) => theme.select.border.primary};
    padding: 20px;

    font: inherit;
    font-size: 15px;

    border-radius: 6px;
    outline: none;
    appearance: none;

    background: url(${arrow}) no-repeat right;
    background-position-x: calc(100% - 8px);

    transition: all 0.3s linear;

    cursor: pointer;

    &:focus {
        border-color: ${({ theme }) => theme.select.border.focused};
    }

    &:hover {
        border-color: ${({ theme }) => theme.select.border.hover};
    }
`;

export const StyledOption = styled.option`
    color: ${({ theme }) => theme.select.textColor.primary};

    &:disabled {
        color: ${({ theme }) => theme.select.textColor.disabled};
    }
`;
