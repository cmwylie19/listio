import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import db from "./db";
import {
  handleAddTodo,
  fetchTodosFromDB,
  handleToggleTodo,
  handleDeleteTodo
} from "./actions";

export const indexRender = () =>
  ReactDOM.render(
    <React.StrictMode>
      <App
        db={db}
        fetchTodosFromDB={fetchTodosFromDB}
        handleAddTodo={handleAddTodo}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
indexRender();
reportWebVitals();
