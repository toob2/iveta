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
               <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler} />
               {backdrop}
               <Switch>
                  <Route path="/kontakt" component={Contact}>
                     <Contact />
                  </Route>
                  <Route path="/">
                     <Landing />
                     <Services />
                  </Route>
               </Switch>
               <Footer />
            </Router>

            <ScrollUpButton
               style={{ width: 35, height: 35 }}
               ToggledStyle={{ right: 10, bottom: 20 }}
               EasingType="easeInSine"
               //  StopPosition={}
               ShowAtPosition={300}
               AnimationDuration={500}
            />
         </div>
      );
   }
}

export default App;
