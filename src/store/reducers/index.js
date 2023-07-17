/*
 * @Author: ff-chen
 * @Date: 2023-07-17 14:22:56
 * @FilePath: /qq-video/src/store/reducers/index.js
 * @Description:
 * Copyright (c) 2023 by ff-chen, All Rights Reserved.
 */

import { combineReducers } from "redux";
import actions from "../actions";

const initialState = {
  hotWord: '',
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

export default combineReducers({
  hotWord,
});
