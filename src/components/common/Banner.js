import React, { useState } from "react";
import { useMount } from "ahooks";
import { getBanner } from "@/apis/home";

export default function HomeBanner(props) {
  const [bannerObj, setBannerObj] = useState({});

  const getBannerDate = async () => {
    let { id } = props;
    let res = await getBanner({ pageCode: id });
    if (res.code === 1) {
      setBannerObj(res.data?.length > 0 ? res.data[0] : {});
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
