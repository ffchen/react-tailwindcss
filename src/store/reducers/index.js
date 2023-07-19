/*
 * @Author: ff-chen
 * @Date: 2023-07-17 14:22:56
 * @FilePath: /react-tailwindcss/src/store/reducers/index.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */

import { combineReducers } from "redux";
import actions from "../actions";

const initialState = {
  hotWord: "",
  newsType: 1
};

function hotWord(state = initialState, action) {
  switch (action.type) {
    case actions.SET_HOT_WORDS:
      return {
        ...state,
        hotWord: action.payload,
      };
    default:
      return state;
  }
}

function newsType(state = initialState, action) {
  switch (action.type) {
    case actions.SET_NEWS_TYPE:
      return {
        ...state,
        newsType: action.payload,
      };
    default:
      return state;
  }
}

export default combineReducers({
  hotWord,
  newsType
});
