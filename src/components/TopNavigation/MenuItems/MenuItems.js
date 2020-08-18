import React from "react";
import "./MenuItems.scss";

const MenuItems = (props) => {
  return (
    <div className="navigation-items">
      <ul>
        <li>
          <div className="button" onClick={props.loadHandler}>Load</div>
        </li>
        <li>
        <div className="button" onClick={props.saveHandler}>Save</div>
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
