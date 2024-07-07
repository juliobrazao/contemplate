import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { routes } from "./Routes";
import NotificationContextProvider from "./contexts/NotificationContext";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NotificationContextProvider>
    <RouterProvider router={router} />
  </NotificationContextProvider>
);
