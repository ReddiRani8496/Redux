import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/TodoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div>Todos</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center space-x-3">
            <span>{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Todos;
