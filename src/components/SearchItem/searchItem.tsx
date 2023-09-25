import { FC } from "react";
import { useNavigate } from "react-router-dom";

import person from "@/assets/images/avatar.png";
import { AppRoutes } from "@/constants";
import { useAppDispatch } from "@/hooks";
import { sidebarActions } from "@/store/slices/sidebarSlice";

import { SearchItemProps } from "./searchItem.interfaces";
import { Avatar, Content, ListItem } from "./searchItem.styled";

export const SearchItem: FC<SearchItemProps> = ({ data, id, clearSearch }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const closeSidebar = (): void => {
        dispatch(sidebarActions.closeRight());
    };

    const tweetClickHandler = (): void => {
        navigate(`${AppRoutes.TWEET}/${id}`);
        clearSearch();
        closeSidebar();
    };

    const profileClickHandler = (): void => {
        navigate(`${AppRoutes.PROFILE}/${id}`);
        clearSearch();
        closeSidebar();
    };

    if ("createdAt" in data) {
        return <ListItem onClick={tweetClickHandler}>{data.text}</ListItem>;
    }

    return (
        <ListItem onClick={profileClickHandler}>
            <Avatar src={person} alt="person" loading="lazy" />
            <Content>
                <p>{data.name}</p>
                <p>{data.email}</p>
            </Content>
        </ListItem>
    );
};
