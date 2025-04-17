import { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Assignment } from "./reducer.ts";
import AssignTo from "./AssignTo.tsx";
import { KambazState } from "../../store.ts";
import SubmissionTypes from "./SubmissionTypes.tsx";
import * as client from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();

  const assignment = useSelector((state: KambazState) =>
    aid ? state.assignmentsReducer.assignments.find((a: Assignment) => a._id === aid) : null
  );

  const { currentUser } = useSelector((state: KambazState) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const [title, setTitle] = useState(assignment?.title || "");
  const [description, setDescription] = useState(assignment?.description || "");
  const [module, setModule] = useState(assignment?.module || "");
  const [points, setPoints] = useState(assignment?.points || "");
  const [dueDate, setDueDate] = useState(assignment?.due || "");
  const [availableFrom, setAvailableFrom] = useState(assignment?.available || "");
  const [availableUntil, setAvailableUntil] = useState(assignment?.available_until || "");

  useEffect(() => {
    if (aid) {
      const fetchAssignment = async () => {
        const assignment = await client.findAssignmentById(aid);
        if (assignment) {
          setTitle(assignment.title);
          setDescription(assignment.description);
          setModule(assignment.module);
          setPoints(assignment.points);
          setDueDate(assignment.due);
          setAvailableFrom(assignment.available);
          setAvailableUntil(assignment.available_until);
        }
      };
      fetchAssignment();
    }
  }, [aid]);

  const handleSave = async () => {
    if (!cid) {
      console.error("Course ID is undefined");
      return;
    }

    const assignmentData: Assignment = {
      _id: aid || "",
      title,
      description,
      points,
      due: dueDate,
      available: availableFrom,
      available_until: availableUntil,
      course: cid, // Now guaranteed to be string
      module
    };

    try {
      if (aid) {
        await client.updateAssignment(assignmentData);
      } else {
        await client.createAssignment(cid, assignmentData);
      }
      navigate(`/Kambaz/Courses/${cid}/Assignments`);
      window.location.reload();
    } catch (error) {
      console.error("Failed to save assignment:", error);
    }
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4 ml-2">
      <Form>
        <Form.Label htmlFor="wd-name" className="mb-2">
          Assignment Name
        </Form.Label>
        <Form.Control
          id="wd-name"
          className="mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Form.Control
          as="textarea"
          className="mb-4"
          id="wd-description"
          cols={70}
          rows={10}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form>

      <Form>
        <Row className="mb-3 align-items-center">
          <Col md={3} className="text-end text-nowrap">
            <Form.Label htmlFor="wd-module">Module</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              id="wd-module"
              value={module}
              onChange={(e) => setModule(e.target.value)}
            />
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col md={3} className="text-end text-nowrap">
            <Form.Label htmlFor="wd-points">Points</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              id="wd-points"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
            />
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col md={3} className="text-end text-nowrap">
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

        <Row className="mb-3 align-items-center">
          <Col md={3} className="text-end text-nowrap">
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
          due_date={dueDate}
          available_date={availableFrom}
          onDueDateChange={setDueDate}
          onAvailableFromChange={setAvailableFrom}
          onAvailableUntilChange={setAvailableUntil}
        />

        {isFaculty && (
          <Row className="mt-3">
            <Col md={9} className="offset-md-3 text-end mt-5">
              <Link
                to={`/Kambaz/Courses/${cid}/Assignments`}
                id="wd-cancel-assignment"
                className="btn btn-primary me-2"
              >
                Cancel
              </Link>
              <Link
                to={`/Kambaz/Courses/${cid}/Assignments`}
                id="wd-save-assignment"
                className="btn btn-danger text-white"
                onClick={handleSave}
              >
                Save
              </Link>
            </Col>
          </Row>
        )}

      </Form>
    </div>
  );
}