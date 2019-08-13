import React, { Component } from "react";

class Panier extends Component {
  state = {};
  render() {
    const total =
      this.props.panier.length === 0
        ? 0
        : this.props.panier.reduce((a, b) => a + b.quantity, 0);
    return (
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 10
        }}
      >
        <button
          type="button"
          className="btn btn-info"
          onClick={this.props.onClick}
        >
          <img src="images/cart.png" alt="cart" /> Articles
          <span className="badge badge-light ml-1">{total} </span>
        </button>
      </div>
    );
  }
}

export default Panier;
