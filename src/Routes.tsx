import { ReactNode } from "react";

export interface RoutesProps {
  path: string;
  element: ReactNode | string;
}

export const Routes: RoutesProps[] = [
  {
    path: "/",
    element: "Homeland",
  },
];
