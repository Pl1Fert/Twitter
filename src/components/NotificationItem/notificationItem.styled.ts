import styled from "styled-components";

import { NotificationTypes } from "@/constants";

export const ListItem = styled.li<{ $type: NotificationTypes }>`
    min-width: 200px;
    width: fit-content;
    padding: 20px;
    border-bottom: 2px solid;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    border-color: ${({ $type, theme }) => {
        switch ($type) {
            case "error":
                return theme.notification.border.error;
            case "success":
                return theme.notification.border.success;
            case "warning":
                return theme.notification.border.warning;
            default:
                return "transparent";
        }
    }};
    background-color: ${({ theme }) => theme.notification.backgroundColor.primary};
    color: ${({ theme }) => theme.notification.color.primary};
    box-shadow: 0 0 5px ${({ theme }) => theme.notification.shadow.primary};
    border-radius: 8px;

    font-size: 16px;
`;

export const CloseButton = styled.img`
    width: 20px;
    height: 20px;

    cursor: pointer;
`;
