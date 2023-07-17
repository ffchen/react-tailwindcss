/*
 * @Author: ff-chen
 * @Date: 2023-07-17 13:57:08
 * @FilePath: /qq-video/src/pages/search/index.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function SearchPage(props) {
  const inputRef = useRef(null);
  const [hotLabel, setHotLabel] = useState("");
  const {
    hotWord: { hotWord },
  } = useSelector((state) => state);

  function handleChange({ target: { value } }) {
    setHotLabel(value);
  }
  useEffect(() => {
    inputRef.current.focus();
    setHotLabel(hotWord);
  }, [hotWord]);

  return (
    <div className="mt-3 w-full p-3">
      <input
        id="input"
        type="text"
        ref={inputRef}
        value={hotLabel}
        onChange={handleChange}
        className="border w-full rounded-md h-[30px]"
      />
    </div>
  );
}
