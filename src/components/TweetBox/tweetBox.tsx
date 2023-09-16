import { FC, SyntheticEvent, useState } from "react";
import { addDoc, collection } from "firebase/firestore";

import person from "@/assets/images/profile-photo.jpg";
import { Button } from "@/components/UI";
import { ButtonType, DbCollections, NotificationMessages, NotificationTypes } from "@/constants";
import { db } from "@/firebase";
import { isEmptyString, isFirebaseError } from "@/helpers";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { userSelector } from "@/store/selectors";
import { notificationActions } from "@/store/slices/notificationSlice";

import { Container, SmallProfileImage, TextArea } from "./tweetBox.styled";

export const TweetBox: FC = () => {
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

            setValue("");
        } catch (error) {
            if (isFirebaseError(error)) {
                dispatch(
                    notificationActions.addNotification({
                        type: NotificationTypes.error,
                        message: error.message,
                    })
                );
                setValue("");
            }
        }
    };

    return (
        <Container>
            <SmallProfileImage src={person} alt="person" />
            <TextArea placeholder="What's happening" value={value} onChange={onChangeHandler} />
            <Button
                type={ButtonType.button}
                primary
                content="Tweet"
                width="25%"
                disabled={isEmptyString(value)}
                onClick={sendTweet}
            />
        </Container>
    );
};
