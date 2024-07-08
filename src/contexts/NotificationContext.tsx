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
  handleSetAndShowNotification: (notificationProps: NotificationProps) => void;
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
  handleSetAndShowNotification: () => {},
});

export default function NotificationContextProvider({
  children,
}: NotificationContextProviderProps) {
  const [show, setShow] = useState<boolean>(false);
  const [currentNotificationProps, setCurrentNotificationProps] =
    useState<NotificationProps>({
      variant: "",
      message: "",
    });

  const handleSetAndShowNotification = ({
    variant,
    message,
  }: NotificationProps) => {
    setCurrentNotificationProps({
      variant,
      message,
    });
    setShow(!show);
  };

  return (
    <NotificationContext.Provider
      value={{
        show,
        setShow,
        currentNotificationProps,
        setCurrentNotificationProps,
        handleSetAndShowNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
