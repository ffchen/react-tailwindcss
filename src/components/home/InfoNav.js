/*
 * @Author: ff-chen
 * @Date: 2023-07-12 14:44:50
 * @FilePath: /react-tailwindcss/src/components/home/InfoNav.js
 * @Description: 导航模块
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import { useState } from "react";
import { BsShieldFillCheck, BsGlobeAmericas } from "react-icons/bs";
import $C from "@/configs/config";
import { BiSolidShip } from "react-icons/bi";

export default function InfoNav() {
  const [navList] = useState($C.INDEX_INFONAV);
  const iconComponents = {
    BiSolidShip,
    BsShieldFillCheck,
    BsGlobeAmericas,
  };
  
  // 设置动态组件
  function DynamicComponent({ componentName, ...props }) {
    const Component = iconComponents[componentName];
    return <Component {...props} />;
  }
 
  return (
    <div className="flex mt-3 gap-2.5">
      {navList.map((item, index) => (
        <div
          className={`flex-1 h-[80px] rounded-md text-white flex flex-col p-3 relative overflow-hidden bg-[${item.bg}] `}
          key={index}
        >
          <em className="not-italic  text-[16px] font-['FZJW']">
            {item.name}
          </em>
          <span className="text-sm">{item.label}</span>
          {item.text ? (
            <span className="text-xs mt-[4px] font-['FZJW'] text-white/25">{item.text}</span>
          ) : (
            ""
          )}
          <DynamicComponent
            componentName={item.icon}
            className="absolute right-[-15px] bottom-[-15px] opacity-10"
            size={70}
          />
        </div>
      ))}
    </div>
  );
}
