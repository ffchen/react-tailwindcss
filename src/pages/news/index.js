/*
 * @Author: ff-chen
 * @Date: 2023-07-14 10:20:43
 * @FilePath: /react-tailwindcss/src/pages/news/index.js
 * @Description:资讯首页
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { useState, useRef, useEffect } from "react";
import { useMount } from "ahooks";
import SearchBar from "@/components/common/SearchBar";
import NewsNav from "@/components/news/NewsNav";
import NewsSwiper from "@/components/common/Swiper";
import NewsInfo from "@/components/news/NewsInfo";
import FreightRate from "@/components/news/FreightRate";
import NewsList from "@/components/news/NewsList";
import { getBanner } from "@/apis/home";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");
  const [sliderList, setSliderList] = useState([]);
  const [isFixed, setIsFixed] = useState(false);
  const headerRef = useRef(null);

  function getSliderImage(val) {
    setImageUrl(val);
  }

  // 获取轮播图数据
  async function getSwiperDate() {
    let res = await getBanner({ pageCode: 11302 });
    let { code, data } = res;
    if (code === 1) {
      setSliderList(
        data.map((item) => ({
          imageUrl: item.imgUrl,
          title: item.pageName,
        }))
      );
      setImageUrl(data[0]["imgUrl"]);
    }
  }

  useMount(async () => {
    getSwiperDate();
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`pt-[30px] px-4`}>
      <div className="w-full h-full absolute overflow-hidden left-0  top-0 z-[1]">
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className="w-full h-full box-border bg-no-repeat bg-[center_top] blur-2xl scale-[1.7] opacity-90"
        ></div>
      </div>
      <div className="relative z-[9]">
        <div
          ref={headerRef}
          className={
            isFixed
              ? "w-full box-border fixed bg-[#261448]/60 backdrop-blur-md shadow-sm shadow-[#261448]/50 left-0 top-0 z-[1] p-4 transition-all"
              : ""
          }
        >
          <SearchBar />
          <NewsNav />
        </div>
        <NewsSwiper getImage={getSliderImage} sliderList={sliderList} />
        <NewsInfo />
        <FreightRate />
        <NewsList />
      </div>
    </div>
  );
}
