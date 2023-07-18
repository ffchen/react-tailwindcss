/*
 * @Author: ff-chen
 * @Date: 2023-07-14 17:58:38
 * @FilePath: /react-tailwindcss/src/components/news/NewsList.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { useState, useEffect, useRef, useCallback } from "react";
import { getNewsInfoListNew } from "@/apis/news";

export default function NewsList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const observer = useRef();
  // 获取资讯数据
  const getNewsData = useCallback(async () => {
    setIsLoading(true);
    let params = {
      rows: 10,
      page,
      typeId: 1,
    };
    let res = await getNewsInfoListNew(params);
    let {
      code,
      data: { list },
    } = res;
    if (code === 1) {
      setData((prevData) => [...prevData, ...list]);
      setIsLoading(false);
    }
  }, [page]);

  // 获取观察结果 检测目标元素是否进入视图
  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !isLoading) {
        setPage((prevPage) => prevPage + 1);
      }
    },
    [isLoading]
  );
  // 创建 IntersectionObserver 实例 并存储在 observer 引用对象中
  useEffect(() => {
    observer.current = new IntersectionObserver(handleObserver);
  }, [handleObserver]);
  // 监控 page 变化时，重新加载资讯数据
  useEffect(() => {
    getNewsData();
  }, [page, getNewsData]);
  // 使用 observer 引用对象来观察页面底部的虚拟加载元素
  useEffect(() => {
    if (observer.current) {
      observer.current.observe(document.getElementById("observer"));
    }
    // 断开观察连接
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [data, handleObserver]);

  return (
    <div className="mt-3 w-full bg-white rounded-md flex flex-col items-center p-3">
      <ul>
        {data.map((item, index) => (
          <li key={index} className="flex flex-row py-3 border-b border-[#eee]">
            <span className="flex-1">{item.title}</span>
            <img
              src={item.imgUrl}
              alt={item.title}
              className="w-[112px] h-[75px] rounded-md ml-[20px]"
            />
          </li>
        ))}
      </ul>
      <div id="observer" className="py-3 text-[#333] text-sm">
        {isLoading && "Loading..."}
      </div>
    </div>
  );
}
