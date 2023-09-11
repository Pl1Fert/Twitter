import styled from "styled-components";

import { DEFAULT_COLORS } from "@/styles/colors";

export const StyledInput = styled.input<{ $width?: string }>`
    width: ${({ $width }) => $width || "100%"};
    border: 1px solid ${DEFAULT_COLORS.greyBorder};
    padding: 15px;

    outline: none;
    font: inherit;
    font-size: 18px;

    color: ${DEFAULT_COLORS.blackFont};

    border-radius: 6px;

    transition: all 0.3s linear;

    &:focus {
        border-color: ${DEFAULT_COLORS.blackFont};
    }

    &::placeholder {
        font: inherit;
        font-size: 18px;

        color: ${DEFAULT_COLORS.greyFont};
    }
`;
