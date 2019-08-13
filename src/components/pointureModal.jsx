import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap/";

const PointureModal = ({ sneaker, onHide, show, onAddPanier }) => {
  const [pointureSelected, setPointureSelected] = useState(0);
  function onSelect(pointure) {
    setPointureSelected(pointure);
  }
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
                  onClick={() => onSelect(pointure)}
                  type="button"
                  className={
                    pointure === pointureSelected
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
              ...{ pointure: pointureSelected, quantity: 1 }
            })
          }
          disabled={pointureRange.includes(pointureSelected) ? false : true}
        >
          Valider
        </Button>
        <Button className="btn btn-secondary" onClick={onHide}>
          Annuler
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PointureModal;
