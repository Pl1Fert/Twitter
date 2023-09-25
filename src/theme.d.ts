import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        backgroundColor: string;
        textColor: string;
        shadowColor: string;
        border: string;
        button: {
            backgroundColor: {
                [key: string]: string;
            };
            textColor: {
                [key: string]: string;
            };
            border: {
                [key: string]: string;
            };
        };
        input: {
            backgroundColor: {
                [key: string]: string;
            };
            textColor: {
                [key: string]: string;
            };
            border: {
                [key: string]: string;
            };
            placeholder: { [key: string]: string };
        };
        select: {
            backgroundColor: {
                [key: string]: string;
            };
            textColor: {
                [key: string]: string;
            };
            border: {
                [key: string]: string;
            };
        };
        notification: {
            border: {
                [key: string]: string;
            };
            color: {
                [key: string]: string;
            };
            backgroundColor: {
                [key: string]: string;
            };
            shadow: {
                [key: string]: string;
            };
        };
        links: {
            backgroundColor: {
                [key: string]: string;
            };
        };
        fontColors: {
            [key: string]: string;
        };
        backgroundColors: {
            [key: string]: string;
        };
        fontWeights: {
            [key: string]: string;
        };
        fontSize: {
            [key: string]: string;
        };
    }
}
