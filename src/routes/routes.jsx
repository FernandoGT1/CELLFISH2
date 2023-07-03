import { createBrowserRouter } from "react-router-dom";
import AcercaDe from "../components/acercade";
import App from "../App";
import Navbar from "../components/navbar";
import Login from "../components/Login";
import Footer from "../components/Footer";



export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/acercade",
                element: <AcercaDe />
            },
            {
                path: "/Login",
                element: <Login />
            },

            {
                parth:"/",
                element: <Footer />        

            },

        ],
    },
]);
