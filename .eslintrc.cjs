module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "airbnb",
        "airbnb-typescript",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react-refresh", "prettier", "simple-import-sort", "import"],
    overrides: [
        {
            files: ["*.ts", "*.tsx", "*.d.ts"],
            extends: [
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
            ],
            parserOptions: {
                project: ["./tsconfig.json"],
            },
        },
    ],
    rules: {
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "simple-import-sort/imports": [
            "error",
            {
                groups: [
                    // Packages `react` related packages come first.
                    ["^react", "^@?\\w"],
                    // Internal packages.
                    ["^(@|components)(/.*|$)"],
                    // Side effect imports.
                    ["^\\u0000"],
                    // Parent imports. Put `..` last.
                    ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                    // Style imports.
                    ["^.+\\.?(css)$"],
                ],
            },
        ],
        "simple-import-sort/exports": "error",
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "react/react-in-jsx-scope": "off",
        "import/prefer-default-export": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "": "never",
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "react/function-component-definition": [
            2,
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
    },
};
