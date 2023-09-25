import { memo, useEffect, useState } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref } from "firebase/storage";

import deleteIcon from "@/assets/icons/cross.svg";
import like from "@/assets/icons/like.svg";
import activeLike from "@/assets/icons/like-fill.svg";
import person from "@/assets/images/avatar.png";
import { DbCollections, NotificationMessages, NotificationTypes } from "@/constants";
import { db, storage } from "@/firebase";
import { isFirebaseError, isLiked } from "@/helpers";
import { useAppDispatch } from "@/hooks";
import { notificationActions } from "@/store/slices/notificationSlice";

import { TweetProps } from "./tweet.interfaces";
import {
    Avatar,
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
    TweetCount,
} from "./tweet.styled";

export const Tweet = memo<TweetProps>(
    ({ tweet: { name, email, text, likes, createdAt, image, likedByUsers }, id, fromUser }) => {
        const [liked, setLiked] = useState<boolean>(() => isLiked(likedByUsers, email));
        const [imageUrl, setImageUrl] = useState<string>("");
        const dispatch = useAppDispatch();

        const clickLikeHandler = async (): Promise<void> => {
            try {
                const tweetRef = doc(db, DbCollections.tweets, id);

                if (liked) {
                    await updateDoc(tweetRef, {
                        likes: likes - 1,
                        likedByUsers: likedByUsers.filter((user) => user !== email),
                    });

                    setLiked(false);
                } else {
                    await updateDoc(tweetRef, {
                        likes: likes + 1,
                        likedByUsers: [...likedByUsers, email],
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
                if (image) {
                    await deleteObject(ref(storage, image));
                }
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

        useEffect(() => {
            if (image) {
                getDownloadURL(ref(storage, image))
                    .then((url) => {
                        setImageUrl(url);
                    })
                    .catch(() => {});
            }
        }, []);

        return (
            <Container>
                <Avatar src={person} alt="person" loading="lazy" />
                <Content>
                    <Header>
                        <Name>{name}</Name>
                        <Email>{email}</Email>
                        <Date>{createdAt.toDate().toLocaleString()}</Date>
                    </Header>
                    <Text>{text}</Text>
                    {!!imageUrl && <Image src={imageUrl} loading="lazy" />}
                    <Footer>
                        <LikeImage
                            src={liked ? activeLike : like}
                            alt="activeLike"
                            onClick={clickLikeHandler}
                            loading="lazy"
                        />
                        <TweetCount>{likes || 0}</TweetCount>
                    </Footer>
                </Content>
                {!!fromUser && (
                    <DeleteIcon src={deleteIcon} alt="delete" onClick={deleteTweetHandler} />
                )}
            </Container>
        );
    }
);
