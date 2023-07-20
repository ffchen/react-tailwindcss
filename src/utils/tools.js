/*
 * @Author: ff-chen
 * @Date: 2023-06-26 11:30:59
 * @FilePath: /react-tailwindcss/src/utils/tools.js
 * @Description: 工具类 函数
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
// 获取图片的主色调
export const getDominantColor = (imgUrl, callback) => {
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.src = imgUrl;

  img.onload = function () {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0, img.width, img.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    const colorMap = {};

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];

      if (a === 0) {
        continue;
      }

      const color = `rgb(${r},${g},${b})`;

      if (!colorMap[color]) {
        colorMap[color] = 0;
      }

      colorMap[color]++;
    }

    let maxCount = 0;
    let maxColor = "";

    for (const color in colorMap) {
      if (colorMap[color] > maxCount) {
        maxCount = colorMap[color];
        maxColor = color;
      }
    }

    callback(maxColor);
  };
};

// 一维数组转二维数组
export const splitData = (arr, size) => {
  let newArr = [];
  for (let i = 0, len = arr.length; i < len; i = i + size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
};

// 防抖
export const debounce = (func, wait, immediate) => {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
