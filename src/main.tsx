import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "@/store";

import "./firebase";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <App />
        </PersistGate>
    </Provider>
);

declare global {
    interface Window {
        Cypress?: unknown;
        store?: unknown;
    }
}

if (window.Cypress) {
    window.store = store;
}
