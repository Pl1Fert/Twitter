import { FC } from "react";
import { createPortal } from "react-dom";

import { NotificationItem } from "@/components";
import { useAppSelector } from "@/hooks";
import { notificationSelector } from "@/store/selectors";

import { List, ListContainer } from "./notificationList.styled";

export const NotificationList: FC = () => {
    const notifications = useAppSelector(notificationSelector);

    return createPortal(
        <ListContainer id="notification">
            <List>
                {notifications.map((notification) => (
                    <NotificationItem key={notification.id} notification={notification} />
                ))}
            </List>
        </ListContainer>,
        document.body
    );
};
