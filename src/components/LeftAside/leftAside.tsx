import { FC, useState } from "react";

import profilePhoto from "@/assets/images/avatar.png";
import { NavBar, TweetModal } from "@/components";
import { ButtonType, NotificationMessages, NotificationTypes } from "@/constants";
import { isFirebaseError } from "@/helpers";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { UserService } from "@/services";
import { sidebarSelector, userSelector } from "@/store/selectors";
import { notificationActions } from "@/store/slices/notificationSlice";
import { sidebarActions } from "@/store/slices/sidebarSlice";
import { userActions } from "@/store/slices/userSlice";
import { Button } from "@/UI";

import {
    Aside,
    Avatar,
    Burger,
    CloseOutside,
    Row,
    Span,
    SubTitle,
    Title,
} from "./leftAside.styled";

export const LeftAside: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const { isVisibleLeftSidebar: isVisible } = useAppSelector(sidebarSelector);
    const { name, email } = useAppSelector(userSelector);
    const dispatch = useAppDispatch();

    const logOutHandler = async (): Promise<void> => {
        try {
            await UserService.signOut();
            dispatch(userActions.deleteUser());
            dispatch(
                notificationActions.addNotification({
                    type: NotificationTypes.success,
                    message: NotificationMessages.loggedOut,
                })
            );
        } catch (error) {
            if (isFirebaseError(error)) {
                dispatch(
                    notificationActions.addNotification({
                        type: NotificationTypes.error,
                        message: error.message,
                    })
                );
            }
        }
    };

    const toggleVisibility = (): void => {
        dispatch(sidebarActions.toggleLeft());
    };

    const modalClickHandler = (): void => {
        setIsModalOpen((prev) => !prev);
        dispatch(sidebarActions.closeLeft());
    };

    return (
        <>
            <Burger $isVisible={isVisible} onClick={toggleVisibility}>
                <Span className="first" />
                <Span className="second" />
                <Span className="third" />
            </Burger>
            <Aside $isVisible={isVisible}>
                <NavBar />
                <Button
                    type={ButtonType.button}
                    primary
                    content="Tweet"
                    onClick={modalClickHandler}
                />
                <Row>
                    <Avatar src={profilePhoto} alt="profile" />
                    <div>
                        <Title>{name}</Title>
                        <SubTitle>{email}</SubTitle>
                    </div>
                </Row>
                <Button
                    type={ButtonType.button}
                    primary
                    content="Log out"
                    onClick={logOutHandler}
                />
            </Aside>
            <CloseOutside onClick={toggleVisibility} $isVisible={isVisible} />
            {isModalOpen && <TweetModal closeModal={modalClickHandler} />}
        </>
    );
};
