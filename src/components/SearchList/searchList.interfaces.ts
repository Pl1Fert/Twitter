import { ITweet, IUser } from "@/interfaces";

export interface SearchListProps {
    searchValue: string;
    clearSearch: () => void;
}

export interface UserState {
    id: string;
    data: IUser;
}

export interface TweetState {
    id: string;
    data: ITweet;
}
