import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./Toolbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__logo">
        <a href="/">$YT</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link smooth to="/#">
              O MNĚ
            </Link>
          </li>
          <li>
            <Link smooth to="/#services">
              PRÁVNÍ SLUŽBY
            </Link>
          </li>
          <li>
            <Link to="/contact#">KONTAKT</Link>
          </li>
        </ul>
      </div>
      <div className="toolbar__toggle-button">
        <DrawerToggleButton
          click={props.drawerClickHandler}
          show={props.show}
        />
      </div>
    </nav>
  </header>
);

export default toolbar;
