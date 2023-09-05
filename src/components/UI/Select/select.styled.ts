import styled from "styled-components";

import arrow from "@/assets/icons/arrow-down.svg";
import { DEFAULT_COLORS } from "@/styles/colors";

export const StyledSelect = styled.select<{ $width?: string }>`
    width: ${({ $width }) => $width || "100%"};
    border: 1px solid ${DEFAULT_COLORS.greyBorder};
    padding: 20px;

    font: inherit;
    font-size: 15px;

    border-radius: 6px;
    outline: none;
    appearance: none;

    background: url(${arrow}) no-repeat right;
    background-position-x: calc(100% - 8px);

    transition: all 0.3s linear;

    &:focus {
        border: 1px solid ${DEFAULT_COLORS.blackFont};
    }
`;

export const StyledOption = styled.option`
    color: ${DEFAULT_COLORS.blackFont};

    &:disabled {
        color: ${DEFAULT_COLORS.greyFont};
    }
`;
