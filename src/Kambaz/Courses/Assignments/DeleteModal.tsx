import { Modal, Button } from "react-bootstrap";

export default function DeleteModal({
                                      show,
                                      handleClose,
                                      dialogTitle,
                                      assignmentTitle,
                                      assignmentId,
                                      deleteAssignment
                                    }: {
  show: boolean;
  handleClose: () => void;
  dialogTitle: string;
  assignmentTitle: string;
  assignmentId: string;
  deleteAssignment: (aid: string) => void
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Delete {assignmentTitle}?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}> Cancel </Button>
        <Button variant="danger"
                onClick={() => {
                  deleteAssignment(assignmentId);
                  handleClose();
                }}> Delete </Button>
      </Modal.Footer>
    </Modal>
  );
}
