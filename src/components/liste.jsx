import React, { Component } from "react";
import { toast } from "react-toastify";
import data from "../data.json";
import Card from "./card";
import PointureModal from "./pointureModal.jsx";
import Panier from "./panier";
import Commande from "./commande.jsx";

class Liste extends Component {
  state = {
    sneakers: [],
    panier: [],
    sneaker: {},
    showPointure: false,
    showCommande: false
  };
  componentDidMount() {
    this.setState({ sneakers: data });
  }
  HandleAdd = sneaker => {
    this.setState({ sneaker, showPointure: true });
  };
  HandleHideModals = () => {
    this.setState({ showPointure: false, showCommande: false });
  };
  handleAddPanier = item => {
    toast.success(
      `L'article ${this.state.sneaker.nom} en taille ${
        item.pointure
      } a bien été ajouté au panier`
    );
    const panier = [...this.state.panier];
    const index = panier.findIndex(
      el => el.reference === item.reference && el.pointure === item.pointure
    );
    index === -1
      ? panier.push({ ...item, ...{ id: panier.length } })
      : panier[index].quantity++;
    this.setState({ panier, showPointure: false });
  };
  handleOpenCommande = () => {
    this.setState({ showCommande: true });
  };
  handleDelete = id => {
    const panier = [...this.state.panier].filter(item => item.id !== id);
    this.setState({ panier });
  };
  handleDecrement = id => {
    const panier = [...this.state.panier];
    const index = panier.findIndex(item => item.id === id);
    panier[index].quantity === 1
      ? panier.splice(index, 1)
      : panier[index].quantity--;
    this.setState({ panier });
  };
  handleIncrement = id => {
    const panier = [...this.state.panier];
    const index = panier.findIndex(item => item.id === id);
    panier[index].quantity++;
    this.setState({ panier });
  };
  render() {
    return (
      <React.Fragment>
        <Panier panier={this.state.panier} onClick={this.handleOpenCommande} />
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
            onHide={this.HandleHideModals}
            sneaker={this.state.sneaker}
            show={this.state.showPointure}
            onAddPanier={this.handleAddPanier}
          />
          <Commande
            show={this.state.showCommande}
            onHide={this.HandleHideModals}
            panier={this.state.panier}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Liste;
