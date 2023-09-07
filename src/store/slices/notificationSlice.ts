import { createSlice } from "@reduxjs/toolkit";

import { INotification } from "@/interfaces";

interface ISetMessageAction {
    payload: string;
    type: string;
}

interface ISetVisibleAction {
    payload: boolean;
    type: string;
}

const initialState: INotification = {
    isVisible: false,
    message: "",
};

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        setMessage: (state, action: ISetMessageAction) => ({ ...state, message: action.payload }),
        setVisible: (state, action: ISetVisibleAction) => ({ ...state, isVisible: action.payload }),
    },
});

export const { actions: notificationActions, reducer: notificationReducer } = notificationSlice;
