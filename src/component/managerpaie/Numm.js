import React, { useState } from "react";
import "./design.css";

export default function Numm() {
  const [value, setValue] = useState("");
  return (
    <div
      style={{ border: "1px solid black", height: "345px", marginLeft: "2px" }}
    >
      <p
        style={{
          margin: "0px",
          width: "19.5rem",
          height: "18px",
          fontSize: "12px",
          backgroundColor: "gray",
          textAlign: "center",
        }}
      >
        <b>↶ Paiement Manager</b>
      </p>
      <span style={{ color: "red" }}>
        &nbsp;&nbsp;<b>Reste à payer</b>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b>100.00£</b>
      </span>
      <br />

      <hr className="mx-auto my-0 " style={{ width: "300px" }} />
      <div className="grid">
        <div className="row">
          <div className="col-6">
            <div className="col-12">
              <div className="calculator">
                <form action="">
                  <div className="display">
                    <input type="text" value={value} />
                  </div>
                  <div>
                    <input
                      type="button"
                      value="1"
                      onClick={(e) => setValue(value + e.target.value)}
                    />
                    <input
                      type="button"
                      value="2"
                      onClick={(e) => setValue(value + e.target.value)}
                    />
                    <input
                      type="button"
                      value="3"
                      onClick={(e) => setValue(value + e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="button"
                      value="4"
                      onClick={(e) => setValue(value + e.target.value)}
                    />
                    <input
                      type="button"
                      value="5"
                      onClick={(e) => setValue(value + e.target.value)}
                    />
                    <input
                      type="button"
                      value="6"
                      onClick={(e) => setValue(value + e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="button"
                      value="7"
                      onClick={(e) => setValue(value + e.target.value)}
                    />
                    <input
                      type="button"
                      value="8"
                      onClick={(e) => setValue(value + e.target.value)}
                    />
                    <input
                      type="button"
                      value="9"
                      onClick={(e) => setValue(value + e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="button"
                      value="C"
                      onClick={(e) => setValue("")}
                    />
                    <input
                      type="button"
                      value="0"
                      onClick={(e) => setValue(value + e.target.value)}
                    />
                    <input
                      type="button"
                      value="⌦"
                      onClick={(e) => setValue(value.slice(0, -1))}
                    />
                    <div>
                      <input
                        type="button"
                        value="+"
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                      <input
                        type="button"
                        value="-"
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                      <input
                        type="button"
                        value="X"
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="button"
                        value="."
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                      <input
                        type="button"
                        value="/"
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                      <input
                        type="button"
                        value="9"
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-6 py-1  ">
            <div className="row">
              <div className="col-12 ml-3" style={{ marginLeft: "4px" }}>
                <div className="form-check ">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="optradio"
                    value="option1"
                    checked
                  />

                  <label class="form-check-label ml-2" for="radio1">
                    Espéces
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="radio2"
                    name="optradio"
                    value="option1"
                    checked
                  />

                  <label class="form-check-label ml-2" for="radio1">
                    Tickets restaurant
                  </label>
                </div>
                <div class="form-check ">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="radio3"
                    name="optradio"
                    value="option1"
                    checked
                  />

                  <label class="form-check-label ml-2" for="radio1">
                    Chéque
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="radio4"
                    name="optradio"
                    value="option1"
                    checked
                  />

                  <label class="form-check-label mr-2" for="radio1">
                    Bon d'avoir
                  </label>
                </div>

                <div className="row mt-1 mb-3">
                  <div className="col-6 ">
                    <div
                      style={{
                        border: "1px solid black",
                        height: "180px",
                        width: "138px",
                      }}
                    >
                      <p
                        style={{
                          margin: "0px",
                          width: "8.5rem",
                          height: "17px",
                          fontSize: "12px",
                          backgroundColor: "gray",
                        }}
                      >
                        Mode&nbsp;&nbsp;&nbsp;Montant&nbsp;&nbsp;&nbsp;Action
                      </p>

                      <hr style={{ width: "125px", textAlign: "end" }} />
                      <p>
                        <span style={{ fontSize: "12px" }}>
                          Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Montant£
                        </span>
                      </p>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
