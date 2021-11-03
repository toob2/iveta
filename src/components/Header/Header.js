import React from "react";
import "./Header.scss";

const Header = (props) => (
   <div className="header">
      <div className="header__text">
         <div className="header__text-box"></div>
         <p>{props.name}</p>
      </div>
      <hr className="header-hr" />
   </div>
);

export default Header;
