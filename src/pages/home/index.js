/*
 * @Author: ff-chen
 * @Date: 2023-06-26 14:10:03
 * @FilePath: /qq-video/src/pages/home/index.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { useState } from "react";
import SearchBar from "@/components/common/SearchBar";
import HomeSlider from "@/components/home/Slider";
import InfoNav from "@/components/home/InfoNav";
import LeadNews from "@/components/home/LeadNews";
import RecentOrder from "@/components/home/RecentOrder";
import HomeBanner from "@/components/common/Banner";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");

  function getSliderImage(val) {
    setImageUrl(val);
  }

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
        <HomeSlider getImage={getSliderImage} />
        <InfoNav />
        <LeadNews />
        <RecentOrder />
        <HomeBanner id={11306}/>
      </div>
    </div>
  );
}
