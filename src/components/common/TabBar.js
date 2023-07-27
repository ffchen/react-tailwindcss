/*
 * @Author: ff-chen
 * @Date: 2023-06-26 14:28:22
 * @FilePath: /react-tailwindcss/src/components/common/TabBar.js
 * @Description: TabBar
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { useState } from "react";
import { useMount } from "ahooks";
import { useNavigate, useLocation } from "react-router-dom";
import {
  BsFillHouseFill,
  BsFillHddRackFill,
  BsGiftFill,
  BsFillChatLeftHeartFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";

export default function TabBar() {
  const fontSzie = 19;
  const fontColor = "#121212";
  const atcColor = "#2e90fa";
  const location = useLocation();
  const navigate = useNavigate();
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

  let [navList, setNavList] = useState([
    {
      id: 1,
      icon: "BsFillHouseFill",
      label: "首页",
      url: "/",
      isAtc: true,
    },
    {
      id: 2,
      icon: "BsFillHddRackFill",
      label: "资讯",
      url: "/news",
    },
    {
      id: 3,
      icon: "BsGiftFill",
      label: "会员",
      url: "/vip",
    },
    {
      id: 4,
      icon: "BsFillChatLeftHeartFill",
      label: "消息",
      url: "/msg",
    },
    {
      id: 5,
      icon: "BsFillEmojiSmileFill",
      label: "我的",
      url: "/mine",
    },
  ]);

  useMount(() => {
    let { pathname } = location;
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
                "text-xs  mt-[7px] antialiased font-['FZZZHONGJW']",
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
