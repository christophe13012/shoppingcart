import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap/";

class PointureModal extends Component {
  state = { pointure: 0 };
  onSelect = pointure => {
    this.setState({ pointure });
  };
  render() {
    const { sneaker, onHide, show, onAddPanier } = this.props;
    const pointureRange = [38, 39, 40, 41, 42, 43, 44, 45];
    return (
      <Modal
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {sneaker.nom}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Choisissez votre pointure</h5>
          <div className="container">
            <div className="row justify-content-around">
              {pointureRange.map(pointure => {
                return (
                  <button
                    key={pointure}
                    onClick={() => this.onSelect(pointure)}
                    type="button"
                    className={
                      pointure === this.state.pointure
                        ? "btn btn-dark btn-lg"
                        : "btn btn-outline-dark btn-lg"
                    }
                  >
                    {pointure}
                  </button>
                );
              })}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-success"
            onClick={() =>
              onAddPanier({
                ...sneaker,
                ...{ pointure: this.state.pointure, quantité: 1 }
              })
            }
            disabled={
              pointureRange.includes(this.state.pointure) ? false : true
            }
          >
            Valider
          </Button>
          <Button className="btn btn-secondary" onClick={onHide}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default PointureModal;
