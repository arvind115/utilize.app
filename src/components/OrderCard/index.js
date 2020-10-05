import React from "react";
import { Link } from "react-router-dom";

import "./OrderCard.css";

const OrderCard = (order) => {
  return (
    <div className="card">
      Id: {order.id} <br />
      Customer name: {order.customer_name} <br />
      Customer email: {order.customer_email} <br />
      Product type: {order.product} <br />
      Quantity: {order.quantity} <br />
      <Link
        to={{
          pathname: "/edit",
          state: {
            id: order.id,
            customer_name: order.customer_name,
            customer_email: order.customer_email,
            product: order.product,
            quantity: order.quantity,
          },
        }}
        className="editBtn"
      >
        Edit Order
      </Link>
    </div>
  );
};

export default OrderCard;
