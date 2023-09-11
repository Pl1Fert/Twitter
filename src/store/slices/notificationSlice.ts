import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { INotification } from "@/interfaces";

const initialState: INotification[] = [];

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        addNotification: (state, { payload }: PayloadAction<Omit<INotification, "id">>) => {
            state.push({ id: Date.now(), ...payload });
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
