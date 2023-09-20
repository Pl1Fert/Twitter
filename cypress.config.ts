import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:5173",
        video: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
    component: {
        devServer: {
            framework: "react",
            bundler: "vite",
        },
    },
});
