/*
 * @Author: ff-chen
 * @Date: 2023-07-14 09:15:55
 * @FilePath: /react-tailwindcss/src/components/home/HomeNav.js
 * @Description: 便捷服务
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { useState } from "react";
import { useMount } from "ahooks";
import { getDictByPid } from "@/apis/home";
import { splitData } from "@/utils/tools";
import BlockTitle from "@/components/common/BlockTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function HomeNav() {
  const [navList, setNavList] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul className="w-full flex justify-center absolute bottom-[5px]">
          {dots.map((dot, index) => (
            <li
              key={index}
              className={[
                `rounded-full mx-[2px] h-[6px]`,
                dot.props.className
                  ? `w-[12px] bg-[#2e90fa]`
                  : `w-[6px] bg-[#d9d9d9]`,
              ].join(" ")}
            ></li>
          ))}
        </ul>
      </div>
    ),
  };

  async function getNavList() {
    let res = await getDictByPid({ dictCodeP: 11400 });
    if (res.code === 1) {
      let list = res.data.map((item) => ({
        id: item.dictCode,
        name: item.note,
        icon: item.iconUrl,
        url: item.dictText,
      }));
      setNavList(splitData(list, 10));
    }
  }

  useMount(async () => {
    getNavList();
  });

  return (
    <div className="mt-3 w-full bg-white rounded-md flex flex-col p-3">
      <BlockTitle title="便捷服务" />
      <div className="mt-[10px]">
        <Slider {...settings}>
          {navList.map((swiper, index) => {
            let items = swiper.map((navItem) => (
              <div
                className="flex flex-col flex-[0_0_20%] justify-center items-center box-border p-[10px_0_10px]"
                key={navItem.id}
              >
                <img
                  src={navItem.icon}
                  alt={navItem.name}
                  className="w-[44px] h-[44px]"
                />
                <em className="not-italic mt-1 text-xs w-full max-w-[60px] h-[30px] text-center overflow-hidden  text-ellipsis whitespace-nowrap">
                  {navItem.name}
                </em>
              </div>
            ));
            return (
              <div key={index}>
                <div className="flex flex-row flex-wrap">{items}</div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
