/*
 * @Author: ff-chen
 * @Date: 2023-06-26 17:14:55
 * @FilePath: /qq-video/src/components/layout/index.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React from "react";
import {  Outlet } from 'react-router-dom';
import TabBar from "@/components/common/TabBar";

export default function Layout() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex-1 pb-[var(--tabBar-height)]">
        <Outlet/>
      </div>
      <TabBar />
    </div>
  );
}
