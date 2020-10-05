import * as types from "./actionTypes";

export function getProducts() {
  return function (dispatch) {
    dispatch({
      type: types.GET_ORDERS,
    });
  };
}

export function addNewOrder(order) {
  return function (dispatch) {
    dispatch({
      type: types.ADD_NEW_ORDER,
      order,
    });
  };
}

export function editOrder(order) {
  return function (dispatch) {
    dispatch({
      type: types.EDIT_ORDER,
      order,
    });
  };
}
