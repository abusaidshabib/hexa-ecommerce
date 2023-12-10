/* eslint-disable react/prop-types */
import {
  Navigation,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Profiler } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Swiper
        className="w-full h-full"
        modules={[Navigation, Scrollbar, A11y, EffectFade]}
        spaceBetween={30}
        effect="fade"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {product?.images?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="h-[325px] p-14 bg-light3 rounded-lg flex justify-center"
          >
            <Link>
              <img className="h-full object-contain" src={data} alt="" />
            </Link>
          </SwiperSlide>
        ))}
        <IoIosArrowBack className="swiper-button-prev bg-white rounded text-light2" />
        <IoIosArrowForward className="swiper-button-next bg-white rounded text-light2" />
      </Swiper>
    </div>
  );
};

export default ProductCard;
