import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BodyCode from "./BodyCode";

export default function SaisirCode() {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 " style={{ minWidth: "605px" }}>
        <BodyCode />
      </div>
    </div>
  );
}
