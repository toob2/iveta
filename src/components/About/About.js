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
      props.setActive();
      console.log("INFO: ABOUT mounted " + JSON.stringify(props));
      return () => {
         props.setInactive();
         console.log("INFO: ABOUT unmounted " + JSON.stringify(props));
      };
   }, []);

   return (
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
                     <b>Jsme advokátní kancelář Strmeňová &amp; partners.</b> Děláme moderní
                     advokátní služby zaměřené na širokou veřejnost. Business není naší prioritou,
                     chceme dosahovat cílů společně s klientem. Vždy se snažíme dělat něco navíc a
                     věci vylepšovat. Poskytujeme právní služby soukromým klientům z celého světa.
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
                  <Card
                     card={{
                        img: iveta,
                        name: "Mgr. Iveta Strmeňová",
                        subtitle: "advokátka",
                        phone: "+420 608 901 616",
                        email: "iveta@strmenova.cz",
                     }}
                  />
               </div>
               <div className="about__body__our-team__img-wrapper">
                  <Card
                     card={{
                        img: iveta,
                        name: "Mgr. Hana Fojtová",
                        subtitle: "advokátka",
                        phone: "+420 608 901 616",
                        email: "iveta@strmenova.cz",
                     }}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => ({
   ...state,
});

const mapDispatchToProps = (dispatch) => ({
   setActive: () => dispatch(setActive),
   setInactive: () => dispatch(setInactive),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
