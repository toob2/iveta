import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import Form from "../Form/Form";
import ContactCard from "../ContactCard/ContactCard";
import "./Contact.scss";
import SimpleMap from "../Map/Map";

const Contact = (props) => {
   useEffect(() => {
      props.dispatch({ type: 4 });
   }, []);
   return (
      <div className="contact top-padder">
         <div className="contact__wrapper">
            <div className="contact__item">
               <ContactCard />
            </div>
            <div className="contact__item">
               <Form />
            </div>
         </div>
         <div className="map-wrapper">
            <SimpleMap />
         </div>
      </div>
   );
};

//export default contact;
export default connect()(Contact);
