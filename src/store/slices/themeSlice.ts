import { createSlice } from "@reduxjs/toolkit";

import { ITheme } from "@/interfaces";

const initialState: ITheme = {
    darkTheme: true,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => ({ darkTheme: !state.darkTheme }),
    },
});

export const { actions: themeActions, reducer: themeReducer } = themeSlice;
