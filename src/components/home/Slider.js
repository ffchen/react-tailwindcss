/*
 * @Author: ff-chen
 * @Date: 2023-07-12 09:15:23
 * @FilePath: /qq-video/src/components/home/Slider.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { useState } from "react";
import { useMount } from "ahooks";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { getBanner } from "@/apis/home";

export default function HomeSlider(props) {
  const {getImage} =   props
  const [sliderList, setSliderList] = useState([]);
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
      getImage(sliderList[currentSlide]['imgUrlWx']);
    },
  };

  // 获取轮播图数据
  async function getSwiperDate() {
    let res = await getBanner({ pageCode: 11303 });
    if (res.code === 1) return res.data;
  }

  useMount(async () => {
    let images = await getSwiperDate();
    getImage(images[0]['imgUrlWx']);
    setSliderList([...images]);
  });

  return (
    <div className="mt-4 rounded-md relative overflow-hidden">
      <Slider {...settings}>
        {sliderList.map((item) => (
          <div key={item.pageName}>
            <img src={item.imgUrlWx} alt={item.pageName} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
