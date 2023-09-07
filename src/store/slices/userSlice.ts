import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "@/interfaces";

const initialState: IUser = {};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
