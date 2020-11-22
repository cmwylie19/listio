import React from "react";
import { PropTypes } from "prop-types";

import Todo from "./Todo";

const TodoList = ({ props, todos, handleToggleTodo, handleDeleteTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        {...props}
        key={todo.id}
        {...todo}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    ))}
  </ul>
);

export default TodoList;
