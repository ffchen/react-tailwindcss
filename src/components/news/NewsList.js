/*
 * @Author: ff-chen
 * @Date: 2023-07-14 17:58:38
 * @FilePath: /react-tailwindcss/src/components/news/NewsList.js
 * @Description: 资讯列表
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getNewsInfoListNew } from "@/apis/news";
import { timeFormat } from "@/utils/filter";

export default function NewsList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [typeId, setTypeId] = useState(1);
  const observer = useRef();
  const navigate = useNavigate();

  // 获取资讯数据
  const getNewsList = useCallback(async () => {
    setIsLoading(true);
    let params = {
      rows: 10,
      page,
      typeId,
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
  }, [page, typeId]);

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

  // 监听 newsType 变化
  const {
    newsType: { newsType },
  } = useSelector((state) => state);

  // 当 newsType 变化时 重置 data,page,typeId
  useEffect(() => {
    setTypeId(newsType);
    setData([]);
    setPage(1);
  }, [newsType]);

  // 创建 IntersectionObserver 实例 并存储在 observer 引用对象中
  useEffect(() => {
    observer.current = new IntersectionObserver(handleObserver);
  }, [handleObserver]);

  // 监控 page 变化时，重新加载资讯数据
  useEffect(() => {
    getNewsList();
  }, [page, getNewsList]);

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
          <li
            key={index}
            className="flex flex-row py-3 border-b border-[#eee]"
            onClick={() => navigate(`/news/${item.id}`)}
          >
            <span className="flex-1 flex flex-col">
              <em className="not-italic h-[48px] line-clamp mb-2">
                {item.title}
              </em>
              <em className="text-[#ccc] text-sm not-italic">
                {timeFormat(item.createTime)}
              </em>
            </span>
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
