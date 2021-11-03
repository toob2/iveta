import React from "react";
import Form from "../Form/Form";
import ContactCard from "../ContactCard/ContactCard";
import "./Contact.scss";

const contact = () => (
   <div className="contact top-padder">
      <div className="contact-details">
         <ContactCard />
      </div>
      <div>
         <Form />
      </div>
   </div>
);

export default contact;
