import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import mockData from "../../../public/data/mockData.json";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { useEffect, useState } from "react";
import clsx from "clsx";
import { twMerge } from 'tailwind-merge'

const cards = mockData.brandshop.cards;

  const getSwiperConfig = {
  loop: true,
  autoplay:{
    delay: 2500,
  },
  loopAdditionalSlides: 2, // 여유 슬라이드 복제
  slidesPerView: "auto",
  centeredSlides: true,
  // watchSlidesProgress: true,
  spaceBetween: 16,
  wrapperTag: "ul",
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination:{
    type: 'progressbar',
  }
}

const BrandShop = () => {
  const [isPressed, setIsPressed] = useState(true);
  const [swiper, setSwiper] = useState(null);
  const handleClick = () => {
    setIsPressed((prev)=> !prev);
    isPressed ? swiper.autoplay.stop() : swiper.autoplay.start();
    console.log(swiper.slides.length)
  }
	return (
    <div className="box__banner relative">
      <button className={clsx(twMerge('button__play-control absolute bottom-[44px] right-[calc(50%-190px)] z-10 w-[40px] h-[40px]', isPressed || 'bg-amber-500'))} aria-pressed={isPressed} onClick={handleClick}>
        <span className="for-a11y">자동재생</span>
      </button>
      <Swiper {...getSwiperConfig} className="group overflow-visible relative max-w-[1200px] pb-[30px]!" onBeforeInit={(swiper) => {
    swiper.params.loopedSlides = cards.length;
  }} modules={[Autoplay, Navigation, Pagination]} onSwiper={setSwiper}>
      {cards.map((card)=>{
        const {cardId, title, text1, text2, imageUrl, landingUrl} = card;
        return (
          <SwiperSlide tag="li" key={cardId}>
            <a className="link block overflow-hidden relative rounded-[8px] w-full h-full" href={landingUrl}>
              <img src={imageUrl} alt="" className="image w-full h-full object-cover" />
              <div className="box__text-wrap opacity-0 absolute b-[38px] px-[40px]">
                <strong className="text__title text-[28px] font-bold">{title}</strong>
                {text1 && 
                  <p className="text text-[15px] text-[#424242]">
                    {text1}
                    {text2 && <><br />{text2}</>} 
                  </p>
                }
              </div>
            </a>
          </SwiperSlide>
        )
      })}
      <button className="swiper-button-prev text-white opacity-0 group-hover:opacity-100" aria-label="이전 배너로 가기"></button>
      <button className="swiper-button-next text-white opacity-0 group-hover:opacity-100" aria-label="다음 배너로 가기"></button>
    </Swiper>
    </div>
    
  )
}

export default BrandShop;