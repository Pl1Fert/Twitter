import styled from "styled-components";

import { NotificationTypes } from "@/constants";
import { DEFAULT_COLORS } from "@/styles/colors";

export const ListItem = styled.li<{ $type: NotificationTypes }>`
    min-width: 200px;
    width: fit-content;
    padding: 20px;
    border-bottom: 2px solid;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-color: ${({ $type }) => {
        switch ($type) {
            case "error":
                return DEFAULT_COLORS.red;
            case "success":
                return DEFAULT_COLORS.green;
            case "warning":
                return DEFAULT_COLORS.yellow;
            default:
                return "transparent";
        }
    }};
    background-color: ${DEFAULT_COLORS.whiteFont};
    box-shadow: 0 0 5px ${DEFAULT_COLORS.greyShadow};
    border-radius: 8px;

    font-size: 16px;
`;

export const CloseButton = styled.img`
    padding-left: 10px;
    width: 20px;
    height: 20px;

    cursor: pointer;
`;
