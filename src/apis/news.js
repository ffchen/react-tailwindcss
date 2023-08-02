/*
 * @Author: ff-chen
 * @Date: 2023-07-12 16:28:00
 * @FilePath: /react-tailwindcss/src/apis/news.js
 * @Description: 资讯页api
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import service from "@/utils/request";

const URL_PATH = "/xcw/android/3/api/news";

export const getNewsInfoListNew = (params) =>
  service(`${URL_PATH}/getNewsInfoListNew`, {
    method: "GET",
    params,
  });
//获取新闻滚动图列表
export const getNewsBannerList = (params) =>
  service(`${URL_PATH}/getNewsBannerList`, {
    method: "GET",
    params,
  });

export const getNewsTypeList = (params) =>
  service(`${URL_PATH}/getNewsTypeList`, {
    method: "GET",
    params,
  });

//获取BDI指数
export const getBdiByDate = (params) =>
  service(`${URL_PATH}/getBdiByDate`, {
    method: "GET",
    params,
  });

//获取新闻属性
export const getNewProperties = (params) =>
  service(`${URL_PATH}/getNewProperties`, {
    method: "GET",
    params,
  });

//获取新闻详情
export const getNewsInfoDetail = (params) =>
  service(`${URL_PATH}/getNewsInfoDetail`, {
    method: "GET",
    params,
  });
