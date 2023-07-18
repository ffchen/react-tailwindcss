/*
 * @Author: ff-chen
 * @Date: 2023-07-12 09:15:23
 * @FilePath: /react-tailwindcss/src/components/common/Swiper.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function HomeSlider(props) {
  const { getImage, sliderList } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul className="w-full flex justify-center absolute bottom-[15px]">
          {dots.map((dot, index) => (
            <li
              key={index}
              className={[
                `rounded-full mx-[2px] h-[6px]`,
                dot.props.className
                  ? `w-[12px] bg-[#f8d748]`
                  : `w-[6px] bg-[#d9d9d9]`,
              ].join(" ")}
            ></li>
          ))}
        </ul>
      </div>
    ),

    afterChange: (currentSlide) => {
      getImage(sliderList[currentSlide]["imageUrl"]);
    },
  };

  return (
    <div className="mt-4 rounded-md relative h-[150px] overflow-hidden">
      <Slider {...settings}>
        {sliderList.map((item, index) => (
          <div key={index}>
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-[150px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
