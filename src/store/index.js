/*
 * @Author: ff-chen
 * @Date: 2023-07-17 14:22:02
 * @FilePath: /react-tailwindcss/src/store/index.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export default createStore(reducers, applyMiddleware(thunk));
