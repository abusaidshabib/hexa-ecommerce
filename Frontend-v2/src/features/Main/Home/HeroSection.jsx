import { useState } from "react";
import { images } from "../../../json/main";
import "../../../styles/home.css";

const HeroSection = () => {
  return (
    <div className="p-3">
      <div className="grid grid-cols-5 gap-3">
        <div className="col-span-3 slider">
          {images.map((data, index) => (
            <div
              key={index}
              className="slide"
              style={{
                backgroundImage: `url(${data.image}),linear-gradient(to right, rgba(0, 0, 0, 0.678), rgba(0, 0, 0, 0.404)`,
                animationDelay: `-${index * 2.5}s`,
                backgroundBlendMode: "overlay"
              }}
            >
                <p>{data?.title}</p>
            </div>
          ))}
        </div>
        <div className="col-span-2 w-full h-full">
          <img
            src={images[2].image}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HeroSection;
