/*
 * @Author: ff-chen
 * @Date: 2023-07-12 17:49:55
 * @FilePath: /qq-video/src/components/home/RecentOrder.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { useState } from "react";
import { useMount } from "ahooks";
import { getRecentOrders } from "@/apis/home.js";
import { BsFillStarFill } from "react-icons/bs";
export default function RecentOrder() {
  const [orderList, setOrderList] = useState([]);

  async function getOrderData() {
    let res = await getRecentOrders();
    if (res.code === 1) setOrderList(res.data.slice(0, 10));
  }

  useMount(() => {
    getOrderData();
  });

  return (
    <div className="mt-3 w-full bg-white rounded-md flex flex-col p-3">
      <h3 className="font-['FZZZHONGJW'] flex flex-row items-center">
        {" "}
        <i className="block w-[4px] h-[16px] bg-[#2e90fa] mr-1.5"></i>
        <span>近期成交</span>
      </h3>
      <ul>
        {orderList.map((item, index) => (
          <li
            key={index}
            className="w-full h-[38px] flex flex-row items-center text-left overflow-hidden  text-ellipsis whitespace-nowrap border-b border-[#f5f5f5]"
          >
           
            <span className="w-[16px]">
              <BsFillStarFill size={9} />
            </span>
            <span className="flex-1 text-ellipsis whitespace-nowrap overflow-hidden pr-4 text-sm">
              {item.shipName}({item.goodsCounts}
              {item.goodsUnit}
              {item.goodsName}){" "}
              <em className="pl-2 text-xs not-italic text-[#999]">
                {item.beginPlace}-{item.endPlace}
              </em>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
