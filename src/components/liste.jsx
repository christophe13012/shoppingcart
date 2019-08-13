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
    console.log(sneaker);

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
    index === -1 ? panier.push(item) : panier[index].quantity++;
    this.setState({ panier, showPointure: false });
  };
  render() {
    return (
      <React.Fragment>
        <Panier panier={this.state.panier} />
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
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Liste;
