import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { FALSE } from "sass";

export interface DialogProps {
  title?: string;
  content?: ReactNode | string;
}

export interface DialogContextProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  currentDialogProps: DialogProps;
  setCurrentDialogProps: Dispatch<SetStateAction<DialogProps>>;
  handleSetAndShowDialog: (dialogProps: DialogProps) => void;
}

interface DialogContextProviderProps {
  children: ReactNode;
}

export const DialogContext = createContext<Partial<DialogContextProps>>({
  show: false,
  setShow: () => {},
  currentDialogProps: {},
  setCurrentDialogProps: () => {},
  handleSetAndShowDialog: () => {},
});

export default function DialogContextProvider({
  children,
}: DialogContextProviderProps) {
  const [show, setShow] = useState<boolean>(false);
  const [currentDialogProps, setCurrentDialogProps] = useState<DialogProps>({
    title: "",
    content: "",
  });

  const handleSetAndShowDialog = ({ title, content }: DialogProps) => {
    setCurrentDialogProps({
      title,
      content,
    });
    setShow(!show);
  };

  return (
    <DialogContext.Provider
      value={{
        show,
        setShow,
        currentDialogProps,
        setCurrentDialogProps,
        handleSetAndShowDialog,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}
