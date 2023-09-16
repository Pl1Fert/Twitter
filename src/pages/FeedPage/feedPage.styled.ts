import styled from "styled-components";

export const Header = styled.header`
    padding: 0 15px 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.p`
    margin-bottom: 5px;

    font-weight: 600;
    font-size: 20px;
`;

export const ThemeToggler = styled.div`
    border: 2px solid ${({ theme }) => theme.border};
    width: 60px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: transparent;
    border-radius: 15px;
`;

const RadioButton = styled.input`
    margin: 0;
    border: 2px solid transparent;
    width: 30px;
    height: 30px;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    border-radius: 50%;

    cursor: pointer;

    &:checked {
        border-color: ${({ theme }) => theme.border};
    }
`;

export const LightThemeRadioButton = styled(RadioButton)`
    &:checked {
        margin: 0 0 0 -2px;
    }
`;

export const DarkThemeRadioButton = styled(RadioButton)`
    &:checked {
        margin: 0 -2px 0 0;
    }
`;
