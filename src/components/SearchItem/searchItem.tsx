import { FC } from "react";
import { useNavigate } from "react-router-dom";

import person from "@/assets/images/profile-photo.jpg";
import { AppRoutes } from "@/constants";

import { SearchItemProps } from "./searchItem.interfaces";
import { Avatar, Content, ListItem } from "./searchItem.styled";

export const SearchItem: FC<SearchItemProps> = ({ data, id, clearSearch }) => {
    const navigate = useNavigate();

    const tweetClickHandler = (): void => {
        navigate(`${AppRoutes.TWEET}/${id}`);
        clearSearch();
    };

    const profileClickHandler = (): void => {
        navigate(`${AppRoutes.PROFILE}/${id}`);
        clearSearch();
    };

    if ("createdAt" in data) {
        return <ListItem onClick={tweetClickHandler}>{data.text}</ListItem>;
    }

    return (
        <ListItem onClick={profileClickHandler}>
            <Avatar src={person} alt="person" />
            <Content>
                <p>{data.name}</p>
                <p>{data.email}</p>
            </Content>
        </ListItem>
    );
};
