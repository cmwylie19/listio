import React, { useState, useEffect } from "react";
import db from "./db";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export const handleAddTodo = (title, todos, setTodos) => {
  const todo = {
    title,
    done: false
  };
  db.table("todos")
    .add(todo)
    .then(id => {
      const newList = [todos, Object.assign({}, todo, { id })];
      setTodos(newList);
    });
};

export const handleToggleTodo = (id, done, todos, setTodos) => {
  db.table("todos")
    .update(id, { done })
    .then(() => {
      const todoToUpdate = todos.find(todo => todo.id === id);
      const newList = [
        todos.filter(todo => todo.id !== id),
        Object.assign({}, todoToUpdate, { done })
      ];
      setTodos(newList);
    });
};

export const handleDeleteTodo = (id, todos, setTodos) => {
  db.table("todos")
    .delete(id)
    .then(() => {
      const newList = todos.filter(todo => todo.id !== id);
      setTodos(newList);
    });
};

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    return db
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
