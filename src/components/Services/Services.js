import React from "react";
import "./Services.scss";
import Header from "../Header/Header";
//import ScrollReveal from "";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGavel, faHome } from "@fortawesome/free-solid-svg-icons";

const services = () => (
   <div className="services" id="pravni-sluzby">
      <div className="services__container">
         <Header name="Naše služby" />
         <div className="portfolio">
            {/* Service 1 */}
            <div className="portfolio__item">
               <div className="portfolio__item__icon">
                  <FontAwesomeIcon icon={faGavel} />
               </div>
               <div className="portfolio__item__header">Občanské právo</div>
               <hr className="portfolio__item__hr" />
               <div className="portfolio__item__text">
                  <ul className="portfolio__item__list">
                     <li>Zastupování v občanskoprávních sporech</li>
                     <li>Sepis kupních, darovacích či jiných smluv týkajících se nemovitostí</li>
                     <li>Sepis reklamací vad, odstoupení od smlouvy</li>
                     <li>Uplatnění nároků na náhradu škody – majetkové i nemajetkové újmy</li>
                  </ul>
               </div>
            </div>

            {/* Service 2 */}
            <div className="portfolio__item">
               <div className="portfolio__item__icon">
                  <FontAwesomeIcon icon={faBriefcase} />
               </div>
               <div className="portfolio__item__header">Pracovní právo</div>
               <hr className="portfolio__item__hr" />
               <div className="portfolio__item__text">
                  <ul className="portfolio__item__list">
                     <li>Výpovědi z pracovního poměru</li>
                     <li>Uplatnění nároků při pracovním úrazu a nemoci z povolání</li>
                     <li>Sepis reklamací vad, odstoupení od smlouvy</li>
                     <li>Agenturní zaměstnávání zaměstnanců</li>
                  </ul>
               </div>
            </div>

            {/* Service 3 */}
            <div className="portfolio__item">
               <div className="portfolio__item__icon">
                  <FontAwesomeIcon icon={faHome} />
               </div>
               <div className="portfolio__item__header">Rodinné právo</div>
               <hr className="portfolio__item__hr" />
               <div className="portfolio__item__text">
                  <ul className="portfolio__item__list">
                     <li>Zastupování v opatrovnických řízeních</li>
                     <li>Rozvody manželství</li>
                     <li>Vypořádání společného jmění manželů</li>
                     <li>Úprava výchovy dětí</li>
                  </ul>
               </div>
            </div>

            {/* Service 4 */}
            <div className="portfolio__item">
               <div className="portfolio__item__icon">
                  <FontAwesomeIcon icon={faHome} />
               </div>
               <div className="portfolio__item__header">Trestní právo</div>
               <hr className="portfolio__item__hr" />
               <div className="portfolio__item__text">
                  <ul className="portfolio__item__list">
                     <li>Zastupování v opatrovnických řízeních</li>
                     <li>Rozvody manželství</li>
                     <li>Vypořádání společného jmění manželů</li>
                     <li>Úprava výchovy dětí</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
);

export default services;
