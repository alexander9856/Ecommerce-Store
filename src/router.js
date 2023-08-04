import { createBrowserRouter } from "react-router-dom";
import { AppRoot } from "./components/AppRoot";
import { NotFound } from "./pages/NotFound";
import { Home } from './pages/Home'
export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppRoot />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            }
        ],
    },
]);
