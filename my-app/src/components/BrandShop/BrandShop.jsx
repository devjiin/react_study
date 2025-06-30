import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import mockData from "../../../public/data/mockData.json";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { useState } from "react";
import clsx from "clsx";

const getSwiperConfig = {
  loop: true,
  autoplay:{
    delay: 2500,
  },
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 16,
  wrapperTag: "ul",
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination:{
    type: 'progressbar',
  } 
};

const cards = mockData.brandshop.cards;

const BrandShop = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [swiper, setSwiper] = useState(null);
  const handleClick = () => {
    setIsPressed((prev)=> !prev);
    isPressed ? swiper.autoplay.start() : swiper.autoplay.stop();
  }
	return (
    <div className="box__banner">
      <button className={clsx('button__play-control',isPressed && 'button__play--pause')} aria-expanded={isPressed} onClick={handleClick}>
        <span className="for-a11y">자동재생</span>
      </button>
      <Swiper {...getSwiperConfig} modules={[Autoplay, Navigation, Pagination]} onSwiper={setSwiper}>
      {cards.map((card)=>{
        const {cardId, title, text1, text2, imageUrl, landingUrl} = card;
        return (
          <SwiperSlide tag="li" key={cardId}>
            <a className="link" href={landingUrl}>
              <img src={imageUrl} alt="" className="image" />
              <div className="box__text-wrap">
                <strong className="text__title">{title}</strong>
                {text1 && 
                  <p className="text">
                    {text1}
                    {text2 && <><br />{text2}</>}
                  </p>
                }
              </div>
            </a>
          </SwiperSlide>
        )
      })}
      <button className="swiper-button-prev" aria-label="이전 배너로 가기"></button>
      <button className="swiper-button-next" aria-label="다음 배너로 가기"></button>
    </Swiper>
    </div>
    
  )
}

export default BrandShop;