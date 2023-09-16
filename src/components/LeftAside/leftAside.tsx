import { FC, useState } from "react";
import { getAuth } from "firebase/auth";

import profilePhoto from "@/assets/images/profile-photo.jpg";
import { NavBar, TweetModal } from "@/components";
import { Button } from "@/components/UI";
import { ButtonType, NotificationMessages, NotificationTypes } from "@/constants";
import { isFirebaseError } from "@/helpers";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { userSelector } from "@/store/selectors";
import { notificationActions } from "@/store/slices/notificationSlice";
import { userActions } from "@/store/slices/userSlice";

import { Aside, Row, SubTitle, Title } from "./leftAside.styled";

export const LeftAside: FC = () => {
    const dispatch = useAppDispatch();
    const { name, email } = useAppSelector(userSelector);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const logOutHandler = async (): Promise<void> => {
        const auth = getAuth();

        try {
            await auth.signOut();
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

    const modalClickHandler = (): void => {
        setIsModalOpen((prev) => !prev);
    };

    return (
        <>
            <Aside>
                <NavBar />
                <Button
                    type={ButtonType.button}
                    primary
                    content="Tweet"
                    onClick={modalClickHandler}
                />
                <Row>
                    <img src={profilePhoto} alt="profile" />
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
            {isModalOpen && <TweetModal closeModal={modalClickHandler} />}
        </>
    );
};
