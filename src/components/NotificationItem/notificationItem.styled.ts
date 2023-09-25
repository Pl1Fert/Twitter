import styled from "styled-components";

import { NotificationTypes } from "@/constants";

export const ListItem = styled.li<{ $type: NotificationTypes }>`
    min-width: 200px;
    width: fit-content;
    padding: 20px;
    border-bottom: 2px solid;
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-color: ${({ $type, theme }) => theme.notification.border[$type] ?? "transparent"};
    background-color: ${({ theme }) => theme.notification.backgroundColor.primary};
    color: ${({ theme }) => theme.notification.color.primary};
    box-shadow: 0 0 5px ${({ theme }) => theme.notification.shadow.primary};
    border-radius: 8px;

    font-size: ${({ theme }) => theme.fontSize.f16};
`;

export const CloseButton = styled.img`
    width: 20px;
    height: 20px;

    cursor: pointer;
`;

export const Message = styled.p`
    padding-right: 15px;
`;
