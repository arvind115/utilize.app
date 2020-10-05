import React from "react";

import { addNewOrder } from "../../redux/actions/orderActions";
import jsonFormData from "../../utils";
import "./NewOrder.css";
import { connect } from "react-redux";

function NewProduct(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const JSONdata = jsonFormData(data);
    props.addNewOrder(JSONdata);
    props.history.push("/");
  };

  return (
    <>
      <div className="header">Create new order</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" required />
        <label htmlFor="customer_name">Customer Name</label>
        <input type="text" name="customer_name" required />
        <label htmlFor="customer_email">Customer Email</label>
        <input type="email" name="customer_email" required />
        <label htmlFor="product">Product Type</label>
        <select name="product" required>
          <option value="Product 1">Product 1</option>
          <option value="Product 2">Product 2</option>
          <option value="Product 3">Product 3</option>
        </select>
        <label htmlFor="quantity">Quantity</label>
        <input type="number" name="quantity" placeholder={0} required />
        <button type="submit">Add order</button>
      </form>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    ownProps,
  };
}

const mapDispatchToProps = {
  addNewOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);
