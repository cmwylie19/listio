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
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { blue, grey } from "@material-ui/core/colors";

export const Root = () => {
  const [prefersDarkMode, setPrefersDarkMode] = React.useState(true);
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          secondary: {
            main: blue[600]
            // main: grey[900],
          },
          primary: {
            main: grey[900]
            //  main: blue[600],
          }
        }
      }),
    [prefersDarkMode]
  );

  const changeState = React.useCallback(
    () => setPrefersDarkMode(prefersDarkMode => !prefersDarkMode),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App
        db={db}
        changeState={changeState}
        fetchTodosFromDB={fetchTodosFromDB}
        handleAddTodo={handleAddTodo}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </ThemeProvider>
  );
};

export const indexRender = () =>
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById("root")
  );

indexRender();
reportWebVitals();
