import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./SideDrawer.scss";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <ul>
          <li>
            <Link smooth to="/#" onClick={props.click}>
              O MNĚ
            </Link>
          </li>
          <li>
            <Link smooth to="/#services" onClick={props.click}>
              PRÁVNÍ SLUŽBY
            </Link>
          </li>
          <li>
            <Link to="/contact#" onClick={props.click}>
              KONTAKT
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default sideDrawer;
