import { Link } from "react-router-dom";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Course } from "./index.tsx";
import { useDispatch, useSelector } from "react-redux";
import { KambazState } from "./store.ts";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer.ts";
import { useState } from "react";
import { enrollInCourse, unenrollFromCourse } from "./Courses/People/reducer.ts";

export default function Dashboard() {
  const courses = useSelector((state: KambazState) => state.coursesReducer.courses);
  const { currentUser } = useSelector((state: KambazState) => state.accountReducer);
  const dispatch = useDispatch();
  const [course, setCourse] = useState<Course>(
    {
      _id: "",
      name: "",
      number: "",
      startDate: "",
      endDate: "",
      image: "",
      description: ""
    }
  );

  const enrollments = useSelector((state: KambazState) => state.enrollmentsReducer.enrollments);
  const userCourses = courses.filter((course) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser?._id &&
        enrollment.course === course._id
    ));

  const [showAllCourses, setShowAllCourses] = useState(false);
  const toggleEnrollments = () => setShowAllCourses(!showAllCourses);

  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {isStudent && (
        <button className="btn btn-blue float-end me-2"
                onClick={toggleEnrollments}
        >
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      )}
      {isFaculty && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={() => dispatch(addCourse(course))}> Add </button>
            <button className="btn btn-warning float-end me-2"
                    onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />
          <FormControl value={course.name} className="mb-2"
                       onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <FormControl value={course.description} className="mb-2"
                       onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <FormControl value={course.image}
                       onChange={(e) => setCourse({ ...course, image: e.target.value })} />
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published"> Published Courses ({userCourses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {(showAllCourses ? courses : userCourses)
            .map((course) => (
              <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link to={`/Kambaz/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                    <Card.Img src={`/images/${course.image}`} variant="top" width="100%" height={160} />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name} </Card.Title>
                      <Card.Text className="wd-dashboard-course-description overflow-hidden"
                                 style={{ height: "100px" }}>
                        {course.description} </Card.Text>
                      <Button variant="primary"> Go </Button>
                      {isStudent && userCourses.includes(course) && showAllCourses && (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(unenrollFromCourse({ currentUser, course }));
                          }}
                          className="btn btn-danger float-end">
                          Unenroll
                        </button>
                      )}
                      {isStudent && !userCourses.includes(course) && showAllCourses && (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(enrollInCourse({ currentUser, course }));
                          }}
                          className="btn btn-green float-end">
                          Enroll
                        </button>
                      )}
                      {isFaculty && (
                        <>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              dispatch(deleteCourse(course._id));
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click">
                            Delete
                          </button>
                          <button id="wd-edit-course-click"
                                  onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                                  }}
                                  className="btn btn-warning me-2 float-end">
                            Edit
                          </button>
                        </>
                      )}
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}