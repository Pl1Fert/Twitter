import { memo, useEffect } from "react";

import cross from "@/assets/icons/cross.svg";
import { useAppDispatch } from "@/hooks";
import { notificationActions } from "@/store/slices/notificationSlice";

import { NotificationItemProps } from "./notificationItem.interfaces";
import { CloseButton, ListItem, Message } from "./notificationItem.styled";

export const NotificationItem = memo<NotificationItemProps>(
    ({ notification: { id, type, message } }) => {
        const dispatch = useAppDispatch();

        const handleDismiss = (): void => {
            dispatch(notificationActions.dismissNotification(id));
        };

        useEffect(() => {
            const dismissTimeout = setTimeout(() => {
                handleDismiss();
            }, 3000);

            return () => {
                clearTimeout(dismissTimeout);
            };
        }, []);

        return (
            <ListItem $type={type}>
                <Message>{message}</Message>
                <CloseButton src={cross} alt="cross" onClick={handleDismiss} />
            </ListItem>
        );
    }
);
