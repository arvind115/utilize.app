import { combineReducers } from "redux";

import orders from "./orderReducer"; //actual name is productReducer in OrderReducer.js
import user from "./userReducer";

const rootReducer = combineReducers({
  orders,
  user,
});

export default rootReducer;
