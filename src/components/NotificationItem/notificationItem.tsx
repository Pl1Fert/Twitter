import { memo, useEffect } from "react";

import cross from "@/assets/icons/cross.svg";
import { useAppDispatch } from "@/hooks";
import { notificationActions } from "@/store/slices/notificationSlice";

import { NotificationItemProps } from "./notificationItem.interfaces";
import { CloseButton, ListItem } from "./notificationItem.styled";

export const NotificationItem = memo<NotificationItemProps>(
    ({ notification: { id, type, message } }) => {
        const dispatch = useAppDispatch();

        const handleDismiss = () => {
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
                {message}
                <CloseButton src={cross} alt="cross" onClick={handleDismiss} />
            </ListItem>
        );
    }
);
