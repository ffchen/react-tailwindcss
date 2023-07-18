/*
 * @Author: ff-chen
 * @Date: 2023-06-26 17:53:48
 * @FilePath: /react-tailwindcss/src/pages/login/index.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
export default function Vip() {
  return (
    <div className="w-full min-h-screen overflow-hidden pb-[var(--tabBar-height)] flex flex-col items-center justify-center">
      <div className="w-full h-full absolute overflow-hidden left-0  top-0 z-[1]">
        <div className="w-full h-full box-border bg-[url('~@/static/images/vip/bg.avif')] bg-no-repeat bg-[center_top] bg-cover"></div>
      </div>
      <div className="relative p-3 box-border w-11/12 bg-white/10 h-[400px] border border-white/20 z-[9] rounded-lg backdrop-blur-md flex flex-col shadow-[2px_2px_3px_rgba(0,0,0,0.25)]">
        <h3 className="text-center text-2xl text-white">登录</h3>
      </div>
    </div>
  );
}
