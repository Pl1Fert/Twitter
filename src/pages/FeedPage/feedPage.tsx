import { FC, SyntheticEvent } from "react";

import { Feed, TweetBox } from "@/components";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { themeSelector } from "@/store/selectors";
import { themeActions } from "@/store/slices/themeSlice";

import {
    DarkThemeRadioButton,
    Header,
    LightThemeRadioButton,
    ThemeToggler,
    Title,
} from "./feedPage.styled";

const FeedPage: FC = () => {
    const dispatch = useAppDispatch();
    const { isDarkTheme } = useAppSelector(themeSelector);

    const handleClick = (e: SyntheticEvent): void => {
        const target = e.target as HTMLInputElement;
        if (target.value === isDarkTheme.toString()) {
            return;
        }

        dispatch(themeActions.toggleTheme());
    };

    return (
        <>
            <Header>
                <Title>Home</Title>
                <ThemeToggler>
                    <LightThemeRadioButton
                        type="radio"
                        name="theme"
                        onClick={handleClick}
                        value="false"
                        defaultChecked={!isDarkTheme}
                    />
                    <DarkThemeRadioButton
                        type="radio"
                        name="theme"
                        onClick={handleClick}
                        value="true"
                        defaultChecked={isDarkTheme}
                    />
                </ThemeToggler>
            </Header>
            <TweetBox />
            <Feed />
        </>
    );
};

export default FeedPage;
