/*
 * @Author: ff-chen
 * @Date: 2023-07-13 17:07:25
 * @FilePath: /react-tailwindcss/src/components/common/Banner.js
 * @Description: 
 * Copyright (c) 2023 by ff-chen, All Rights Reserved. 
 */
import React, { useState } from "react";
import { useMount } from "ahooks";
import { getBanner } from "@/apis/home";

export default function HomeBanner(props) {
  const [bannerObj, setBannerObj] = useState({});

  const getBannerDate = async () => {
    let { id } = props;
    let res = await getBanner({ pageCode: id });
    let { code, data } = res;
    if (code === 1) {
      setBannerObj(data?.length > 0 ? data[0] : {});
    }
  };

  useMount(() => {
    getBannerDate();
  });

  return (
    <div className="mt-3 w-full bg-white rounded-md">
      <img src={bannerObj.imgUrlWx} alt={bannerObj.pageName} />
    </div>
  );
}
