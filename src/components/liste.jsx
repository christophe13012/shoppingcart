import React, { Component } from "react";
import data from "../data.json";
import Card from "./card";
import PointureModal from "./pointureModal.jsx";

class Liste extends Component {
  state = {
    sneakers: [],
    panier: [],
    sneaker: {},
    showPointure: false
  };
  componentDidMount() {
    this.setState({ sneakers: data });
  }
  HandleAdd = sneaker => {
    console.log(sneaker);

    this.setState({ sneaker, showPointure: true });
  };
  HandleHidePointure = () => {
    this.setState({ showPointure: false });
  };
  handleAddPanier = item => {
    const panier = [...this.state.panier];
    const index = panier.findIndex(
      el => el.reference === item.reference && el.pointure === item.pointure
    );
    index === -1 ? panier.push(item) : panier[index].quantité++;
    this.setState({ panier });
  };
  render() {
    return (
      <div style={{ marginTop: 40 }} className="container">
        <div className="row justify-content-between">
          {this.state.sneakers.map(sneaker => (
            <Card
              key={sneaker.reference}
              sneaker={sneaker}
              onClick={this.HandleAdd}
            />
          ))}
        </div>
        <PointureModal
          onHide={this.HandleHidePointure}
          sneaker={this.state.sneaker}
          show={this.state.showPointure}
          onAddPanier={this.handleAddPanier}
        />
      </div>
    );
  }
}

export default Liste;
