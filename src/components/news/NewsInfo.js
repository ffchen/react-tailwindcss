/*
 * @Author: ff-chen
 * @Date: 2023-07-14 11:46:29
 * @FilePath: /react-tailwindcss/src/components/news/NewsInfo.js
 * @Description: BDI指数
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import { useState } from "react";
import { useMount } from "ahooks";
import moment from "moment";
import { getBdiByDate } from "@/apis/news.js";
import {
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsCloudSunFill,
} from "react-icons/bs";
import { RiTyphoonFill } from "react-icons/ri";

export default function NewsInfo() {
  const [bdiData, setBdiData] = useState({});
  const iconComponents = {
    BsFillCaretDownFill,
    BsFillCaretUpFill,
  };
  // 复用样式
  const lineStyle =
    "w-[1px] h-full bg-gradient-to-b from-[#fff] from-10% via-[#eee] via-50% to-[#fff] to-90% mx-1";
  const textStyle = "not-italic mt-2 text-xs font-['FZJW']";
  const iconStyle =
    "w-[43px] h-[43px] bg-gradient-to-br rounded-full flex justify-center items-center";

  // 设置动态组件
  function DynamicComponent({ componentName, ...props }) {
    const Component = iconComponents[componentName];
    return <Component {...props} />;
  }

  // 获取bdi指数数据
  async function getBdi() {
    let params = {
      beginTime: moment().subtract(60, "days").format("YYYY-MM-DD"),
      endTime: moment(new Date()).format("YYYY-MM-DD"),
    };
    let res = await getBdiByDate(params);
    let { code, data } = res;
    if (code === 1 && data && data.length > 0) {
      setBdiData(data[0]);
    }
  }

  useMount(() => getBdi());

  return (
    <div className="mt-3 w-full h-[110px] bg-white rounded-md flex flex-row p-3">
      <div className="flex flex-col flex-1 justify-center items-center">
        <em className="font-['FZJW'] not-italic text-base">BDI指数</em>
        <span className="flex flex-row justify-center items-center">
          <DynamicComponent
            componentName={
              +bdiData.upDown > 0 ? "BsFillCaretUpFill" : "BsFillCaretDownFill"
            }
            size={12}
            color={+bdiData.upDown > 0 ? "#f00" : "#05b415"}
          />
          <em
            className={[
              "not-italic text-sm ml-1",
              +bdiData.upDown > 0 ? `text-[#f00]` : `text-[#05b415]`,
            ].join(" ")}
          >
            {bdiData.bdiValue}
          </em>
        </span>
        <span
          className={[
            "text-xs",
            +bdiData.upDown > 0 ? `text-[#f00]` : `text-[#05b415]`,
          ].join(" ")}
        >
          {bdiData.upDownRate}
        </span>
        <span className="text-xs text-[#999]">{bdiData.dateStr}</span>
      </div>
      <div className={lineStyle}></div>
      <div className="flex flex-col w-[100px] justify-center items-center">
        <span className={`${iconStyle} from-[#3587e4] to-[#42abf9]`}>
          <BsCloudSunFill size={22} color="#fff" />
        </span>
        <em className={textStyle}>海洋气象</em>
      </div>
      <div className={lineStyle}></div>
      <div className="flex flex-col w-[100px] justify-center items-center">
        <span className={`${iconStyle} from-[#fd9f4d] to-[#fec065]`}>
          <RiTyphoonFill
            size={24}
            color="#fff"
            className="animate-[spin_2s_linear_infinite]"
          />
        </span>
        <em className={textStyle}>台风实时路径</em>
      </div>
    </div>
  );
}
