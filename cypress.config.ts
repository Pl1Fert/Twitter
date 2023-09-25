import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:5173",
        video: false,
    },
    component: {
        devServer: {
            framework: "react",
            bundler: "vite",
        },
    },
});
