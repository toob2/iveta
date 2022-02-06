import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import Form from "../Form/Form";
import ContactCard from "../ContactCard/ContactCard";
import "./Contact.scss";

const Contact = (props) => {
   useEffect(() => {
      props.dispatch({ type: 4 });
   }, []);
   return (
      <div className="contact top-padder">
         <div className="contact-details">
            <ContactCard />
         </div>
         <div>
            <Form />
         </div>
      </div>
   );
};

//export default contact;
export default connect()(Contact);
