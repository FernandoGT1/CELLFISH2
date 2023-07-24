import { createBrowserRouter, Outlet } from "react-router-dom";
import AcercaDe from "../components/acercade";
import App from "../App";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Productos from "../components/Productos";
import Ofertas from "../components/Ofertas";
import Nosotros from "../components/nosotros";
import Footer from "../components/Footer";
import Register from "../components/register";
import Categorias from "../components/Categorias";
import Administradores from "../components/Administradores"; // Importa el componente Administradores
import Celulares from "../components/Celulares";
import Articulos from "../components/Articulos";




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
        element: <AcercaDe />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/productos",
        element: <Productos />
      },
      {
        path: "/ofertas",
        element: <Ofertas />
      },
      {
        path: "/nosotros",
        element: <Nosotros />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/Categorias",
        element: <Categorias />
      },
     
      {
        path: "/Administradores",
        element: <Administradores />
      },
      {
        path: "/Celulares",
        element: <Celulares />
      },
      {
        path: "/Articulos",
        element: <Articulos />
      }





    ],

  },
]);





