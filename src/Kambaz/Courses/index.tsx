import {Navigate, Route, Routes} from "react-router";
import CourseNavigation from "./Navigation.tsx";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor.tsx";

export default function Courses() {
  return (
    <div>
      <h2>Course 1234</h2>
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
              <Route path="People" element={<h2>People</h2>} />
            </Routes>
          </td>
        </tr>
        </tbody>
      </table>

    </div>
  )
}