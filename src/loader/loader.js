import React from "react";
import "./loader.css";

export default () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="cssload-box-loading"></div>
    </div>
  );
};
