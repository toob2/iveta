import React from "react";
import "./DrawerToggleButton.scss";

const drawerToggleButton = (props) => {
  let burgerClasses = "toggler__burger";
  if (props.show) {
    burgerClasses = "toggler__burger toggler__burger-active";
  }

  return (
    <div className="toggler" onClick={props.click}>
      <div className="toggler__wrapper">
        <span className={burgerClasses}></span>
      </div>
    </div>
  );
};

export default drawerToggleButton;
