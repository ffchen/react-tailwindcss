/*
 * @Author: ff-chen
 * @Date: 2023-07-12 09:39:23
 * @FilePath: /qq-video/src/apis/home.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import service from "@/utils/request";

const BANNER_PATH = "/xcw/android/3/api/base";
// const INFO_PATH = "/xcw/android/3/api/info";
// 获取 banner
export function getBanner(params) {
  return service(`${BANNER_PATH}/getBanners`, {
    method: "GET",
    params,
  });
}
