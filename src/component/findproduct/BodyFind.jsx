import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "./../cartActions";
import NewKeyboard from "./../../_components/NewKeyboard";

export default function BodyFind() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [productInfo, setProductInfo] = useState(null);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1); // Ajout d'un état pour la quantité avec une valeur initiale de 1

  // Fonction pour gérer l'ajout au panier
  const handleAddToCart = (product, quantity) => {
    console.log("Ajout au panier", product, "Quantité:", quantity); // Ajoutez ceci pour le débogage
    dispatch(addToCart({ ...product, quantity: Number(quantity) })); // Ajoutez la quantité au produit avant de l'envoyer
    setShowPopup(false); // Assuming you want to close the popup after adding to cart
  };

  const handleEnterPress = async (inputValue) => {
    try {
      const response = await fetch(`http://localhost:5000/db/${inputValue}`);
      if (response.ok) {
        const data = await response.json();
        setProductInfo(data);

        console.log(data);
        window.localStorage.setItem("searchProd", JSON.stringify(data));
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
          <Modal.Title style={{ fontWeight: "bold", textAlign: "center" }}>
            Informations d'article
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productInfo === null ? (
            <p>article non disponible</p>
          ) : (
            <div>
              <p>Désignation: {productInfo.nompr}</p>
              <p>Prix Unitaire: {productInfo.prixl}</p>
              <p>
                Quantité:
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    console.log(e);
                    setQuantity(e.target.value);
                  }}
                />
              </p>
              <div className="d-flex justify-content-center">
                <Button
                  className="btn btn-primary mt-3"
                  onClick={() => {
                    handleAddToCart(productInfo, quantity);
                    navigate("/payer2");
                  }} // Ajout de l'événement onClick
                >
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
