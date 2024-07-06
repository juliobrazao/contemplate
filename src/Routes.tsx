import { ReactNode } from "react";
import Home from "./pages/Home";
import Layout from "./components/Layout";

export interface RoutesProps {
  path: string;
  element: ReactNode | string;
}

const RouteList: RoutesProps[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export const routes = [
  {
    element: <Layout />,
    children: RouteList,
  },
];
