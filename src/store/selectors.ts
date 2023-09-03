interface ITheme {
    darkTheme: boolean;
}

interface IState {
    theme: ITheme;
}

export const themeSelector = (state: IState) => state.theme.darkTheme;
