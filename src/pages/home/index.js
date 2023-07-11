/*
 * @Author: ff-chen
 * @Date: 2023-06-26 14:10:03
 * @FilePath: /qq-video/src/pages/home/index.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { useState } from "react";
import SearchBar from "@/components/common/SearchBar";
import { useMount } from "ahooks";
import request from "@/utils/request";

export default function Home() {
  const [data, setData] = useState(null);

  async function getData() {
    let res = await request.get("/api/data");
    if (res?.code === 1) {
      setData(res.data);
    }
  }

  useMount(() => {
    getData();
  });

  return (
    <div className="pt-[30px] px-4 bg-gradient-to-b from-cyan-500 to-blue-500 h-[1000px]">
      <SearchBar></SearchBar>
      {data}
    </div>
  );
}
