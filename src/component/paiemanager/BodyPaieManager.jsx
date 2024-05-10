import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Header from "../Header";

export default function BodyPaieManager() {
  return (
    <div className="border">
      <Header />
      <div className="grid">
        <div className="row">
          <div
            className="col-6"
            style={{ paddingLeft: "20px", paddingRight: "10px" }}
          >
            <div className="row mt-1 mb-1">
              <div className="col-12">
                <div
                  className="card"
                  style={{ border: "0", width: "18rem", height: "21rem" }}
                >
                  <div className="row mt-1 mb-3">
                    <div className="col-6">
                      <Button
                        as={Link}
                        to="/ManagerPaie"
                        onClick={() => console.log("Button clicked")}
                      >
                        <Image
                          src="/mode-de-paiement.png"
                          className="rounded float-start "
                          style={{ width: "100px", height: "110px" }}
                        />
                      </Button>
                    </div>
                    <div className="col-6">
                      <Button
                        as={Link}
                        to="/NumTel"
                        onClick={() => console.log("Button clicked")}
                      >
                        <Image
                          src="/fichier.png"
                          className="rounded float-end "
                          style={{ width: "100px", height: "110px" }}
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="row mt-1 mb-4">
                    <div className="col-6 divLef">
                      <Button
                        as={Link}
                        to="/Saisircod"
                        onClick={() => console.log("Button clicked")}
                      >
                        <Image
                          src="/offrir.png"
                          className="rounded float-start "
                          style={{ width: "100px", height: "110px" }}
                        />
                      </Button>
                    </div>
                    <div className="col-6 divLef">
                      <Button
                        as={Link}
                        to="/NumTel"
                        onClick={() => console.log("Button clicked")}
                      >
                        <Image
                          src="/loupe.png"
                          className="rounded float-end "
                          style={{ width: "100px", height: "110px" }}
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="row mt-1 mb-1">
                    <div className="col-6">
                      <Button
                        variant="outline-danger w-100"
                        style={{ fontSize: "9px" }}
                      >
                        x <br />
                        Quitter
                      </Button>
                    </div>
                    <div className="col-6 divLef">
                      <Button variant="dark  w-100" style={{ fontSize: "9px" }}>
                        x <br />
                        Valider
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-6 "
            style={{ paddingLeft: "0px", paddingRight: "10px" }}
          >
            <div className="row  mb-1">
              <div className="col-12">
                <Table
                  className="border  mt-1 mb-2"
                  style={{ width: "20rem", fontSize: "9px" }}
                >
                  <thead>
                    <tr className="table-secondary ">
                      <th>Designation</th>
                      <th>Prix</th>
                      <th>Qté</th>
                      <th>Montant</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>coca cola 1.5L</td>
                      <td>2.00</td>
                      <td>1</td>
                      <td>2.00</td>
                    </tr>
                    <tr className="table-secondary ">
                      <td colSpan={3}>Remise</td>
                      <td>1.50</td>
                    </tr>
                    <tr>
                      <td>coca cola 1.5L</td>
                      <td>2.00</td>
                      <td>1</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>oasis tropical canette</td>
                      <td>1.50</td>
                      <td>1</td>
                      <td>1.50</td>
                    </tr>
                    <tr>
                      <td>coca cola 1.5L</td>
                      <td>2.00</td>
                      <td>1</td>
                      <td>3.00</td>
                    </tr>
                    <tr>
                      <td>oasis tropical canette</td>
                      <td>1.50</td>
                      <td>1</td>
                      <td>1.50</td>
                    </tr>
                    <tr>
                      <td>sac</td>
                      <td>0.20</td>
                      <td>1</td>
                      <td>0.20</td>
                    </tr>
                    <tr>
                      <td colSpan={3}>Promotion 15%</td>
                      <td>-0.50</td>
                    </tr>
                    <tr className="table-secondary ">
                      <td></td>
                      <td>∧</td>
                      <td>∨</td>
                      <td></td>
                    </tr>
                    <tr className="table-secondary ">
                      <td>quantité: 8</td>
                      <td colSpan={2}>Rem.: -0002.50$</td>
                      <td>Tot</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
