import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { routes } from "./Routes";
import NotificationContextProvider from "./contexts/NotificationContext";
import DialogContextProvider from "./contexts/DialogContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <DialogContextProvider>
      <NotificationContextProvider>
        <RouterProvider router={router} />
      </NotificationContextProvider>
    </DialogContextProvider>
  </QueryClientProvider>
);
