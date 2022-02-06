import React, { useState } from "react";
import { connect } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";
import "./SideDrawer.scss";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

/**
 * Scroll with an offset
 *
 * @param {Integer}  offset    offset in pixels
 */
const scrollWithOffset = (el, offset) => {
   const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
   window.scrollTo({ top: yCoordinate + offset, behavior: "smooth" });
};

const SideDrawer = (props) => {
   let drawerClasses = "side-drawer";
   if (props.show) {
      drawerClasses = "side-drawer open";
   }

   const [introActive, setIntroState] = useState(false);
   const toggleIntro = () => {
      setIntroState(!introActive);
   };

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

   const clickLink = (props, type) => {
      props.click();
      props.dispatch({ type: type });
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
               // onClick={clickLink(props, 1)}
               onMouseEnter={toggleIntro}
               onMouseLeave={toggleIntro}
            >
               ÚVOD
               <FontAwesomeIcon
                  className={`side-drawer__item-icon${introActive ? "-active" : ""}`}
                  icon={faChevronRight}
                  size="2x"
               />
            </Link>
            <hr />
            <Link
               className="side-drawer__item"
               smooth
               to="/#pravni-sluzby"
               scroll={(el) => scrollWithOffset(el, -10)}
               onClick={props.click}
               onMouseEnter={toggleServices}
               onMouseLeave={toggleServices}
            >
               PRÁVNÍ SLUŽBY
               <FontAwesomeIcon
                  className={`side-drawer__item-icon${servicesActive ? "-active" : ""}`}
                  icon={faChevronRight}
                  size="2x"
               />
            </Link>
            <hr />
            <Link
               className="side-drawer__item"
               smooth
               to="/o-nas#"
               // scroll={(el) => scrollWithOffset(el, -10)}
               onClick={props.click}
               onMouseEnter={toggleAbout}
               onMouseLeave={toggleAbout}
            >
               O NÁS
               <FontAwesomeIcon
                  className={`side-drawer__item-icon${aboutActive ? "-active" : ""}`}
                  icon={faChevronRight}
                  size="2x"
               />
            </Link>
            <hr />
            <Link
               className="side-drawer__item"
               to="/kontakt#"
               onClick={props.click}
               onMouseEnter={toggleContact}
               onMouseLeave={toggleContact}
            >
               KONTAKT
               <FontAwesomeIcon
                  className={`side-drawer__item-icon${contactActive ? "-active" : ""}`}
                  icon={faChevronRight}
                  size="2x"
               />
            </Link>
            <hr />
         </ul>
      </nav>
   );
};

const mapStateToProps = (state) => ({
   ...state,
});
export default connect(mapStateToProps)(SideDrawer);
