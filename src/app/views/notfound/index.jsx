import React from "react";
import "./style.css";

function NoMatch() {
  return (
    <div className="flex-center position-ref full-height">
      <div className="code">404 </div>

      <div className="message" style={{ padding: "10px" }}>
        Not Found{" "}
      </div>
    </div>
  );
}

export default NoMatch;
