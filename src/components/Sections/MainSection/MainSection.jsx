// import React from "react";
// import inno from "../../../assets/partnerslogo/inno.svg";
import mer from "../../../assets/partnerslogo/mer.png";
import kia from "../../../assets/partnerslogo/kial.svg";
import htp from "../../../assets/partnerslogo/htp.svg";
import jkm from "../../../assets/partnerslogo/jkm.svg";

import logo6 from "../../../assets/partnerslogo/logo6.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./MainSection.css";
import { useNavigate } from "react-router-dom";

const MainSection = () => {
  const navigate = useNavigate();
  useGSAP(() => {
    gsap.fromTo(
      "#planet1",
      {
        y: -10,
      },
      {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 2,
      }
    );
    gsap.fromTo(
      ".firstBlock_main",
      {
        y: 20,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      ".secondBlock_org",
      {
        y: 20,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
      }
    );
  }, []);
  return (
    <>
      <div className="bg1">
        <div className="container">
          <div className="firstBlock_main ">
            <div className="firstMain_text">
              <p>
                <span className="fs1">ПЕРВЫЙ </span>
                МЕЖДУНАРОДНЫЙ
                <br /> МАСШТАБНЫЙ IT ФЕСТИВАЛЬ
              </p>
              <h2>CYBER KYRGYZSTAN</h2>
              <p>2024 в Центральной Азии</p>
              <p id="firstDate">12 - 13 октября</p>
            </div>
            <div className="heroWrapper">
              <div className="heroPlanet" id="planet1"></div>
              {/* <img
                loading="lazy"
                src={el3}
                alt=""
                id="el3"
                className="mainBgColor"
              />

              <img
                src={planetlogo}
                alt="error"
                id="planet1"
                className="firstBlock_logo"
              /> */}
              <button className="heroReg" onClick={() => navigate("/choice")}>
                Регистрация
              </button>
            </div>
          </div>

          <div className="logobigm">
            <p className="secondBlock_text">
              МЕРОПРИЯТИЕ ПРОВОДИТСЯ <br /> ПРИ ПОДДЕРЖКЕ
            </p>
            <div className="logobigb">
              <img
                loading="lazy"
                src={kia}
                alt="error"
                className="logobigbb"
                id="kia"
              />
              <img
                loading="lazy"
                src={mer}
                alt="error"
                className="logobigbb"
                id="mer"
              />
              <img
                loading="lazy"
                src={jkm}
                alt=""
                className="logobigbb"
                id="jkm"
              />
            </div>
          </div>

          <div className="secondBlock_org">
            <p className="secondBlock_text">Организаторы</p>
            <div className="secondBlock_sponsors">
              <img loading="lazy" src={logo6} alt="error" className="logobig" />
              {/* <span className="logoCom">Цифраком</span> */}
              <div className="organizersMetaLogo"></div>
              <img loading="lazy" src={htp} alt="error" className="logopat" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
