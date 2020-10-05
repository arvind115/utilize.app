import * as types from "./actionTypes";

export function setUserData(user) {
  return function (dispatch) {
    dispatch({
      type: types.SET_USER_DATA,
      user,
    });
  };
}
