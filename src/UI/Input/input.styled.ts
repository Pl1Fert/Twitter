import styled from "styled-components";

export const StyledInput = styled.input<{ $width?: string }>`
    width: ${({ $width }) => $width || "100%"};
    border: 1px solid ${({ theme }) => theme.input.border.primary};
    padding: 15px;

    outline: none;
    font: inherit;
    font-size: ${({ theme }) => theme.fontSize.f18};

    color: ${({ theme }) => theme.input.textColor.primary};
    background-color: ${({ theme }) => theme.input.backgroundColor.primary};

    border-radius: 6px;

    transition: all 0.3s linear;

    &:focus {
        border-color: ${({ theme }) => theme.input.border.focused};
    }

    &::placeholder {
        font: inherit;
        font-size: ${({ theme }) => theme.fontSize.f18};

        color: ${({ theme }) => theme.input.placeholder.primary};
    }
`;

export const ErrorMessage = styled.p`
    font-size: ${({ theme }) => theme.fontSize.f12};

    color: ${({ theme }) => theme.fontColors.red};
`;
