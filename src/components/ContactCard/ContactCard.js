import React from "react";
import "./ContactCard.scss";
import Header from "../Header/Header";
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
      <Header name="Kontakt" />
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
               <p>
                  Adresa pobočky:&nbsp;
                  <a href="https://goo.gl/maps/KnbbKo2tqJuidwaq6">
                     <span>Pobřežní 78, Praha 8 - Karlín</span>
                  </a>
               </p>
            </div>
            <div className="contact-card__body-content-title">
               <div className="icon-wrapper">
                  <FontAwesomeIcon className="icon-wrapper-icon" icon={faCircle} />
                  <FontAwesomeIcon className="icon-wrapper-icon-top" icon={faPhone} />
               </div>
               <p>
                  Telefonní číslo:&nbsp;
                  <a href="tel:+420608901616">+420 608 901 616</a>
               </p>
            </div>
            <div className="contact-card__body-content-title">
               <div className="icon-wrapper">
                  <FontAwesomeIcon className="icon-wrapper-icon" icon={faCircle} />
                  <FontAwesomeIcon className="icon-wrapper-icon-top" icon={faEnvelope} />
               </div>
               <p>
                  Email:&nbsp;
                  <a href="mailto:iveta@strmenova">iveta@strmenova.cz</a>
               </p>
            </div>
         </div>

         <div className="contact-card__body-map-wrapper">
            <SimpleMap />
         </div>
      </div>
   </div>
);

export default ContactCard;
