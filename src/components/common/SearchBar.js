/*
 * @Author: ff-chen
 * @Date: 2023-07-11 16:11:05
 * @FilePath: /react-tailwindcss/src/components/common/SearchBar.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsController, BsDownload, BsClock, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";

export default function SearchBar(props) {
  const searchIconColor = "#fff";
  const rightIconColor = "#fff";
  const rightIconSize = 22;
  const navigate = useNavigate();
  let [searchTxt, setSearchTxt] = useState(null);
  const dispatch = useDispatch();

  // 模拟 获取 热门搜索词
  function getHotLabel() {
    const hotLabels = ["船查查", "船货保险", "航运圈", "近期成交", "海运头条"];
    const len = hotLabels.length;
    let randomNum = Math.floor(Math.random() * len);
    setSearchTxt(hotLabels[randomNum]);
  }

  // store
  function goSearch() {
    dispatch({ type: "SET_HOT_WORDS", payload: searchTxt });
    navigate("/search");
  }

  useEffect(() => {
    getHotLabel();
    const interval = setInterval(getHotLabel, 5000); // 每隔 5 秒重新获取热搜词
    return () => clearInterval(interval); // 组件卸载时清除定时器
  }, []);

  return (
    <div className="flex flex-row box-border w-full items-center">
      <div
        className="flex-1 h-[32px] border-none rounded-full mr-[20px] flex flex-row items-center gap-[10px] pl-[10px] bg-[#fafafa]/50"
        onClick={() => goSearch()}
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
