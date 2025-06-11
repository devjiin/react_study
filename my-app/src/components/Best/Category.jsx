import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import classNames from 'classnames';

import "swiper/css";
import 'swiper/css/navigation';
import { useState } from "react";

const getSwiperConfig = () => ({
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 21,
  wrapperTag: "ul",
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  }
});

const Category = ({ data, isMobile }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const handleClick = (e, idx) =>{
    e.preventDefault();
    setActiveIdx(idx);
  }
  return (
    <div className="box__best-top">
      <div className="box__best-title">
        <h2 className="text__title">G마켓 베스트</h2>
        <div className="box__tooltip-info">
          <button type="button" className="button__tooltip sprite">
            <span className="for-a11y">안내창</span>
          </button>
        </div>
      </div>
      <div className="box__filter-wrap">
        <div className="box__category-filter" role="navigation">
          {isMobile ? <ul className="box__category-inner">
            {data.map((item, idx) => {
              const {groupSubCode, groupName, imageUrl } = item || {};
              return (
                <li className="item-list" key={groupSubCode}>
                  <a href="#" className={classNames('link__category', activeIdx == idx && 'link__category--active')} key={idx} onClick={(e)=>handleClick(e, idx)}>
                    <span className="box__thumbnail">
                      <img src={imageUrl} alt="" className="image" />
                    </span>
                    <span className="text">{groupName}</span>
                  </a>
                </li>
              );
            })}
          </ul> : <Swiper className="box__category-inner" {...getSwiperConfig()} modules={[Navigation]}>
            {data.map((item, idx) => {
              const { groupSubCode, groupName, imageUrl } = item || {};
              return (
                <SwiperSlide key={groupSubCode}>
                  <a href="#" className={classNames('link__category', activeIdx == idx && 'link__category--active')} key={idx} onClick={(e)=>handleClick(e, idx)}>
                    <span className="box__thumbnail">
                      <img src={imageUrl} alt="" className="image" />
                    </span>
                    <span className="text">{groupName}</span>
                  </a>
                </SwiperSlide>
              );
            })}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </Swiper>}
        </div>
      </div>
    </div>
  );
};

export default Category;
