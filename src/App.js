import React, { Component } from "react";
import "./App.scss";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import ScrollUpButton from "react-scroll-up-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

// import AnchorLink from "react-anchor-link-smooth-scroll";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen,
      };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <Router>
          <Toolbar
            drawerClickHandler={this.drawerToggleClickHandler}
            show={this.state.sideDrawerOpen}
          />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            click={this.backdropClickHandler}
          />
          {backdrop}
          <Switch>
            <Route path="/contact" component={Contact}>
              <Contact />
            </Route>
            <Route path="/">
              <Landing />
              <Services />
            </Route>
          </Switch>
          <Footer />
        </Router>

        {/* <ScrollUpButton
          ContainerClassName="AnyClassForContainer"
          TransitionClassName="AnyClassForTransition"
          EasingType="easeInOutCubic"
          StopPosition={8}
          ShowAtPosition={200}
          AnimationDuration={600}
        >
          <FontAwesomeIcon icon={faChevronUp} size="2x" />
        </ScrollUpButton> */}
        <ScrollUpButton
          style={{ width: 40, height: 40 }}
          ToggledStyle={{ right: 10, bottom: 20 }}
          EasingType="easeInOutQuad"
          StopPosition={0}
          ShowAtPosition={300}
          AnimationDuration={500}
        />
      </div>
    );
  }
}

export default App;
