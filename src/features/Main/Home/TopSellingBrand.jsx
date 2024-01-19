import { Link } from "react-router-dom";
import ProductCard from "../../../components/ProductCard";
import { products } from "../../../json/product";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ImageWithText from "../../../components/ImageWithText";
import { collection2 } from "../../../json/main";

const TopSellingBrand = () => {
  return (
    <div className="py-12 relative px-20">
      <p className="text-2xl pb-5 font-semibold">Top Selling Brands</p>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        navigation={{
          nextEl: ".swiper-but-next",
          prevEl: ".swiper-but-prev",
          disabledClass: "swiper-button-disabled",
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="grid grid-cols-5 gap-5 pt-8 slide-under"
      >
        {products.map((data) => (
          <SwiperSlide key={data?.id}>
            <ProductCard product={data} />
            <Link className="select-none">
              <div className="py-5">
                <p className="text-sm">{data?.name}</p>
                <p className="text-sm font-bold">${data?.price}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <FaArrowLeft className="swiper-but-prev text-dark1 text-xl" />
        <FaArrowRight className="swiper-but-next text-dark1 text-xl" />
      </Swiper>
      <div className="grid grid-cols-2 gap-5">
        {collection2.map((data, index) => (
          <ImageWithText key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default TopSellingBrand;
