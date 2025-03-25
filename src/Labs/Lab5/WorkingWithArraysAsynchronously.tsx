import { useState, useEffect } from "react";
import * as client from "./client";
import { FormControl, ListGroup } from "react-bootstrap";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaPencil } from "react-icons/fa6";

export default function WorkingWithArraysAsynchronously() {
  type Todo = {
    editing: boolean;
    id: number,
    title: string,
    description: string,
    due: string,
    completed: boolean,
    score: number
  };
  const [todos, setTodos] = useState<Todo[]>([]);
  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };
  const removeTodo = async (todo: Todo) => {
    const updatedTodos = await client.removeTodo(todo);
    setTodos(updatedTodos);
  };
  const createTodo = async () => {
    const todos = await client.createTodo();
    setTodos(todos);
  };
  const postTodo = async () => {
    const newTodo = await client.postTodo({
      editing: false,
      title: "New Posted Todo",
      completed: false,
      id: 0,
      description: "",
      due: "",
      score: 0
    });
    setTodos([...todos, newTodo]);
  };
  const editTodo = (todo: Todo) => {
    const updatedTodos = todos.map(
      (t) => t.id === todo.id ? { ...todo, editing: true } : t);
    setTodos(updatedTodos);
  };

  const [errorMessage, setErrorMessage] = useState("");
  const updateTodo = async (todo: Todo) => {
    try {
      await client.updateTodo(todo);
      setErrorMessage("");
    } catch (error) {
      let message: string;

      if (error instanceof Error) {
        message = error.message;
      } else if (typeof error === "string") {
        message = error;
      } else {
        message = "An unknown error occurred";
      }

      setErrorMessage(message);
    }
  };
  const deleteTodo = async (todo: Todo) => {
    try {
      await client.deleteTodo(todo);
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
    } catch (error) {
      let message: string;

      if (error instanceof Error) {
        message = error.message;
      } else if (typeof error === "string") {
        message = error;
      } else {
        message = "An unknown error occurred";
      }

      setErrorMessage(message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (<div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">{errorMessage}</div>)}
      <h4>Todos</h4>
      <FaPlusCircle onClick={createTodo} className="text-success float-end fs-3"
                    id="wd-create-todo" />
      <FaPlusCircle onClick={postTodo} className="text-primary float-end fs-3 me-3" id="wd-post-todo" />
      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item key={todo.id}>

            <input type="checkbox" defaultChecked={todo.completed} className="form-check-input me-2 float-start"
                   onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })} />

            <FaTrash onClick={() => removeTodo(todo)}
                     className="text-danger float-end mt-1" id="wd-remove-todo" />
            <TiDelete onClick={() => deleteTodo(todo)} className="text-danger float-end me-2 fs-3"
                      id="wd-delete-todo" />
            <FaPencil onClick={() => editTodo(todo)} className="text-primary float-end me-2 mt-1" />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {!todo.editing ? (todo.title) : (
                <FormControl className="w-50 float-start" defaultValue={todo.title}
                             onKeyDown={(e) => {
                               if (e.key === "Enter") {
                                 updateTodo({ ...todo, editing: false });
                               }
                             }}
                             onChange={(e) =>
                               updateTodo({ ...todo, title: e.target.value })
                             }
                />
              )}
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
