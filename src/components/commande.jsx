import React from "react";
import { Button, Modal } from "react-bootstrap/";
import "../App.css";

const Commande = ({
  panier,
  onHide,
  show,
  onDelete,
  onDecrement,
  onIncrement
}) => {
  const total = panier.reduce((a, b) => a + b.prix * b.quantity, 0);
  panier.sort((a, b) => a.nom.localeCompare(b.nom));
  return (
    <Modal
      dialogClassName="modal-90w"
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
                  <th className="w-25" scope="col">
                    Article
                  </th>
                  <th scope="col">Référence</th>
                  <th scope="col">Pointure</th>
                  <th scope="col">Quantité</th>
                  <th scope="col">Prix unitaire</th>
                  <th scope="col">Prix total</th>
                </tr>
              </thead>
              <tbody>
                {panier.map(item => (
                  <tr key={item.id}>
                    <th scope="row">{item.nom}</th>
                    <td>{item.reference}</td>
                    <td>{item.pointure}</td>
                    <td>{item.quantity}</td>
                    <td>{item.prix}€</td>
                    <td>{item.prix * item.quantity}€</td>

                    <td>
                      <button
                        style={{ width: 30 }}
                        type="button"
                        className="btn btn-secondary btn-sm mr-1"
                        onClick={() => onDecrement(item.id)}
                      >
                        -
                      </button>
                      <button
                        style={{ width: 30 }}
                        type="button"
                        className="btn btn-success btn-sm mr-1"
                        onClick={() => onIncrement(item.id)}
                      >
                        +
                      </button>

                      <button
                        style={{ width: 30 }}
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => onDelete(item.id)}
                      >
                        X
                      </button>
                    </td>
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
        {panier.length !== 0 && (
          <Button className="btn btn-success" disabled>
            Valider et procéder au paiement
          </Button>
        )}
        <Button className="btn btn-secondary" onClick={onHide}>
          Retour au shopping
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Commande;
