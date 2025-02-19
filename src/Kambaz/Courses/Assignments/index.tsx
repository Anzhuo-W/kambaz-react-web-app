import { ListGroup } from "react-bootstrap";
import AssignmentMenu from "./Menu.tsx";
import { BsGripVertical, BsPlusLg } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons.tsx";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdAssignment } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentMenu />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item id="wd-assignments-title" className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between text-start"
               style={{ width: "780px" }}>
            <div>
              <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
            </div>
            <div>
              40% of total <BsPlusLg /> <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ListGroup id="wd-assignment-list" className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <Link
                to="/Kambaz/Courses/:cid/Assignments/1"
                className="wd-assignment-link d-flex justify-content-between align-items-center"
              >
                <div>
                  <BsGripVertical className="me-2 fs-3" />
                  <MdAssignment className="me-2 fs-3" />
                </div>
                <div>
                  <b>A1</b>
                  <br />
                  Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <br />
                  <b>Due</b> May 13 at 11:59pm | 100pts
                </div>
                <div>
                  <AssignmentControlButtons />
                </div>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <Link
                to="/Kambaz/Courses/:cid/Assignments/2"
                className="wd-assignment-link d-flex justify-content-between align-items-center"
              >
                <div>
                  <BsGripVertical className="me-2 fs-3" />
                  <MdAssignment className="me-2 fs-3" />
                </div>
                <div>
                  <b>A2</b>
                  <br />
                  Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <br />
                  <b>Due</b> May 20 at 11:59pm | 100pts
                </div>
                <div>
                  <AssignmentControlButtons />
                </div>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <Link
                to="/Kambaz/Courses/:cid/Assignments/3"
                className="wd-assignment-link d-flex justify-content-between align-items-center"
              >
                <div>
                  <BsGripVertical className="me-2 fs-3" />
                  <MdAssignment className="me-2 fs-3" />
                </div>
                <div>
                  <b>A3</b>
                  <br />
                  Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <br />
                  <b>Due</b> May 27 at 11:59pm | 100pts
                </div>
                <div>
                  <AssignmentControlButtons />
                </div>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
