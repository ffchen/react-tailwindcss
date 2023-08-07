/*
 * @Author: ff-chen
 * @Date: 2023-07-31 16:24:25
 * @FilePath: /react-tailwindcss/src/components/common/Loading.js
 * @Description: 通用 Loading 模块
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */

export default function Loading() {
  const loadStr = "Loading...";
  
  return (
    <div>
      {[...loadStr].map((letter, index) => (
        <span
          className="animate-[fadeOut_1.6s_linear_infinite]"
          style={{ animationDelay: `${480 + 120 * index}ms` }}
          key={index}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
