import React from "react";
import "./About.scss";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHandPointer } from "@fortawesome/free-regular-svg-icons";
import {
   faPhone,
   faChevronRight,
   faMapMarkerAlt,
   faCircle,
   faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import iveta from "../Images/iveta.jpg";

const about = (props) => (
   <div className="about top-padder">
      <Header name="O nás" />
      <div className="about__body-wrapper">
         <div className="about__body-content">
            <div className="about__body-content-header">
               <p>O advokátní kanceláři Strmeňová &amp; partners</p>
            </div>
            <div className="about__body-content__box"></div>
            <div className="about__body-content-title">
               <p>
                  <b>Jsme advokátní kancelář Strmeňová &amp; partners.</b> Děláme moderní advokátní
                  služby zaměřené na širokou veřejnost. Business není naší prioritou, chceme
                  dosahovat cílů společně s klientem. Vždy se snažíme dělat něco navíc a věci
                  vylepšovat. Poskytujeme právní služby soukromým klientům z celého světa.
               </p>
            </div>
            <div className="about__body-content-title">
               <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faAngleRight} />
               </div>
               <p>
                  Zajímavá fakta o nás:&nbsp;<span>Dopsat sem</span>
               </p>
            </div>
            <div className="about__body-content-title">
               <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faAngleRight} />
               </div>
               <p>
                  Zajímavá fakta o nás:&nbsp;<span>Dopsat sem</span>
               </p>
            </div>
            <div className="about__body-content-title">
               <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faAngleRight} />
               </div>
               <p>
                  Zajímavá fakta o nás:&nbsp;<span>Dopsat sem</span>
               </p>
            </div>
         </div>

         <div className="about__body-content-header top-padder-sm">
            <p>Náš team</p>
         </div>
         <div className="about__body-content__box"></div>

         <div className="about__body__our-team">
            <div className="about__body__our-team__img-wrapper">
               <img src={iveta} alt="Iveta Strmeňová" />
               <p className="about__body__our-team__img-text">Mgr. Iveta Strmeňová,</p>
               <p className="about__body__our-team__img-text">advokátka</p>
            </div>
            <div className="about__body__our-team__img-wrapper">
               <img src={iveta} alt="Iveta Strmeňová" />
               <p className="about__body__our-team__img-text">Mgr. Hana Fojtová,</p>
               <p className="about__body__our-team__img-text">advokátka</p>
            </div>
         </div>
      </div>
   </div>
);

export default about;