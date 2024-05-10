import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Header from "../Header";
import Numm from "./Numm";

export default function BodyManagPaie() {
  return (
    <div className="border">
      <Header />
      <div className="grid">
        <div className="row">
          <div className="col-6">
            <div className="row mt-1 mb-1">
              <div className="col-12">
                <Numm />

                <div
                  className="card-footer text-center"
                  style={{ border: "0", backgroundColor: "white" }}
                >
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
                      <Button
                        as={Link}
                        to="/Modif"
                        variant="dark  w-100"
                        style={{ fontSize: "9px" }}
                      >
                        x <br />
                        Valider
                      </Button>
                    </div>
                  </div>
                </div>
                {/* <div className='row mt-1 mb-1'>
                  <div className='col-6'>
                    <Button variant="outline-danger w-100" style={{fontSize:"9px"}}>x <br/>Quitter</Button>
                  </div>
                  <div className='col-6 divLef' >
                    <Button variant="dark  w-100" style={{fontSize:"9px"}}>x <br/>Valider</Button>
                  </div> 
                </div> */}
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
                  style={{ width: "20rem", height: "24.5rem", fontSize: "9px" }}
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
                      <td> 1</td>
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
                      <td>1.50 </td>
                    </tr>
                    <tr>
                      <td>sac</td>
                      <td>0.20</td>
                      <td> 1 </td>
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
