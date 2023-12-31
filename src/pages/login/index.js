/*
 * @Author: ff-chen
 * @Date: 2023-06-26 17:53:48
 * @FilePath: /react-tailwindcss/src/pages/login/index.js
 * @Description:登录页
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import { useState } from "react";
import { debounce } from "@/utils/tools";
export default function Vip() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const inputClassName =
    "text-sm rounded-full h-9 p-2 bg-white/25 border-2 border-transparent focus:border-white/50 focus:bg-transparent transition-all duration-500 ease-in-out";
  const labelClassName = "py-2 text-sm indent-3";

  // 模拟登录操作
  function login() {
    console.log("模拟登录操作", username, password);
  }

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col border">
      <div className="w-full h-screen absolute overflow-hidden left-0  top-0 z-[1] after:content-[''] after:block after:w-full after:h-full after:absolute after:left-0  after:top-0 after:z-[2] after:bg-radial">
        <div className="w-full h-screen box-border bg-[url('~@/static/images/vip/bg.avif')] bg-no-repeat bg-[center_top] bg-cover"></div>
      </div>
      <div className="relative p-8 box-border  z-[9] flex flex-col text-[white] mt-16">
        <h3 className="mb-12 text-2xl text-center tracking-[.1em]">
          用户登录
        </h3>
        <ul>
          <li className="flex flex-col">
            <label className={labelClassName}>账号：</label>
            <input
              id="name"
              type="text"
              className={inputClassName}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </li>
          <li className="flex flex-col mt-6">
            <label className={labelClassName}>密码：</label>
            <input
              id="password"
              type="password"
              className={inputClassName}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
        </ul>
        <div className="text-xs mt-6 pl-4 flex flex-row">
          <input
            type="checkbox"
            name="category"
            value="记住密码"
            className="mr-1 border-0"
          />
          记住密码
        </div>
        <button
          onClick={debounce(login, 2000, true)}
          disabled={!username || !password}
          className="mt-16 rounded-full w-full bg-[#1161ed]/75 h-10"
        >
          登录
        </button>
      </div>
    </div>
  );
}
