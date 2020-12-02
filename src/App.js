import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import DigitalClock from "./DigitalClock";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(1, 1, 0),
    textAlign: "center"
  },
  paper: {
    marginTop: 50
  },
  appBar: {
    backgroundColor: theme.palette.secondary.main,
    top: 0,
    bottom: "auto",
    height: "59px"
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

export default function App({
  db,
  fetchTodosFromDB,
  handleToggleTodo,
  handleDeleteTodo,
  handleAddTodo,
  changeState
}) {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);
  const [clock, setClock] = useState(false);

  /*istanbul ignore next*/
  useEffect(() => {
    return fetchTodosFromDB(db).then(storedTodos => setTodos(storedTodos));
  }, [todos]);

  /*istanbul ignore next*/
  return (
    <>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <AppBar
          className={classes.appBar}
          onMouseOut={() => setTimeout(() => setClock(false), 300)}
          onMouseOver={() => setTimeout(() => setClock(true), 300)}
        >
          <Typography className={classes.text} variant="h5" gutterBottom>
            {!clock && (
              <img src="logo64.png" height="45px" style={{ margin: "0px" }} />
            )}
            {clock && (
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {" "}
                <DigitalClock />
              </div>
            )}
          </Typography>
        </AppBar>

        <TodoList
          todos={todos}
          handleToggleTodo={(id, done) =>
            handleToggleTodo(id, done, todos, setTodos)
          }
          handleDeleteTodo={id => handleDeleteTodo(id, todos, setTodos)}
        />
      </Paper>
      <AddTodo
        themeToggle={<Switch onChange={changeState} />}
        handleAddTodo={title => handleAddTodo(title, todos, setTodos)}
      />
    </>
  );
}
