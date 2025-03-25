import { useState } from "react";
import { Button, Col, Form, Nav, Row, Tab, Tabs } from "react-bootstrap";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { RxCircleBackslash } from "react-icons/rx";
import { IoEllipsisVertical } from "react-icons/io5";
import { PiCaretDown } from "react-icons/pi";
import { FaBold } from "react-icons/fa";
import { FiItalic } from "react-icons/fi";
import { HiMiniUnderline } from "react-icons/hi2";
import { PiTextAUnderlineDuotone } from "react-icons/pi";
import { BiHighlight } from "react-icons/bi";
import { RiSuperscript2 } from "react-icons/ri";
import { FaRegKeyboard } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { RiExpandDiagonalSLine } from "react-icons/ri";
import { BsGripVertical } from "react-icons/bs";

export default function QuizEditor() {
  const [quizName, setQuizName] = useState("Unnamed Quiz");
  const [quizInstructions, setQuizInstructions] = useState("");
  const [quizType, setQuizType] = useState("graded-quiz");
  const [assignmentGroup, setAssignmentGroup] = useState("quizzes");
  const [points, setPoints] = useState("0");
  const [published, setPublished] = useState(false);
  const [accessCode, setAccessCode] = useState("");

  return (
    <div id="wd-quiz-editor">
      <div className="float-end">
        Points {points}{" "}
        {published ? (
          <>
            <GreenCheckmark /> <span>Published</span>
          </>
        ) : (
          <>
            <RxCircleBackslash /> <span>Not Published</span>
          </>
        )}{" "}
        <Button variant="secondary" className="btn-sm">
          <IoEllipsisVertical className="fs-5" />
        </Button>
      </div>
      <Tabs
        defaultActiveKey="details"
        style={{ width: "1100px", marginBottom: "20px" }}
      >
        <Tab eventKey="details" title="Details">
          <Form>
            <Form.Group className="col-8 mb-3">
              <Form.Control
                type="text"
                placeholder={quizName}
                value={quizName}
                onChange={(e) => setQuizName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="col-12 mb-3">
              <Form.Label>Quiz Instructions:</Form.Label>
              <Nav style={{ marginLeft: "10px", fontSize: "12px" }}>
                <Nav.Item>
                  <Nav.Link>Edit</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>View</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Insert</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Format</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Tools</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Table</Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav style={{ marginLeft: "10px", fontSize: "12px" }}>
                <Nav.Item>
                  <Nav.Link>
                    12pt <PiCaretDown />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    Paragraph <PiCaretDown />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <FaBold className="fs-5" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <FiItalic className="fs-5" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <HiMiniUnderline className="fs-5" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <PiTextAUnderlineDuotone className="fs-5" />
                    <PiCaretDown />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <BiHighlight className="fs-5" />
                    <PiCaretDown />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <RiSuperscript2 className="fs-5" />
                    <PiCaretDown />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <IoEllipsisVertical className="fs-5" />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Form.Control
                as="textarea"
                placeholder={quizInstructions}
                value={quizInstructions}
                onChange={(e) => setQuizInstructions(e.target.value)}
              />
            </Form.Group>
            <div className="float-end">
              <FaRegKeyboard className="fs-5" /> | 0 words |{" "}
              <FaCode className="fs-5" /> |{" "}
              <RiExpandDiagonalSLine className="fs-3" /> |{" "}
              <BsGripVertical className="fs-5" />
            </div>
            <Form.Group>
              {" "}
              <Row className="mb-3">
                <Col md={3} className="text-end">
                  <Form.Label>Quiz Type</Form.Label>
                </Col>
                <Col md={4}>
                  <Form.Select
                    value={quizType}
                    onChange={(e) => setQuizType(e.target.value)}
                  >
                    <option value="graded-quiz">Graded Quiz</option>
                    <option value="practice-quiz">Practice Quiz</option>
                    <option value="graded-survey">Graded Survey</option>
                    <option value="ungraded-survey">Ungraded Survey</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={3} className="text-end">
                  <Form.Label>Assignment Group</Form.Label>
                </Col>
                <Col md={4}>
                  <Form.Select
                    value={assignmentGroup}
                    onChange={(e) => setAssignmentGroup(e.target.value)}
                  >
                    <option value="quizzes">QUIZZES</option>
                    <option value="exams">EXAMS</option>
                    <option value="assignments">ASSIGNMENTS</option>
                    <option value="projects">PROJECTS</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={3} className="text-end">
                  <Form.Label>Points</Form.Label>
                </Col>
                <Col md={4}>
                  <Form.Control
                    placeholder={points}
                    value={points}
                    onChange={(e) => setPoints(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={3} className="text-end">
                  <Form.Label>Access Code</Form.Label>
                </Col>
                <Col md={4}>
                  <Form.Control
                    placeholder={accessCode}
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Row className="mb-3">
                <Col md={4} className="text-end">
                  <Form.Label>
                    <b>Options</b>
                  </Form.Label>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={3}></Col>
                <Col md={5} className="d-flex">
                  <Form.Check label="Shuffle Answers" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={3}></Col>
                <Col md={2} className="d-flex">
                  <Form.Check label="Time Limit" />
                </Col>
                <Col md={1}>
                  <Form.Control
                    placeholder={accessCode}
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                  />
                </Col>
                <Col md={1}>
                  <Form.Label>Minutes</Form.Label>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={3}></Col>
                <Col md={7} className="form-border d-flex">
                  <Form.Check label="Allow Multiple Attempts" />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Tab>
        <Tab eventKey="questions" title="Questions"></Tab>
      </Tabs>
    </div>
  );
}
