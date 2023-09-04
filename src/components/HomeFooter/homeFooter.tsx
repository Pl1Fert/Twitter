import { FC } from "react";

import { FOOTER_LINKS } from "@/constants";

import { List, ListItem } from "./homeFooter.styled";

export const HomeFooter: FC = () => (
    <List>
        {FOOTER_LINKS.map(({ id, content }) => (
            <ListItem key={id}>{content}</ListItem>
        ))}
    </List>
);
