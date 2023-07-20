/*
 * @Author: ff-chen
 * @Date: 2023-07-17 13:57:08
 * @FilePath: /react-tailwindcss/src/pages/search/index.js
 * @Description:搜索页
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsSearch, BsFillTrashFill } from "react-icons/bs";

export default function SearchPage(props) {
  const inputRef = useRef(null);
  const [hotLabel, setHotLabel] = useState("");
  const {
    hotWord: { hotWord },
  } = useSelector((state) => state);

  function handleChange({ target: { value } }) {
    setHotLabel(value);
  }
  useEffect(() => {
    inputRef.current.focus();
    setHotLabel(hotWord);
  }, [hotWord]);

  return (
    <div className="mt-3 w-full p-3">
      <div className="border rounded-lg h-[36px] w-full flex flex-row px-1 items-center gap-[10px]">
        <BsSearch color="#999" />
        <input
          id="input"
          type="text"
          ref={inputRef}
          value={hotLabel}
          onChange={handleChange}
          className="flex-1 focus:outline-0 text-sm text-[#999]"
        />
      </div>
      <div className="w-full flex flex-col mt-4 px-1 ">
        <div className="w-full flex flex-row">
          <h3 className="flex-1 text-sm font-bold">历史记录</h3>
          <BsFillTrashFill />
        </div>
      </div>
    </div>
  );
}
