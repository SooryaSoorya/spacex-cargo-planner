import React from "react";

import MenuItems from "../MenuItems/MenuItems";
import MenuToggle from "../MenuToggle/MenuToggle";
import "./Menu.scss";

const Menu = (props) => {
  return (
    <div>
      <div className={`menu ${props.open && "active"}`} id="drag">
        <MenuToggle open={props.open} onClick={props.onClick} />
        <MenuItems
          saveHandler={props.saveHandler}
          loadHandler={props.loadHandler}
        />
      </div>
    </div>
  );
};

export default Menu;
