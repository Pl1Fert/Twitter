import { INotification, ITheme, IUser } from "@/interfaces";

interface IState {
    theme: ITheme;
    user: IUser;
    notification: INotification;
}

export const themeSelector = (state: IState) => state.theme.darkTheme;
export const notificationSelector = (state: IState) => state.notification;
export const userSelector = (state: IState) => state.user;
