/*
 * @Author: ff-chen
 * @Date: 2023-07-11 16:11:05
 * @FilePath: /qq-video/src/components/common/SearchBar/index.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { useState } from "react";
import { useMount } from "ahooks";
import { useNavigate } from "react-router-dom";
import { BsController, BsDownload, BsClock, BsSearch } from "react-icons/bs";

export default function SearchBar() {
  const searchIconColor = "#fff";
  const rightIconColor = "#000";
  const rightIconSize = 22;
  const navigate = useNavigate();
  let [searchTxt, setSearchTxt] = useState(null);

  useMount(() => {
    setSearchTxt("输出内容！");
  });

  return (
    <div className="flex flex-row box-border w-full items-center">
      <div
        className="flex-1 h-[32px] border-none rounded-full mr-[20px] flex flex-row items-center gap-[10px] pl-[10px] bg-[#fafafa]/50"
        onClick={() => navigate("/search")}
      >
        <BsSearch color={searchIconColor} />
        <span className="text-sm text-white">{searchTxt}</span>
      </div>
      <div className="flex flex-row gap-[10px]">
        <BsController size={rightIconSize} color={rightIconColor} />
        <BsDownload size={rightIconSize} color={rightIconColor} />
        <BsClock size={rightIconSize} color={rightIconColor} />
      </div>
    </div>
  );
}
