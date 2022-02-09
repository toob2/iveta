import React from "react";
import "./Services.scss";
import Header from "../Header/Header";
//import ScrollReveal from "";

// Icons
import { VscLaw } from "react-icons/vsc";
import { MdOutlineFamilyRestroom, MdOutlineBusinessCenter } from "react-icons/md";
import { GiChart } from "react-icons/gi";

const services = () => (
   <div className="services" id="pravni-sluzby">
      <div className="services__container">
         <Header name="Naše služby" />
         <hr className="portfolio__item__hr" />

         <div className="portfolio">
            {/* Service 1 */}
            <div className="portfolio__item">
               <div className="portfolio__item__icon">
                  <VscLaw />
               </div>
               <div className="portfolio__item__header">Občanské právo</div>
               <hr className="portfolio__item__hr-sm" />
               <div className="portfolio__item__text">
                  <ul className="portfolio__item__list">
                     <li>
                        <p className="portfolio__item__header-sm">Nemovitosti</p>
                        <ul className="portfolio__item__list-sm">
                           <li>Kupní, darovací a směnné smlouvy</li>
                           <li>Vklad práva do katastru nemovitostí</li>
                           <li>Zástavní právo</li>
                        </ul>
                     </li>
                     <li>
                        <p className="portfolio__item__header-sm">Smluvní agenda</p>
                        <ul className="portfolio__item__list-sm">
                           <li>Sepsání a revize smluv</li>
                           <li>
                              Nastavení a zajištění obchodních transakcí dle individuálních potřeb
                              klienta
                           </li>
                        </ul>
                     </li>
                     <li>
                        <p className="portfolio__item__header-sm">Pohledávky</p>
                        <p>
                           Pomůžeme Vám s ochranou Vašich práv, a to nejen mimosoudně,
                           <br /> ale i v rámci soudního či exekučního řízení.
                        </p>
                     </li>
                  </ul>
               </div>
            </div>

            {/* Service 2 */}
            <div className="portfolio__item">
               <div className="portfolio__item__icon">
                  <MdOutlineFamilyRestroom />
               </div>
               <div className="portfolio__item__header">Rodinné právo</div>
               <hr className="portfolio__item__hr-sm" />
               <div className="portfolio__item__text">
                  <ul className="portfolio__item__list">
                     <li>
                        <p className="portfolio__item__header-sm">Rozvody</p>
                        <ul className="portfolio__item__list-sm">
                           <li>Rozvodové řízení</li>
                           <li>Úprava péče o děti, výživného a styku s dětmi</li>
                           <li>
                              Vypořádání vzájemných vztahů týkajících se společného majetku a
                              bydlení
                           </li>
                        </ul>
                     </li>
                     <li>
                        <p className="portfolio__item__header-sm">Péče o nezletilé</p>
                        <ul className="portfolio__item__list-sm">
                           <li>
                              Úprava výživného a při podávání návrhů na nahrazení souhlasu rodiče
                              <br />
                              ve věcech týkajících se záležitostí, které jsou pro dítě významné.
                           </li>
                           <li>
                              Úprava poměrů mezi nesezdanými páry a rodiči, kteří žijí odděleně.
                           </li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </div>

            {/* Service 3 */}
            <div className="portfolio__item">
               <div className="portfolio__item__icon">
                  <MdOutlineBusinessCenter />
               </div>
               <div className="portfolio__item__header">Pracovní právo</div>
               <hr className="portfolio__item__hr-sm" />
               <div className="portfolio__item__text">
                  <ul className="portfolio__item__list">
                     <li>Výpovědi z pracovního poměru</li>
                     <li>Uplatnění nároků při pracovním úrazu a nemoci z povolání</li>
                     <li>Sepis reklamací vad, odstoupení od smlouvy</li>
                     <li>Agenturní zaměstnávání zaměstnanců</li>
                  </ul>
               </div>
            </div>

            {/* Service 4 */}
            <div className="portfolio__item">
               <div className="portfolio__item__icon">
                  <GiChart />
               </div>
               <div className="portfolio__item__header">Obchodní právo</div>
               <hr className="portfolio__item__hr-sm" />
               <div className="portfolio__item__text">
                  <ul className="portfolio__item__list">
                     <li>
                        <p>
                           Právní služby poskytujeme i při zakládání obchodních společností a jejich
                           zápisu do obchodního rejstříku. Pomůžeme Vám také s realizací změn
                           společností, konáním valných hromad, změnami ve vlastnické struktuře
                           společností, přípravou smluv mezi společností a jejími orgány a
                           zajištěním příslušných zápisů do obchodního rejstříku.
                        </p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
);

export default services;
