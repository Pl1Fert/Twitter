import { RouterProvider } from "react-router-dom";

import { LoadingSpinner } from "@/components";
import { MainRouter } from "@/routers";
import { GlobalStyles } from "@/styles/globals";

const App = () => (
    <>
        <GlobalStyles />
        <RouterProvider router={MainRouter} fallbackElement={<LoadingSpinner />} />
    </>
);

export default App;
