import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./Toolbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -70;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__logo">
        <a href="/">$YT</a>
      </div>
      <div className="spacer" />
      <div className="toolbar__navigation-items">
        <ul>
          <li>
            <Link className="nav-underline" smooth to="/#">
              O MNĚ
            </Link>
          </li>
          <li>
            <Link
              className="nav-underline"
              smooth
              to="/#portfolio-hash"
              scroll={(el) => scrollWithOffset(el)}
            >
              PRÁVNÍ SLUŽBY
            </Link>
          </li>
          <li>
            <Link className="nav-underline" to="/contact#">
              KONTAKT
            </Link>
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
