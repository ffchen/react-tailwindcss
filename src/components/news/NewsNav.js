/*
 * @Author: ff-chen
 * @Date: 2023-07-14 10:56:57
 * @FilePath: /react-tailwindcss/src/components/news/NewsNav.js
 * @Description: 资讯分类
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { useState } from "react";
import { useMount } from "ahooks";
import { useDispatch } from "react-redux";
import { getNewsTypeList } from "@/apis/news";
import { BsGrid } from "react-icons/bs";

export default function NewsNav() {
  const dispatch = useDispatch();
  const [typeList, setTypeList] = useState([]);
  const [typeId, setTypeId] = useState(1);

  // 获取资讯导航
  async function getNewsType() {
    let res = await getNewsTypeList();
    let { code, data } = res;
    if (code === 1) {
      setTypeList(data);
    }
  }
  
  function changeType(id) {
    setTypeId(id)
    dispatch({ type: "SET_NEWS_TYPE", payload: id });
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
                item.id === typeId ? `text-[#ffc100]` : `text-white`,
              ].join(" ")}
              onClick={() => changeType(item.id)}
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
