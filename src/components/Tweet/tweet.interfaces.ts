import { ITweet } from "@/interfaces";

export interface TweetProps {
    tweet: ITweet;
    id: string;
    fromUser?: string;
}
