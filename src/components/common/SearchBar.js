/*
 * @Author: ff-chen
 * @Date: 2023-07-11 16:11:05
 * @FilePath: /react-tailwindcss/src/components/common/SearchBar.js
 * @Description: 顶部搜索栏
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FcMediumPriority, FcOnlineSupport } from "react-icons/fc";
import { useDispatch } from "react-redux";

export default function SearchBar() {
  const searchIconColor = "#fff";
  const rightIconColor = "#fff";
  const rightIconSize = 26;
  let [searchTxt, setSearchTxt] = useState(null);
  const navigate = useNavigate();
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
        <FcMediumPriority size={rightIconSize} color={rightIconColor} />
        <FcOnlineSupport size={rightIconSize} color={rightIconColor} className="animate-[wiggle_1s_ease-in-out_infinite]"/>
      </div>
    </div>
  );
}
