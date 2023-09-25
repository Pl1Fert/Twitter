import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { LoadingSpinner, NotificationList } from "@/components";
import { MainRouter } from "@/routers";
import { themeSelector } from "@/store/selectors";
import { GlobalStyles } from "@/theme/globals";
import { DarkTheme, LightTheme } from "@/theme/theme";

import { useAppSelector } from "./hooks";

const App = () => {
    const { isDarkTheme } = useAppSelector(themeSelector);

    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
                <RouterProvider router={MainRouter} fallbackElement={<LoadingSpinner />} />
                <NotificationList />
            </ThemeProvider>
        </>
    );
};

export default App;
