import { PlusCircleFill, Trash2Fill } from "react-bootstrap-icons";
import { ContainerFluid } from "../components/Containers";
import Notification from "../components/Notification";
import { NotificationContext } from "../contexts/NotificationContext";
import { useContext } from "react";
import { DialogContext } from "../contexts/DialogContext";
import Dialog from "../components/Dialog";

export default function New() {
  const { currentNotificationProps, handleSetAndShowNotification } =
    useContext(NotificationContext);
  const { currentDialogProps, handleSetAndShowDialog } =
    useContext(DialogContext);

  const handleShowSuccessNotification = () => {
    handleSetAndShowNotification &&
      handleSetAndShowNotification({
        variant: "success",
        message: "User was added successfully!",
      });
  };

  const handleShowDialog = () => {
    handleSetAndShowDialog &&
      handleSetAndShowDialog({
        title: "Dialog Test",
        content: "This is a dialog!",
      });
  };

  return (
    <ContainerFluid>
      <div className="my-3 d-flex justify-content-end">
        <button
          className="btn btn-lg btn-primary rounded-pill mx-2"
          onClick={handleShowSuccessNotification}
        >
          <PlusCircleFill />
          &nbsp;&nbsp;
          <strong>Call Notification</strong>
        </button>

        <button
          className="btn btn-lg btn-secondary rounded-pill mx-2"
          onClick={handleShowDialog}
        >
          <Trash2Fill />
          &nbsp;&nbsp;
          <strong>Call Modal</strong>
        </button>
      </div>

      <div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Column 1</th>
                <th scope="col">Column 2</th>
                <th scope="col">Column 3</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td scope="row">R1C1</td>
                <td>R1C2</td>
                <td>R1C3</td>
              </tr>
              <tr className="">
                <td scope="row">Item</td>
                <td>Item</td>
                <td>Item</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Notification
        variant={currentNotificationProps?.variant}
        message={currentNotificationProps?.message}
      />
      <Dialog
        title={currentDialogProps?.title}
        content={currentDialogProps?.content}
      />
    </ContainerFluid>
  );
}
