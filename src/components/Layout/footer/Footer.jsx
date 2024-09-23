import logo from "../../../assets/logo.svg";
import what from "../../../assets/footer/whatsapp.svg";
import inst from "../../../assets/footer/instagram.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="footerBlock">
        <div className="footerInfo_Block">
          <div className="footerInfo">
            <img loading="lazy" src={logo} alt="" className="footerLogo" />
            <div className="footerSocial_Block">
              <a href="https://wa.me/996990808637" target="_blank">
                <img
                  loading="lazy"
                  src={what}
                  alt=""
                  className="footerSocial"
                />
              </a>
              <a
                href="https://www.instagram.com/itfest.kg?igsh=enBpcmx3MHpzdnZk"
                target="_blank"
              >
                <img
                  loading="lazy"
                  src={inst}
                  alt=""
                  className="footerSocial"
                />
              </a>
            </div>
          </div>
          <p>© 2024 ItFest Все права зашищены</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
