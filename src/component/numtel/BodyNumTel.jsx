import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Numero from "../numcartefid/Numero";
import { useNavigate } from "react-router-dom";

export default function BodyNumTel() {
  const [cardNumber, setCardNumber] = useState("");
  const navigate = useNavigate();
  React.useEffect(() => {}, [cardNumber]);
  const validerTel = async () => {
    console.log("Numéro de telephone soumis pour validation:", cardNumber);
    try {
      const response = await fetch("http://localhost:5000/verifier-tel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ numeroTel: cardNumber }),
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
            <div
              style={{
                borderLeft: "2px solid #000000",
                height: "100px",
                position: "absolute",
                left: "50%",
                marginLeft: "-3px",
                top: "100px",
              }}
            ></div>
            <div>
              <p className=" pt-3 mt-3 ">Saisissez votre</p>
              <div>
                <h4>numéro de téléphone</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" d-flex justify-content-center">
        <Numero
          onValidate={(value) => setCardNumber(value)}
          setCardNumber={setCardNumber}
        />
        {/* Passer setCardNumber comme prop */}
      </div>
      <div className="d-flex justify-content-center mt-2">
        <Button type="button" variant="light mx-2">
          Retour
        </Button>
        <Button variant="dark" onClick={validerTel}>
          Valider
        </Button>
      </div>
    </div>
  );
}
