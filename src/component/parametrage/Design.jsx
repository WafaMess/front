import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Design() {
  return (
    <div className="card d-flex  " style={{ height: "90vh", width: "120vh" }}>
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
      <div className="row mt-3">
        <div className="col-12">
          <div className="card">
            <div className="card-body ">
              <h5 className="card-text ">Générale</h5>

              <div className="row">
                <div className="col-12">
                  <div className="d-flex align-items">
                    <p className="fst-start" style={{ fontSize: "10px" }}>
                      Couleur principale :
                    </p>

                    <input
                      type="color"
                      className="form-control form-control-color ms-3"
                      id="exampleColorInput"
                      value="#563d7c"
                      title="Choose your color"
                    ></input>
                    {/* <label
                      for="exampleColorInput"
                      className="form-label"
                      style={{ fontSize: "13px" }}
                    >
                      Modifier
                    </label> */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="d-flex align-items">
                    <p className="fst-start" style={{ fontSize: "10px" }}>
                      Couleur secondaire :
                    </p>
                    <input
                      type="color"
                      className="form-control form-control-color"
                      value="#CCCCCC"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <div className="card">
            <div className="card-body ">
              <h5 className="card-text ">Ecran panier</h5>

              <div className="row">
                <div className="col-12">
                  <div className="d-flex align-items">
                    <p className="fst-start" style={{ fontSize: "10px" }}>
                      Affichage article scanné
                    </p>
                    <div className="form-check form-switch ">
                      <input
                        className="form-check-input ms-auto"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="d-flex align-items">
                    <p className="fst-start" style={{ fontSize: "10px" }}>
                      Image publicitaire
                    </p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input ms-auto"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="d-flex align-items">
                    <p className="fst-start" style={{ fontSize: "10px" }}>
                      Logo
                    </p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input ms-auto"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-grid gap-2 d-md-flex justify-content-md-end "
        style={{ marginTop: "75px" }}
      >
        <Button variant="outline-secondary">Maintenance</Button>
        <Button variant="outline-danger">Réduire Borne Sco</Button>
        <Button variant="danger">Fermer Borne Sco</Button>
      </div>
    </div>
  );
}
