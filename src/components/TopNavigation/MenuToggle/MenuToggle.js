import React from "react";
import "./MenuToggle.scss";

const MenuToggle = props => {
  return (
    <div className="navigation-mobile">
      <div className={`menu-button ${props.open ? 'active' : 'close'}`} onClick={props.onClick}>
        <span className="line top"></span>
        <span className="line middle"></span>
        <span className="line bottom"></span>
      </div>
    </div>
  );
};

export default MenuToggle;
