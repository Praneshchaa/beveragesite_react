import pageReducer from "./Counter";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  page: pageReducer,
});

export default allReducers;
