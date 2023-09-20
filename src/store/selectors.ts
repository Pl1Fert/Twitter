import { EmptyObject } from "@reduxjs/toolkit";
import { PersistPartial } from "redux-persist/es/persistReducer";

import { INotification, ISidebars, ITheme, IUser } from "@/interfaces";

type State = EmptyObject & {
    theme: ITheme;
    user: IUser;
    notification: INotification[];
    sidebar: ISidebars;
} & PersistPartial;

export const themeSelector = (state: State) => state.theme;
export const notificationSelector = (state: State) => state.notification;
export const userSelector = (state: State) => state.user;
export const sidebarSelector = (state: State) => state.sidebar;
