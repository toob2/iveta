import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Toolbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import logo from "../Images/logo.svg";

/**
 * Scroll with an offset
 *
 * @param {Integer}  offset    offset in pixels
 */
const scrollWithOffset = (el, offset) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: yCoordinate + offset, behavior: "smooth" });
};

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      {/* <a href="/" className="toolbar__logo-link">
        <div className="toolbar__logo">
          <div className="toolbar__logo-top">^</div>
          <div className="toolbar__logo-middle">IS</div>
          <div className="toolbar__logo-bottom">^</div>
        </div>
      </a> */}
      <a href="/" className="toolbar__logo-link">
        <div className="toolbar__logo">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="186.000000pt"
            height="300.000000pt"
            viewBox="0 0 186.000000 300.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,300.000000) scale(0.050000,-0.050000)"
              stroke="none"
            >
              <path d="M1389 5369 c-296 -204 -548 -381 -559 -393 -25 -27 -80 -58 557 312 295 172 546 312 558 312 18 0 273 -146 1095 -626 39 -22 61 -31 50 -20 -33 34 -1129 786 -1146 786 -8 0 -258 -167 -555 -371z" />
              <path d="M2844 4399 c-79 -16 -117 -32 -334 -144 -116 -60 -630 -476 -630 -511 0 -8 -27 -44 -60 -82 -33 -37 -60 -80 -60 -95 0 -16 -13 -33 -30 -40 -16 -6 -30 -22 -30 -36 0 -14 -16 -55 -35 -93 -77 -150 -31 -389 114 -590 59 -81 61 -82 213 -94 153 -11 157 -11 638 107 106 26 528 39 541 17 21 -34 -252 -336 -413 -458 -123 -93 -268 -179 -304 -179 -19 -1 -40 -14 -47 -31 -6 -16 -19 -25 -28 -19 -9 5 -24 -2 -33 -16 -9 -14 -38 -38 -66 -54 -59 -33 -325 -167 -340 -171 -5 -1 -61 -27 -124 -57 -63 -30 -126 -54 -140 -52 -92 13 -102 2 -89 -92 7 -50 26 -105 43 -122 16 -16 30 -38 30 -48 0 -36 96 -42 157 -11 33 18 75 32 93 32 41 0 451 205 566 282 47 32 91 58 96 58 12 0 253 161 268 179 6 6 62 47 125 89 150 102 355 320 404 429 59 131 -13 333 -167 472 -76 68 -460 51 -857 -38 -317 -71 -413 -82 -502 -58 -123 33 64 434 326 698 54 54 378 290 475 346 285 163 692 147 614 -23 -38 -84 16 -136 91 -87 108 71 38 295 -141 452 -75 66 -175 77 -364 40z" />
              <path d="M1710 4367 c-22 -5 -142 -32 -266 -61 -217 -50 -230 -51 -296 -19 -91 44 -108 42 -108 -12 -1 -82 -116 -135 -296 -135 -175 0 -244 -62 -192 -171 51 -109 97 -127 238 -97 190 40 190 40 190 -57 0 -89 -46 -514 -79 -735 -33 -216 -38 -259 -68 -560 -16 -159 -30 -339 -32 -400 -3 -136 -5 -138 -169 -153 -157 -15 -174 -36 -112 -137 63 -101 114 -130 233 -130 73 0 133 -15 199 -50 119 -63 118 -64 118 22 0 79 -9 75 350 167 180 46 240 68 240 85 0 10 9 13 20 6 11 -7 20 -3 20 9 0 11 14 21 31 21 17 0 26 9 19 20 -7 11 2 20 19 20 36 0 38 9 12 59 -32 59 -164 67 -389 23 -303 -58 -332 -62 -333 -46 -11 100 -7 179 8 199 12 17 9 25 -10 25 -17 1 -19 6 -6 15 27 19 110 706 112 930 1 41 7 75 15 75 8 0 25 125 39 278 36 405 40 422 101 447 29 12 88 37 132 57 44 20 161 50 260 68 99 18 190 34 203 37 46 9 84 57 73 89 -35 100 -135 140 -276 111z" />
              <path d="M2710 908 c-198 -159 -452 -362 -564 -450 l-204 -160 -316 235 c-699 519 -846 627 -846 619 0 -8 272 -241 538 -462 40 -33 197 -166 349 -295 l277 -236 83 76 c46 41 301 272 568 512 420 378 506 459 480 452 -3 -1 -167 -132 -365 -291z" />
            </g>
          </svg>
        </div>
      </a>

      <div className="spacer" />
      <div className="toolbar__navigation-items">
        <ul>
          <li>
            <Link className="nav-underline" smooth to="/#">
              ÚVOD
            </Link>
          </li>
          <li>
            <Link
              className="nav-underline"
              smooth
              to="/#o-mne"
              scroll={(el) => scrollWithOffset(el, -30)}
            >
              O MNĚ
            </Link>
          </li>
          <li>
            <Link
              className="nav-underline"
              smooth
              to="/#sluzby"
              scroll={(el) => scrollWithOffset(el, -70)}
            >
              PRÁVNÍ SLUŽBY
            </Link>
          </li>
          <li>
            <Link className="nav-underline" to="/contact#">
              KONTAKT
            </Link>
          </li>
        </ul>
      </div>
      <div className="toolbar__toggle-button">
        <DrawerToggleButton
          click={props.drawerClickHandler}
          show={props.show}
        />
      </div>
    </nav>
  </header>
);

export default toolbar;
