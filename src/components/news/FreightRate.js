/*
 * @Author: ff-chen
 * @Date: 2023-07-14 14:38:10
 * @FilePath: /react-tailwindcss/src/components/news/FreightRate.js
 * @Description: 运价行情
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { useState } from "react";
import { useMount } from "ahooks";
import { getNewProperties } from "@/apis/news";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { BsChevronRight } from "react-icons/bs";

export default function FreightRate() {
  const [rateList, setRateList] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
  };

  async function getNews() {
    let res = await getNewProperties();
    let {
      code,
      data: { cbcfiInfoListRtnDtos },
    } = res;
    if (code === 1) setRateList(cbcfiInfoListRtnDtos);
  }

  useMount(() => {
    getNews();
  });

  return (
    <div className="mt-3 w-full h-[74px] bg-white rounded-md flex flex-row items-center px-2">
      <div className="w-[45px] flex flex-col justify-center items-center mr-3">
        <span className="text-center font-['FZJW']  flex-1 mt-[4px]">
          运价
        </span>
        <span className="text-center text-[#ff0000] font-['FZJW'] flex-1">
          行情
        </span>
      </div>
      <div className="flex-1 h-[60px] overflow-hidden flex items-center">
        <Slider {...settings}>
          {rateList.map((item, index) => (
            <div key={index} className="flex flex-row w-full relative">
              <div className="flex-1 flex flex-col justify-center text-sm text-[#333]">
                <span>
                  <em className="text-[#000] not-italic font-bold">
                    {item.goodName}
                  </em>{" "}
                  {item.line}({item.exampleShip})
                </span>
                <span className="mt-[5px]">
                  价格:
                  <em
                    className={[
                      "not-italic",
                      +item.upDownVar >= 0 ? `text-[#f00]` : `text-[#05b415]`,
                    ].join(" ")}
                  >
                    {item.price}
                  </em>
                  {item.unit},(涨跌额:
                  <em
                    className={[
                      "not-italic",
                      +item.upDownVar >= 0 ? `text-[#f00]` : `text-[#05b415]`,
                    ].join(" ")}
                  >
                    {item.upDownVar}
                  </em>
                  )
                </span>
              </div>
              <div className="absolute right-0 top-0 h-[40px] flex items-center">
                <BsChevronRight />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
