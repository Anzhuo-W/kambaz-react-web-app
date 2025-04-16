import { FormControl } from "react-bootstrap";
import { useState } from "react";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0
  });

  const [module, setModule] = useState({
    id: "M101",
    name: "Web Development Fundamentals",
    description: "Introduction to web development concepts",
    course: "CS5610"
  });

  const [newScore, setNewScore] = useState(assignment.score);
  const [isCompleted, setIsCompleted] = useState(assignment.completed);

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div>
      <h3 id="wd-working-with-objects">Working With Objects</h3>

      {/* Module Section */}
      <h4>Module</h4>
      <a id="wd-retrieve-module" className="btn btn-primary mb-3"
         href={MODULE_API_URL}>
        Get Module
      </a>
      <br />
      <a id="wd-retrieve-module-name" className="btn btn-primary mb-3"
         href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>

      <h5>Update Module Name</h5>
      <FormControl className="w-75 mb-2" id="wd-module-name"
                   value={module.name} onChange={(e) =>
        setModule({ ...module, name: e.target.value })} />
      <a id="wd-update-module-name" className="btn btn-primary mb-3"
         href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Name
      </a>

      <h5>Update Module Description</h5>
      <FormControl className="w-75 mb-2" id="wd-module-description"
                   value={module.description} onChange={(e) =>
        setModule({ ...module, description: e.target.value })} />
      <a id="wd-update-module-description" className="btn btn-primary mb-3"
         href={`${MODULE_API_URL}/description/${module.description}`}>
        Update Description
      </a>
      <hr />

      {/* Assignment Section */}
      <h4>Assignment</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary mb-3"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>
      <br />
      <a id="wd-retrieve-assignment-title" className="btn btn-primary mb-3"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a>

      <h5>Update Assignment Title</h5>
      <FormControl className="w-75 mb-2" id="wd-assignment-title"
                   value={assignment.title} onChange={(e) =>
        setAssignment({ ...assignment, title: e.target.value })} />
      <a id="wd-update-assignment-title" className="btn btn-primary mb-3"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>

      <h5>Update Assignment Score</h5>
      <FormControl className="w-75 mb-2" id="wd-assignment-score"
                   type="number" value={newScore} onChange={(e) =>
        setNewScore(Number(e.target.value))} />
      <a id="wd-update-assignment-score" className="btn btn-primary mb-3"
         href={`${ASSIGNMENT_API_URL}/score/${newScore}`}>
        Update Score
      </a>

      <h5>Update Assignment Completion Status</h5>
      <div className="form-check mb-2">
        <input className="form-check-input" id="wd-assignment-completed"
               type="checkbox" checked={isCompleted} onChange={(e) =>
          setIsCompleted(e.target.checked)} />
        <label className="form-check-label" htmlFor="wd-assignment-completed">
          Completed
        </label>
      </div>
      <a id="wd-update-assignment-completed" className="btn btn-primary mb-3"
         href={`${ASSIGNMENT_API_URL}/completed/${isCompleted}`}>
        Update Completion Status
      </a>
    </div>
  );
}