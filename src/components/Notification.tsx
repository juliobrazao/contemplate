import { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";

interface NotificationProps {
  variant: string;
  message: string;
}

export default function Notification({
  variant = "primary",
  message = "some message here!",
}: NotificationProps) {
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setShow(false), 3000);
  });

  return (
    <>
      <Toast show={show} bg={variant} style={{ border: "none" }}>
        <Toast.Body>
          <strong
            className={`${
              ["primary", "danger", "success", "secondary"].includes(variant)
                ? "text-light"
                : "text-dark"
            }`}
          >
            {message}
          </strong>
        </Toast.Body>
      </Toast>
    </>
  );
}
