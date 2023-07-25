/*
 * @Author: ff-chen
 * @Date: 2023-06-26 14:10:03
 * @FilePath: /react-tailwindcss/src/pages/home/index.js
 * @Description:首页
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { useState } from "react";
import { useMount } from "ahooks";
import SearchBar from "@/components/common/SearchBar";
import HomeSwiper from "@/components/common/Swiper";
import InfoNav from "@/components/home/InfoNav";
import LeadNews from "@/components/home/LeadNews";
import RecentOrder from "@/components/home/RecentOrder";
import HomeBanner from "@/components/common/Banner";
import HomeNav from "@/components/home/HomeNav";
import { getBanner } from "@/apis/home";

export default function Home() {
  let [imageUrl, setImageUrl] = useState("");
  let [sliderList, setSliderList] = useState([]);

  function getSliderImage(val) {
    setImageUrl(val);
  }

  // 获取轮播图数据
  async function getSwiper() {
    let res = await getBanner({ pageCode: 11303 });
    let { code, data } = res;
    if (code === 1) {
      setSliderList(
        data.map((item) => ({
          imageUrl: item.imgUrlWx,
          title: item.pageName,
        }))
      );
      setImageUrl(data[0]["imgUrlWx"]);
    }
  }

  useMount(async () => {
    getSwiper();
  });

  return (
    <div className={`pt-[30px] px-4`}>
      <div className="w-full h-full absolute overflow-hidden left-0  top-0 z-[1]">
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className="w-full h-full box-border bg-no-repeat bg-[center_top] blur-2xl scale-[1.7] opacity-90"
        ></div>
      </div>
      <div className="relative z-[9]">
        <SearchBar />
        <HomeSwiper getImage={getSliderImage} sliderList={sliderList} />
        <InfoNav />
        <LeadNews />
        <RecentOrder />
        <HomeBanner id={11306} />
        <HomeNav />
      </div>
    </div>
  );
}
