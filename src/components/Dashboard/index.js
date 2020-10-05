import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Dashboard.css";
import OrderCard from "../OrderCard";

export function Dashboard(props) {
  return (
    <>
      <div className="userDetailsDiv">
        <img src={props.user.imageUrl} alt="" />
        <div className="rightDiv">
          <div className="userInfoRow">Name:{props.user.name}</div>
          <div className="userInfoRow">Email: {props.user.email}</div>
          <Link to="/add" className="addOrderBtn">
            Add New Order
          </Link>
        </div>
      </div>
      <div className="ordersDiv">
        {props.orders.map((order) => (
          <OrderCard {...order} key={order.id} />
        ))}
      </div>
    </>
  );
}

function mapStateToProps({orders,user}, ownProps) {
  return {
    orders,
    user,
  };
}

export default connect(mapStateToProps)(Dashboard);
