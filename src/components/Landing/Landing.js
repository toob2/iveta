import React from "react";
import "./Landing.scss";
import { HashLink as Link } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -50;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const landing = () => (
  <section className="landing">
    <div className="landing__text-box">
      <p className="landing__text-box__item">ADVOKÁTNÍ KANCELÁŘ</p>
      <hr className="landing__hr" />
      <p className="landing__text-box__item">Mgr. Iveta Strmeňová, advokátka</p>
    </div>

    <div className="landing__scrolldown">
      <Link
        smooth
        to="/#o-mne"
        scroll={(el) => scrollWithOffset(el)}
        className="landing__scrolldown__mouse"
      >
        <div className="landing__scrolldown__mouse__wheel"></div>
      </Link>
    </div>
  </section>
);

export default landing;
