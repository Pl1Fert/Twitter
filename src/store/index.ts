import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { notificationReducer } from "./slices/notificationSlice";
import { sidebarReducer } from "./slices/sidebarSlice";
import { themeReducer } from "./slices/themeSlice";
import { userReducer } from "./slices/userSlice";

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["notification", "sidebar"],
};

const rootReducer = combineReducers({
    theme: themeReducer,
    user: userReducer,
    notification: notificationReducer,
    sidebar: sidebarReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
