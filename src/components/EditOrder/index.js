import React from "react";

import jsonFormData from "../../utils";

import { editOrder } from "../../redux/actions/orderActions";
import { connect } from "react-redux";

function EditOrder(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const JSONdata = jsonFormData(data);
    props.editOrder(JSONdata);
    props.history.push("/");
  };
  return (
    <>
      <div className="header" style={{ background: "orange" }}>
        Edit order
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" defaultValue={props.id} required />
        <label htmlFor="customer_name">Customer Name</label>
        <input
          type="text"
          name="customer_name"
          defaultValue={props.customer_name}
          required
        />
        <label htmlFor="customer_email">Customer Email</label>
        <input
          type="email"
          name="customer_email"
          defaultValue={props.customer_email}
          required
        />
        <label htmlFor="product">Product Type</label>
        <select name="product" defaultValue={props.product} required>
          <option value="Product 1">Product 1</option>
          <option value="Product 2">Product 2</option>
          <option value="Product 3">Product 3</option>
        </select>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          defaultValue={props.quantity}
          required
        />
        <button type="submit">Modify order</button>
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
  editOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditOrder);
