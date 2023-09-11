import styled from "styled-components";

import { DEFAULT_COLORS } from "@/styles/colors";

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
    background-color: #eff3f4;
    color: ${DEFAULT_COLORS.blackFont};

    font: inherit;
    font-size: 18px;

    &::placeholder {
        font: inherit;
        font-size: 18px;

        color: ${DEFAULT_COLORS.greyFont};
    }
`;

export const Icon = styled.img`
    position: absolute;
    left: 5%;
    top: 50%;

    transform: translateY(-50%);
`;
