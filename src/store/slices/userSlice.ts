import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "@/interfaces";

const initialState: IUser = {
    id: null,
    name: null,
    email: null,
    token: null,
    phone: null,
    birthDate: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (_, { payload }: PayloadAction<IUser>) => ({ ...payload }),
        setName: (state, { payload }: PayloadAction<IUser["name"]>) => ({
            ...state,
            name: payload,
        }),
        setPhone: (state, { payload }: PayloadAction<IUser["phone"]>) => ({
            ...state,
            phone: payload,
        }),
        setBirthdate: (state, { payload }: PayloadAction<IUser["birthDate"]>) => ({
            ...state,
            birthDate: payload,
        }),
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
