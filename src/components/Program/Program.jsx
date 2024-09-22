import { useNavigate } from "react-router-dom";

import img1 from "./ProgramImages/day-1.png";
import img2 from "./ProgramImages/day-2.png";

import "./Program.css";
export const Program = () => {
  const navigate = useNavigate();

  return (
    <div className="program">
      <div className="container">
        <div className="programHeading">
          <a className="donwloadBtn programBack" onClick={() => navigate("/")}>
            На главную
          </a>
          <a className="donwloadBtn" href={img1} download={"day-1.png"}>
            скачать 1 день
          </a>
          <a className="donwloadBtn" href={img2} download={"day-2.png"}>
            скачать 2 день
          </a>
        </div>
        <div className="programListWrapper">
          <div className="programList">
            <h2>День 1</h2>
            <p>
              <span>9:00 - 11:00</span> — Регистрация участников
            </p>
            <p>
              <span>11:00 - 11:30</span> — Официальное открытие (улица)
            </p>
            <p>
              <span>11:30 - 13:30</span> — Начало турниров и интерактивов
            </p>
            <p>
              <span className="programInnerTitle">Спортзал</span> турниры по
              киберспорту и робототехнике
            </p>
            <p>
              <span className="programInnerTitle">Третий этаж</span> турнир по
              дизайну, кибербезопасности и хакатон
            </p>
            <p>
              <span className="programInnerTitle">Улица</span> интерактивные
              игры и конкурсы, начало выступления
            </p>
            <p>
              <span>13:30-14:30</span> — Обеденный перерыв
            </p>
            <p>
              <span>14:30 - 16:30</span> — Продолжение турниров и мастер-классы
              (спортзал, третий этаж)
            </p>
            <p>
              <span>16:30 - 17:00</span> — Кофе-брейк и нетворкинг
            </p>
            <p>
              <span>17:00 - 18:30</span> — Финалы турниров и презентации
              проектов (спортзал, третий этаж)
            </p>
            <p>
              <span>Улица:</span> выступления артистов, объявление результатов
              конкурсов и вручение призов
            </p>
            <p>
              <span>18:00 - 19:00</span> — Подведение итогов первого дня и
              награждение
            </p>
            <p>
              <span>19:00 - 20:30</span> — Вечерняя программа: выступления
              музыкантов и DJ-сеты
            </p>
          </div>

          <div className="programList">
            <h2>День 2</h2>
            <p>
              <span>10:00 - 11:00</span> — Регистрация новых участников
            </p>
            <p>
              <span>11:00 - 12:30</span> — Панельные дискуссии и продолжение
              хакатона
            </p>
            <p>
              <span>Третий этаж:</span> дискуссии по кибербезопасности, ии,
              блокчейну и др.
            </p>
            <p>
              <span>Улица:</span> Интерактивные игры и конкурсы для зрителей
            </p>
            <p>
              <span>12:30 - 13:30</span> — Обеденный перерыв
            </p>
            <p>
              <span>13:30 - 15:30</span> — Финальные мероприятия и мастер-классы
            </p>
            <p>
              <span>Спортзал:</span> финальные соревнования по робототехнике
            </p>
            <p>
              <span>Третий этаж:</span> завершение хакатона и подведение итогов
            </p>
            <p>
              <span>Улица:</span> презентации спонсоров и партнеров мероприятия,
              концертная программа
            </p>
            <p>
              <span>15:30 - 16:00</span> — Кофе-брейк и нетворкинг
            </p>
            <p>
              <span>16:00 - 17:30</span> — Заключительные мероприятия и
              награждения победителей и призеров.
            </p>
            <p>
              <span>17:30 - 18:00</span> — Официальное закрытие мероприятия
            </p>
            <p>
              <span>18:00 - 20:00</span> — Афтерпати: танцевальная программа,
              DJ-сеты, выступления артистов
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
