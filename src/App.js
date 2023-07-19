/*
 * @Author: ff-chen
 * @Date: 2023-06-26 11:27:47
 * @FilePath: /react-tailwindcss/src/App.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "@/routes/index";
import { connect } from "react-redux";

function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

function mapStateToProps(state) {
  return {
    hotWord: state.hotWord,
    newsType: state.newsType
  };
}

export default connect(mapStateToProps)(App);

// export default App;
