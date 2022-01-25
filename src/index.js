import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");
// const rootElement = document.getElementById("root")
ReactDOM.render(<App />, document.getElementById("root"));
