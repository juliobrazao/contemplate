import { ReactNode } from "react";
import { ContainerCentered } from "./components/Containers";

export interface RoutesProps {
  path: string;
  element: ReactNode | string;
}

export const Routes: RoutesProps[] = [
  {
    path: "/",
    element: <ContainerCentered>Contemplate</ContainerCentered>,
  },
];
