/*
 * @Author: ff-chen
 * @Date: 2023-07-14 10:56:57
 * @FilePath: /react-tailwindcss/src/components/news/NewsNav.js
 * @Description: 
 * Copyright (c) 2023 by ff-chen, All Rights Reserved. 
 */
import React, { useState } from "react";
import { useMount } from "ahooks";
import { getNewsTypeList } from "@/apis/news";
import { BsGrid } from "react-icons/bs";

export default function NewsNav() {
  let [typeList, setTypeList] = useState([]);

  // 获取资讯导航
  async function getNewsType() {
    let res = await getNewsTypeList();
    let { code, data } = res;
    if (code === 1) {
      setTypeList(data);
    }
  }

  useMount(async () => {
    getNewsType();
  });

  return (
    <div className="mt-5 overflow-hidden flex flex-row">
      <div className="flex-1 overflow-hidden">
        <div className="flex flex-row overflow-x-scroll no-scrollbar">
          {typeList.map((item) => (
            <em
              key={item.id}
              className={[
                "not-italic whitespace-nowrap mr-4 font-['FZZZHONGJW']  text-sm",
                item.id === 1 ? `text-[#ffc100]` : `text-white`,
              ].join(" ")}
            >
              {item.typeName}
            </em>
          ))}
        </div>
      </div>
      <div className="w-[30px] flex flex-row justify-end">
        <BsGrid size={20} color="#fff" />
      </div>
    </div>
  );
}
