import { Link, PathMatch } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)<{ $active: PathMatch<string> | null }>`
    padding: 5px 10px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;

    font-weight: ${({ $active }) => ($active ? "600" : "400")};

    border-radius: 8px;

    transition: background-color 0.3s linear;

    &:hover {
        background-color: ${({ theme }) => theme.links.backgroundColor.hover};
    }
`;

export const ListItem = styled.li``;
