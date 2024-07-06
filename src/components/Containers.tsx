import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode | string;
}

export function ContainerFluid({ children }: ContainerProps) {
  return <div className="container-fluid mt-3 px-3">{children}</div>;
}

export function ContainerCentered({ children }: ContainerProps) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {children}
    </div>
  );
}
