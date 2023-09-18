import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "@/interfaces";

const initialState: IUser = {
    id: null,
    name: null,
    email: null,
    token: null,
    phone: null,
    birthDate: null,
    description: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (_, { payload }: PayloadAction<IUser>) => ({ ...payload }),
        deleteUser: () => ({
            ...initialState,
        }),
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
