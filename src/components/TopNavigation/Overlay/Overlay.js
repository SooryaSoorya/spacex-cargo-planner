import React from "react";
import "./Overlay.scss";

const Overlay = (props) => {
  return (
    <div
      className={`overlay ${props.open ? "active" : ""}`}
      onClick={props.onClick}
    />
  );
};

export default Overlay;
