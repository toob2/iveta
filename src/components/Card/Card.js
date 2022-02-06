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
         <br />
         <div className="card__item__wrapper card__text">
            <FontAwesomeIcon icon={faPhone} />
            <a className="card__link" href={"tel:" + props.card.phone}>
               &nbsp;
               {props.card.phone}
            </a>
         </div>
         <div className="card__item__wrapper card__text">
            <FontAwesomeIcon icon={faEnvelope} />
            <a className="card__link" href={"mailto:" + props.card.email}>
               &nbsp;
               {props.card.email}
            </a>
         </div>
      </div>
   </div>
);

export default Card;
