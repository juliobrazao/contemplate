import { ReactNode } from "react";
import Home from "./pages/Home";

export interface RoutesProps {
  path: string;
  element: ReactNode | string;
}

export const Routes: RoutesProps[] = [
  {
    path: "/",
    element: <Home />,
  },
];
