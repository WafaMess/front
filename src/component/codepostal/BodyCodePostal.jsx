import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Calcule from "./Calcule";
import "./style.css";

export default function BodyCodePostal() {
  return (
    <div className="gris mt-3">
      <div className="blanc" style={{ position: "relative" }}>
        <div className="d-flex justify-content-center mb-0">
          <Image src="/logo.png" className="logo mb-3" />
          <Image src="/fermer.png" className="croix ml-auto" />
        </div>
        <p className="card-text text-center ">
          <h1>Veuillez saisir votre code postal</h1>
        </p>
        <div className=" d-flex justify-content-center">
          <Calcule />
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
            as={Link}
            to="/ModePaiement"
            variant="dark"
            className="butconf"
          >
            Confirmer
          </Button>
        </div>
      </div>
    </div>
  );
}
