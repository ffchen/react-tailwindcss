/*
 * @Author: ff-chen
 * @Date: 2023-07-12 16:28:00
 * @FilePath: /react-tailwindcss/src/apis/news.js
 * @Description: 资讯页api
 * Copyright (c) 2023 by ff-chen, All Rights Reserved. 
 */
import request from "@/utils/request";

const URL_PATH = "/xcw/android/3/api/news";

export function getNewsInfoListNew(params) {
    return request({
      url: `${URL_PATH}/getNewsInfoListNew`,
      method: "get",
      params,
    });
  }

  //获取新闻滚动图列表 
export function getNewsBannerList(params) {
  return request({
    url: `${URL_PATH}/getNewsBannerList`,
    method: "get",
    params,
  });
}

export function getNewsTypeList(params) {
  return request({
    url: `${URL_PATH}/getNewsTypeList`,
    method: "get",
    params,
  });
}

//获取BDI指数 
export function getBdiByDate(params) {
  return request({
    url: `${URL_PATH}/getBdiByDate`,
    method: "get",
    params,
  });
}

//获取新闻属性 
export function getNewProperties(params) {
  return request({
    url: `${URL_PATH}/getNewProperties`,
    method: "get",
    params,
  });
}

//获取新闻详情 
export function getNewsInfoDetail(params) {
  return request({
    url: `${URL_PATH}/getNewsInfoDetail`,
    method: "get",
    params,
  });
}
