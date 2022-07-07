import React from "react";
import ReactDOM from "react-dom";
import App from "./app/core/App";
import swDev from "./swDev";
import "./style.css";

window.isMobile = window.screen.width > 768 ? false : true;

window.onresize = () => {
  window.screen.width > 768
    ? (window.isMobile = false)
    : (window.isMobile = true);
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

swDev();
