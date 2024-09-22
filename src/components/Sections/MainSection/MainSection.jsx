// import React from "react";
// import inno from "../../../assets/partnerslogo/inno.svg";
import mer from "../../../assets/partnerslogo/mer.png";
import kia from "../../../assets/partnerslogo/kial.svg";
import jkm from "../../../assets/partnerslogo/jkm.svg";
import civrokom from "../../../assets/partnerslogo/civrokom.svg";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import "./MainSection.css";
import {useNavigate} from "react-router-dom";

import newBugu from "../../../assets/partnerslogo/newBugu.png";
import kite from "../../../assets/partnerslogo/kite.png";
import green from "../../../assets/partnerslogo/green.png";
import muit from "../../../assets/partnerslogo/muit.png";
import fashionStudio from "../../../assets/partnerslogo/fashionStudio.png";
import foel from "../../../assets/partnerslogo/foel.png";
import irsan from "../../../assets/partnerslogo/irsen.png";
import hoster from "../../../assets/partnerslogo/hoster.png";
import inLab from "../../../assets/partnerslogo/inLab.png";
import vilar from "../../../assets/partnerslogo/vilar.png";
import gos from "../../../assets/partnerslogo/gos.png";
import borsan from "../../../assets/partnerslogo/borsan.png";
import remax from "../../../assets/partnerslogo/remax.svg";
import neko from "../../../assets/partnerslogo/neko.svg";
import metaLogo from "../../../assets/partnerslogo/metaLogo.svg";
import peaksoftLogo from "../../../assets/partnerslogo/peaksoft.svg";
import crystalLogo from '../../../assets/partnerslogo/crystal.jpg'
import megaLogo from '../../../assets/partnerslogo/mega.svg'
import optimaLogo from '../../../assets/partnerslogo/optimaBank.svg'

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

const sliderData = [
    {
        img: newBugu,
        id: 'e1'
    },
    {
        img: peaksoftLogo,
        id: 'e15'
    },
    {
        img: kite,
        id: 'e2'
    },
    {
        img: green,
        id: 'e3'
    },
    {
        img: muit,
        id: 'e4'
    },
    {
        img: fashionStudio,
        id: 'e5'
    },
    {
        img: foel,
        id: 'e6'
    },
    {
        img: irsan,
        id: 'e7'
    },
    {
        img: hoster,
        id: 'e8'
    },
    {
        img: inLab,
        id: 'e9'
    },
    {
        img: vilar,
        id: 'e10'
    },
    {
        img: gos,
        id: 'e11'
    },
    {
        img: borsan,
        id: 'e12'
    },
    {
        img: remax,
        id: 'e13'
    },
    {
        img: neko,
        id: 'e14'
    },
    {
        img: metaLogo,
        id: 'e15'
    },
    {
        img: crystalLogo,
        id: 'e16'
    },
    {
        img: megaLogo,
        id: 'e16'
    },
    {
        img: optimaLogo,
        id: 'e16'
    },
    {
        img: mer,
        id: 'e17'
    },
    {
        img: kia,
        id: 'e18'
    },
    {
        img: jkm,
        id: 'e19'
    },
    {
        img: civrokom,
        id: 'e20'
    },
]

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
                            <h2 className="itFest">
                                <span>IT</span> FEST
                            </h2>
                            <p className="it2024">2024</p>
                            <p className="cyberKr">
                                CYBER <span>KYRGYZSTAN</span>
                            </p>
                            <p id="firstDate">16 - 17 октября</p>
                        </div>
                        <div className="heroWrapper">
                            <button className="heroReg" onClick={() => navigate("/choice")}>
                                Регистрация
                            </button>
                        </div>
                    </div>

                    <div className="logobigm">
                        <p className="secondBlock_text">
                            МЕРОПРИЯТИЕ ПРОВОДИТСЯ <br/> ПРИ ПОДДЕРЖКЕ
                        </p>
                    </div>
                    <Swiper
                        speed={1500}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        loop={true}
                        freeMode={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
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
                        className="parnterSwiper"
                    >
                        {sliderData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img
                                    src={item.img}
                                    loading="lazy"
                                    alt="error"
                                    className="swiperImgs parnterSwiper  "
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default MainSection;
