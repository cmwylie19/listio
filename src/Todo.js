import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles(theme => ({
  subheader: {
    backgroundColor: theme.palette.background.paper
  }
}));

export default function Todo({
  title,
  id,
  done,
  person,
  handleToggleTodo,
  handleDeleteTodo
}) {
  const classes = useStyles();

  return (
    <React.Fragment key={id}>
      {id % 2 == 0 && (
        <ListSubheader className={classes.subheader}>Today</ListSubheader>
      )}
      {id % 2 !== 0 && (
        <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>
      )}
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt="Profile Picture" src={person} />
        </ListItemAvatar>
        <ListItemText primary={"TSTTST"} secondary={title} />
        <input
          type="checkbox"
          checked={done}
          onChange={e => handleToggleTodo(id, !done)}
        />
        <Button variant="contained" color="primary" onClick={() => handleDeleteTodo(id)}>
          Delete
        </Button>
      </ListItem>
    </React.Fragment>
  );
}
// export default Todo;
