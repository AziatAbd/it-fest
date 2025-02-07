import chek from "../../../assets/chek.png";
import tour0 from "../../../assets/tour/CyberSec.png";
import tour1 from "../../../assets/tour/cs2.png";
import tour2 from "../../../assets/tour/design & 2d.png";
import tour3 from "../../../assets/tour/dron demonstration.png";
import tour4 from "../../../assets/tour/hakaton.png";
import tour5 from "../../../assets/tour/mobilography.png";
import tour6 from "../../../assets/tour/robotics.png";
import anim2 from "../../../assets/animations/anim.gif";
import anim3 from "../../../assets/animations/mobi-anim.gif";

import "./TournamentsSection.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import { useNavigate } from "react-router-dom";

const TournamentsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg5" id="participants">
      <div className="container">
        <div className="tourBlock_main">
          <img
            loading="lazy"
            src={chek}
            alt="error"
            className="tourBlock_img"
          />
        </div>

        <div className="tourFork_blockParent">
          <p className="tourText_small">Турниры по направлениям</p>
          <div className="tourFork_block">
            <div className="tourFor_img tourForkimg1">
              <img
                loading="lazy"
                src={tour1}
                alt="error"
                className="tourForkimg11"
              />
              <div className="imghovBlock imghovBlock2 ">
                <p className="imghovTitle">Киберспорт</p>

                <div className="imghovInfo">
                  <div>
                    <div>
                      <p>Участники: </p>
                      <p className="csPerson">640 человек.</p>
                    </div>
                    <p className="cardSubtitle">Игровые дисциплины: </p>
                    <p className="">
                      Counter-Strike 2
                      <br />
                      PUBG
                      <br />
                    </p>
                  </div>
                  <div>
                    <p>Призовой фонд:</p>
                    <p className="imghovTextBold">1,000,000 сом</p>
                  </div>
                  <p className="imghovBtn" onClick={() => navigate("/choice")}>
                    Регистрация
                  </p>
                </div>
              </div>

              <img loading="lazy" src={anim2} alt="" className="anim" />
            </div>
            <div className="tourFor_img tourForkimg2">
              <img
                loading="lazy"
                src={tour2}
                alt="error"
                className="tourForkimg21"
              />
              <div className="imghovBlock imghovBlock3">
                <p className="imghovTitle">Дизайн и 3D</p>
                <div className="imghovInfo">
                  <div>
                    <p>Направления: </p>
                    <p className="">
                      2D дизайн <br /> 3D дизайн <br />
                      3D моделирование <br />
                      моушн видео <br /> 3D визуализация <br /> веб-дизайн.
                    </p>
                  </div>
                  <div>
                    <p>Призовой фонд:</p>
                    <p className="imghovTextBold">500,000 сом</p>
                  </div>
                  <p className="imghovBtn" onClick={() => navigate("/choice")}>
                    Регистрация
                  </p>
                </div>
              </div>
            </div>
            <div className="tourFor_img tourForkimg3">
              <img
                loading="lazy"
                src={tour3}
                alt="error"
                className="tourForkimg31"
              />
              <div className="imghovBlock imghovBlock4">
                <p className="imghovTitle">Дрон демонстрация</p>
                <div className="imghovInfo">
                  <div>
                    <p>Участники: </p>
                    <p className="imghovTextBold">50 человек.</p>
                  </div>
                  <div>
                    <p>Призовой фонд:</p>
                    <p className="imghovTextBold">300,000 сом</p>
                  </div>
                  <p className="imghovBtn" onClick={() => navigate("/choice")}>
                    Регистрация
                  </p>
                </div>
              </div>
            </div>
            <div className="tourFor_img tourForkimg4">
              <img
                loading="lazy"
                src={tour4}
                alt="error"
                className="tourForkimg41"
              />
              <div className="imghovBlock imghovBlock5">
                <p className="imghovTitle">Хакатон</p>
                <div className="imghovInfo">
                  <div>
                    <p>Участники: </p>
                    <p className="imghovTextBold">600 человек.</p>
                  </div>
                  <div>
                    <p>Призовой фонд:</p>
                    <p className="imghovTextBold">500,000 сом</p>
                  </div>
                  <p className="imghovBtn" onClick={() => navigate("/choice")}>
                    Регистрация
                  </p>
                </div>
              </div>
            </div>
            <div className="tourFor_img tourForkimg5">
              <img
                loading="lazy"
                src={anim3}
                alt="error"
                className="tourForkimg51"
              />
              <div className="imghovBlock imghovBlock6">
                <a
                  href="https://mobilography.kg"
                  target="_blank"
                  className="imghovTitle"
                >
                  Мобилография
                </a>
                <div className="imghovInfo">
                  <a href="https://mobilography.kg" target="_blank">
                    <div>
                      <p>Участники: </p>
                      <p className="imghovTextBold">100 человек.</p>
                    </div>
                    <div>
                      <p>Призовой фонд:</p>
                      <p className="imghovTextBold">300,000 сом</p>
                    </div>
                  </a>
                  <a
                    href="https://mobilography.kg"
                    target="_blank"
                    className="mobi"
                  >
                    Регистрация
                  </a>
                </div>
              </div>
            </div>
            <div className="tourFor_img tourForkimg6">
              <img
                loading="lazy"
                src={tour6}
                alt="error"
                className="tourForkimg61"
              />
              <div className="imghovBlock imghovBlock7">
                <p className="imghovTitle">Робототехника</p>
                <div className="imghovInfo">
                  <div>
                    <p>Участники: </p>
                    <p className="imghovTextBold">200 человек.</p>
                  </div>
                  <div>
                    <p>Призовой фонд:</p>
                    <p className="imghovTextBold">300,000 сом</p>
                  </div>
                  <p className="imghovBtn" onClick={() => navigate("/choice")}>
                    Регистрация
                  </p>
                </div>
              </div>
            </div>
            <div className="tourFor_img tourForkimg0">
              <img
                loading="lazy"
                src={tour0}
                alt="error"
                className="tourForkimg01"
              />
              <div className="imghovBlock imghovBlock10">
                <p className="imghovTitle">Кибер безопасность</p>
                <div className="imghovInfo">
                  <div>
                    <p>Участники: </p>
                    <p className="imghovTextBold">100 человек.</p>
                  </div>
                  <div>
                    <p>Призовой фонд:</p>
                    <p className="imghovTextBold">200,000 сом</p>
                  </div>
                  <p className="imghovBtn" onClick={() => navigate("/choice")}>
                    Регистрация
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tourSwiper">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={true}
            modules={[Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <div className="tourFor_img tourForkimg1">
                <img
                  loading="lazy"
                  src={tour1}
                  alt="error"
                  className="tourForkimg11"
                />
                <div className="imghovBlock imghovBlock2 ">
                  <p className="imghovTitle">Киберспорт</p>
                  <div className="imghovInfo">
                    <div>
                      <div>
                        <p>Участники: </p>
                        <p>640 человек.</p>
                      </div>
                      <p>Игровые дисциплины: </p>
                      <p className="">
                        {" "}
                        Counter-Strike 2 <br /> Dota 2 <br />
                        PUBG
                      </p>
                    </div>
                    <div>
                      <p>Призовой фонд:</p>
                      <p className="imghovTextBold">1,500,000 сом</p>
                    </div>
                    <p
                      className="imghovBtn"
                      onClick={() => navigate("/choice")}
                    >
                      Регистрация
                    </p>
                  </div>
                </div>
                <img loading="lazy" src={anim2} alt="" className="anim" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tourFor_img tourForkimg2">
                <img
                  loading="lazy"
                  src={tour2}
                  alt="error"
                  className="tourForkimg21"
                />
                <div className="imghovBlock imghovBlock3">
                  <p className="imghovTitle">Дизайн и 3D</p>
                  <div className="imghovInfo">
                    <div>
                      <p>Направления: </p>
                      <p className="">
                        {" "}
                        2D дизайн <br /> 3D дизайн <br />
                        3D моделирование <br />
                        моушн видео <br /> 3D визуализация <br /> веб-дизайн.
                      </p>
                    </div>
                    <div>
                      <p>Призовой фонд:</p>
                      <p className="imghovTextBold">500,000 сом</p>
                    </div>
                    <p
                      className="imghovBtn"
                      onClick={() => navigate("/choice")}
                    >
                      Регистрация
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tourFor_img tourForkimg3">
                <img
                  loading="lazy"
                  src={tour3}
                  alt="error"
                  className="tourForkimg31"
                />
                <div className="imghovBlock imghovBlock4">
                  <p className="imghovTitle">Дрон демонстрация</p>
                  <div className="imghovInfo">
                    <div>
                      <p>Участники: </p>
                      <p className="imghovTextBold">50 человек.</p>
                    </div>
                    <div>
                      <p>Призовой фонд:</p>
                      <p className="imghovTextBold">300,000 сом</p>
                    </div>
                    <p
                      className="imghovBtn"
                      onClick={() => navigate("/choice")}
                    >
                      Регистрация
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tourFor_img tourForkimg4">
                <img
                  loading="lazy"
                  src={tour4}
                  alt="error"
                  className="tourForkimg41"
                />
                <div className="imghovBlock imghovBlock5">
                  <p className="imghovTitle">Хакатон</p>
                  <div className="imghovInfo">
                    <div>
                      <p>Участники: </p>
                      <p className="imghovTextBold">600 человек.</p>
                    </div>
                    <div>
                      <p>Призовой фонд:</p>
                      <p className="imghovTextBold">500,000 сом</p>
                    </div>
                    <p
                      className="imghovBtn"
                      onClick={() => navigate("/choice")}
                    >
                      Регистрация
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tourFor_img tourForkimg5">
                <img
                  loading="lazy"
                  src={tour5}
                  alt="error"
                  className="tourForkimg51"
                />
                <div className="imghovBlock imghovBlock6">
                  <a
                    href="https://mobilography.kg"
                    target="_blank"
                    className="imghovTitle"
                  >
                    Мобилография
                  </a>
                  <div className="imghovInfo">
                    <a href="https://mobilography.kg" target="_blank">
                      <div>
                        <p>Участники: </p>
                        <p className="imghovTextBold">100 человек.</p>
                      </div>
                      <div>
                        <p>Призовой фонд:</p>
                        <p className="imghovTextBold">300,000 сом</p>
                      </div>
                    </a>
                    <p
                      className="imghovBtn"
                      onClick={() => navigate("/choice")}
                    >
                      Регистрация
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tourFor_img tourForkimg6">
                <img
                  loading="lazy"
                  src={tour6}
                  alt="error"
                  className="tourForkimg61"
                />
                <div className="imghovBlock imghovBlock7">
                  <p className="imghovTitle">Робототехника</p>
                  <div className="imghovInfo">
                    <div>
                      <p>Участники: </p>
                      <p className="imghovTextBold">200 человек.</p>
                    </div>
                    <div>
                      <p>Призовой фонд:</p>
                      <p className="imghovTextBold">300,000 сом</p>
                    </div>
                    <p
                      className="imghovBtn"
                      onClick={() => navigate("/choice")}
                    >
                      Регистрация
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tourFor_img tourForkimg0">
                <img
                  loading="lazy"
                  src={tour0}
                  alt="error"
                  className="tourForkimg01"
                />
                <div className="imghovBlock imghovBlock10">
                  <p className="imghovTitle">Кибер безопасность</p>
                  <div className="imghovInfo">
                    <div>
                      <p>Участники: </p>
                      <p className="imghovTextBold">100 человек.</p>
                    </div>
                    <div>
                      <p>Призовой фонд:</p>
                      <p className="imghovTextBold">200,000 сом</p>
                    </div>
                    <p
                      className="imghovBtn"
                      onClick={() => navigate("/choice")}
                    >
                      Регистрация
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TournamentsSection;
