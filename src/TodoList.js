import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Todo from "./Todo";

const useStyles = makeStyles(theme => ({
  list: {
    display: "flex",
    flexDirection: "column-reverse",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  }
}));

export default function TodoList({
  todos,
  handleToggleTodo,
  handleDeleteTodo
}) {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {todos.map(
        ({ id, done, title, person = "/static/images/avatar/1.jpg" }) => (
          <Todo
            person={person}
            id={id}
            done={done}
            title={title}
            handleToggleTodo={handleToggleTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        )
      )}
    </List>
  );
}
