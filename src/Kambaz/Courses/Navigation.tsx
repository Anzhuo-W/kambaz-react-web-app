import { Link } from "react-router-dom";
import { useState } from "react";

export default function CourseNavigation() {
  const [activeId, setActiveId] = useState("wd-course-home-link"); // Default active

  const handleClick = (event) => {
    setActiveId(event.currentTarget.id);
  };

  const getButtonClass = (id) =>
    activeId === id ? "list-group-item active border border-0" : "list-group-item text-danger border border-0";

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to="/Kambaz/Courses/:cid/Home"
        id="wd-course-home-link"
        className={getButtonClass("wd-course-home-link")}
        onClick={handleClick}
      >
        Home
      </Link>
      <Link
        to="/Kambaz/Courses/:cid/Modules"
        id="wd-course-modules-link"
        className={getButtonClass("wd-course-modules-link")}
        onClick={handleClick}
      >
        Modules
      </Link>
      <Link
        to="/Kambaz/Courses/:cid/Piazza"
        id="wd-course-piazza-link"
        className={getButtonClass("wd-course-piazza-link")}
        onClick={handleClick}
      >
        Piazza
      </Link>
      <Link
        to="/Kambaz/Courses/:cid/Zoom"
        id="wd-course-zoom-link"
        className={getButtonClass("wd-course-zoom-link")}
        onClick={handleClick}
      >
        Zoom
      </Link>
      <Link
        to="/Kambaz/Courses/:cid/Assignments"
        id="wd-course-assignments-link"
        className={getButtonClass("wd-course-assignments-link")}
        onClick={handleClick}
      >
        Assignments
      </Link>
      <Link
        to="/Kambaz/Courses/:cid/Quizzes"
        id="wd-course-quizzes-link"
        className={getButtonClass("wd-course-quizzes-link")}
        onClick={handleClick}
      >
        Quizzes
      </Link>
      <Link
        to="/Kambaz/Courses/:cid/People"
        id="wd-course-people-link"
        className={getButtonClass("wd-course-people-link")}
        onClick={handleClick}
      >
        People
      </Link>
    </div>
  );
};