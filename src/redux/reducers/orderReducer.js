import * as types from "../actions/actionTypes";
import initialState from "../store/initialState";

export default function orderReducer(orders = initialState.orders, action) {
  switch (action.type) {
    case types.GET_ORDERS:
      return orders;
    case types.ADD_NEW_ORDER:
      return [...orders, action.order];
    case types.EDIT_ORDER:
      return orders.map((order) =>
        order.id === action.order.id ? action.order : order
      );
    default:
      return orders;
  }
}
