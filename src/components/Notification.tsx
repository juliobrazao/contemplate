import { useContext, useEffect } from "react";
import { Toast } from "react-bootstrap";
import styled from "styled-components";
import {
  NotificationContext,
  NotificationProps,
} from "../contexts/NotificationContext";

const StyledToast = styled(Toast)`
  border: none;
`;

const ToastText = styled.strong<{ $variant: string }>`
  color: ${({ $variant }) =>
    ["primary", "danger", "success", "secondary"].includes($variant)
      ? "white"
      : "black"};
`;

export default function Notification({
  variant = "",
  message = "",
}: NotificationProps) {
  const { show, setShow } = useContext(NotificationContext);

  useEffect(() => {
    setTimeout(() => setShow && setShow(false), 3000);
  });

  return (
    <>
      <StyledToast show={show} bg={variant}>
        <Toast.Body>
          <ToastText $variant={variant}>{message}</ToastText>
        </Toast.Body>
      </StyledToast>
    </>
  );
}
