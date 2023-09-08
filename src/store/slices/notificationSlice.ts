import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { INotification } from "@/interfaces";

const initialState: INotification[] = [];

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        addNotification: (state, { payload }: PayloadAction<Omit<INotification, "id">>) => {
            const notification = { id: Date.now(), ...payload };
            state.push(notification);
        },
        dismissNotification: (state, { payload }: PayloadAction<INotification["id"]>) => {
            const index = state.findIndex((notification) => notification.id === payload);

            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    },
});

export const { actions: notificationActions, reducer: notificationReducer } = notificationSlice;
