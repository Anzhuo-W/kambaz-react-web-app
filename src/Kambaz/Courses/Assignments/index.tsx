import AssignmentMenu from "./Menu.tsx";
import { BsGripVertical, BsPlusLg } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons.tsx";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdAssignment } from "react-icons/md";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { KambazState } from "../../store.ts";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer.ts";
import DeleteModal from "./DeleteModal.tsx";
import { useState } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = useSelector((state: KambazState) =>
    state.assignmentsReducer.assignments.filter(assignment => assignment.course === cid));
  const dispatch = useDispatch();
  const [selectedAssignment, setSelectedAssignment] = useState<string | null>(null);
  const handleShow = (assignmentId: string) => setSelectedAssignment(assignmentId);
  const handleClose = () => setSelectedAssignment(null);

  const formatDateTime = (isoString: string): string => {
    const date = new Date(isoString);

    const formattedDate = date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric"
    });

    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }).toLowerCase();

    return `${formattedDate} at ${formattedTime}`;
  };

  return (
    <div id="wd-assignments">
      <AssignmentMenu />
      <ul className="list-group rounded-0" id="wd-modules">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between text-start"
               style={{ width: "830px" }}>
            <div>
              <BsGripVertical className="fs-3" /> ASSIGNMENTS
            </div>
            <div>
              40% of total <BsPlusLg className="mb-1" /> <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          {assignments.length > 0 && (
            <ul className="wd-lessons list-group rounded-0" id="wd-assignment-list">
              {assignments.map((assignment) => (
                <>
                  <li key={assignment._id}
                      className="wd-lesson list-group-item p-3 ps-1 wd-assignment-link d-flex justify-content-between align-items-center">
                    <div>
                      <BsGripVertical className="me-2 fs-3" />
                      <MdAssignment className="me-2 fs-3" />
                    </div>
                    <Link
                      to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                      className=""
                    >
                      <div className="assignment-details">
                        <b>{assignment.title}</b>
                        <br />
                        {assignment.module} | <b>Not available until</b> {formatDateTime(assignment.available)} |
                        <br />
                        <b>Due</b> {formatDateTime(assignment.due)} | {assignment.points} points
                      </div>
                    </Link>
                    <div>
                      <AssignmentControlButtons />
                      <FaTrash
                        className="text-danger me-3 mb-1"
                        onClick={() => handleShow(assignment._id)}
                      />
                    </div>
                  </li>
                  {selectedAssignment === assignment._id && (
                    <DeleteModal
                      show={true}
                      handleClose={handleClose}
                      dialogTitle="Delete Assignment"
                      assignmentTitle={assignment.title}
                      assignmentId={assignment._id}
                      deleteAssignment={() => dispatch(deleteAssignment(assignment._id))}
                    />
                  )}
                </>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  )
    ;
}
