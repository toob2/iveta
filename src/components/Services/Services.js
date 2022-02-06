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
                     <li>
                        <p className="portfolio__item__header-sm">Právo nemovitostí</p>
                        <hr className="portfolio__item__hr-sm" />

                        <p>
                           Sepíšeme pro Vás kupní, darovací nebo směnnou smlouvu. Poradíme Vám i ve
                           věci nájmu, zřízení a výmazu zástavních práv a služebností nebo ohledně
                           zajištění Vaší transakce. Zajistíme rovněž vklad práva do katastru
                           nemovitostí.
                        </p>
                     </li>
                     <li>
                        <p className="portfolio__item__header-sm">Smluvní agenda</p>
                        <hr className="portfolio__item__hr-sm" />

                        <p>
                           Právní poradenství poskytujeme i v oblasti smluvního práva, zejména ve
                           věci sepisu a revize smluv a dále nastavení a zajištění obchodních
                           transakcí dle individuálních potřeb klienta.
                        </p>
                     </li>
                     <li>
                        <p className="portfolio__item__header-sm">
                           Sporná agenda a vymáhání pohledávek
                        </p>
                        <hr className="portfolio__item__hr-sm" />

                        <p>
                           Pomůžeme Vám s ochranou Vašich práv, a to nejen mimosoudně, ale i v rámci
                           soudního či exekučního řízení.
                        </p>
                     </li>
                  </ul>
               </div>
            </div>

            {/* Service 2 */}
            <div className="portfolio__item">
               <div className="portfolio__item__icon">
                  <FontAwesomeIcon icon={faHome} />
               </div>
               <div className="portfolio__item__header">Rodinné právo</div>
               <hr className="portfolio__item__hr" />
               <div className="portfolio__item__text">
                  <ul className="portfolio__item__list">
                     <li>
                        <p className="portfolio__item__header-sm">Rozvody</p>
                        <hr className="portfolio__item__hr-sm" />

                        <p>
                           Provedeme vás celým rozvodovým řízením od podání žaloby až po konečné
                           rozhodnutí ve věci včetně úpravy péče o děti, výživného, styku s dětmi a
                           vypořádání vzájemných vztahů týkajících se společného majetku a bydlení
                           tak, aby zvolené řešení co nejlépe odpovídalo potřebám Vás i Vašich dětí.
                        </p>
                     </li>
                     <li>
                        <p className="portfolio__item__header-sm">Péče o nezletilé</p>
                        <hr className="portfolio__item__hr-sm" />

                        <p>
                           Ve vztahu k nezletilým dětem pomáháme zejména ve věci péče o ně, úpravě
                           výživného a při podávání návrhů na nahrazení souhlasu rodiče ve věcech
                           týkajících se záležitostí, které jsou pro dítě významné.
                        </p>
                     </li>
                     <li>
                        <p className="portfolio__item__header-sm">
                           Úprava poměrů mezi nesezdanými páry a rodiči, kteří žijí odděleně.
                        </p>
                        <hr className="portfolio__item__hr-sm" />
                        <p>Doplnit text</p>
                     </li>
                  </ul>
               </div>
            </div>

            {/* Service 3 */}
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

            {/* Service 4 */}
            <div className="portfolio__item">
               <div className="portfolio__item__icon">
                  <FontAwesomeIcon icon={faHome} />
               </div>
               <div className="portfolio__item__header">
                  Obchodní korporace a zápisy do obchodního rejstříku
               </div>
               <hr className="portfolio__item__hr" />
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
