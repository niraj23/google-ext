import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// @ts-expect-error ts-migrate(6142) FIXME: Module './App' was resolved to '/Users/nirajpatel/... Remove this comment to see the full error message
import App from "./App";

ReactDOM.render(
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <React.StrictMode>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

