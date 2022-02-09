import React from "react";
import "./Header.scss";

const Header = (props) => (
   <div className="header-sm">
      <div className="header-sm__text">
         <div className="header-sm__text-box"></div>
         <p>{props.name}</p>
      </div>
   </div>
);

export default Header;
