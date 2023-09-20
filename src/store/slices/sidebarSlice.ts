import { createSlice } from "@reduxjs/toolkit";

import { ISidebars } from "@/interfaces";

const initialState: ISidebars = {
    isVisibleLeftSidebar: false,
    isVisibleRightSidebar: false,
};

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        openLeft: () => ({
            isVisibleLeftSidebar: true,
            isVisibleRightSidebar: false,
        }),
        openRight: () => ({
            isVisibleLeftSidebar: false,
            isVisibleRightSidebar: true,
        }),
        closeLeft: (state) => ({
            ...state,
            isVisibleLeftSidebar: false,
        }),
        closeRight: (state) => ({
            ...state,
            isVisibleRightSidebar: false,
        }),
        toggleLeft: (state) => ({
            ...state,
            isVisibleLeftSidebar: !state.isVisibleLeftSidebar,
            isVisibleRightSidebar: false,
        }),
        toggleRight: (state) => ({
            ...state,
            isVisibleRightSidebar: !state.isVisibleRightSidebar,
            isVisibleLeftSidebar: false,
        }),
    },
});

export const { actions: sidebarActions, reducer: sidebarReducer } = sidebarSlice;
