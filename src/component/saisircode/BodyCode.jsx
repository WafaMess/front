import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Header from "../Header";
import NewKeyboard from "./NewKeyboard";

export default function BodyCode() {
  const [codPromo, setcodPromo] = useState("");
  const navigate = useNavigate();

  React.useEffect(() => {}, [codPromo]);
  const validerCode = async () => {
    console.log("Numéro de code promo soumis pour validation:", codPromo);
    try {
      const response = await fetch("http://localhost:5000/verifier-codepromo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Codepromo: codPromo }),
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        if (data.status === "success") {
          toast.success("Code promo validée avec succès!");
          navigate("/payer2");
        } else {
          toast.error(data.message);
        }
      } else {
        toast.error(" Code promo est incorrcte.");
      }
    } catch (error) {
      toast.error("Erreur lors de la vérification du Code promo.");
    }
  };
  return (
    <div className="border">
      <Header />
      <Form>
        <FormGroup className=" text-center">
          <FormLabel className=" mt-5">
            <h1>Veuillez saisir votre code</h1>
          </FormLabel>
        </FormGroup>
      </Form>
      <NewKeyboard onInputChange={setcodPromo} />

      <div className="d-flex justify-content-center mt-3">
        <Button type="button" variant="light mx-2">
          Retour
        </Button>
        <ToastContainer />
        <Button type="button" variant="dark mb-1" onClick={validerCode}>
          Valider
        </Button>
      </div>
    </div>
  );
}
