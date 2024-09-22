import "./AboutSection.css";
import el5 from "../../../assets/elements/el5.svg";
import el6 from "../../../assets/elements/el6.svg";
import el7 from "../../../assets/elements/el7.svg";
import { useState } from "react";

const AboutSection = () => {
  const [expoOne, setExpoOne] = useState(false);
  const [expoTwo, setExpoTwo] = useState(false);
  const [expoThree, setExpoThree] = useState(false); // Добавляем состояние для "ЗАДАЧИ"

  const handleExpoOne = () => {
    setExpoOne((prev) => !prev);
  };

  const handleExpoTwo = () => {
    setExpoTwo((prev) => !prev);
  };

  const handleExpoThree = () => {
    setExpoThree((prev) => !prev);
  };

  return (
    <div className="bg7">
      <div className="expoAbout">
        {/* Секция 1 */}
        <div className="expoAbout_div exp1">
          <button
            className={`expoAboutButton ${
              expoOne ? "expoAboutButtonActive" : "expoAboutButton"
            }`}
            onClick={handleExpoOne}
          >
            МИССИЯ
          </button>
          <div className={expoOne ? "expoInnerActive" : "expoInner"}>
            <p>
              <span className="expTextBold">
                Поддержка технологической эволюции:
              </span>
              <br />
              Способствование ускоренному внедрению новейших технологий, таких
              как искусственный интеллект, блокчейн, интернет вещей и
              кибербезопасность, для улучшения жизни и экономического роста в
              Кыргызстане.
            </p>
            <p>
              <span className="expTextBold">
                Создание образовательных возможностей:
              </span>
              <br />
              Обеспечение доступа к образовательным программам, которые помогают
              развивать профессиональные навыки и подготавливают специалистов к
              вызовам цифровой экономики.
            </p>
            <p>
              <span className="expTextBold">
                Продвижение инновационного мышления:
              </span>
              <br />
              Поощрение инновационного мышления среди молодежи и профессионалов,
              вдохновление на создание новых решений и технологий, способных
              изменить мир к лучшему.
            </p>
          </div>
          <img loading="lazy" src={el5} alt="" className="aboutImg aboutImg1" />
        </div>

        {/* Секция 2 */}
        <div className="expoAbout_div exp2">
          <button
            className={`expoAboutButton ${
              expoTwo ? "expoAboutButtonActive" : "expoAboutButton"
            }`}
            onClick={handleExpoTwo}
          >
            ЦЕЛИ
          </button>
          <div className={expoTwo ? "expoInnerActive" : "expoInner"}>
            <p>
              ITFEST 2024 стремится стать центром инноваций и диалога,
              способствующим развитию технологического потенциала Кыргызстана.
              Мы стремимся укрепить экосистему информационных технологий,
              поддержать молодые IT-стартапы, обеспечить обучение и
              профессиональное развитие для будущих лидеров отрасли.
            </p>
          </div>
          <img loading="lazy" src={el6} alt="" className="aboutImg aboutImg2" />
        </div>

        {/* Секция 3 (ЗАДАЧИ) */}
        <div className="expoAbout_div exp3">
          <button
            className={`expoAboutButton ${
              expoThree ? "expoAboutButtonActive" : "expoAboutButton"
            }`}
            onClick={handleExpoThree}
          >
            ЗАДАЧИ
          </button>
          <div className={expoThree ? "expoInnerActive" : "expoInner"}>
            <ul>
              <li>
                Организация высококачественного мероприятия с участием ведущих
                специалистов IT-индустрии.
              </li>
              <li>
                Поддержка и стимулирование инновационных проектов и стартапов.
              </li>
              <li>
                Проведение турниров и конкурсов по различным направлениям IT.
              </li>
              <li>Привлечение международных экспертов и инвесторов.</li>
              <li>
                Организация образовательных и профессиональных панелей и
                дискуссий.
              </li>
              <li>
                Обеспечение высокого уровня безопасности и комфорта для
                участников и гостей.
              </li>
              <li>
                Популяризация технологий и инноваций, способствующих развитию
                Кыргызстана и других стран СНГ.
              </li>
            </ul>
          </div>
          <img loading="lazy" src={el7} alt="" className="aboutImg aboutImg1" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
