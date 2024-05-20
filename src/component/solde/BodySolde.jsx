import React from "react";

import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";

export default function BodySolde() {
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
          <b>5.50£</b>
        </span>
        <br />

        <hr className="mx-auto my-0 " style={{ width: "300px" }} />
        <span>
          Total
          commande&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;105.50£
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
