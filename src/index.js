import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import db from "./db";
import { handleAddTodo, handleToggleTodo, handleDeleteTodo } from "./actions";

export const indexRender = () =>
  ReactDOM.render(
    <React.StrictMode>
      <App
        db={db}
        handleAddTodo={handleAddTodo}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
indexRender();
reportWebVitals();
