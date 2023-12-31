/*
 * @Author: ff-chen
 * @Date: 2023-07-31 16:39:17
 * @FilePath: /react-tailwindcss/src/components/news/NavPopup.js
 * @Description: 导航弹窗
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import { useRef, useState, useEffect } from "react";
import { getNewsTypeList } from "@/apis/news";
import { BsXLg } from "react-icons/bs";

export default function NavPopup(props) {
  const { getShowNav } = props;
  const navPop = useRef(null);
  const [typeList, setTypeList] = useState([]);

  // 获取资讯导航
  async function getNewsType() {
    let res = await getNewsTypeList();
    let { code, data } = res;
    if (code === 1) {
      setTypeList([...data, ...data, ...data]);
    }
  }
  // 关闭导航弹窗
  let timer;
  function handlerClose() {
    const {
      current: { classList },
    } = navPop;
    classList.remove("animate-[fadeIn_0.6s_ease-in-out]");
    classList.add("animate-[fadeOut_0.6s_ease-in-out]");
    // 当遮罩层消失时 恢复滚动条
    document.body.style.overflow = "auto";
    timer = setTimeout(() => getShowNav(false), 400);
  }

  useEffect(() => {
    // 禁止透过遮罩层滚动页面
    const { current } = navPop;
    current.addEventListener("touchmove", (e) => e.preventDefault(), {
      passive: false,
    });
    // 当遮罩层出现时 隐藏滚动条
    document.body.style.overflow = "hidden";
    getNewsType();
    return () => clearTimeout(timer); // 组件卸载时清除定时器
  }, [timer]);

  return (
    <div
      ref={navPop}
      className="w-screen h-screen bg-[#261448]/80 backdrop-blur-md fixed left-0 top-0 z-[99] py-8 px-6 transition-all flex flex-col animate-[fadeIn_0.6s_ease-in-out]"
    >
      <div className="flex flex-row justify-end">
        <BsXLg color="#fff" size={25} onClick={handlerClose} />
      </div>
      <div className="flex-1 flex flex-col items-center mt-10">
        <h1 className="text-white text-lg mb-8">新闻分类</h1>
        <ul className="grid grid-cols-3 gap-x-4 gap-y-8 w-full">
          {typeList.map((typeItem, index) => (
            <li
              key={index}
              className="text-white text-sm bg-blue-500 shadow-lg shadow-blue-500/30 rounded-lg px-4 py-2 text-center"
            >
              {typeItem.typeName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
