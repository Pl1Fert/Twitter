import { memo, useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import { Tweet } from "@/components";
import { DbCollections } from "@/constants";
import { db } from "@/firebase";
import { useAppSelector } from "@/hooks";
import { userSelector } from "@/store/selectors";

import { FeedProps, State } from "./feed.interfaces";
import { Title, TweetsFeed } from "./feed.styled";

export const Feed = memo<FeedProps>(({ fromUser = false, setTweetsCount }) => {
    const [tweets, setTweets] = useState<State[]>([]);
    const { email } = useAppSelector(userSelector);

    useEffect(() => {
        onSnapshot(
            query(collection(db, DbCollections.tweets), orderBy("createdAt", "desc")),
            ({ docs }) => {
                if (fromUser) {
                    setTweets(
                        docs
                            .map(
                                (doc) =>
                                    ({
                                        id: doc.id,
                                        tweet: doc.data(),
                                    }) as State
                            )
                            .filter((item) => item.tweet.email === email)
                    );
                } else {
                    setTweets(
                        docs.map(
                            (doc) =>
                                ({
                                    id: doc.id,
                                    tweet: doc.data(),
                                }) as State
                        )
                    );
                }
            }
        );
    }, []);

    useEffect(() => {
        if (setTweetsCount) {
            setTweetsCount(tweets.length);
        }
    }, [tweets, setTweetsCount]);

    return (
        <TweetsFeed>
            {tweets.length > 0 ? (
                tweets.map(({ id, tweet }) => <Tweet key={id} tweet={tweet} id={id} fromUser />)
            ) : (
                <Title>No Tweets</Title>
            )}
        </TweetsFeed>
    );
});
