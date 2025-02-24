import { Navigate, Route, Routes, useLocation } from "react-router";
import CourseNavigation from "./Navigation.tsx";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor.tsx";
import PeopleTable from "./People/Table.tsx";
import { useParams } from "react-router-dom";
import { courses } from "../Database";
import { FaAlignJustify } from "react-icons/fa";
import Quizzes from "./Quizzes";
import QuizEditor from "./Quizzes/QuizEditor.tsx";

export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-3 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <table>
        <tbody>
        <tr>
          <td valign="top">
            <CourseNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="Quizzes" element={<Quizzes />} />
              <Route path="Quizzes/:qid" element={<QuizEditor />} />
              <Route path="People" element={<PeopleTable />} />
            </Routes>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}
