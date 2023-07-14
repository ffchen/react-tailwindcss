import React, { useState } from "react";
import { BsCloudSlash, BsShieldCheck, BsHeartPulse } from "react-icons/bs";

export default function InfoNav() {
  const iconComponents = {
    BsCloudSlash,
    BsShieldCheck,
    BsHeartPulse,
  };
  // 设置动态组件
  function DynamicComponent({ componentName, ...props }) {
    const Component = iconComponents[componentName];
    return <Component {...props} />;
  }

  const [navList] = useState([
    {
      name: "船查查",
      label: "21469艘",
      bg: "#408aff",
      icon: "BsCloudSlash",
    },
    {
      name: "船货保险",
      label: "在线投保",
      bg: "#f89f00",
      icon: "BsShieldCheck",
    },
    {
      name: "航运圈",
      label: "373条",
      bg: "#f27429",
      icon: "BsHeartPulse",
    },
  ]);
  return (
    <div className="flex mt-3 gap-2.5">
      {navList.map((item, index) => (
        <div
          className={`flex-1 h-[80px] rounded-md text-white flex flex-col p-3.5 relative overflow-hidden bg-[${item.bg}] `}
          key={index}
        >
          <em className="not-italic font-mono text-base font-['FZZZHONGJW']">
            {item.name}
          </em>
          <span className="text-xs mt-0.5">{item.label}</span>
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
