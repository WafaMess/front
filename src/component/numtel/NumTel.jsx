import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BodyNumTel from "./BodyNumTel";

export default function NumTel() {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 " style={{ minWidth: "605px" }}>
        <BodyNumTel />
      </div>
    </div>
  );
}
