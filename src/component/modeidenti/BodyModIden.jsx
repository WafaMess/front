import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import { useSelector } from "react-redux";

export default function BodyModIden() {
  const loyaltyCardNumber = useSelector(
    (state) => state.options.loyaltyCardNumber
  );
  const phoneNumberAuth = useSelector((state) => state.options.phoneNumberAuth);
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
              <p className=" pt-3 mt-3 ">Veuillez choisir votre</p>
              <p>
                <b> mode d'identification</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="mb-5 mt-4 d-flex align-items-center gap-4 ">
          <Link to="/CarteFid" disabled={!loyaltyCardNumber}>
            <Image src="/Groupe 26197.svg" className="rounded float-start " />
          </Link>

          <Link to="/NumTel">
            <Image
              src="/Tracé 20267.svg"
              className="rounded float-end "
              disabled={!phoneNumberAuth}
            />
          </Link>
        </div>

        {/* <Image src='/cartebancaire.png'className='pt-3 mt-4 rounded mx-auto d-block me-5'/> */}
        {/* <Image src='/mobile.png' className='pt-3 mt-4 rounded mx-auto d-block '/> */}
      </div>

      <div className="d-flex justify-content-center">
        <Button
          as={Link}
          to="/CompteFidelite"
          type="button"
          className="btn btn-light center mb-1"
        >
          Retour
        </Button>
      </div>
    </div>
  );
}
