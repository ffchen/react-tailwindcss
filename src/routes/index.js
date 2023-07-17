/*
 * @Author: ff-chen
 * @Date: 2023-07-11 11:46:28
 * @FilePath: /qq-video/src/routes/index.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "@/components/layout";

/** 懒加载 路由组件 **/
const Home = lazy(() => import("@/pages/home/index"));
const News = lazy(() => import("@/pages/news/index"));
const Vip = lazy(() => import("@/pages/vip/index"));
const Msg = lazy(() => import("@/pages/msg/index"));
const Mine = lazy(() => import("@/pages/mine/index"));
const Login = lazy(() => import("@/pages/login/index"));

/** 路由守卫功能 **/
const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return isLoggedIn ? (
    <Component {...rest} />
  ) : (
    <Navigate
      to={{
        pathname: "/login",
        state: { from: rest.location },
      }}
    />
  );
};

/** 实现判断是否登录 **/
const requireAuth = (Component) => {
  const WrappedComponent = (props) => {
    const isLoggedIn = false; // 这里假设还未登录，实际场景需要根据实际情况判断
    return (
      <PrivateRoute component={Component} isLoggedIn={isLoggedIn} {...props} />
    );
  };
  return <WrappedComponent />;
};

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
        path: "/news",
        element: <News />,
      },
      {
        path: "/vip",
        element: <Vip />,
      },
      {
        path: "/msg",
        element: requireAuth(Msg),
      },
      {
        path: "/mine",
        element: requireAuth(Mine), // 注意这里传递的是组件名
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);
