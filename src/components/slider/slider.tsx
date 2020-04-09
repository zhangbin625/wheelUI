import React, { useEffect, useState } from "react";
import { SliderContainer } from "./style";
import "swiper/css/swiper.css";
import Swiper from "swiper";
interface Props {
  bannerList?: any;
}

const Slider = (props: Props) => {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  const { bannerList } = props;

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let sliderSwiper: any = new Swiper(".slider-container", {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: ".swiper-pagination" },
      });
      setSliderSwiper(sliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);

  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {bannerList.map((slider: any) => {
            return (
              <div className="swiper-slide">
                <div className="slider-nav">
                  <img
                    className="swiper-img"
                    src={slider.imageUrl}
                    alt="推荐"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  );
};

export default React.memo(Slider);
