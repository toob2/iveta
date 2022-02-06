import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { setActive } from "./actions/setActive";
import { setInactive } from "./actions/setInactive";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import ScrollUpButton from "react-scroll-up-button";

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
                  <Route path="/o-nas" component={About}>
                     <About />
                  </Route>
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
