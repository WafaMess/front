import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Impremente() {
  return (
    <div className="card d-flex  " style={{ height: "80vh", width: "110vh" }}>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">PARAMETRAGE</span>
          <ul className="nav justify-content-end">
            <li className="nav-item ">
              <Button variant="dark ">RETOUR</Button>
            </li>

            <li className="nav-item ">
              <Button variant="light">ENREGISTRER</Button>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link general" to="/general">
            Général
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link general" to="/design">
            Design
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link general" to="/impremente">
            Impremente
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link general" to="/option">
            Options
          </Link>
        </li>
      </ul>
      <div className="row mt-3 ">
        <div className="col-sm-4 ">
          <div className="card">
            <div className="card-body">
              <Image
                src="/easy-installation.png"
                className="rounded float-start"
              />
              <p className="card-text">installation</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <Image
                src="/imprimante (1).png"
                className="rounded float-start "
              />
              <p className="card-text">impressions</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-grid gap-2 d-md-flex justify-content-md-end"
        style={{ marginTop: "270px" }}
      >
        <Button variant="outline-secondary">Maintenance</Button>
        <Button variant="outline-danger">Réduire Borne Sco</Button>
        <Button as={Link} to="/login" variant="danger">
          Fermer Borne Sco
        </Button>
      </div>
    </div>
  );
}
