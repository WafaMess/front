import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BodyCompFid from "./BodyCompFid";

export default function CompteFidelite() {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 " style={{ minWidth: "605px" }}>
        <BodyCompFid />
      </div>
    </div>
  );
}
