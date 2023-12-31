/*
 * @Author: ff-chen
 * @Date: 2023-07-12 16:07:55
 * @FilePath: /react-tailwindcss/src/components/home/LeadNews.js
 * @Description:首页海运头条模块
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import { useState } from "react";
import { useMount } from "ahooks";
import { useNavigate } from "react-router-dom";
import { getNewsInfoListNew } from "@/apis/news";
import { splitData } from "@/utils/tools";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function LeadNews() {
  const [newsList, setNewsList] = useState([]);
  const navigate = useNavigate();
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

  // 获取资讯数据
  async function getNews() {
    let params = {
      rows: 20,
      page: 1,
      typeId: 1,
    };
    let res = await getNewsInfoListNew(params);
    if (res.code === 1) setNewsList(splitData(res.data.list, 2));
  }

  useMount(() => getNews());

  return (
    <div className="mt-3 w-full h-[74px] bg-white rounded-md flex flex-row items-center px-2">
      <div className="w-[45px] flex flex-col justify-center items-center mr-3">
        <span className="text-center font-['FZJW']  flex-1 mt-[4px]">
          海运
        </span>
        <span className="text-center text-[#ff0000] font-['FZJW'] flex-1">
          头条
        </span>
      </div>
      <div className="flex-1 h-[60px] overflow-hidden">
        <Slider {...settings}>
          {newsList.map((item, index) => (
            <div key={index}>
              <div className="flex flex-row">
                <div className="flex-1 flex flex-col overflow-hidden mr-2">
                  {item.map((newsItem) => (
                    <div
                      key={newsItem.id}
                      className="w-full h-[30px] leading-[30px] overflow-hidden text-sm text-ellipsis whitespace-nowrap"
                      onClick={() => navigate(`/news/${newsItem.id}`)}
                    >
                      {newsItem.title}
                    </div>
                  ))}
                </div>
                <div className="w-[80px] h-[60px] flex flex-col items-center justify-center">
                  <img
                    src={item[0]["imgUrl"]}
                    alt=""
                    className="w-full h-full"
                    onClick={() => navigate(`/news/${item[0]["id"]}`)}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
