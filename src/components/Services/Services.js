import React from "react";
import "./Services.scss";
import Header from "../Header/Header";
//import ScrollReveal from "";

// Icons
import { VscLaw } from "react-icons/vsc";
import { MdOutlineFamilyRestroom, MdOutlineBusinessCenter } from "react-icons/md";
import { GiChart } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";

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
               <ul className="portfolio__item__list">
                  <li>
                     <div className="portfolio__item__header-sm">Nemovitosti</div>
                     <ul className="portfolio__item__list-sm">
                        <li className="portfolio__item__list-item">
                           <div>
                              <FaChevronRight />
                           </div>
                           <p>Kupní, darovací a směnné smlouvy</p>
                        </li>
                        <li className="portfolio__item__list-item">
                           <div>
                              <FaChevronRight />
                           </div>
                           <p>Vklad práva do katastru nemovitostí</p>
                        </li>
                        <li className="portfolio__item__list-item">
                           <div>
                              <FaChevronRight />
                           </div>
                           <p>Zástavní právo</p>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <div className="portfolio__item__header-sm">Smluvní agenda</div>
                     <ul className="portfolio__item__list-sm">
                        <li className="portfolio__item__list-item">
                           <div>
                              <FaChevronRight />
                           </div>
                           <p>Sepsání a revize smluv</p>
                        </li>
                        <li className="portfolio__item__list-item">
                           <div>
                              <FaChevronRight />
                           </div>
                           <p>
                              Nastavení a zajištění obchodních transakcí dle individuálních potřeb
                              klienta
                           </p>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <div className="portfolio__item__header-sm">Pohledávky</div>
                     <ul className="portfolio__item__list-sm">
                        <li className="portfolio__item__list-item">
                           <div>
                              <FaChevronRight />
                           </div>
                           <p>
                              Pomůžeme Vám s ochranou Vašich práv, a to nejen mimosoudně,
                              <br /> ale i v rámci soudního či exekučního řízení.
                           </p>
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>

            {/* Service 2 */}
            <div className="portfolio__item">
               <div className="portfolio__item__icon">
                  <MdOutlineFamilyRestroom />
               </div>
               <div className="portfolio__item__header">Rodinné právo</div>
               <hr className="portfolio__item__hr-sm" />
               <div>
                  <ul className="portfolio__item__list">
                     <li>
                        <div className="portfolio__item__header-sm">Rozvody</div>
                        <ul className="portfolio__item__list-sm">
                           <li className="portfolio__item__list-item">
                              <div>
                                 <FaChevronRight />
                              </div>
                              <p>Rozvodové řízení</p>
                           </li>
                           <li className="portfolio__item__list-item">
                              <div>
                                 <FaChevronRight />
                              </div>
                              <p> Úprava péče o děti, výživného a styku s dětmi</p>
                           </li>
                           <li className="portfolio__item__list-item">
                              <div>
                                 <FaChevronRight />
                              </div>
                              <p>
                                 Vypořádání vzájemných vztahů týkajících se společného majetku a
                                 bydlení
                              </p>
                           </li>
                        </ul>
                     </li>
                     <li>
                        <div className="portfolio__item__header-sm">Péče o nezletilé</div>
                        <ul className="portfolio__item__list-sm">
                           <li className="portfolio__item__list-item">
                              <div>
                                 <FaChevronRight />
                              </div>
                              <p>
                                 Úprava výživného a při podávání návrhů na nahrazení souhlasu rodiče
                                 ve věcech týkajících se záležitostí, které jsou pro dítě významné.
                              </p>
                           </li>
                           <li className="portfolio__item__list-item">
                              <div>
                                 <FaChevronRight />
                              </div>
                              <p>
                                 Úprava poměrů mezi nesezdanými páry a rodiči, kteří žijí odděleně.
                              </p>
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
               <div>
                  <ul className="portfolio__item__list">
                     <li>
                        <div className="portfolio__item__header-sm">Zaměstnavatelé</div>
                        <ul className="portfolio__item__list-sm">
                           <li className="portfolio__item__list-item">
                              <div>
                                 <FaChevronRight />
                              </div>
                              <p>Výpovědi z pracovního poměru</p>
                           </li>
                           <li className="portfolio__item__list-item">
                              <div>
                                 <FaChevronRight />
                              </div>
                              <p>Agenturní zaměstnávání zaměstnanců</p>
                           </li>
                        </ul>
                     </li>
                     <li>
                        <div className="portfolio__item__header-sm">Zaměstnanci</div>
                        <ul className="portfolio__item__list-sm">
                           <li className="portfolio__item__list-item">
                              <div>
                                 <FaChevronRight />
                              </div>
                              <p>Výpovědi z pracovního poměru</p>
                           </li>
                           <li className="portfolio__item__list-item">
                              <div>
                                 <FaChevronRight />
                              </div>
                              <p>Uplatnění nároků při pracovním úrazu a nemoci z povolání</p>
                           </li>
                        </ul>
                     </li>
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
               <div>
                  <ul className="portfolio__item__list">
                     <li>
                        <div className="portfolio__item__header-sm">Společnosti</div>
                        <ul className="portfolio__item__list-sm">
                           <li className="portfolio__item__list-item">
                              <div>
                                 <FaChevronRight />
                              </div>
                              <p>
                                 Zakládání obchodních společností a jejich zápis do obchodního
                                 rejstříku
                              </p>
                           </li>
                           <li className="portfolio__item__list-item">
                              <div>
                                 <FaChevronRight />
                              </div>
                              <p>Změny ve vlastnické struktuře společností</p>
                           </li>
                           <li className="portfolio__item__list-item">
                              <div>
                                 <FaChevronRight />
                              </div>
                              <p>Příprava smluv mezi společností a jejími orgány</p>
                           </li>
                           <li className="portfolio__item__list-item">
                              <div>
                                 <FaChevronRight />
                              </div>
                              <p>Zajištění příslušných zápisů do obchodního rejstříku</p>
                           </li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
);

export default services;
