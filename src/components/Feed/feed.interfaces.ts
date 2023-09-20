import { Dispatch, SetStateAction } from "react";

import { ITweet } from "@/interfaces";

export interface State {
    id: string;
    tweet: ITweet;
}

export interface FeedProps {
    fromUser?: string;
    setTweetsCount?: Dispatch<SetStateAction<number>>;
}
