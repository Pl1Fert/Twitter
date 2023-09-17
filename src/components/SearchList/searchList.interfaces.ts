import { ITweet, IUser } from "@/interfaces";

export interface SearchListProps {
    searchValue: string;
}

export interface UserState {
    id: string;
    data: IUser;
}

export interface TweetState {
    id: string;
    data: ITweet;
}
