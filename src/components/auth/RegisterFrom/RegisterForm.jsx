import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import "./RegisterForm.css";
import { Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContextProvider";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import not404 from "../../../assets/not404.svg";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("");
  const [theme2, setTheme2] = useState("");

  const [work, setWork] = useState("");
  const [format, setFormat] = useState("");
  const [checked, setChecked] = useState(false);
  const [inpBtnSt, setInpBtnSt] = useState(false);

  const { role, register, regSt } = useAuth();

  const [Surname, setSurname] = useState("");
  const [Name, setName] = useState("");
  const [FatherName, setFatherName] = useState("");
  const [Email, setEmail] = useState("");
  const [Country, setCountry] = useState("");
  const [City, setCity] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState("");
  const [Age, setAge] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [speech_theme, setSpeech_theme] = useState("");
  const [VisitorTheme, setVisitorTheme] = useState("");
  const [message, setMessage] = useState("");
  const [jbtitle, setjbtitle] = useState("");
  const [activity, setactivity] = useState("");
  const [partnersCompanyName, setPartnersCompanyName] = useState("");
  const [isHackatonChoosen, setHackatonChoosen] = useState(false);
  const [compProd, setcompprod] = useState("");
  const [hackathonTeamName, setHackathonTeamName] = useState("");
  const [teammates, setTeammates] = useState([
    { fullName: "", email: "", dateOfBirth: "", phoneNumber: "", position: "" },
    { fullName: "", email: "", dateOfBirth: "", phoneNumber: "", position: "" },
    { fullName: "", email: "", dateOfBirth: "", phoneNumber: "", position: "" },
  ]);

  function sendData(fork) {
    if (fork == "register_user/speaker/") {
      if (
        !Surname ||
        !Name ||
        !FatherName ||
        !Email ||
        !Country ||
        !City ||
        !DateOfBirth ||
        !PhoneNumber ||
        !speech_theme
      ) {
        alert("Заполните все поля!1");
        return;
      } else {
        setInpBtnSt(true);
      }

      const formdata = {
        lastName: Surname,
        firstName: Name,
        surname: FatherName,
        email: Email,
        country: Country,
        city: City,
        dateOfBirth: DateOfBirth,
        phoneNumber: PhoneNumber,
        speech_theme: speech_theme,
      };
      register(formdata, fork);
    }
    if (fork == "register_user/masterclass/") {
      if (
        !Surname ||
        !Name ||
        !FatherName ||
        !Email ||
        !Country ||
        !City ||
        !DateOfBirth ||
        !PhoneNumber ||
        !speech_theme
      ) {
        alert("Заполните все поля!1");
        return;
      } else {
        setInpBtnSt(true);
      }

      const formdata = {
        lastName: Surname,
        firstName: Name,
        surname: FatherName,
        email: Email,
        country: Country,
        city: City,
        dateOfBirth: DateOfBirth,
        phoneNumber: PhoneNumber,
        speech_theme: speech_theme,
      };
      register(formdata, fork);
    }
    if (fork == "register_user/cybersport/") {
      if (
        !Surname ||
        !Name ||
        !FatherName ||
        !Email ||
        !Country ||
        !City ||
        !DateOfBirth ||
        !PhoneNumber ||
        !work ||
        !format
      ) {
        alert("Заполните все поля!");
        return;
      } else {
        setInpBtnSt(!inpBtnSt);
      }
      const formdata = {
        lastName: Surname,
        firstName: Name,
        surname: FatherName,
        email: Email,
        country: Country,
        city: City,
        dateOfBirth: DateOfBirth,
        phoneNumber: PhoneNumber,
        game: work,
        participateFormat: format,
      };
      emailVal();
      if (message.length < 1) {
        register(formdata, fork);
        if (checked && inpBtnSt) {
          navigate("/");
        }
      }
    }
    if (fork == "register_user/design/") {
      if (
        !Surname ||
        !Name ||
        !FatherName ||
        !Email ||
        !Country ||
        !City ||
        !DateOfBirth ||
        !PhoneNumber ||
        !work
      ) {
        alert("Заполните все поля!");
        return;
      } else {
        setInpBtnSt(!inpBtnSt);
      }
      const formdata = {
        lastName: Surname,
        firstName: Name,
        surname: FatherName,
        email: Email,
        country: Country,
        city: City,
        dateOfBirth: DateOfBirth,
        phoneNumber: PhoneNumber,
        course: work,
      };
      emailVal();
      if (message.length < 1) {
        register(formdata, fork);
        if (checked && inpBtnSt) {
          navigate("/");
        }
      }
    }
    if (fork == "register_user/hackathon/") {
      if (
        !Surname ||
        !Name ||
        !FatherName ||
        !Email ||
        !Country ||
        !City ||
        !DateOfBirth ||
        !PhoneNumber ||
        !work
      ) {
        alert("Заполните все поля!");
        return;
      } else {
        setInpBtnSt(!inpBtnSt);
      }
      const formdata = {
        lastName: Surname,
        firstName: Name,
        surname: FatherName,
        email: Email,
        country: Country,
        city: City,
        dateOfBirth: DateOfBirth,
        phoneNumber: PhoneNumber,
        course: work,
      };
      emailVal();
      if (message.length < 1) {
        register(formdata, fork);
        if (checked && inpBtnSt) {
          navigate("/");
        }
      }
    }
    if (
      fork == "register_user/mobilography/" ||
      fork == "register_user/dronerace/" ||
      fork == "register_user/robotix/"
    ) {
      if (
        !Surname ||
        !Name ||
        !FatherName ||
        !Email ||
        !Country ||
        !City ||
        !DateOfBirth ||
        !PhoneNumber
      ) {
        alert("Заполните все поля!");
        return;
      } else {
        setInpBtnSt(!inpBtnSt);
      }
      const formdata = {
        lastName: Surname,
        firstName: Name,
        surname: FatherName,
        email: Email,
        country: Country,
        city: City,
        dateOfBirth: DateOfBirth,
        phoneNumber: PhoneNumber,
      };
      emailVal();
      if (message.length < 1) {
        register(formdata, fork);
      }
    }
    if (fork == "/foodCort") {
      if (
        !Name ||
        !jbtitle ||
        !activity ||
        !Email ||
        !Country ||
        !compProd ||
        !PhoneNumber
      ) {
        alert("Заполните все поля!");
        return;
      } else {
        setInpBtnSt(!inpBtnSt);
      }
      const formdata = {
        brandName: Name,
        fullName: FatherName,
        jobTitle: jbtitle,
        companyActivity: activity,
        email: Email,
        country: Country,
        phoneNumber: PhoneNumber,
        companyProduct: compProd,
      };
      emailVal();
      if (message.length < 1) {
        register(formdata, fork);
        if (checked && inpBtnSt) {
          navigate("/");
        }
      }
    }
    if (fork == "/expo") {
      if (
        !Name ||
        !jbtitle ||
        !activity ||
        !Email ||
        !Country ||
        !PhoneNumber ||
        !compProd ||
        !theme2
      ) {
        // console.log(Country, PhoneNumber, compProd, reg_logo, reg_check);
        alert("Заполните все поля!");
        return;
      } else {
        setInpBtnSt(!inpBtnSt);
      }
      const formdata = {
        brandName: Name,
        jobTitle: jbtitle,
        companyActivity: activity,
        email: Email,
        country: Country,
        phoneNumber: PhoneNumber,
        companyProduct: compProd,
        thematicExpo: theme2,
        fullName: FatherName,
      };
      emailVal();
      if (message.length < 1) {
        // console.log(reg_logo);
        register(formdata, fork);
        if (checked && inpBtnSt) {
          navigate("/");
        }
      }
    }
    if (fork == "/visitor") {
      if (!Name || !City || !Age || !PhoneNumber || !VisitorTheme) {
        alert("Заполните все поля!1");
        return;
      } else {
        setInpBtnSt(true);
      }

      const formdata = {
        name: Name,
        city: City,
        dateOfBirth: Age,
        phoneNumber: PhoneNumber,
        typeOfActivity: VisitorTheme,
      };
      register(formdata, fork);
    }
    if (fork == "/tournament") {
      const formdata = {
        firstName: Name,
        lastName: Surname,
        surname: FatherName,
        email: Email,
        country: Country,
        city: City,
        phoneNumber: PhoneNumber,
        dateOfBirth: DateOfBirth,
        // course: result,
        thematicTournament: theme,
      };
      console.log(formdata);
      if (
        !Name ||
        !Surname ||
        !FatherName ||
        !Email ||
        !Country ||
        !City ||
        !DateOfBirth ||
        !PhoneNumber ||
        !theme
      ) {
        // console.log(Country, PhoneNumber, compProd, reg_logo, reg_check);
        alert("Заполните все поля!");
        return;
      } else {
        setInpBtnSt(!inpBtnSt);
      }
      emailVal();
      if (message.length < 1) {
        // console.log(reg_logo);
        if (theme === "CYBER_SPORT") {
          const { ...rest } = formdata;

          register(
            { ...rest, formatParticipation: format, direction: work },
            `${fork}/cyberSport`
          );
        } else if (theme === "DESIGN_3D") {
          const { ...rest } = formdata;

          register({ ...rest, designDirection: work }, `${fork}/design`);
        } else {
          register(formdata, fork);
        }

        if (checked && inpBtnSt) {
          navigate("/");
        }
      }
    }
    if (fork == "/partner") {
      if (
        !partnersCompanyName ||
        !Name ||
        !jbtitle ||
        !PhoneNumber ||
        !theme2
      ) {
        alert("Заполните все поля!1");
        return;
      } else {
        setInpBtnSt(true);
      }

      const formdata = {
        companyName: partnersCompanyName,
        fullName: Name,
        phoneNumber: PhoneNumber,
        jobTitle: jbtitle,
        thematicPartner: theme2,
      };
      console.log(formdata);
      register(formdata, fork);
    }
    if (fork == "/hackathon") {
      if (!hackathonTeamName || !Country || !City || !theme || !teammates) {
        alert("Заполните все поля!1");
        return;
      } else {
        setInpBtnSt(true);
      }

      const formdata = {
        teamName: hackathonTeamName,
        country: Country,
        city: City,
        thematicTournament: theme,
        hackathonDirection: work,
        hackathonTeams: teammates,
      };
      console.log(formdata);
      register(formdata, fork);
    }
  }

  const handleThemeChange = (event) => {
    const value = event.target.value;
    if (value === "HACKATHON") {
      setHackatonChoosen(true);
    } else {
      setHackatonChoosen(false);
    }
    setTheme(value);
  };

  const handleWorkChange = (event) => {
    const value = event.target.value;
    setWork(value);
  };

  const handleFormatChange = (event) => {
    const value = event.target.value;
    setFormat(value);
  };

  function formatphone(value) {
    if (!value) return value;
    const phonenum = value.replace(/[^\d]/g, "");
    const phonenumlen = phonenum.length;
    if (phonenumlen < 4) return phonenum;
    if (phonenumlen < 7) {
      return `(${phonenum.slice(0, 3)})${phonenum.slice(3)}`;
    }
    if (phonenumlen < 9) {
      return `(${phonenum.slice(0, 3)})${phonenum.slice(3, 6)}${phonenum.slice(
        6
      )}`;
    }
    if (phonenumlen < 12) {
      return `(${phonenum.slice(0, 3)})${phonenum.slice(3, 6)}${phonenum.slice(
        6,
        9
      )}${phonenum.slice(9)}`;
    }

    return `(${phonenum.slice(0, 3)})${phonenum.slice(3, 6)}${phonenum.slice(
      6,
      9
    )}${phonenum.slice(9, 12)}`;
  }
  const phoneHandle = (e) => {
    const formatedphone = formatphone(e.target.value);
    setPhoneNumber(formatedphone);
  };
  const emailVal = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(Email)) {
      setMessage("");
    } else if (!regEx.test(Email) && Email !== "") {
      setMessage("Неправильный электронный адрес");
    } else {
      setMessage("");
    }
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const addTeammate = () => {
    if (teammates.length < 5) {
      setTeammates((prevTeammates) => [
        ...prevTeammates,
        {
          fullName: "",
          email: "",
          dateOfBirth: "",
          phoneNumber: "",
          position: "",
        },
      ]);
    } else {
      alert("Вы можете добавить не более 5 участников.");
    }
  };

  const removeTeammate = (index) => {
    setTeammates((prevTeammates) =>
      prevTeammates.filter((_, idx) => idx !== index)
    );
  };

  const setTournamentByHackatonChoosen = (isHackatonChoosen) => {
    if (isHackatonChoosen) {
      return (
        <>
          <div className="formBlock hackhathonRules">
            <p>{/* the text of the rules is posted here */}</p>
          </div>
          <div className="formBlock">
            <div className="hackathonInputWrapper">
              <label className="hackathonLabel" htmlFor="">
                Название команды
              </label>
              <input
                className="formInput"
                type="text"
                onChange={(e) => setHackathonTeamName(e.target.value)}
              />
            </div>
            <div className="hackathonInputWrapper">
              <label className="hackathonLabel" htmlFor="">
                Страна
              </label>
              <input
                className="formInput"
                type="text"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="hackathonInputWrapper">
              <label className="hackathonLabel" htmlFor="">
                Город
              </label>
              <input
                className="formInput"
                type="text"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <>
            <div className="formBlock">
              <div>
                <p className="hackathonLabel">Тематический раздел</p>
                <FormControl fullWidth>
                  <Select
                    labelId="theme-select-label"
                    id="theme-select"
                    onChange={handleThemeChange}
                    value={theme}
                    className="formInputSelect hackathonInputWrapper"
                  >
                    <MenuItem value={"CYBER_SPORT"}>Киберспорт</MenuItem>
                    <MenuItem value={"DESIGN_3D"}>Дизайн и 3D</MenuItem>
                    <MenuItem value={"HACKATHON"}>Хакатон</MenuItem>
                    <MenuItem value={"MOBILOGRAPHY"}>Мобилография</MenuItem>
                    <MenuItem value={"ROBOTICS"}>Робототехника</MenuItem>
                    <MenuItem value={"DRONE_DEMONSTRATION"}>
                      Дрон демонстрация
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            {theme === "HACKATHON" && (
              <div className="formBlock">
                <div>
                  <p className="Выберите свое направление">
                    Выберите свое направление
                  </p>
                  <FormControl fullWidth>
                    <Select
                      labelId="work-select-label"
                      id="work-select"
                      onChange={handleWorkChange}
                      value={work}
                      className="formInputSelect"
                    >
                      <MenuItem value={"BACKEND"}>Backend</MenuItem>
                      <MenuItem value={"FRONTEND"}>Frontend</MenuItem>
                      <MenuItem value={"FULLSTACK"}>Fullstack</MenuItem>
                      <MenuItem value={"ANDROID_IOS"}>Android-IOS</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            )}
            {/* <div className="hackathonResult">
              <p>Результат: {result}</p>
            </div> */}
          </>
          {teammates.map((mate, idx) => (
            <>
              <div className="formBlock">
                <div className="hackathonPerson">
                  <h3 className="personTitle">{idx + 1} человек</h3>
                  <div className="hackathonInputWrapper">
                    <label className="hackathonLabel" htmlFor="#">
                      ФИО
                    </label>
                    <input
                      className="formInput"
                      type="text"
                      id={`fullName_${idx}`}
                      onInput={(e) => {
                        const [field, index] = e.target.id.split("_");
                        setTeammates((prev) => {
                          prev.map((el, idx) => {
                            if (idx == index) {
                              el[field] = e.target.value;
                              return el;
                            }
                            return el;
                          });
                          return prev;
                        });
                      }}
                    />
                  </div>
                  <div className="hackathonInputWrapper">
                    <label className="hackathonLabel" htmlFor="#">
                      Email
                    </label>
                    <input
                      className="formInput"
                      type="text"
                      id={`email_${idx}`}
                      onChange={(e) => emailHandler(e)}
                      onInput={(e) => {
                        const [field, index] = e.target.id.split("_");
                        setTeammates((prev) => {
                          prev.map((el, idx) => {
                            if (idx == index) {
                              el[field] = e.target.value;
                              return el;
                            }
                            return el;
                          });
                          return prev;
                        });
                      }}
                    />
                  </div>
                  <div className="hackathonInputWrapper">
                    <label className="hackathonLabel" htmlFor="#">
                      Дата рождения
                    </label>
                    <input
                      max={"2024-01-01"}
                      min={"1800-01-01"}
                      className="formInput"
                      type="date"
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      id={`dateOfBirth_${idx}`}
                      onInput={(e) => {
                        const [field, index] = e.target.id.split("_");
                        setTeammates((prev) => {
                          prev.map((el, idx) => {
                            if (idx == index) {
                              el[field] = e.target.value;
                              return el;
                            }
                            return el;
                          });
                          return prev;
                        });
                      }}
                    />
                  </div>
                  <div className="hackathonInputWrapper">
                    <label className="hackathonLabel" htmlFor="#">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      name="telphone"
                      placeholder="996 999777666"
                      className="formInput"
                      onChange={(e) => phoneHandle(e)}
                      id={`phoneNumber_${idx}`}
                      value={mate.phoneNumber || ""}
                      onInput={(e) => {
                        const [field, index] = e.target.id.split("_");
                        setTeammates((prev) => {
                          prev.map((el, idx) => {
                            if (idx == index) {
                              el[field] = e.target.value;
                              return el;
                            }
                            return el;
                          });
                          return prev;
                        });
                      }}
                    />
                  </div>
                  <div className="hackathonInputWrapper">
                    <label className="hackathonLabel" htmlFor="#">
                      Позиция в команде
                    </label>
                    <input
                      className="formInput"
                      type="text"
                      id={`position_${idx}`}
                      onInput={(e) => {
                        const [field, index] = e.target.id.split("_");
                        setTeammates((prev) => {
                          prev.map((el, idx) => {
                            if (idx == index) {
                              el[field] = e.target.value;
                              return el;
                            }
                            return el;
                          });
                          return prev;
                        });
                      }}
                    />
                  </div>
                  {teammates.length > 3 && idx >= 3 && (
                    <div className="deleteWrapper">
                      <button
                        className="hacktathonDelete"
                        onClick={() => removeTeammate(idx)}
                      >
                        Удалить
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </>
          ))}

          <div className="plusWrapper">
            <button onClick={addTeammate}>еще</button>
          </div>
          <div className="hackathonSend">
            <div className="regCheck">
              <Checkbox
                onChange={(event) => setChecked(event.target.checked)}
              />
              <p>Я прочел все условия и согласен с ними</p>
            </div>
            <div className="regBtnWrapper">
              {/* <button
                className={`regBbtn regBtn${checked}`}
                disabled={!checked}
                // need to add link way
                onClick={() => sendData("#")}
              >
                Зарегистрироваться
              </button> */}
              <button
                className={`regBbtn regBtn${checked}`}
                disabled={!checked}
                onClick={() => sendData("/hackathon")}
              >
                Зарегистрироваться
              </button>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="regForm_info">
            <div className="formBlock">
              <p className="formInp_label">Имя</p>
              <input
                className="formInput"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formBlock">
              <p className="formInp_label">Фамилия</p>
              <input
                className="formInput"
                type="text"
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="formBlock">
              <p className="formInp_label">Отчество</p>
              <input
                className="formInput"
                type="text"
                onChange={(e) => setFatherName(e.target.value)}
              />
            </div>
            <div className="formBlock">
              <p className="formInp_label">Email</p>
              <p className="message" style={{ color: "red" }}>
                {message}
              </p>
              <input
                className="formInput"
                type="text"
                onChange={(e) => emailHandler(e)}
              />
            </div>
            <div className="formBlock">
              <p className="formInp_label">Страна</p>
              <input
                className="formInput"
                type="text"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="formBlock">
              <p className="formInp_label">Город</p>
              <input
                className="formInput"
                type="text"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="formBlock">
              <p className="formInp_label">Дата рождения</p>
              <input
                max={"2024-01-01"}
                min={"1800-01-01"}
                className="formInput"
                type="date"
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
            <div className="formBlock">
              <p className="formInp_label">Телефон</p>
              <form action="" method="post" id="cusCreate">
                <input
                  type="tel"
                  name="telphone"
                  placeholder="996 999777666"
                  title="Пример:996 999777666"
                  className="formInput"
                  onChange={(e) => phoneHandle(e)}
                  value={PhoneNumber}
                  required
                />
              </form>
            </div>
            {role === "Tournament" ? (
              <>
                <div className="formBlock">
                  <div>
                    <p className="formInp_label">Тематический раздел</p>
                    <FormControl fullWidth>
                      <Select
                        labelId="theme-select-label"
                        id="theme-select"
                        onChange={handleThemeChange}
                        value={theme}
                        className="formInputSelect"
                      >
                        <MenuItem value={"CYBER_SPORT"}>Киберспорт</MenuItem>
                        <MenuItem value={"DESIGN_3D"}>Дизайн и 3D</MenuItem>
                        <MenuItem value={"HACKATHON"}>Хакатон</MenuItem>
                        <MenuItem value={"MOBILOGRAPHY"}>Мобилография</MenuItem>
                        <MenuItem value={"ROBOTICS"}>Робототехника</MenuItem>
                        <MenuItem value={"DRONE_DEMONSTRATION"}>
                          Дрон демонстрация
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>

                {theme === "CYBER_SPORT" && (
                  <>
                    <div className="formBlock">
                      <div>
                        <p className="formInp_label">
                          Выберите свое направление
                        </p>
                        <FormControl fullWidth>
                          <Select
                            labelId="work-select-label"
                            id="work-select"
                            onChange={handleWorkChange}
                            value={work}
                            className="formInputSelect"
                          >
                            <MenuItem value={"COUNTER_STRIKE_2"}>
                              Counter-Strike 2
                            </MenuItem>
                            <MenuItem value={"PUBG"}>PUBG</MenuItem>
                            <MenuItem value={"DOTA_2"}>Dota 2</MenuItem>
                            {/* Добавьте другие направления, если необходимо */}
                          </Select>
                        </FormControl>
                      </div>
                    </div>

                    <div className="formBlock">
                      <div>
                        <p className="formInp_label">Формат участия</p>
                        <FormControl fullWidth>
                          <Select
                            labelId="format-select-label"
                            id="format-select"
                            onChange={handleFormatChange}
                            value={format}
                            className="formInputSelect"
                          >
                            <MenuItem value={"ALONE"}>Одиночное</MenuItem>
                            <MenuItem value={"TEAM"}>Командное</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                  </>
                )}

                {theme === "DESIGN_3D" && (
                  <div className="formBlock">
                    <div>
                      <p className="formInp_label">Выберите свое направление</p>
                      <FormControl fullWidth>
                        <Select
                          labelId="work-select-label"
                          id="work-select"
                          onChange={handleWorkChange}
                          value={work}
                          className="formInputSelect"
                        >
                          <MenuItem value={"DESIGN_3D"}>3D дизайн</MenuItem>
                          <MenuItem value={"MOTION_DESIGN"}>
                            Motion дизайн
                          </MenuItem>
                          <MenuItem value={"UX_UI"}>UX/UI</MenuItem>
                          <MenuItem value={"GRAP_DESIGN"}>
                            Графический дизайнер
                          </MenuItem>
                          <MenuItem value={"VISUAL_3D"}>
                            3D визуализация (интерьер и экстерьер)
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                )}

                {theme === "HACKATHON" && (
                  <div className="formBlock">
                    <div>
                      <p className="formInp_label">Выберите свое направление</p>
                      <FormControl fullWidth>
                        <Select
                          labelId="work-select-label"
                          id="work-select"
                          onChange={handleWorkChange}
                          value={work}
                          className="formInputSelect"
                        >
                          <MenuItem value={"Backend"}>Backend</MenuItem>
                          <MenuItem value={"Frontend"}>Frontend</MenuItem>
                          <MenuItem value={"Fullstack"}>Fullstack</MenuItem>
                          <MenuItem value={"Android-IOS"}>Android-IOS</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                )}
                {/* <div>
                  <p>Результат: {result}</p>
                </div> */}
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="regCheck">
            <Checkbox onChange={(event) => setChecked(event.target.checked)} />
            <p>Я прочел все условия и согласен с ними</p>
          </div>
          <div className="regBtnWrapper">
            <button
              className={`regBbtn regBtn${checked}`}
              // onClick={() => sendData(`register_user/${theme}/`)}
              onClick={() => sendData("/tournament")}
              disabled={!checked}
            >
              Зарегистрироваться
            </button>
          </div>
          {regSt ? (
            <div className="regBtnWrapper">
              <button
                className={`regBbtn regBtntrue`}
                onClick={() => navigate("/")}
                disabled={!checked}
              >
                На главную
              </button>
            </div>
          ) : (
            <></>
          )}
        </>
      );
    }
  };

  return (
    <div className="regBlockbg">
      <div className="container">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          color="white"
        >
          <Link
            underline="hover"
            key="1"
            color="inherit"
            href="/"
            onClick={() => navigate("/")}
          >
            Главная
          </Link>
          ,
          <Link
            underline="hover"
            key="3"
            color="inherit"
            onClick={() => navigate("/choice")}
          >
            Регистрация
          </Link>
        </Breadcrumbs>
        <div className="regForm_block">
          <h2 className="regisTitle">Регистрация</h2>
          {role == "EXPO" ? (
            <>
              <div className="regForm_info">
                <div className="formBlock">
                  <p className="formInp_label">Наименование бренда</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {/* <div className="formBlock">
                  <p className="formInp_label">
                    Полное юридическое наименование организации
                  </p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div> */}
                {/* <div className="formBlock">
                  <p className="formInp_label">Юридический адрес</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setlegAdr(e.target.value)}
                  />
                </div> */}
                {/* <div className="formBlock">
                  <p className="formInp_label">ИНН</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setInn(e.target.value)}
                  />
                </div> */}
                <div className="formBlock">
                  <p className="formInp_label">ФИО</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setFatherName(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Должность</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setjbtitle(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Деятельность компании</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setactivity(e.target.value)}
                  />
                </div>
                {/* <div className="formBlock">
                  <p className="formInp_label">Веб-сайт</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setsiteurl(e.target.value)}
                  />
                </div> */}
                <div className="formBlock">
                  <p className="formInp_label">Email</p>
                  <p className="message" style={{ color: "red" }}>
                    {message}
                  </p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => emailHandler(e)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Телефон</p>
                  <form action="" method="post" id="cusCreate">
                    <input
                      type="tel"
                      name="telphone"
                      placeholder="996 999777666"
                      title="Пример:996 999777666"
                      className="formInput"
                      required
                      onChange={(e) => phoneHandle(e)}
                      value={PhoneNumber}
                    />
                  </form>
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Страна</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <div>
                    <p className="formInp_label">Тематический раздел</p>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        onChange={(event) => setTheme2(event.target.value)}
                        value={theme2}
                        className="formInputSelect"
                      >
                        <MenuItem value={"SERVICE"}>Услуги</MenuItem>
                        <MenuItem value={"PRODUCT"}>Товары</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="formBlock label2">
                  <div>
                    <p className="formInp_label">
                      Опишите товары или услуги компании
                    </p>
                    <textarea
                      className="formTextarea"
                      onChange={(e) => setcompprod(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="regCheck">
                <Checkbox
                  onChange={(event) => setChecked(event.target.checked)}
                />
                <p>Я прочел все условия и согласен с ними</p>
              </div>
              <div className="regBtnWrapper">
                <button
                  className={`regBbtn regBtn${checked}`}
                  disabled={!checked}
                  onClick={() => sendData("/expo")}
                >
                  Зарегистрироваться
                </button>
              </div>
            </>
          ) : role == "Tournament" ? (
            setTournamentByHackatonChoosen(isHackatonChoosen)
          ) : role == "Speaker" ? (
            <>
              <div className="regForm_info">
                <div className="formBlock">
                  <p className="formInp_label">Имя</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Фамилия</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Отчество</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setFatherName(e.target.value)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Email</p>
                  <p className="message" style={{ color: "red" }}>
                    {message}
                  </p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => emailHandler(e)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Страна</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Город</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>{" "}
                <div className="formBlock">
                  <p className="formInp_label">Дата рождения</p>
                  <input
                    max={"2024-01-01"}
                    min={"1800-01-01"}
                    className="formInput"
                    type="date"
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Телефон</p>
                  <form action="" method="post" id="cusCreate">
                    <input
                      type="tel"
                      name="telphone"
                      placeholder="996 999777666"
                      title="Пример:996 999777666"
                      className="formInput"
                      required
                      onChange={(e) => phoneHandle(e)}
                      value={PhoneNumber}
                    />
                  </form>
                </div>{" "}
                <div className="formBlock">
                  <div>
                    <p className="formInp_label">
                      Введите на какую тему хотите выступить
                    </p>
                    <textarea
                      className="formTextarea"
                      onChange={(e) => setSpeech_theme(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="regCheck">
                <Checkbox
                  onChange={(event) => setChecked(event.target.checked)}
                />
                <p>Я прочел все условия и согласен с ними</p>
              </div>
              <div className="regBtnWrapper">
                <button
                  className={`regBbtn regBtn${checked}`}
                  disabled={!checked}
                  onClick={() => sendData("register_user/speaker/")}
                >
                  Зарегистрироваться
                </button>
              </div>
            </>
          ) : role == "Food" ? (
            <>
              <div className="regForm_info">
                <div className="formBlock">
                  <p className="formInp_label">Наименование бренда</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {/* <div className="formBlock">
                  <p className="formInp_label">
                    Полное юридическое наименование организации
                  </p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div> */}
                {/* <div className="formBlock">
                  <p className="formInp_label">Юридический адрес</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setlegAdr(e.target.value)}
                  />
                </div> */}
                {/* <div className="formBlock">
                  <p className="formInp_label">ИНН</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setInn(e.target.value)}
                  />
                </div> */}
                <div className="formBlock">
                  <p className="formInp_label">ФИО</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setFatherName(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Должность</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setjbtitle(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Деятельность компании</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setactivity(e.target.value)}
                  />
                </div>
                {/* <div className="formBlock">
                  <p className="formInp_label">Веб-сайт</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setsiteurl(e.target.value)}
                  />
                </div> */}
                <div className="formBlock">
                  <p className="formInp_label">Email</p>
                  <p className="message" style={{ color: "red" }}>
                    {message}
                  </p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => emailHandler(e)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Телефон</p>
                  <form action="" method="post" id="cusCreate">
                    <input
                      type="tel"
                      name="telphone"
                      placeholder="996 999777666"
                      title="Пример:996 999777666"
                      className="formInput"
                      required
                      onChange={(e) => phoneHandle(e)}
                      value={PhoneNumber}
                    />
                  </form>
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Страна</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="formBlock label2 foodTextarea">
                  <div>
                    <p className="formInp_label">
                      Опишите товары или услуги компании
                    </p>
                    <textarea
                      className="formTextarea"
                      onChange={(e) => setcompprod(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="regCheck">
                <Checkbox
                  onChange={(event) => setChecked(event.target.checked)}
                />
                <p>Я прочел все условия и согласен с ними</p>
              </div>
              <div className="regBtnWrapper">
                <button
                  className={`regBbtn regBtn${checked}`}
                  disabled={!checked}
                  onClick={() => sendData("/foodCort")}
                >
                  Зарегистрироваться
                </button>
              </div>
            </>
          ) : role == "Master" ? (
            <>
              <div className="regForm_info">
                <div className="formBlock">
                  <p className="formInp_label">Имя</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Фамилия</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Отчество</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setFatherName(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Email</p>
                  <p className="message" style={{ color: "red" }}>
                    {message}
                  </p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => emailHandler(e)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Страна</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Город</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Дата рождения</p>
                  <input
                    max={"2024-01-01"}
                    min={"1800-01-01"}
                    className="formInput"
                    type="date"
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Телефон</p>
                  <form action="" method="post" id="cusCreate">
                    <input
                      type="tel"
                      name="telphone"
                      placeholder="996 999777666"
                      title="Пример:996 999777666"
                      className="formInput"
                      required
                      onChange={(e) => phoneHandle(e)}
                      value={PhoneNumber}
                    />
                  </form>
                </div>
                <div className="formBlock">
                  <div>
                    <p className="formInp_label">
                      Впишите вид своей деятельность и какую активность хотите
                      продемонстроировать
                    </p>
                    <textarea
                      className="formTextarea"
                      onChange={(e) => setSpeech_theme(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="regCheck">
                <Checkbox
                  onChange={(event) => setChecked(event.target.checked)}
                />
                <p>Я прочел все условия и согласен с ними</p>
              </div>
              <div className="regBtnWrapper">
                <button
                  className={`regBbtn regBtn${checked}`}
                  disabled={!checked}
                  onClick={() => sendData("register_user/masterclass/")}
                >
                  Зарегистрироваться
                </button>
              </div>
            </>
          ) : role == "visitor" ? (
            <>
              <div className="regForm_info">
                <div className="formBlock">
                  <p className="formInp_label">Имя</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Город</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Дата рождения</p>
                  <input
                    max={"2024-01-01"}
                    min={"1800-01-01"}
                    className="formInput"
                    type="date"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Телефон</p>
                  <form action="" method="post" id="cusCreate">
                    <input
                      type="tel"
                      name="telphone"
                      placeholder="996 999777666"
                      title="Пример:996 999777666"
                      className="formInput"
                      required
                      onChange={(e) => phoneHandle(e)}
                      value={PhoneNumber}
                    />
                  </form>
                </div>
                <div className="formBlock">
                  <div>
                    <p className="formInp_label">
                      Впишите вид своей деятельности и какую активность хотите
                      продемонстрировать
                    </p>
                    <textarea
                      className="formTextarea"
                      onChange={(e) => setVisitorTheme(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="regCheck">
                <Checkbox
                  onChange={(event) => setChecked(event.target.checked)}
                />
                <p>Я прочел все условия и согласен с ними</p>
              </div>
              <div className="regBtnWrapper">
                <button
                  className={`regBbtn regBtn${checked}`}
                  disabled={!checked}
                  onClick={() => sendData("/visitor")}
                >
                  Зарегистрироваться
                </button>
              </div>
            </>
          ) : role === "partners" ? (
            <>
              <div className="regForm_info">
                <div className="formBlock">
                  <p className="formInp_label">Название компании</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setPartnersCompanyName(e.target.value)}
                  />
                </div>

                <div className="formBlock">
                  <p className="formInp_label">Имя</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Должность</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setjbtitle(e.target.value)}
                  />
                </div>
                <div className="formBlock">
                  <p className="formInp_label">Телефон</p>
                  <form action="" method="post" id="cusCreate">
                    <input
                      type="tel"
                      name="telphone"
                      placeholder="996 999777666"
                      title="Пример:996 999777666"
                      className="formInput"
                      required
                      onChange={(e) => phoneHandle(e)}
                      value={PhoneNumber}
                    />
                  </form>
                </div>
                <div className="formBlock">
                  <div>
                    <p className="formInp_label">Тематический раздел</p>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        onChange={(event) => setTheme2(event.target.value)}
                        value={theme2}
                        className="formInputSelect"
                      >
                        <MenuItem
                          value={
                            "BANNER_AND_OUTDOOR_ADVERTISING_ON_LED_SCREENS"
                          }
                        >
                          Баннерная и наружная реклама, реклама на LED экранах
                        </MenuItem>
                        <MenuItem
                          value={
                            "SPONSORSHIP_OF_EVENTS_ACTIVITIES_AND_COMPETITIONS_SERVICES"
                          }
                        >
                          Спонсорство мероприятий, активностей и конкурсовслуги
                        </MenuItem>
                        <MenuItem value={"MERCHANDISING_AND_PRINTED_MATERIALS"}>
                          Мерчандайзинг и печатная продукция
                        </MenuItem>
                        <MenuItem value={"BRANDING_OF_ZONES_AND_SITES"}>
                          Брендирование зон и площадок
                        </MenuItem>
                        <MenuItem value={"EXHIBITION_ZONES_AND_DISPLAY_STANDS"}>
                          Экспозиционные зоны и демонстрационные стенды
                        </MenuItem>
                        <MenuItem
                          value={"SPONSORSHIP_INFRASTRUCTURE_AND_LOGISTICS"}
                        >
                          Спонсорство инфраструктуры и логистики
                        </MenuItem>
                        <MenuItem value={"SPEAKER_PARTNERSHIP"}>
                          Спикерское партнёрство
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                {/* <div className="formBlock">
                  <p className="formInp_label">Город</p>
                  <input
                    className="formInput"
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div> */}
                {/* <div className="formBlock">
                  <p className="formInp_label">Дата рождения</p>
                  <input
                    max={"2024-01-01"}
                    min={"1800-01-01"}
                    className="formInput"
                    type="date"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div> */}
                {/* <div className="formBlock"> */}
                {/* <div>
                    <p className="formInp_label">
                      Впишите вид своей деятельности и какую активность хотите
                      продемонстрировать
                    </p>
                    <textarea
                      className="formTextarea"
                      onChange={(e) => setVisitorTheme(e.target.value)}
                    ></textarea>
                  </div> */}
                {/* </div> */}
              </div>
              <div className="regCheck">
                <Checkbox
                  onChange={(event) => setChecked(event.target.checked)}
                />
                <p>Я прочел все условия и согласен с ними</p>
              </div>
              <div className="regBtnWrapper">
                <button
                  className={`regBbtn regBtn${checked}`}
                  disabled={!checked}
                  onClick={() => sendData("/partner")}
                >
                  Зарегистрироваться
                </button>
              </div>
            </>
          ) : (
            <div className="notFound_block">
              <img
                loading="lazy"
                src={not404}
                alt=""
                className="notFound_img"
              />
              <h3>
                Страница, которую вы запрашиваете не найдена, не существует либо
                временно не доступна
              </h3>
              <button onClick={() => navigate("/")} className="notFound_btn">
                Перейти на главную
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
