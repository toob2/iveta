import React from "react";
import Form from "../Form/Form";
import SimpleMap from "../Map/Map";
import "./Contact.scss";

const contact = () => (
  <div className="contact">
    <div className="contact-details">
      <Form />
    </div>
    <div className="contact-map">
      <SimpleMap />
    </div>
  </div>
);

export default contact;
