import styled from "styled-components";

export const Container = styled.div`
    position: relative;
`;

export const SearchBar = styled.input`
    padding: 15px 0;
    padding-left: 50px;
    width: 100%;

    outline: none;
    border: none;

    border-radius: 22px;
    background-color: ${({ theme }) => theme.input.backgroundColor.search};
    color: ${({ theme }) => theme.input.textColor.primary};

    font: inherit;
    font-size: 18px;

    &::placeholder {
        font: inherit;
        font-size: 18px;

        color: ${({ theme }) => theme.input.placeholder.primary};
    }
`;

export const Icon = styled.img`
    position: absolute;
    left: 5%;
    top: 50%;

    transform: translateY(-50%);
`;
