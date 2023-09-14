import { Dispatch, SetStateAction } from "react";

import { ITweet } from "@/interfaces";

export interface State {
    id: string;
    tweet: ITweet;
}

export interface FeedProps {
    fromUser?: boolean;
    setTweetsCount?: Dispatch<SetStateAction<number>>;
}
