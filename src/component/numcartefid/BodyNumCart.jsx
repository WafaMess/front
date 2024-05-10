import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Numero from "./Numero";

export default function BodyNumCart() {
  const [cardNumber, setCardNumber] = useState("");
  const navigate = useNavigate();
  React.useEffect(() => {
    console.log({ cardNumber });
  }, [cardNumber]);
  const validerCarte = async () => {
    console.log("Numéro de carte soumis pour validation:", cardNumber);
    try {
      const response = await fetch("http://localhost:5000/verifier-carte", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ numeroCarte: cardNumber }),
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        if (data.status === "success") {
          navigate("/Solde");
        } else {
          alert(data.message);
        }
      } else {
        alert(" numéro de la carte est incorrcte.");
      }
    } catch (error) {
      alert("Erreur lors de la vérification du numéro de la carte.");
    }
  };
  return (
    <div className="border">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col ">
            <div>
              <Image
                src="/Groupe 21289.svg"
                className="pt-3 mt-4 rounded mx-auto d-block"
              />
            </div>
          </div>

          <div className="col ">
            <div className="vl"></div>
            <div>
              <p className=" pt-3 mt-3 ">Saisissez le numéro de</p>
              <p>
                <b> votre carte de fidélité</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" d-flex justify-content-center ">
        <Numero
          onValidate={(value) => setCardNumber(value)}
          setCardNumber={setCardNumber}
        />
        {/* Passer setCardNumber comme prop */}
      </div>
      <div className=" d-flex justify-content-center ">
        <Button type="button" variant="light mx-2">
          Retour
        </Button>
        <Button type="button" variant="dark" onClick={validerCarte}>
          Valider
        </Button>
      </div>
    </div>
  );
}
