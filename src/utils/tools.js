/*
 * @Author: ff-chen
 * @Date: 2023-06-26 11:30:59
 * @FilePath: /qq-video/src/utils/tools.js
 * @Description: 工具类 函数
 * Copyright (c) 2023 by ff-chen, All Rights Reserved. 
 */
// 获取图片的主色调
export const getDominantColor = function (image) {
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");
  let width = image.width;
  let height = image.height;

  canvas.width = width;
  canvas.height = height;
  context.drawImage(image, 0, 0, width, height);

  let imageData = context.getImageData(0, 0, width, height);
  let data = imageData.data;
  let colorCount = {};
  let maxCount = 0;
  let dominantColor = [0, 0, 0];

  for (let i = 0; i < data.length; i += 4) {
    let red = data[i];
    let green = data[i + 1];
    let blue = data[i + 2];
    let rgb = [red, green, blue];

    let key = rgb.join(",");
    if (!colorCount[key]) {
      colorCount[key] = 0;
    }

    colorCount[key]++;

    if (colorCount[key] > maxCount) {
      maxCount = colorCount[key];
      dominantColor = rgb;
    }
  }

  return dominantColor;
};

// 数组重新分组
export const splitData = (arr, size) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i = i + size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
};