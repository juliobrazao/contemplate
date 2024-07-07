import { useContext } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import styled from "styled-components";
import {
  NotificationContext,
  NotificationProps,
} from "../contexts/NotificationContext";

const StyledToast = styled(Toast)`
  border: none;
`;

const StyledToastContainer = styled(ToastContainer)`
  padding-top: 2rem;
`;

const StyledToastText = styled.strong<{ $variant: string }>`
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

  return (
    <StyledToastContainer position="top-center">
      <StyledToast
        show={show}
        bg={variant}
        delay={3000}
        autohide={true}
        onClose={() => setShow && setShow(false)}
      >
        <Toast.Body>
          <StyledToastText $variant={variant}>{message}</StyledToastText>
        </Toast.Body>
      </StyledToast>
    </StyledToastContainer>
  );
}
