import { memo, SyntheticEvent, useState } from "react";
import { createPortal } from "react-dom";
import { addDoc, collection } from "firebase/firestore";

import closeIcon from "@/assets/icons/cross.svg";
import { Button } from "@/components/UI";
import { ButtonType, DbCollections, NotificationMessages, NotificationTypes } from "@/constants";
import { db } from "@/firebase";
import { isEmptyString, isFirebaseError } from "@/helpers";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { userSelector } from "@/store/selectors";
import { notificationActions } from "@/store/slices/notificationSlice";

import { TweetModalProps } from "./tweetModal.interfaces";
import { Image, Modal, Textarea } from "./tweetModal.styled";

export const TweetModal = memo<TweetModalProps>(({ closeModal }) => {
    const [value, setValue] = useState<string>("");
    const { name, email } = useAppSelector(userSelector);
    const dispatch = useAppDispatch();

    const onChangeHandler = (e: SyntheticEvent): void => {
        const target = e.target as HTMLTextAreaElement;

        setValue(target.value);
    };

    const sendTweet = async () => {
        try {
            const tweetsCollectionRef = collection(db, DbCollections.tweets);

            await addDoc(tweetsCollectionRef, {
                name,
                email,
                text: value,
                likes: 0,
                createdAt: new Date(),
                selfLiked: false,
            });

            dispatch(
                notificationActions.addNotification({
                    type: NotificationTypes.success,
                    message: NotificationMessages.tweetPublished,
                })
            );

            closeModal();
        } catch (error) {
            if (isFirebaseError(error)) {
                dispatch(
                    notificationActions.addNotification({
                        type: NotificationTypes.error,
                        message: error.message,
                    })
                );
                closeModal();
            }
        }
    };

    return createPortal(
        <Modal id="tweetModal">
            <Textarea placeholder="What's happening" value={value} onChange={onChangeHandler} />
            <Button
                type={ButtonType.button}
                primary
                content="Tweet"
                width="50%"
                disabled={isEmptyString(value)}
                onClick={sendTweet}
            />
            <Image src={closeIcon} alt="closeIcon" onClick={closeModal} />
        </Modal>,
        document.body
    );
});
