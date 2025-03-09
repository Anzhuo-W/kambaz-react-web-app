import { ListGroup } from "react-bootstrap";
import TodoForm from "./TodoForm.tsx";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { StoreState } from "../../../store";

export default function TodoList() {
  const { todos } = useSelector((state: StoreState) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo: { id: string; title: string }) => (
          <TodoItem todo={todo} />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
