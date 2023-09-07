import { createSlice } from "@reduxjs/toolkit";

interface IUser {
    id?: string;
    name?: string;
    email?: string;
    phone?: string;
    token?: string;
    birthDate?: string;
}

const initialState: IUser = {};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
