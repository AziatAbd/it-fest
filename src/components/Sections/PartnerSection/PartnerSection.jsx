import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import euro from "../../../assets/partnerslogo/europ.svg";
import kg from "../../../assets/partnerslogo/khob.svg";
import ktrk from "../../../assets/partnerslogo/ktr.svg";
import kak from "../../../assets/partnerslogo/kaktus.svg";
import rg from "../../../assets/partnerslogo/rg.svg";
import tv15 from "../../../assets/partnerslogo/tv15.svg";
import tv1 from "../../../assets/partnerslogo/gr2.svg";
import eltr from "../../../assets/partnerslogo/eltr.svg";
import gr from "../../../assets/partnerslogo/gr.svg";
import sxod from "../../../assets/partnerslogo/sxodim.svg";

import "./PartnerSectionn.css";

const PartnerSection = () => {
  return (
    <div className="partnerBlock" id="sponsors">
      <h2 className="partnerBlock_title">Медиа Партнёры</h2>
      <div className="partnerBlock_img">
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
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="parnterSwiper"
        >
          <SwiperSlide>
            <img
              loading="lazy"
              src={euro}
              alt="error"
              className="parnterSwiper"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src={kg}
              alt="error"
              className="swiperImgs imgneko"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={ktrk} alt="error" className="swiperImgs" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={kak} alt="error" className="swiperImgs" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={rg} alt="error" className="swiperImgs" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={tv15} alt="error" className="swiperImgs" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={tv1} alt="error" className="swiperImgs" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={eltr} alt="error" className="swiperImgs" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={gr} alt="error" className="swiperImgs" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src={sxod} alt="error" className="swiperImgs" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PartnerSection;
