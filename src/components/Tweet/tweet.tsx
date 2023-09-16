import { memo, useState } from "react";
import { getAuth } from "firebase/auth";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

import deleteIcon from "@/assets/icons/cross.svg";
import like from "@/assets/icons/like.svg";
import activeLike from "@/assets/icons/like-fill.svg";
import person from "@/assets/images/profile-photo.jpg";
import { DbCollections, NotificationMessages, NotificationTypes } from "@/constants";
import { db } from "@/firebase";
import { isFirebaseError } from "@/helpers";
import { useAppDispatch } from "@/hooks";
import { notificationActions } from "@/store/slices/notificationSlice";

import { TweetProps } from "./tweet.interfaces";
import {
    Container,
    Content,
    Date,
    DeleteIcon,
    Email,
    Footer,
    Header,
    Image,
    LikeImage,
    Name,
    Text,
} from "./tweet.styled";

export const Tweet = memo<TweetProps>(
    ({ tweet: { name, email, text, likes, createdAt, selfLiked }, id, fromUser }) => {
        const [liked, setLiked] = useState<boolean>(selfLiked);
        const dispatch = useAppDispatch();

        const clickLikeHandler = async (): Promise<void> => {
            try {
                const auth = getAuth();
                const user = auth.currentUser;

                if (!user) {
                    throw new Error(NotificationMessages.notSignedIn);
                }

                const tweetRef = doc(db, DbCollections.tweets, id);

                if (liked) {
                    await updateDoc(tweetRef, {
                        likes: likes - 1,
                        selfLiked: false,
                    });

                    setLiked(false);
                } else {
                    await updateDoc(tweetRef, {
                        likes: likes + 1,
                        selfLiked: true,
                    });

                    setLiked(true);
                }
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

        const deleteTweetHandler = async (): Promise<void> => {
            try {
                await deleteDoc(doc(db, DbCollections.tweets, id));

                dispatch(
                    notificationActions.addNotification({
                        type: NotificationTypes.success,
                        message: NotificationMessages.tweetDeleted,
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

        return (
            <Container>
                <Image src={person} alt="person" />
                <Content>
                    <Header>
                        <Name>{name}</Name>
                        <Email>{email}</Email>
                        <Date>{createdAt.toDate().toLocaleString()}</Date>
                    </Header>
                    <Text>{text}</Text>
                    <Footer>
                        {liked ? (
                            <LikeImage
                                src={activeLike}
                                alt="activeLike"
                                onClick={clickLikeHandler}
                            />
                        ) : (
                            <LikeImage src={like} alt="like" onClick={clickLikeHandler} />
                        )}
                        {likes || 0}
                    </Footer>
                </Content>
                {fromUser && (
                    <DeleteIcon src={deleteIcon} alt="delete" onClick={deleteTweetHandler} />
                )}
            </Container>
        );
    }
);
