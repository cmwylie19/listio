import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const App = (db, handleToggleTodo, handleDeleteTodo, handleAddTodo) => {
  const [todos, setTodos] = useState([]);

  /*istanbul ignore next*/
  useEffect(() => {
    return props.db
      .table("todos")
      .toArray()
      .then(todos => {
        setTodos(todos);
      });
  });

  return (
    <>
      <AddTodo handleAddTodo={title => handleAddTodo(title, todos, setTodos)} />
      <TodoList
        todos={todos}
        handleToggleTodo={(id, done) =>
          handleToggleTodo(id, done, todos, setTodos)
        }
        handleDeleteTodo={id => handleDeleteTodo(id, todos, setTodos)}
      />
    </>
  );
};
export default App;
