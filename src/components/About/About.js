import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { setActive } from "../../actions/setActive";
import { setInactive } from "../../actions/setInactive";
import "./About.scss";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";
import iveta from "../Images/iveta.jpg";

const About = (props) => {
   useEffect(() => {
      props.dispatch({ type: 3 });
   }, []);

   return (
      <div className="about top-padder">
         <Header name="O nás" />
         <div className="about__body-wrapper">
            <div className="about__body-wrapper__text">
               <div className="about__body-wrapper__text-header">
                  <p>O advokátní kanceláři Strmeňová &amp; partners</p>
               </div>
               <div className="about__body-wrapper__text__box"></div>
               <div className="about__body-wrapper__text-title">
                  <p>
                     <b>Jsme advokátní kancelář Strmeňová &amp; partners.</b> Děláme moderní
                     advokátní služby zaměřené na širokou veřejnost. Potřebujete-li se poradit ve
                     věci Vašeho rozvodu, převodu nemovitostí, zajištění dluhu, založení
                     společnosti, konání valné hromady nebo v jiných oblastech, neváhejte se na nás
                     obrátit. Rádi Vám navrhneme řešení na míru Vašim potřebám.
                  </p>
               </div>
               <div className="about__body-wrapper__text-title">
                  <div className="icon-wrapper">
                     <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                  <p>
                     Zajímavá fakta o nás:&nbsp;<span>Dopsat sem</span>
                  </p>
               </div>
               <div className="about__body-wrapper__text-title">
                  <div className="icon-wrapper">
                     <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                  <p>
                     Zajímavá fakta o nás:&nbsp;<span>Dopsat sem</span>
                  </p>
               </div>
               <div className="about__body-wrapper__text-title">
                  <div className="icon-wrapper">
                     <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                  <p>
                     Zajímavá fakta o nás:&nbsp;<span>Dopsat sem</span>
                  </p>
               </div>
            </div>

            <div className="about__body-wrapper__team">
               <div className="about__body-wrapper__team__box"></div>
               <div className="about__body__our-team__img-wrapper">
                  <Card
                     card={{
                        img: iveta,
                        name: "Mgr. Iveta Strmeňová",
                        subtitle: "advokátka",
                        phone: "+420 608 901 616",
                        email: "iveta@strmenova.cz",
                     }}
                  />
                  <br />
               </div>
            </div>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => ({
   ...state,
});

export default connect()(About);
