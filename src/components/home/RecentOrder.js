/*
 * @Author: ff-chen
 * @Date: 2023-07-12 17:49:55
 * @FilePath: /react-tailwindcss/src/components/home/RecentOrder.js
 * @Description: 近期成交
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import { useState } from "react";
import { useMount } from "ahooks";
import { getRecentOrders } from "@/apis/home.js";
import { BsFillCaretRightFill } from "react-icons/bs";
import BlockTitle from "@/components/common/BlockTitle";
export default function RecentOrder() {
  const [orderList, setOrderList] = useState([]);
  const titleName = "近期成交";

  // 获取近期成交订单
  async function getOrder() {
    let res = await getRecentOrders();
    if (res.code === 1) setOrderList(res.data.slice(0, 5));
  }

  // 组件初始化
  useMount(() => getOrder());

  return (
    <div className="mt-3 w-full bg-white rounded-md flex flex-col p-3">
      <BlockTitle title={titleName} />
      <ul>
        {orderList.map((item, index) => (
          <li
            key={index}
            className="w-full h-[38px] flex flex-row items-center text-left overflow-hidden  text-ellipsis whitespace-nowrap border-b border-[#f5f5f5] last:border-0"
          >
            <span className="w-[16px]">
              <BsFillCaretRightFill size={12} color="#ccc" />
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
