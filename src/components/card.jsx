import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    const { sneaker, onClick } = this.props;
    return (
      <div className="card" style={{ width: "18rem", marginBottom: 30 }}>
        <img
          className="card-img-top"
          src={`images/${sneaker.reference}.webp`}
          alt="sneaker"
        />
        <div className="card-body">
          <h5 className="card-title">{sneaker.nom}</h5>
          <p className="card-text">Référence : {sneaker.reference}</p>
          <p className="card-text">Prix : {sneaker.prix}</p>
          <button
            onClick={() => onClick({ ...sneaker })}
            href="#"
            className="btn btn-primary"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
