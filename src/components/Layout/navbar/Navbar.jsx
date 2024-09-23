import React, { useState } from "react";
import logo from "../../../assets/partnerslogo/mer.png";
import irsenLogo from "../../../assets/partnerslogo/irsen.png";
import peaksoftLogo from "../../../assets/partnerslogo/peaksoft.svg";

import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import menuicon from "../../../assets/menu.svg";

import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [arrowSt, setArrowSt] = useState(false);
  const [arrowSt1, setArrowSt1] = useState(false);
  const [arrowSt2, setArrowSt2] = useState(false);
  const [arrowSt3, setArrowSt3] = useState(false);
  const [arrowDrop1, setDrop1] = useState(false);
  const [arrowDrop2, setDrop2] = useState(false);
  const [arrowDrop3, setDrop3] = useState(false);
  const [arrowDrop4, setDrop4] = useState(false);

  const [open2, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="bg2">
      <div className="container">
        <div className="navBlock_main">
          <div className="headerLogo" onClick={() => navigate("/")}>
            <img src={logo} alt="error" className="navBlock_logo bish" />
            <img src={peaksoftLogo} alt="error" className="navBlock_logo" />
            <img src={irsenLogo} alt="error" className="navBlock_logo irsen" />
          </div>
          {/* desktop navbar */}
          <div className="navBlock_mini">
            <div
              className="navBlock_mini2"
              onClick={() => setArrowSt(!arrowSt)}
            >
              <a href="/#about" className="navBlock_nav">
                О мероприятии
              </a>
            </div>
          </div>
          <div className="navBlock_mini">
            <div
              className="navBlock_mini2"
              onClick={() => setArrowSt1(!arrowSt1)}
            >
              <a href="/#participants" className="navBlock_nav">
                Участникам
              </a>
            </div>
          </div>
          <div className="navBlock_mini">
            <div
              className="navBlock_mini2"
              onClick={() => setArrowSt2(!arrowSt2)}
            >
              <a className="navBlock_nav" onClick={() => navigate("/program")}>
                Программа
              </a>
            </div>
          </div>
          <div className="navBlock_mini">
            <div
              className="navBlock_mini2"
              onClick={() => setArrowSt3(!arrowSt3)}
            >
              <a onClick={() => navigate("/expo")} className="navBlock_nav">
                Спонсорам и партнёрам
              </a>
            </div>
          </div>
          <div className="navDrawer">
            <Button onClick={toggleDrawer(true)}>
              <img
                loading="lazy"
                src={menuicon}
                alt="error"
                style={{ width: "2.6rem" }}
              />
            </Button>
            <Drawer anchor={"right"} open={open2} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(true)}
              >
                <List>
                  <div
                    className="navDrop_block"
                    onClick={() => setDrop1(!arrowDrop1)}
                  >
                    <a href="/#about" className="navDropdown">
                      О мероприятии
                    </a>
                  </div>
                </List>
              </Box>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(true)}
              >
                <List>
                  <div
                    className="navDrop_block"
                    onClick={() => setDrop2(!arrowDrop2)}
                  >
                    <a href="/#participants" className="navDropdown">
                      Участникам
                    </a>
                  </div>
                </List>
              </Box>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(true)}
              >
                <List>
                  <div
                    className="navDrop_block"
                    onClick={() => setDrop3(!arrowDrop3)}
                  >
                    <a
                      className="navDropdown"
                      onClick={() => navigate("/program")}
                    >
                      Программа
                    </a>
                  </div>
                </List>
              </Box>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(true)}
              >
                <List>
                  <div
                    className="navDrop_block"
                    onClick={() => setDrop4(!arrowDrop4)}
                  >
                    <span
                      onClick={() => navigate("/expo")}
                      className="navDropdown"
                    >
                      Спонсорам и партнёрам
                    </span>
                  </div>
                </List>
              </Box>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(true)}
              ></Box>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
