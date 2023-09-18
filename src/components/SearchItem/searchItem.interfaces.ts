import { ITweet, IUser } from "@/interfaces";

export interface SearchItemProps {
    id: string;
    data: IUser | ITweet;
    clearSearch: () => void;
}
