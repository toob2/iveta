import React from "react";
import Form from "../Form/Form";
import ContactCard from "../ContactCard/ContactCard";
import SimpleMap from "../Map/Map";
import "./Contact.scss";

const contact = () => (
   <div className="contact top-padder">
      <div className="contact-details">
         <ContactCard />
         <Form />
      </div>
      <div className="contact-map top-padder">
         <SimpleMap />
      </div>
   </div>
);

export default contact;
