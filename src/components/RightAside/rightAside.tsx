import { FC, SyntheticEvent, useState } from "react";

import searchIcon from "@/assets/icons/search.svg";
import { SearchList } from "@/components";

import { Aside, Container, Icon, SearchBar, Title } from "./rightAside.styled";

export const RightAside: FC = () => {
    const [searchValue, setSearchValue] = useState<string>("");

    const onChangeHandler = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        setSearchValue(target.value);
    };

    return (
        <Aside>
            <Container>
                <Icon src={searchIcon} alt="search" />
                <SearchBar
                    placeholder="Search Twitter"
                    value={searchValue}
                    onChange={onChangeHandler}
                />
            </Container>
            {!!searchValue && (
                <>
                    <Title>Search Results</Title>
                    <SearchList searchValue={searchValue} />
                </>
            )}
        </Aside>
    );
};
