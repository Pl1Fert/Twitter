import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { collection, onSnapshot, orderBy, query, startAt } from "firebase/firestore";

import { SearchItem } from "@/components";
import { SearchFields } from "@/constants";
import { db } from "@/firebase";

import { SearchListProps, TweetState, UserState } from "./searchList.interfaces";
import { List } from "./searchList.styled";

export const SearchList = memo<SearchListProps>(({ searchValue, clearSearch }) => {
    const location = useLocation();
    const searchPath = location.pathname === "/feed" ? "users" : "tweets";
    const searchField = SearchFields[searchPath];

    const [userItems, setUserItems] = useState<UserState[]>([]);
    const [tweetItems, setTweetItems] = useState<TweetState[]>([]);

    useEffect(() => {
        onSnapshot(
            query(collection(db, searchPath), orderBy(searchField, "asc"), startAt(searchValue)),
            ({ docs }) => {
                if (location.pathname === "/feed") {
                    setUserItems(
                        docs.map(
                            (doc) =>
                                ({
                                    id: doc.id,
                                    data: doc.data(),
                                }) as UserState
                        )
                    );
                    setTweetItems([]);
                } else {
                    setTweetItems(
                        docs.map(
                            (doc) =>
                                ({
                                    id: doc.id,
                                    data: doc.data(),
                                }) as TweetState
                        )
                    );
                    setUserItems([]);
                }
            }
        );
    }, [location]);

    const renderList = (): JSX.Element[] => {
        if (userItems.length > 0) {
            return userItems.map(({ id, data }) => (
                <SearchItem id={id} data={data} key={id} clearSearch={clearSearch} />
            ));
        }

        return tweetItems.map(({ id, data }) => (
            <SearchItem id={id} data={data} key={id} clearSearch={clearSearch} />
        ));
    };

    return <List>{renderList()}</List>;
});
