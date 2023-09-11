import { createSlice } from "@reduxjs/toolkit";

import { ITheme } from "@/interfaces";

const initialState: ITheme = {
    isDarkTheme: false,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => ({ isDarkTheme: !state.isDarkTheme }),
    },
});

export const { actions: themeActions, reducer: themeReducer } = themeSlice;
