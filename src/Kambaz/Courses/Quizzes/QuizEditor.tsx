import { useState } from "react";
import { Button, Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { RxCircleBackslash } from "react-icons/rx";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaRegKeyboard } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { RiExpandDiagonalSLine } from "react-icons/ri";
import { BsGripVertical } from "react-icons/bs";
import Editor from "react-simple-wysiwyg";
import { Link } from "react-router-dom";

export default function QuizEditor() {
  const [published, setPublished] = useState(false);
  const [quizName, setQuizName] = useState("Unnamed Quiz");
  const [quizInstructions, setQuizInstructions] = useState("");
  const [quizType, setQuizType] = useState("graded-quiz");
  const [assignmentGroup, setAssignmentGroup] = useState("quizzes");
  const [points, setPoints] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [shuffleAnswers, setShuffleAnswers] = useState(true);
  const [oneQuestionAtATime, setOneQuestionAtATime] = useState(true);
  const [lockQuestionsAfterAnswering, setLockQuestionsAfterAnswering] =
    useState(false);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
  const [showCorrectAnswersDays, setShowCorrectAnswersDays] = useState("");
  const [timeLimit, setTimeLimit] = useState(true);
  const [timeLimitMinutes, setTimeLimitMinutes] = useState("20");
  const [webcamRequired, setWebcamRequired] = useState(false);
  const [multipleAttempts, setMultipleAttempts] = useState(false);
  const [numberOfAttempts, setNumberOfAttempts] = useState("1");
  const [dueDate, setDueDate] = useState("");
  const [availableFromDate, setAvailableFromDate] = useState("");
  const [availableUntilDate, setAvailableUntilDate] = useState("");

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
        <Button className="btn-sm">
          <IoEllipsisVertical className="fs-5" />
        </Button>
      </div>
      <Tabs
        defaultActiveKey="details"
        style={{ width: "1100px", marginBottom: "20px" }}
      >
        <Tab eventKey="details" title="Details">
          <Form>
            <Form.Group className="col-6 mb-3">
              <Form.Control
                value={quizName}
                onChange={(e) => setQuizName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="col-10 mb-3">
              <Form.Label>Quiz Instructions:</Form.Label>
              <Editor
                value={quizInstructions}
                onChange={(e) => setQuizInstructions(e.target.value)}
              />
              <Row className="mt-3">
                <Col md={8}></Col>
                <Col md={4} className="text-end">
                  <div>
                    <FaRegKeyboard className="fs-5" /> | 0 words |{" "}
                    <FaCode className="fs-5" /> |{" "}
                    <RiExpandDiagonalSLine className="fs-3" /> |{" "}
                    <BsGripVertical className="fs-5" />
                  </div>
                </Col>
              </Row>
            </Form.Group>
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
                <Col md={3} />
                <Col md={5} className="d-flex">
                  <Form.Check
                    defaultChecked={shuffleAnswers}
                    onChange={(e) => setShuffleAnswers(e.target.checked)}
                    label="Shuffle Answers"
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={3} />
                <Col md={5} className="d-flex">
                  <Form.Check
                    defaultChecked={oneQuestionAtATime}
                    onChange={(e) => setOneQuestionAtATime(e.target.checked)}
                    label="One Question at a Time"
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={3} />
                <Col md={5} className="d-flex">
                  <Form.Check
                    defaultChecked={lockQuestionsAfterAnswering}
                    onChange={(e) =>
                      setLockQuestionsAfterAnswering(e.target.checked)
                    }
                    label="Lock Questions After Answering"
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={3} />
                <Col md={2} className="d-flex">
                  <Form.Check
                    defaultChecked={showCorrectAnswers}
                    onChange={(e) => setShowCorrectAnswers(e.target.checked)}
                    label="Show Correct Answers"
                  />
                </Col>
                <Col md={1}>
                  <Form.Control
                    value={showCorrectAnswersDays}
                    onChange={(e) => setShowCorrectAnswersDays(e.target.value)}
                  />
                </Col>
                <Col md={2}>
                  <Form.Label>Days After Due Date</Form.Label>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={3} />
                <Col md={2} className="d-flex">
                  <Form.Check
                    defaultChecked={timeLimit}
                    onChange={(e) => setTimeLimit(e.target.checked)}
                    label="Time Limit"
                  />
                </Col>
                <Col md={1}>
                  <Form.Control
                    value={timeLimitMinutes}
                    onChange={(e) => setTimeLimitMinutes(e.target.value)}
                  />
                </Col>
                <Col md={1}>
                  <Form.Label>Minutes</Form.Label>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={3} />
                <Col md={7} className="form-border d-flex">
                  <Form.Check
                    defaultChecked={webcamRequired}
                    onChange={(e) => setWebcamRequired(e.target.checked)}
                    label="Webcam Required"
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={3} />
                <Col md={7} className="form-border d-flex">
                  <Col md={6}>
                    <Form.Check
                      defaultChecked={multipleAttempts}
                      onChange={(e) => setMultipleAttempts(e.target.checked)}
                      label="Allow Multiple Attempts"
                    />
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      value={numberOfAttempts}
                      onChange={(e) => setNumberOfAttempts(e.target.value)}
                    />
                  </Col>
                  <Col md={1} />
                  <Col md={3}>
                    <Form.Label>Number of Attempts</Form.Label>
                  </Col>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Row className="mb-1">
                <Col md={3} className="text-end">
                  <Form.Label htmlFor="wd-assign-to">Assign</Form.Label>
                </Col>
                <Col md={6} className="form-border">
                  <Row className="mb-3">
                    <Form.Label htmlFor="wd-assign-to">
                      <b>Assign to</b>
                    </Form.Label>
                    <Col>
                      <Form.Control id="wd-assign-to" value={"Everyone"} />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Form.Label htmlFor="wd-due-date">
                        <b>Due</b>
                      </Form.Label>
                      <Form.Control
                        id="wd-due-date"
                        type="datetime-local"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Label htmlFor="wd-available-from">
                        <b>Available from</b>
                      </Form.Label>
                      <Form.Control
                        id="wd-available-from"
                        type="datetime-local"
                        value={availableFromDate}
                        onChange={(e) => setAvailableFromDate(e.target.value)}
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Label htmlFor="wd-available-until">
                        <b>Available Until</b>
                      </Form.Label>
                      <Form.Control
                        id="wd-available-until"
                        type="datetime-local"
                        value={availableUntilDate}
                        onChange={(e) => setAvailableUntilDate(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="col-6 offset-md-3 mb-3">
                <Button>+ Add</Button>
              </Row>
            </Form.Group>
            <Row className="mt-3">
              <Col className="offset-md-5">
                <Link className="btn btn-primary px-3 py-2 me-2">Cancel</Link>
                <Link className="btn btn-danger px-3 py-2 text-white">
                  Save
                </Link>
              </Col>
            </Row>
          </Form>
        </Tab>
        <Tab eventKey="questions" title="Questions"></Tab>
      </Tabs>
    </div>
  );
}
