import standart from "../../../assets/expoimg/standartExpo.png";
import silver from "../../../assets/expoimg/silverExpo.png";
import gold from "../../../assets/expoimg/goldExpo.png";

import "./ExpoSection.css";

const ExpoSection = () => {
  return (
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
            <p className="expoPrice">10 000 сом</p>
          </div>
          <div>
            <p className="expoPriceLined">
              Возможность размещения 1го ролл-апа
            </p>
            <a
              className="expoBtn expoBtn1"
              href="https://wa.me/996555060955"
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
            <p className="expoPrice">20 000 сом</p>
          </div>
          <div>
            <p className="expoPriceLined">
              Большая проходимость, возможность размещения 2х ролл-апов
            </p>
            <a
              className="expoBtn expoBtn2"
              href="https://wa.me/996555060955"
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
            <p className="expoPrice">30 000 сом</p>
          </div>
          <div>
            <p className="expoPriceLined">
              Максимальная проходимость, близко ко входу и фуд корт зоне,
              возможность размещения 3х ролл-апов
            </p>
            <a
              className="expoBtn expoBtn2"
              href="https://wa.me/996555060955"
              target="_blank"
            >
              Подробнее
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpoSection;
