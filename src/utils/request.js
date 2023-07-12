/*
 * @Author: ff-chen
 * @Date: 2023-07-11 15:26:16
 * @FilePath: /qq-video/src/utils/request.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import axios from "axios";
import $C from "@/configs/config";
axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";

const getTokenStorage = () => {
  let token = "";
  try {
    token = localStorage.getItem($C.USER_TOKEN);
  } catch (e) {}
  return token;
};

const instance = axios.create({
  baseURL: "http://pro.xcw9898.com", 
  timeout: 5000,
});

// 在请求拦截器中添加 Authorization 请求头
instance.interceptors.request.use(
  (config) => {
    const token = getTokenStorage();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    console.log(error);
    // return Promise.reject(error);
  }
);

// 在响应拦截器中处理错误
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    // if (error.response && error.response.status === 401) {
    //   // 处理未授权错误
    //   console.log('接口异常');
    //   return
    // }
    // return Promise.reject(new Error(error));
  }
);

export default instance;
