import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { routes } from "./Routes";
import NotificationContextProvider from "./contexts/NotificationContext";
import DialogContextProvider from "./contexts/DialogContext";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <DialogContextProvider>
    <NotificationContextProvider>
      <RouterProvider router={router} />
    </NotificationContextProvider>
  </DialogContextProvider>
);
