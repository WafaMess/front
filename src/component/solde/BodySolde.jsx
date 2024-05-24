import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useTotal } from "./../TotalContext";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";

export default function BodySolde() {
  const [solde, setSolde] = useState(null);
  const location = useLocation();
  const { cardNumber } = location.state || {};
  const { totalCommande } = useTotal();
  useEffect(() => {
    if (cardNumber) {
      const fetchSolde = async () => {
        try {
          const response = await fetch(
            "http://localhost:5000/recuperer-solde",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ numeroCarte: cardNumber }),
            }
          );
          const data = await response.json();
          if (response.ok) {
            if (data.status === "success") {
              setSolde(data.solde);
            } else {
              toast.error(data.message);
            }
          } else {
            toast.error("Erreur lors de la récupération du solde.");
          }
        } catch (error) {
          toast.error("Erreur du serveur lors de la récupération du solde.");
        }
      };
      fetchSolde();
    }
  }, [cardNumber]);
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
      <div className="card-body text-center mt-3 mb-5">
        <span>
          <b>Votre solde</b>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>{solde !== null ? `${solde}` : "Chargement..."}</b>
        </span>
        <br />

        <hr className="mx-auto my-0 " style={{ width: "300px" }} />
        <span>
          Total
          commande&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {totalCommande !== undefined
            ? `${totalCommande.toFixed(2)}£`
            : "0.00£"}
        </span>
        <br />
      </div>
      <div className="d-flex justify-content-center">
        <div className="mb-5 mt-4 d-flex align-items-center gap-4">
          <Link to="/CodePostal">
            <Image src="/Groupe 26541.svg" className="rounded float-start " />
          </Link>

          <Link to="/CodePostal">
            <Image src="/Groupe 26542.svg" className="rounded float-end " />
          </Link>
        </div>
      </div>
    </div>
  );
}
