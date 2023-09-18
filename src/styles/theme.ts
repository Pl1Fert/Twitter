import { DefaultTheme } from "styled-components";

export const LightTheme: DefaultTheme = {
    backgroundColor: "#ffffff",
    textColor: "#000000",
    shadowColor: "#808080",
    border: "#E4EAED",
    button: {
        backgroundColor: {
            primary: "#1D9BF0",
            hover: "#187cba",
            disabled: "#67B4E3",
            secondary: "#B3B8BB",
        },
        textColor: {
            primary: "#ffffff",
            outline: "#000000",
        },
        border: {
            primary: "#E4EAED",
            hover: "#000000",
        },
    },
    input: {
        backgroundColor: {
            primary: "transparent",
            search: "#eff3f4",
        },
        textColor: {
            primary: "#000000",
        },
        border: {
            primary: "#E4EAED",
            focused: "#000000",
        },
        placeholder: { primary: "#666666" },
    },
    select: {
        backgroundColor: {
            primary: "#ffffff",
        },
        textColor: {
            primary: "#000000",
            disabled: "#666666",
        },
        border: {
            primary: "#E4EAED",
            focused: "#000000",
        },
    },
    notification: {
        border: {
            error: "#e7182e",
            success: "#16cd4a",
            warning: "#d8ae17",
        },
        color: {
            primary: "#000000",
        },
        backgroundColor: {
            primary: "#ffffff",
        },
        shadow: {
            primary: "#808080",
        },
    },
    links: {
        backgroundColor: {
            hover: "#eff3f490",
        },
    },
    fontColors: {
        blue: "#1DA1F2",
        grey: "#666666",
        red: "#e7182e",
    },
    backgroundColors: {
        blue: "#1D9BF0",
    },
};

export const DarkTheme: DefaultTheme = {
    backgroundColor: "#092441",
    textColor: "#ffffff",
    shadowColor: "#808080",
    border: "#E4EAED",
    button: {
        backgroundColor: {
            primary: "#1D9BF0",
            hover: "#187cba",
            disabled: "#67B4E3",
            secondary: "#B3B8BB",
        },
        textColor: {
            primary: "#ffffff",
            outline: "#ffffff",
        },
        border: {
            primary: "#E4EAED",
            hover: "#1D9BF0",
        },
    },
    input: {
        backgroundColor: {
            primary: "#4D90D9",
            search: "#4D90D9",
        },
        textColor: {
            primary: "#ffffff",
        },
        border: {
            primary: "#E4EAED",
            focused: "#000000",
        },
        placeholder: { primary: "#666666" },
    },
    select: {
        backgroundColor: {
            primary: "#ffffff",
        },
        textColor: {
            primary: "#ffffff",
            disabled: "#666666",
        },
        border: {
            primary: "#E4EAED",
            focused: "#1D9BF0",
            hover: "#1D9BF0",
        },
    },
    notification: {
        border: {
            error: "#e7182e",
            success: "#16cd4a",
            warning: "#d8ae17",
        },
        color: {
            primary: "#ffffff",
        },
        backgroundColor: {
            primary: "#092441",
        },
        shadow: {
            primary: "#808080",
        },
    },
    links: {
        backgroundColor: {
            hover: "#8eb2db",
        },
    },
    fontColors: {
        blue: "#1DA1F2",
        grey: "#666666",
        red: "#e7182e",
    },
    backgroundColors: {
        blue: "#1D9BF0",
    },
};
