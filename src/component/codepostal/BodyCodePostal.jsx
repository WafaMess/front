import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Numero from "./../../_components/Numero";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
//import { useSelector } from "react-redux";

export default function BodyCodePostal() {
  //const postalCodeRequired = useSelector((state) => state.options.postalCodeRequired );
  // const postalCodeValidation = useSelector((state) => state.options.postalCodeValidation );

  const [cardNumber, setCardNumber] = useState("");
  const navigate = useNavigate();
  React.useEffect(() => {}, [cardNumber]);
  const validerPostal = async () => {
    // Vérifier si le champ du code postal est vide
    // disabled={!postalCodeRequired}
    if (!cardNumber.trim()) {
      toast.error("Veuillez saisir un code postal.");
      return; // Arrêter l'exécution si le champ est vide
    }
    console.log("Code Postal soumis pour validation:", cardNumber);
    try {
      const response = await fetch(
        "http://localhost:5000/verifier-codepostal",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ codePostal: cardNumber }),
        }
      );
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        if (data.status === "success") {
          toast.success("Code Postal validée avec succès!");
          navigate("/ModePaiement ");
        } else {
          toast.error(data.message);
        }
      } else {
        toast.error(" Code Postal est incorrcte.");
      }
    } catch (error) {
      toast.error("Erreur lors de la vérification du Code Postal.");
    }
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
          {/* <Calcule value={codePostal} onChange={handleChange} /> */}
          <Numero
            onValidate={(value) => setCardNumber(value)}
            setCardNumber={setCardNumber}
          />
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
          <ToastContainer />
          <Button variant="dark" className="butconf" onClick={validerPostal}>
            Confirmer
          </Button>
        </div>
      </div>
    </div>
  );
}
