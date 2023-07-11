/*
 * @Author: ff-chen
 * @Date: 2023-06-26 14:04:38
 * @FilePath: /qq-video/src/routes/index.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/layout";

/** 懒加载 路由组件 **/
const Home = lazy(() => import("@/pages/home/index"));
const Mine = lazy(() => import("@/pages/mine/index"));
const Login = lazy(() => import("@/pages/login/index"));


export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/mine",
        element: <Mine />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);
