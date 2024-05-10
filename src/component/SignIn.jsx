import React from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";

export default function SignIn() {
  return (
    <div className="border ">
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
              <p className=" pt-3 mt-3 ">Souhaitez-vous accéder</p>
              <p>
                <b> à votre compte fidélité ?</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="mb-5 mt-4 d-flex align-items-center gap-4">
          <Link to="/CodePostal">
            <Image src="/Groupe 26541.svg" className="rounded float-start " />
          </Link>
          <Link to="/ModeIden">
            <Image src="/Groupe 26542.svg" className="rounded float-end" />
          </Link>
        </div>
      </div>
    </div>
  );
}
