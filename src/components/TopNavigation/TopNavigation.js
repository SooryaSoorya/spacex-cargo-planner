import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./TopNavigation.scss";
import MenuItems from "./MenuItems/MenuItems";
import MenuToggle from "./MenuToggle/MenuToggle";
import Menu from "./Menu/Menu";
import Overlay from "./Overlay/Overlay";

const TopNavigation = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <React.Fragment>
      <Menu
        open={drawerOpen}
        onClick={closeDrawer}
        saveHandler={props.saveHandler}
        loadHandler={props.loadHandler}
      />
      <Overlay open={drawerOpen} onClick={closeDrawer} />
      <div className="navigation">
        <div className="brand">
          <Link to="/">spacex</Link>
        </div>
        <div className="spacex-input">
          <input
            id="search"
            type="text"
            placeholder="Search here.."
            onChange={props.searchHandler}
          />
        </div>
        <div className="spacer" />
        <MenuItems
          saveHandler={props.saveHandler}
          loadHandler={props.loadHandler}
        />
        <MenuToggle open={drawerOpen} onClick={openDrawer} />
      </div>
    </React.Fragment>
  );
};

export default TopNavigation;
