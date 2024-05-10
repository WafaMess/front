import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BodyNumCart from "./BodyNumCart";

export default function NumCartFid() {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 " style={{ minWidth: "605px" }}>
        <BodyNumCart />
      </div>
    </div>
  );
}
