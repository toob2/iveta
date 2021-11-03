import React from "react";
import "./ContactCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
   faPhone,
   faChevronRight,
   faMapMarkerAlt,
   faCircle,
} from "@fortawesome/free-solid-svg-icons";
import SimpleMap from "../Map/Map";

const ContactCard = (props) => (
   <div className="contact-card">
      <div className="contact-card__heading">
         <div className="contact-card__heading-box"></div>
         <p>Kontakt</p>
      </div>
      <hr className="contact-card__heading-hr" />

      <div className="contact-card__body-wrapper">
         <div className="contact-card__body-content">
            <div className="contact-card__body-content-header">
               <p>Pobočka advokátní kanceláře</p>
               <p> Praha 8</p>
            </div>
            <div className="contact-card__body-content__box"></div>
            <div className="contact-card__body-content-title">
               <div className="icon-wrapper">
                  <FontAwesomeIcon className="icon-wrapper-icon" icon={faCircle} />
                  <FontAwesomeIcon className="icon-wrapper-icon-top" icon={faMapMarkerAlt} />
               </div>
               Adresa pobočky:&nbsp; <span> Pobřežní 78, Praha 8 - Karlín</span>
            </div>
            <div className="contact-card__body-content-title">
               <div className="icon-wrapper">
                  <FontAwesomeIcon className="icon-wrapper-icon" icon={faCircle} />
                  <FontAwesomeIcon className="icon-wrapper-icon-top" icon={faPhone} />
               </div>
               Telefonní číslo:&nbsp;
               <a href="tel:+420608901616">+420 608 901 616</a>
            </div>
            <div className="contact-card__body-content-title">
               <div className="icon-wrapper">
                  <FontAwesomeIcon className="icon-wrapper-icon" icon={faCircle} />
                  <FontAwesomeIcon className="icon-wrapper-icon-top" icon={faEnvelope} />
               </div>
               Email:&nbsp;
               <a href="mailto:iveta@strmenova">iveta@strmenova.cz</a>
            </div>
         </div>

         <div className="contact-card__body-map-wrapper">
            <SimpleMap />
         </div>
      </div>
   </div>
);

export default ContactCard;
