import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { collection, onSnapshot, orderBy, query, startAt } from "firebase/firestore";

import { SearchItem } from "@/components";
import { SearchFields, SearchPaths } from "@/constants";
import { db } from "@/firebase";

import { SearchListProps, TweetState, UserState } from "./searchList.interfaces";
import { List } from "./searchList.styled";

export const SearchList = memo<SearchListProps>(({ searchValue }) => {
    const location = useLocation();
    const searchPath = SearchPaths[location.pathname as keyof typeof SearchPaths];
    const searchField = SearchFields[searchPath as keyof typeof SearchFields];

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

    return (
        <List>
            {userItems.length > 0
                ? userItems.map(({ id, data }) => <SearchItem id={id} data={data} key={id} />)
                : tweetItems.map(({ id, data }) => <SearchItem id={id} data={data} key={id} />)}
        </List>
    );
});
