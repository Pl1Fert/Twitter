import { FC } from "react";

import person from "@/assets/images/profile-photo.jpg";

import { SearchItemProps } from "./searchItem.interfaces";
import { Content, Image, ListItem } from "./searchItem.styled";

export const SearchItem: FC<SearchItemProps> = ({ data }) => {
    if ("createdAt" in data) {
        return <ListItem>{data.text}</ListItem>;
    }

    return (
        <ListItem>
            <Image src={person} alt="person" />
            <Content>
                <p>{data.name}</p>
                <p>{data.email}</p>
            </Content>
        </ListItem>
    );
};
