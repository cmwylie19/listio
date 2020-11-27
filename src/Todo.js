import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { green, orange } from "@material-ui/core/colors";
import CancelIcon from "@material-ui/icons/Cancel";
const useStyles = makeStyles(theme => ({
  subheader: {
    backgroundColor: theme.palette.background.paper
  },
  completionStatusIcon: {
    color: theme.palette.success
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
      {/* {id % 2 == 0 && (
        <ListSubheader className={classes.subheader}>Today</ListSubheader>
      )}
      {id % 2 !== 0 && (
        <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>
      )} */}
      <ListItem button>
        <ListItemAvatar>
          {/* <Avatar alt="Profile Picture" src={CheckCircleIcon} /> */}
          {done && <CheckCircleIcon style={{ color: green[500] }} />}
          {!done && <CheckCircleIcon style={{ color: orange[500] }} />}
        </ListItemAvatar>
        <ListItemText primary={""} secondary={title} />

        <Switch
          checked={done}
          onChange={e => handleToggleTodo(id, !done)}
          id="checkbox"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <Button
          id="delete-button"
          variant="contained"
          color="primary"
          onClick={() => handleDeleteTodo(id)}
        >
          Delete
        </Button>
      </ListItem>
    </React.Fragment>
  );
}
// export default Todo;
