import { Modal } from "react-bootstrap";
import { DialogContext, DialogProps } from "../contexts/DialogContext";
import { useContext } from "react";

export default function Dialog({
  title = "Generic Title",
  content = "Generic Content",
}: DialogProps) {
  const { show, setShow } = useContext(DialogContext);

  return (
    <>
      <Modal
        show={show}
        size="lg"
        centered
        onHide={() => setShow && setShow(!show)}
      >
        <Modal.Header closeButton>
          <strong>{title}</strong>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
      </Modal>
    </>
  );
}
