import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeNotConnected } from "./page/HomeNotConnected";
import { Inscription } from "./page/Inscription";
import { Home } from "./page/Home";
import { Connexion } from "./page/Connexion";
import "./style/Css/style.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeNotConnected />, // ✅ element, pas Component
  },
  {
    path: "/inscription",
    element: <Inscription />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/connexion",
    element: <Connexion/>
  }
]);

// eslint-disable-next-line no-unused-vars

export const MainView = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <RouterProvider router={router} />
    </div>
  );
};
