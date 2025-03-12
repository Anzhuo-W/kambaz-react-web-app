import { Col, Form, Row } from "react-bootstrap";

export default function AssignTo(
  {
    due_date,
    available_date,
    onDueDateChange,
    onAvailableFromChange,
    onAvailableUntilChange
  }: {
    due_date: string;
    available_date: string;
    onDueDateChange: (date: string) => void;
    onAvailableFromChange: (date: string) => void;
    onAvailableUntilChange: (date: string) => void;
  }) {
  return (
    <Form.Group className="mb-3">
      <Row>
        <Col md={3} className="text-end">
          <Form.Label htmlFor="wd-assign-to">Assign</Form.Label>
        </Col>
        <Col md={9} className="form-border">
          <Row className={"mb-3"}>
            <Form.Label htmlFor="wd-assign-to"><b>Assign to</b></Form.Label>
            <Col>
              <Form.Control id="wd-assign-to" value={"Everyone"} readOnly />
            </Col>
          </Row>
          <Row className={"mb-3"}>
            <Col>
              <Form.Label htmlFor="wd-due-date"><b>Due</b></Form.Label>
              <Form.Control
                type="datetime-local"
                value={due_date}
                id="wd-due-date"
                onChange={(e) => onDueDateChange(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Label htmlFor="wd-available-from"><b>Available from</b></Form.Label>
              <Form.Control
                type="datetime-local"
                value={available_date}
                id="wd-available-from"
                onChange={(e) => onAvailableFromChange(e.target.value)}
              />
            </Col>
            <Col md={6}>
              <Form.Label htmlFor="wd-available-until"><b>Available Until</b></Form.Label>
              <Form.Control
                type="datetime-local"
                value={due_date}
                id="wd-available-until"
                onChange={(e) => onAvailableUntilChange(e.target.value)}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Form.Group>
  );
}