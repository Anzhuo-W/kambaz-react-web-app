import { Link } from "react-router-dom";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Course } from "./index.tsx";
import { useDispatch, useSelector } from "react-redux";
import { KambazState } from "./store.ts";
import { useEffect, useState } from "react";
import { enrollInCourse, unenrollFromCourse } from "./Courses/People/reducer.ts";
import { updateCourse } from "./Courses/reducer.ts";
import * as client from "./Courses/client";
import * as userClient from "./Account/client";
import * as enrollmentsClient from "./Courses/People/client";

export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [userCourses, setUserCourses] = useState<Course[]>([]);
  const { currentUser } = useSelector((state: KambazState) => state.accountReducer);

  const [showAllCourses, setShowAllCourses] = useState(false);
  const toggleEnrollments = () => setShowAllCourses(!showAllCourses);

  const fetchCourses = async () => {
    try {
      const allCourses = await client.fetchAllCourses();
      const userEnrolledCourses = await userClient.findMyCourses("current");
      setCourses(allCourses);
      setUserCourses(userEnrolledCourses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser, showAllCourses]);

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

  const isFaculty = currentUser?.role === "FACULTY";

  const handleDelete = async (courseId: string) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const handleEnroll = async (courseId: string) => {
    if (!currentUser) return;

    try {
      await enrollmentsClient.enrollUserInCourse({
        user: currentUser._id,
        course: courseId
      });

      const courseToEnroll = courses.find(c => c._id === courseId);
      if (!courseToEnroll) return;

      dispatch(enrollInCourse({
        currentUser,
        course: courseToEnroll
      }));

      setUserCourses(prev => {
        if (prev.some(c => c._id === courseId)) return prev;
        return [...prev, courseToEnroll];
      });

      fetchCourses();
    } catch (error) {
      console.error("Enrollment failed:", error);
    }
  };

  const handleUnenroll = async (courseId: string) => {
    if (!currentUser) return;
    try {
      await enrollmentsClient.unenrollUserFromCourse(currentUser._id, courseId);
      dispatch(unenrollFromCourse({
        currentUser,
        course: courses.find(c => c._id === courseId)
      }));
      setUserCourses(prev => prev.filter(c => c._id !== courseId));
    } catch (error) {
      console.error("Unenrollment failed:", error);
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <button className="btn btn-blue float-end me-2"
              onClick={toggleEnrollments}
      >
        {showAllCourses ? "Show Enrolled Courses" : "Show All Enrollments"}
      </button>
      {isFaculty && (
        <>
          <h5>New Course
            <button className="btn btn-green float-end me-2"
                    id="wd-add-new-course-click"
                    onClick={async () => {
                      const newCourse = await userClient.createCourse(course);
                      setCourses([...courses, newCourse]);
                      fetchCourses();
                    }}> Add </button>
            <button className="btn btn-warning float-end me-2"
                    onClick={async () => {
                      const response = await client.updateCourse(course);
                      dispatch(updateCourse(course));

                      setCourses(prevCourses => prevCourses.map(c =>
                        c._id === course._id ? {...course} : c
                      ));

                      setUserCourses(prevUserCourses => prevUserCourses.map(c =>
                        c._id === course._id ? {...course} : c
                      ));
                    }}
                    id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />
          <FormControl value={course.name} className="mb-2" placeholder="Course Name"
                       onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <FormControl value={course.description} className="mb-2" placeholder="Course Description"
                       onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <FormControl value={course.image} placeholder="Course Image"
                       onChange={(e) => setCourse({ ...course, image: e.target.value })} />
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published"> Published Courses ({showAllCourses ? courses.length : userCourses.length})</h2>
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

                      {showAllCourses && userCourses.some(uc => uc._id === course._id) && (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            handleUnenroll(course._id);
                          }}
                          className="btn btn-danger float-end me-2">
                          Unenroll
                        </button>
                      )}
                      {showAllCourses && !userCourses.some(uc => uc._id === course._id) && (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            handleEnroll(course._id);
                          }}
                          className="btn btn-green me-2 float-end">
                          Enroll
                        </button>
                      )}
                      {!showAllCourses && isFaculty && (
                        <>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleDelete(course._id);
                              fetchCourses();
                            }}
                            className="btn btn-danger float-end me-2"
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
  )
    ;
}