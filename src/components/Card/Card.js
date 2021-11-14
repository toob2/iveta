import React from "react";
import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => (
   <div className="card">
      <img className="card__img" src={props.card.img} alt="props.card.name" />
      <div className="card__text__wrapper">
         <p className="card__title card__text">{props.card.name}</p>
         <p className="card__subtitle card__text">{props.card.subtitle}</p>
         <div className="card__item__wrapper card__text">
            <a className="card__link" href={"tel:" + props.card.phone}>
               <FontAwesomeIcon icon={faPhone} />
               &nbsp;
               {props.card.phone}
            </a>
         </div>
         <div className="card__item__wrapper card__text">
            <a className="card__link" href={"mailto:" + props.card.email}>
               <FontAwesomeIcon icon={faEnvelope} />
               &nbsp;
               {props.card.email}
            </a>
         </div>
      </div>
   </div>
);

export default Card;
