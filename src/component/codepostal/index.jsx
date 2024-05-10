import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import BodyCodePostal from "./BodyCodePostal";

export default function CodePostal() {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 " style={{ minWidth: "605px" }}>
        <div>
          <BodyCodePostal />
        </div>
      </div>
    </div>
  );
}
