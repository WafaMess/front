import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BodyPromo from "./BodyInterface";

export default function Interface() {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 " style={{ minWidth: "605px" }}>
        <BodyPromo />
      </div>
    </div>
  );
}
