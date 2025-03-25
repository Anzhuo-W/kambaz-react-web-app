import { FormControl } from "react-bootstrap";
import { useState } from "react";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithArrays() {
  const API = `${REMOTE_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false
  });

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>

      {/* Existing code remains the same until the Update section */}

      <h3>Updating an Item in an Array</h3>

      {/* Existing title update form */}
      <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary float-end">
        Update Title
      </a>
      <FormControl defaultValue={todo.id} className="w-25 float-start me-2"
                   onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <FormControl defaultValue={todo.title} className="w-50 float-start"
                   onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
      <br /><br />

      {/* New: Update Description */}
      <h4>Update Description</h4>
      <a href={`${API}/${todo.id}/description/${todo.description}`} className="btn btn-primary float-end">
        Update Description
      </a>
      <FormControl defaultValue={todo.id} className="w-25 float-start me-2"
                   onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <FormControl defaultValue={todo.description} className="w-50 float-start"
                   onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
      <br /><br />

      {/* New: Update Completed Status */}
      <h4>Update Completion Status</h4>
      <a href={`${API}/${todo.id}/completed/${todo.completed}`} className="btn btn-primary float-end">
        Update Completion Status
      </a>
      <FormControl defaultValue={todo.id} className="w-25 float-start me-2"
                   onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <div className="form-check float-start ms-2">
        <input
          className="form-check-input"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
          id="todoCompleted"
        />
        <label className="form-check-label" htmlFor="todoCompleted">
          Completed
        </label>
      </div>
      <br /><br />
      <hr />
    </div>
  );
}