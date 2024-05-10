import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BodyCarte from "./BodyCarte";

export default function CarteFid() {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 " style={{ minWidth: "605px" }}>
        <BodyCarte />
      </div>
    </div>
  );
}
