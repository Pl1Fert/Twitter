import { FC } from "react";
import { useNavigate } from "react-router-dom";

import person from "@/assets/images/profile-photo.jpg";
import { AppRoutes } from "@/constants";

import { SearchItemProps } from "./searchItem.interfaces";
import { Content, Image, ListItem } from "./searchItem.styled";

export const SearchItem: FC<SearchItemProps> = ({ data, id, clearSearch }) => {
    const navigate = useNavigate();

    const tweetClickHandler = () => {
        navigate(`${AppRoutes.TWEET}/${id}`);
        clearSearch();
    };

    if ("createdAt" in data) {
        return <ListItem onClick={tweetClickHandler}>{data.text}</ListItem>;
    }

    const profileClickHandler = () => {
        navigate(`${AppRoutes.PROFILE}/${id}`);
        clearSearch();
    };

    return (
        <ListItem onClick={profileClickHandler}>
            <Image src={person} alt="person" />
            <Content>
                <p>{data.name}</p>
                <p>{data.email}</p>
            </Content>
        </ListItem>
    );
};
