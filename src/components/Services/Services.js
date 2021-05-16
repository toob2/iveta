import React from "react";
import "./Services.scss";
import GavelRoundedIcon from "@material-ui/icons/GavelRounded";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import PeopleIcon from "@material-ui/icons/People";

const services = () => (
  <div className="about">
    <div className="about-text">
      <b>Jsem Mgr. Iveta Strmeňová.</b> Dělám moderní advokátní služby zaměřené
      na širokou veřejnost. Business není mojí prioritou, chci dosahovat cílů
      společně s klientem. Vždy se snažím dělat něco navíc a věci vylepšovat.
    </div>

    <div className="about-services" id="services">
      {/* Service 1 */}
      <div className="about-services__item">
        <div className="about-services__item__icon">
          <GavelRoundedIcon style={{ fontSize: 50 }} />
        </div>
        <div className="about-services__item__header">Občanské právo</div>
        <div className="about-services__item__text">
          <ul className="about-list">
            <li>Zastupování v občanskoprávních sporech</li>
            <li>
              Sepis kupních, darovacích či jiných smluv týkajících se
              nemovitostí
            </li>
            <li>Sepis reklamací vad, odstoupení od smlouvy</li>
            <li>
              Uplatnění nároků na náhradu škody – majetkové i nemajetkové újmy
            </li>
          </ul>
        </div>
      </div>

      {/* Service 2 */}
      <div className="about-services__item">
        <div className="about-services__item__icon">
          <WorkRoundedIcon style={{ fontSize: 50 }} />
        </div>
        <div className="about-services__item__header">Pracovní právo</div>
        <div className="about-services__item__text">
          <ul className="about-list">
            <li>Výpovědi z pracovního poměru</li>
            <li>Uplatnění nároků při pracovním úrazu a nemoci z povolání</li>
            <li>Sepis reklamací vad, odstoupení od smlouvy</li>
            <li>Agenturní zaměstnávání zaměstnanců</li>
          </ul>
        </div>
      </div>

      {/* Service 3 */}
      <div className="about-services__item">
        <div className="about-services__item__icon">
          <PeopleIcon style={{ fontSize: 50 }} />
        </div>
        <div className="about-services__item__header">Rodinné právo</div>
        <div className="about-services__item__text">
          <ul className="about-list">
            <li>Zastupování v opatrovnických řízeních</li>
            <li>Rozvody manželství</li>
            <li>Vypořádání společného jmění manželů</li>
            <li>Úprava výchovy dětí</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default services;
