import { Navigate, Route, Routes, useLocation } from "react-router";
import CourseNavigation from "./Navigation.tsx";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor.tsx";
import PeopleTable from "./People/Table.tsx";
import { useParams } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import { useSelector } from "react-redux";
import { KambazState } from "../store.ts";
import ProtectedRoute from "../Account/ProtectedRoute.tsx";

export default function Courses() {
  const courses = useSelector((state: KambazState) => state.coursesReducer.courses);
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
              <Route path="/" element={<ProtectedRoute><Navigate to="Home" /></ProtectedRoute>} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="Assignments/Editor" element={<AssignmentEditor />} />
              <Route path="People" element={<PeopleTable />} />
            </Routes>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}
