import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import { Modal, Button } from "react-bootstrap";

import NewKeyboard from "./../../_components/NewKeyboard";

export default function BodyFind() {
  const [showPopup, setShowPopup] = useState(false);
  const [productInfo, setProductInfo] = useState(null);

  const handleEnterPress = async (inputValue) => {
    try {
      const response = await fetch(`http://localhost:5000/db/${inputValue}`);
      if (response.ok) {
        const data = await response.json();
        setProductInfo(data);
      } else {
        // Si le produit n'est pas trouvé, définissez productInfo sur null
        setProductInfo(null);
      }
      setShowPopup(true);
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
      setProductInfo(null);
      setShowPopup(true);
    }
  };

  return (
    <div className="border">
      <Header />

      <NewKeyboard onEnterPress={handleEnterPress} />
      <Modal show={showPopup} onHide={() => setShowPopup(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Informations du Produit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productInfo === null ? (
            <p>Produit non disponible</p>
          ) : (
            <div>
              <p>Désignation: {productInfo.nompr}</p>
              <p>Prix Unitaire: {productInfo.prixl}</p>
              <p>
                Quantité: <input type="number" defaultValue={productInfo.qte} />
              </p>
              <div className="d-flex justify-content-center">
                <Button className="btn btn-primary mt-3">
                  Ajouter au panier
                </Button>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
