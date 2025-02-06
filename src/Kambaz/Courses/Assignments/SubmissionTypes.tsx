import { Col, Form, Row } from "react-bootstrap";

export default function SubmissionTypes() {
  return (
    <Form.Group className="mb-3">
      <Row>
        <Col md={3} className="text-end">
          <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
        </Col>
        <Col md={9} className="form-border">
          <Row>
            <Col>
              <Form.Select id="wd-submission-type" className={"mb-4"}>
                <option selected value="online">
                  Online
                </option>
                <option value="in-person">In-person</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Form.Label htmlFor="wd-submission-type"><b>Online Entry Options</b></Form.Label>
            <Col>
              <Form.Check
                type="checkbox"
                id="wd-text-entry"
                label="Text Entry"
                className={"mb-2"}
              />
              <Form.Check
                type="checkbox"
                id="wd-website-url"
                label="Website URL"
                className={"mb-2"}
              />
              <Form.Check
                type="checkbox"
                id="wd-media-recordings"
                label="Media Recordings"
                className={"mb-2"}
              />
              <Form.Check
                type="checkbox"
                id="wd-student-annotation"
                label="Student Annotation"
                className={"mb-2"}
              />
              <Form.Check
                type="checkbox"
                id="wd-file-upload"
                label="File Upload"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Form.Group>
  );
}