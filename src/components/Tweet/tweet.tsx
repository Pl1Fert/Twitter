import { FC, useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

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
    Email,
    Footer,
    Header,
    Image,
    LikeImage,
    Name,
    Text,
} from "./tweet.styled";

export const Tweet: FC<TweetProps> = ({ tweet: { name, email, text, likes, createdAt }, id }) => {
    const [liked, setLiked] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const clickHandler = async () => {
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
                });

                setLiked(false);
            } else {
                await updateDoc(tweetRef, {
                    likes: likes + 1,
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
                        <LikeImage src={activeLike} alt="activeLike" onClick={clickHandler} />
                    ) : (
                        <LikeImage src={like} alt="like" onClick={clickHandler} />
                    )}
                    {likes || 0}
                </Footer>
            </Content>
        </Container>
    );
};
