import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderProps } from "../../types/interfaces";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper";
import { v4 as uuidv4 } from "uuid";

import "./slider.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider: React.FC<SliderProps> = ({ img }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();
  const swiper = thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null;

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        pagination={{ clickable: true }}
        thumbs={{ swiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="mySwiper2"
      >
        {img.map(({ url }) => (
          <SwiperSlide key={uuidv4()}>
            <img src={url} alt="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={30}
        slidesPerView={4}
        freeMode={false}
        watchSlidesProgress={true}
        scrollbar={{ hide: true }}
        slidesPerGroup={2}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="mySwiper"
      >
        {img.map(({ url }) => (
          <SwiperSlide key={uuidv4()}>
            <img src={url} alt="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
