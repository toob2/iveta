import React from "react";
import "./Services.scss";
//import ScrollReveal from "";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGavel, faHome } from "@fortawesome/free-solid-svg-icons";

const services = () => (
   <div className="services" id="o-mne">
      <div className="services__container">
         <div className="services__about-box">
            <b>Jsem Mgr. Iveta Strmeňová.</b> Dělám moderní advokátní služby zaměřené na širokou
            veřejnost. Business není mojí prioritou, chci dosahovat cílů společně s klientem. Vždy
            se snažím dělat něco navíc a věci vylepšovat. Poskytuji právní služby soukromým klientům
            z celého světa.
         </div>
         <div className="portfolio--heading" id="pravni-sluzby">
            <div className="portfolio--heading__box"></div>
            <p>Naše služby</p>
         </div>
         <hr className="portfolio--heading__hr" />
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
