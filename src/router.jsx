import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Layout } from "./components/Layout/Layout";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />,
                index: true
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/projects",
                element: <Projects />
            }
        ]
    }
])