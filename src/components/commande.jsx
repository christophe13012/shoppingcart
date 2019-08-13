import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap/";

class Commande extends Component {
  render() {
    const { panier, onHide, show } = this.props;
    const total = panier.reduce((a, b) => a + b.prix, 0);
    panier.sort((a, b) => a.nom.localeCompare(b.nom));
    return (
      <Modal
        size="lg"
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Voici le détails de votre panier
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {panier.length === 0 ? (
            <div>Votre panier est vide </div>
          ) : (
            <React.Fragment>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Article</th>
                    <th scope="col">Référence</th>
                    <th scope="col">Pointure</th>
                    <th scope="col">Prix</th>
                    <th scope="col">Quantité</th>
                  </tr>
                </thead>
                <tbody>
                  {panier.map(item => (
                    <tr>
                      <th scope="row">{item.nom}</th>
                      <td>{item.reference}</td>
                      <td>{item.pointure}</td>
                      <td>{item.prix}€</td>
                      <td>{item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <span
                style={{ fontSize: 20 }}
                className="badge badge-info float-right mt-2 mr-3"
              >
                Total : <span className="badge badge-light ml-2">{total}€</span>
              </span>
            </React.Fragment>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-success" disabled>
            Valider et procéder au paiement
          </Button>
          <Button className="btn btn-secondary" onClick={onHide}>
            Retour au shopping
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Commande;
