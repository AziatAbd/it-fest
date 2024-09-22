// import standart from "../../../assets/expoimg/standartExpo.png";
// import silver from "../../../assets/expoimg/silverExpo.png";
// import gold from "../../../assets/expoimg/goldExpo.png";
import standart from "../../assets/expoimg/standartExpo.png";
import silver from "../../assets/expoimg/silverExpo.png";
import gold from "../../assets/expoimg/goldExpo.png";
import prez1 from "../../assets/prez/prez1.png";
import prez2 from "../../assets/prez/prez2.png";
import prez3 from "../../assets/prez/prez3.png";
import prez4 from "../../assets/prez/prez4.png";
import prez5 from "../../assets/prez/prez5.png";
import prez6 from "../../assets/prez/prez6.png";
import { useNavigate } from "react-router-dom";
import "./Expo.css";

export const Expo = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="expo">
        <div className="programHeading">
          <a
            className="donwloadBtn programBack expoBtnBack"
            onClick={() => navigate("/")}
          >
            Вернутся назад
          </a>
        </div>
        <div className="expoMain_block" id="participants">
          <h2 className="expo_Main_text">IT EXPO</h2>
          <div className="expoVariants">
            <div className="expoVariants_block expoStandart">
              <div>
                <h3 className="expoVar_text">Стандарт</h3>
                <h4 className="sxpoVar_subtitle">2x3 m2</h4>
              </div>
              <div>
                <div className="expoImgWrapper">
                  <img
                    loading="lazy"
                    src={standart}
                    alt=""
                    className="expoiMG expoImg1"
                  />
                </div>
              </div>
              <div>
                <p className="expoPriceLined">
                  Возможность размещения 1го ролл-апа
                </p>
                <a
                  className="expoBtn expoBtn1"
                  href="https://wa.me/996888429075"
                  target="_blank"
                >
                  Подробнее
                </a>
              </div>
            </div>
            <div className="expoVariants_block expoSilver">
              <div>
                <h3 className="expoVar_text">Серебро</h3>
                <h4 className="sxpoVar_subtitle">3x3 m2</h4>
              </div>
              <div>
                <div className="expoImgWrapper">
                  <img
                    loading="lazy"
                    src={silver}
                    alt=""
                    className="expoiMG expoImg2"
                  />
                </div>
              </div>
              <div>
                <p className="expoPriceLined">
                  Большая проходимость, возможность размещения 2х ролл-апов
                </p>
                <a
                  className="expoBtn expoBtn2"
                  href="https://wa.me/996888429075"
                  target="_blank"
                >
                  Подробнее
                </a>
              </div>
            </div>
            <div className="expoVariants_block expoGold">
              <div>
                <h3 className="expoVar_text">Голд</h3>
                <h4 className="sxpoVar_subtitle">6x3 m2</h4>
              </div>
              <div>
                <div className="expoImgWrapper">
                  <img
                    loading="lazy"
                    src={gold}
                    alt=""
                    className="expoiMG expoImg2"
                  />
                </div>
              </div>
              <div>
                <p className="expoPriceLined">
                  Максимальная проходимость, близко ко входу и фуд корт зоне,
                  возможность размещения 3х ролл-апов
                </p>
                <a
                  className="expoBtn expoBtn2"
                  href="https://wa.me/996888429075"
                  target="_blank"
                >
                  Подробнее
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="prezWrapper">
          <div className="prezImgWrapper">
            <img src={prez4} alt="" />
          </div>
          <div className="prezImgWrapper">
            <img src={prez1} alt="" />
          </div>
          <div className="prezImgWrapper">
            <img src={prez2} alt="" />
          </div>
          <div className="prezImgWrapper">
            <img src={prez3} alt="" />
          </div>
          <div className="prezImgWrapper">
            <img src={prez5} alt="" />
          </div>
          <div className="prezImgWrapper">
            <img src={prez6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
