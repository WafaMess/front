import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Header from "../Header";

export default function BodyPayer3() {
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
                  style={{ width: "18rem", height: "15rem" }}
                ></div>
              </div>
              <div className="row mt-1 mb-1">
                <div className="col-12">
                  <Button
                    variant="outline-secondary "
                    className="col-12 text-center"
                    style={{ width: "18rem", height: "3rem", fontSize: "9px" }}
                  >
                    <Image
                      src="/Groupe 22470.svg"
                      className="rounded mx-auto d-block"
                      style={{ width: "20rpx", height: "12px" }}
                    />
                    Demande d'assistance
                  </Button>
                </div>
              </div>
              <div className="row mt-1 mb-1">
                <div className="col-6 ">
                  <Button
                    variant="outline-secondary   w-100"
                    style={{ fontSize: "9px" }}
                  >
                    <Image
                      src="/offer.svg"
                      className="rounded mx-auto d-block"
                      style={{ width: "20rpx", height: "12px" }}
                    />
                    Code PROMO
                  </Button>
                </div>
                <div className="col-6 divLef">
                  <Button
                    variant="outline-secondary  w-100"
                    style={{ fontSize: "9px" }}
                  >
                    <Image
                      src="/delete (3).svg"
                      className="rounded mx-auto d-block"
                      style={{ width: "20rpx", height: "12px" }}
                    />
                    Supprimer l'article
                  </Button>
                </div>
              </div>
              <div className="row mt-1 mb-1">
                <div className="col-6">
                  <Button
                    variant="outline-danger w-100"
                    style={{ fontSize: "9px" }}
                  >
                    <Image
                      src="/Groupe 26244.svg"
                      className="rounded mx-auto d-block"
                      style={{ width: "20rpx", height: "12px" }}
                    />
                    Abandonner
                  </Button>
                </div>
                <div className="col-6 divLef">
                  <Button
                    as={Link}
                    to="/FindProduct"
                    variant="outline-secondary  w-100"
                    style={{ fontSize: "9px" }}
                  >
                    <Image
                      src="/Groupe 26249.svg"
                      className="rounded mx-auto d-block"
                      style={{ width: "20rpx", height: "12px" }}
                    />
                    Rechercher produits
                  </Button>
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

            <div className="col-12">
              <Button
                as={Link}
                to="/CompteFidelite"
                variant="dark pt-2 mb-2 "
                className="col-12 text-center"
                style={{ width: "20rem", fontSize: "17px" }}
              >
                Payer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;105,00$
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
