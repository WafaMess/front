import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BodyFind from "./BodyFind";

export default function FindProduct() {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 " style={{ minWidth: "605px" }}>
        <BodyFind />
      </div>
    </div>
  );
}
