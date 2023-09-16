import { FC } from "react";

import searchIcon from "@/assets/icons/search.svg";

import { Aside, Container, Icon, SearchBar } from "./rightAside.styled";

export const RightAside: FC = () => (
    <Aside>
        <Container>
            <Icon src={searchIcon} alt="search" />
            <SearchBar placeholder="Search Twitter" />
        </Container>
    </Aside>
);
