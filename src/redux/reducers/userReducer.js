import * as types from "../actions/actionTypes";

import initialState from "../store/initialState";

export default function userReducer(user = initialState.user, action) {
  switch (action.type) {
    case types.SET_USER_DATA:
      console.log("here..");
      return action.user;
    default:
      return user;
  }
}
