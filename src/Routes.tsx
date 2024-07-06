import { ReactNode } from "react";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import New from "./pages/New";

export interface RoutesProps {
  label: string;
  path: string;
  element: ReactNode | string;
}

export const RouteList: RoutesProps[] = [
  {
    label: "Home",
    path: "/",
    element: <Home />,
  },
  {
    label: "New",
    path: "/new",
    element: <New />,
  },
];

export const routes = [
  {
    element: <Layout />,
    children: RouteList,
  },
];
