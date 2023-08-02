/*
 * @Author: ff-chen
 * @Date: 2023-07-12 09:39:23
 * @FilePath: /react-tailwindcss/src/apis/home.js
 * @Description: 首页 api
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import service from "@/utils/request";

const BANNER_PATH = "/xcw/android/3/api/base";
const BASE_PATH = "/xcw/web/2/api/base";

// 获取 banner
export const getBanner = (params) =>
  service(`${BANNER_PATH}/getBanners`, {
    method: "GET",
    params,
  });
// 近期成交
export const getRecentOrders = (params) =>
  service(`${BASE_PATH}/getRecentOrders`, {
    method: "GET",
    params,
  });
// 便捷服务
export const getDictByPid = (params) =>
  service(`${BANNER_PATH}/getDictByPid`, {
    method: "GET",
    params,
  });
