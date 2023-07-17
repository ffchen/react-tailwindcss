/*
 * @Author: ff-chen
 * @Date: 2023-07-17 13:57:08
 * @FilePath: /qq-video/src/pages/search/index.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { useRef, useEffect } from "react";

export default function SearchPage() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="mt-3 w-full p-3">
      <input id="input" type="text" ref={inputRef} className="border w-full rounded-md h-[30px]" />
    </div>
  );
}
