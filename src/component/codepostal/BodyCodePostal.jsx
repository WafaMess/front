import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Calcule from "./Calcule";
import "./style.css";

export default function BodyCodePostal() {
  const [codePostal, setCodePostal] = useState("");

  const handleConfirmClick = async () => {
    if (!codePostal) {
      console.error("Le code postal est vide.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/enregistrer-code-postal",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cpcl: codePostal }),
        }
      );

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du code postal:", error);
    }
  };

  const handleChange = (e) => {
    setCodePostal(e.target.value);
  };

  return (
    <div className="gris mt-3">
      <div className="blanc" style={{ position: "relative" }}>
        <div className="d-flex justify-content-center mb-0">
          <Image src="/logo.png" className="logo mb-3" />
          <Image src="/fermer.png" className="croix ml-auto" />
        </div>
        <h1 className="card-text text-center">
          Veuillez saisir votre code postal
        </h1>
        <div className=" d-flex justify-content-center">
          <Calcule value={codePostal} onChange={handleChange} />
        </div>
        <div className="d-flex justify-content-center mt-2">
          <Button
            as={Link}
            to="/ModePaiement"
            variant="light mx-2"
            className="buting"
          >
            Ignorer
          </Button>
          <Button
            variant="dark"
            className="butconf"
            onClick={handleConfirmClick}
          >
            Confirmer
          </Button>
        </div>
      </div>
    </div>
  );
}
