import { Row, Col, Form, Button } from "react-bootstrap";
import SubmissionTypes from "./SubmissionTypes.tsx";
import AssignTo from "./AssignTo.tsx";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4 ml-2">
      <Form>
        <Form.Label htmlFor="wd-name" className="mb-2">Assignment Name</Form.Label>
        <Form.Control id="wd-name" className="mb-4" value="A1 - ENV + HTML" />

        <Form.Control as="textarea" className="mb-4" id="wd-description" cols={70} rows={10}>
          The assignment is available online. Submit a link to the landing page of
          your Web application running on Netlify. The landing page should include
          the following: Your full name and section, links to each of the lab
          assignments, link to the Kanbas application, and links to all relevant
          source code repositories. The Kanbas application should include a link to
          navigate back to the landing page.
        </Form.Control>
      </Form>

      <Form>
        <Row className="mb-3">
          <Col md={3} className="text-end">
            <Form.Label htmlFor="wd-points">Points</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control id="wd-points" value={100} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3} className="text-end">
            <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select id="wd-group">
              <option selected value="assignments">
                ASSIGNMENTS
              </option>
              <option value="quizzes">Quizzes</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3} className="text-end">
            <Form.Label htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select id="wd-display-grade-as">
              <option selected value="percentage">
                Percentage
              </option>
              <option value="decimal">Decimal</option>
            </Form.Select>
          </Col>
        </Row>

        <SubmissionTypes />

        <AssignTo />

        <Row className="mt-3">
          <Col md={9} className="offset-md-3 text-end mt-5">
            <Button variant="primary" id="wd-cancel-assignment" className="me-2">
              Cancel
            </Button>
            <Button variant="danger" id="wd-save-assignment">
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
