import { combineReducers } from "@reduxjs/toolkit";
import { layoutSlice } from "./components/Layout";

const rootReducer = combineReducers({
  layout: layoutSlice,
});

export default rootReducer;
