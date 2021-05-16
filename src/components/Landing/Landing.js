import React from "react";
import "./Landing.scss";

const landing = (props) => (
  <section className="landing">
    <div className="landing__text-box">
      <p className="landing__text-box__item">ADVOKÁTNÍ KANCELÁŘ</p>
      <hr />
      <p className="landing__text-box__item">Mgr. Iveta Strmeňová</p>
    </div>
    <button className="landing-button">Více o mně</button>
  </section>
);

export default landing;
