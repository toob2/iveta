import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faCommentDots,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faPhone, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const footer = () => (
  <footer className="main-footer">
    {/* Row 1 */}

    <div className="row">
      {/* Column 1 */}
      <div className="col">
        <h5 className="main-footer__heading">Údaje</h5>
        <ul className="list">
          <li>ČAK: 145454</li>
          <li>IČ: 73222222222</li>
          <li>DIČ: CZ123456784</li>
          <li>DATOVÁ SCHRÁNKA:</li>
          <li>
            <a
              className="main-footer__link"
              href="https://www.mojedatovaschranka.cz/sds/detail.do?dbid="
              target="_blank"
            >
              jkg1254x
            </a>
          </li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="col">
        <h5 className="main-footer__heading">Kontakt</h5>
        <ul className="list">
          <li>
            <a className="main-footer__link" href="tel:+420608901616">
              <FontAwesomeIcon icon={faPhone} size="1x" /> &nbsp; +420 608 901
              616
            </a>
          </li>
          <li>
            <a className="main-footer__link" href="mailto:iveta@strmenova">
              <FontAwesomeIcon icon={faEnvelope} size="1x" /> &nbsp;
              iveta@strmenova.cz
            </a>
          </li>
          <li>Pobřežní 78</li>
          <li>Praha 8-Karlín</li>
          <li>186 00</li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="col">
        <h5 className="main-footer__heading">Právní služby</h5>
        <ul className="list">
          <li>Rozvody</li>
          <li>Obchodní smlouvy</li>
          <li>Hypotéky</li>
          <li>Poradenství</li>
        </ul>
      </div>
    </div>

    <hr className="main-footer__hr" />

    {/* Row 2 */}

    <div className="row">
      <div className="row__wrapper">
        &copy; {new Date().getFullYear()} Mgr. Iveta Strmeňová | Created by
        &nbsp;
        <a className="main-footer__link" href="mailto:obdrzalek.tom@gmail.com">
          TOOB
        </a>
      </div>
    </div>
  </footer>
);
export default footer;
