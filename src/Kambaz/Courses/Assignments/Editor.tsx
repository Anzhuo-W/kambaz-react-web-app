import { Row, Col, Form } from "react-bootstrap";
import SubmissionTypes from "./SubmissionTypes.tsx";
import AssignTo from "./AssignTo.tsx";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.filter(assignment => assignment._id === aid)[0];
  return (
    <div id="wd-assignments-editor" className="container mt-4 ml-2">
      <Form>
        <Form.Label htmlFor="wd-name" className="mb-2">Assignment Name</Form.Label>
        <Form.Control id="wd-name" className="mb-4" value={assignment.title} />

        <Form.Control as="textarea" className="mb-4" id="wd-description" cols={70} rows={10}>
          {assignment.description}
        </Form.Control>
      </Form>

      <Form>
        <Row className="mb-3">
          <Col md={3} className="text-end">
            <Form.Label htmlFor="wd-points">Points</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control id="wd-points" value={assignment.points} />
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

        <AssignTo
          due_date={assignment.due}
          available_date={assignment.available}
        />

        <Row className="mt-3">
          <Col md={9} className="offset-md-3 text-end mt-5">
            <Link to={`/Kambaz/Courses/${cid}/Assignments`} id="wd-cancel-assignment" className="btn btn-primary me-2">
              Cancel
            </Link>
            <Link to={`/Kambaz/Courses/${cid}/Assignments`} id="wd-save-assignment"
                  className="btn btn-danger text-white">
              Save
            </Link>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
