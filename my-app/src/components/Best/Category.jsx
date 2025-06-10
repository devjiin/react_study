import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
// import 'swiper/modules/navigation.css';

const getSwiperConfig = () => ({
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 18,
  wrapperTag: "ul",
});

const Category = ({ data }) => {
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
          <Swiper {...getSwiperConfig()} modules={[Navigation]}>
            {data.map((item, idx) => {
              const { groupName, imageUrl } = item || {};
              return (
                <SwiperSlide>
                  <a href="#" className="link__category" key={idx}>
                    <span className="box__thumbnail">
                      <img src={imageUrl} alt="" className="image" />
                    </span>
                    <span className="text">{groupName}</span>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Category;
