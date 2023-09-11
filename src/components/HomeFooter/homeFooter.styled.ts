import styled from "styled-components";

export const List = styled.ul`
    position: absolute;
    bottom: 0;
    padding: 20px 0;
    padding-left: 4%;

    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;

    @media (max-width: 1100px) {
        flex-wrap: wrap;

        padding: 20px;
    }
`;

export const ListItem = styled.li`
    font-size: 13px;

    cursor: default;

    @media (max-width: 1200px) {
        font-size: 10px;
    }
`;
