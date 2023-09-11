import { FC } from "react";

import searchIcon from "@/assets/icons/search.svg";

import { Container, Icon, SearchBar } from "./rightAside.styled";

export const RightAside: FC = () => (
    <aside>
        <Container>
            <Icon src={searchIcon} alt="search" />
            <SearchBar placeholder="Search Twitter" />
        </Container>
    </aside>
);
