import { memo, useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import { Tweet } from "@/components";
import { DbCollections } from "@/constants";
import { db } from "@/firebase";

import { FeedProps, State } from "./feed.interfaces";
import { Title, TweetsFeed } from "./feed.styled";

export const Feed = memo<FeedProps>(({ fromUser = "", setTweetsCount }) => {
    const [tweets, setTweets] = useState<State[]>([]);

    useEffect(() => {
        onSnapshot(
            query(collection(db, DbCollections.tweets), orderBy("createdAt", "desc")),
            ({ docs }) => {
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
        );
    }, []);

    const renderTweets = (): JSX.Element[] => {
        if (fromUser) {
            const userTweets = tweets.filter((item) => item.tweet.email === fromUser);
            if (setTweetsCount) {
                setTweetsCount(userTweets.length);
            }

            return userTweets.map(({ id, tweet }) => (
                <Tweet key={id} tweet={tweet} id={id} fromUser={fromUser} />
            ));
        }

        return tweets.map(({ id, tweet }) => (
            <Tweet key={id} tweet={tweet} id={id} fromUser={fromUser} />
        ));
    };

    return <TweetsFeed>{tweets.length > 0 ? renderTweets() : <Title>No Tweets</Title>}</TweetsFeed>;
});
