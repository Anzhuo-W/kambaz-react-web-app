import AssignmentMenu from "./Menu.tsx";
import { BsGripVertical, BsPlusLg } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons.tsx";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdAssignment } from "react-icons/md";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter(assignment => assignment.course === cid);

  return (
    <div id="wd-assignments">
      <AssignmentMenu />
      <ul className="list-group rounded-0" id="wd-modules">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between text-start"
               style={{ width: "780px" }}>
            <div>
              <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
            </div>
            <div>
              40% of total <BsPlusLg /> <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          {assignments.length > 0 && (
            <ul className="wd-lessons list-group rounded-0" id="wd-assignment-list">
              {assignments.map((assignment) => (
                <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1">
                  <Link
                    to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <BsGripVertical className="me-2 fs-3" />
                      <MdAssignment className="me-2 fs-3" />
                    </div>
                    <div className="assignment-details">
                      <b>{assignment.title}</b>
                      <br />
                      {assignment.module} | <b>Not available until</b> {assignment.available} |
                      <br />
                      <b>Due</b> {assignment.due} | {assignment.points}
                    </div>
                    <div>
                      <AssignmentControlButtons />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
