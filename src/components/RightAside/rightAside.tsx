import { FC, SyntheticEvent, useState } from "react";

import searchIcon from "@/assets/icons/search.svg";
import { SearchList } from "@/components";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { sidebarSelector } from "@/store/selectors";
import { sidebarActions } from "@/store/slices/sidebarSlice";

import { Aside, Burger, Container, Icon, SearchBar, Span, Title } from "./rightAside.styled";

export const RightAside: FC = () => {
    const [searchValue, setSearchValue] = useState<string>("");

    const { isVisibleRightSidebar: isVisible } = useAppSelector(sidebarSelector);
    const dispatch = useAppDispatch();

    const toggleVisibility = (): void => {
        dispatch(sidebarActions.toggleRight());
    };

    const onChangeHandler = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        setSearchValue(target.value);
    };

    const clearSearch = (): void => {
        setSearchValue("");
    };

    return (
        <>
            <Burger $isVisible={isVisible} onClick={toggleVisibility}>
                <Span className="first" />
                <Span className="second" />
                <Span className="third" />
            </Burger>
            <Aside $isVisible={isVisible}>
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
                        <SearchList searchValue={searchValue} clearSearch={clearSearch} />
                    </>
                )}
            </Aside>
        </>
    );
};
