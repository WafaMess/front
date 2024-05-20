import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Header";
import Numero from "./../../_components/Numero";

export default function BodyNumCart() {
  const [cardNumber, setCardNumber] = useState("");
  const navigate = useNavigate();

  React.useEffect(() => {}, [cardNumber]);
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
          toast.success("Carte validée avec succès!");
          navigate("/Solde");
        } else {
          toast.error(data.message);
        }
      } else {
        toast.error(" numéro de la carte est incorrcte.");
      }
    } catch (error) {
      toast.error("Erreur lors de la vérification du numéro de la carte.");
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
        <ToastContainer />
        <Button type="button" variant="dark" onClick={validerCarte}>
          Valider
        </Button>
      </div>
    </div>
  );
}
