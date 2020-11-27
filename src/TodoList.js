import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import TextField from "@material-ui/core/TextField";
import Todo from "./Todo";

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
    textAlign: "center"
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing(2)
  },
  subheader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: "auto",
    bottom: 0
  },
  toolbar: {
    display: "flex",
    flex: 1,
    width: "100%vw"
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
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

// export default TodoList;
