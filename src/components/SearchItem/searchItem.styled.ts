import styled from "styled-components";

export const ListItem = styled.li`
    padding: 5px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    border-radius: 8px;

    transition: background-color 0.3s linear;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.links.backgroundColor.hover};
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;

export const Image = styled.img`
    width: 40px;
    height: 40px;
`;
