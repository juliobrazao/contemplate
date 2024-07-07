import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface NotificationProps {
  variant?: string;
  message?: string;
}

export interface NotificationContextProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  currentNotificationProps: NotificationProps;
  setCurrentNotificationProps: Dispatch<SetStateAction<NotificationProps>>;
}

interface NotificationContextProviderProps {
  children: ReactNode;
}

export const NotificationContext = createContext<
  Partial<NotificationContextProps>
>({
  show: false,
  setShow: () => {},
  currentNotificationProps: {},
  setCurrentNotificationProps: () => {},
});

export default function NotificationContextProvider({
  children,
}: NotificationContextProviderProps) {
  const [show, setShow] = useState<boolean>(true);
  const [currentNotificationProps, setCurrentNotificationProps] =
    useState<NotificationProps>({
      variant: "",
      message: "",
    });

  return (
    <NotificationContext.Provider
      value={{
        show,
        setShow,
        currentNotificationProps,
        setCurrentNotificationProps,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
