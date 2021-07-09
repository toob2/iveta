import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./SideDrawer.scss";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -70;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  const [aboutActive, setAboutState] = useState(false);
  const toggleAbout = () => {
    setAboutState(!aboutActive);
  };

  const [servicesActive, setServicesState] = useState(false);
  const toggleServices = () => {
    setServicesState(!servicesActive);
  };

  const [contactActive, setContactState] = useState(false);
  const toggleContact = () => {
    setContactState(!contactActive);
  };

  return (
    <nav className={drawerClasses}>
      <ul className="side-drawer__list">
        <hr />
        <Link
          className="side-drawer__item"
          smooth
          to="/#"
          onClick={props.click}
          onMouseEnter={toggleAbout}
          onMouseLeave={toggleAbout}
        >
          O MNĚ
          <FontAwesomeIcon
            className={`side-drawer__item-icon${aboutActive ? "-active" : ""}`}
            icon={faChevronRight}
            size="2x"
          />
        </Link>
        <hr />
        <Link
          className="side-drawer__item"
          smooth
          to="/#portfolio-hash"
          scroll={(el) => scrollWithOffset(el)}
          onClick={props.click}
          onMouseEnter={toggleServices}
          onMouseLeave={toggleServices}
        >
          PRÁVNÍ SLUŽBY
          <FontAwesomeIcon
            className={`side-drawer__item-icon${
              servicesActive ? "-active" : ""
            }`}
            icon={faChevronRight}
            size="2x"
          />
        </Link>
        <hr />
        <Link
          className="side-drawer__item"
          to="/contact#"
          onClick={props.click}
          onMouseEnter={toggleContact}
          onMouseLeave={toggleContact}
        >
          KONTAKT
          <FontAwesomeIcon
            className={`side-drawer__item-icon${
              contactActive ? "-active" : ""
            }`}
            icon={faChevronRight}
            size="2x"
          />
        </Link>
        <hr />
      </ul>
    </nav>
  );
};

export default SideDrawer;
