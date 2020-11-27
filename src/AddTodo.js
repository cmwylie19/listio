import React, { useState, useEffect,useRef } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import MoreIcon from "@material-ui/icons/MoreVert";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles(theme => ({
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

export const handleAdd = (handleAddTodo, clearText) => {
  handleAddTodo();
  clearText();
};
const AddTodo = ({ handleAddTodo, themeToggle }) => {
  const inputRef = useRef();
  const [value, setValue] = useState("");
  const classes = useStyles();

  useEffect(()=>{
    inputRef.current.focus()
  })
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          {themeToggle}
        </IconButton>
        <Fab color="secondary" aria-label="add" className={classes.fabButton}>
          <AddIcon
            id="addtodo-button"
            onClick={() =>
              handleAdd(
                () => handleAddTodo(value),
                () => setValue("")
              )
            }
          />
        </Fab>
        <TextField
          style={{ width: "90%", paddingBottom: "10px" }}
          color="inherit"
          id="input"
          label="Input Task"
          ref={inputRef}
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e=>e.keyCode==13? handleAdd(
            () => handleAddTodo(value),
            () => setValue("")
          ):""}
        />
        <div className={classes.grow} />
        <IconButton edge="end" color="inherit">
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AddTodo;
