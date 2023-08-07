/*
 * @Author: ff-chen
 * @Date: 2023-06-26 14:28:22
 * @FilePath: /react-tailwindcss/src/components/common/TabBar.js
 * @Description: TabBar
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import { useState } from "react";
import { useMount } from "ahooks";
import { useNavigate, useLocation } from "react-router-dom";
import $C from "@/configs/config";
import {
  BsFillHouseFill,
  BsFillHddRackFill,
  BsGiftFill,
  BsFillChatLeftHeartFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";

export default function TabBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [navList, setNavList] = useState($C.TABBAR_LIST);
  // 图标、字体，样式
  const fontSzie = 19;
  const fontColor = "#121212";
  const atcColor = "#2e90fa";
  const iconComponents = {
    BsFillHouseFill,
    BsFillHddRackFill,
    BsGiftFill,
    BsFillChatLeftHeartFill,
    BsFillEmojiSmileFill,
  };

  // 设置动态组件
  function DynamicComponent({ componentName, ...props }) {
    const Component = iconComponents[componentName];
    return <Component {...props} />;
  }
  // 设置标签选中状态
  function getCurPage(url) {
    let newNavList = navList.map((navItem) => ({
      ...navItem,
      isAtc: url === navItem.url,
    }));
    setNavList(newNavList);
  }
  // 路由跳转
  function goPage(url) {
    navigate(url);
    getCurPage(url);
  }

  // 组件初始化
  useMount(() => {
    const { pathname } = location;
    getCurPage(pathname);
  });

  return (
    <div className="w-full flex flex-row items-center  h-[var(--tabBar-height)] box-border backdrop-blur-md bg-[#fafafa]/50 border-t border-t-[#efefef]/50 fixed left-0 bottom-0 z-10">
      <ul className="flex flex-row flex-1">
        {navList.map((navItem) => (
          <li
            className="flex-1 flex flex-col justify-center items-center"
            key={navItem.id}
            onClick={() => goPage(navItem.url)}
          >
            <DynamicComponent
              componentName={navItem.icon}
              size={fontSzie}
              color={navItem.isAtc ? atcColor : fontColor}
            />
            <span
              className={[
                "text-xs  mt-[7px] antialiased font-['FZJW']",
                navItem.isAtc ? `text-[${atcColor}]` : `text-[${fontColor}]`,
              ].join(" ")}
            >
              {navItem.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
