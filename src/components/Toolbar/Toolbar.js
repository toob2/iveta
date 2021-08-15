import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./Toolbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

/**
 * Scroll with an offset
 *
 * @param {Integer}  offset    offset in pixels
 */
const scrollWithOffset = (el, offset) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: yCoordinate + offset, behavior: "smooth" });
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
              ÚVOD
            </Link>
          </li>
          <li>
            <Link
              className="nav-underline"
              smooth
              to="/#o-mne"
              scroll={(el) => scrollWithOffset(el, -30)}
            >
              O MNĚ
            </Link>
          </li>
          <li>
            <Link
              className="nav-underline"
              smooth
              to="/#sluzby"
              scroll={(el) => scrollWithOffset(el, -70)}
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
