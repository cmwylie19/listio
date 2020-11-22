import React from "react";

const Todo = ({ title, id, done, handleToggleTodo, handleDeleteTodo }) => (
  <li>
    <input
      type="checkbox"
      checked={done}
      onChange={e => handleToggleTodo(id, !done)}
    />
    <span>{title}</span>
    <button type="button" onClick={() => handleDeleteTodo(id)}>
      Delete
    </button>
  </li>
);

export default Todo;
