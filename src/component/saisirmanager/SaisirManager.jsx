import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BodySaisMang from "./BodySaisMang";

export default function SaisirManager() {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 " style={{ minWidth: "605px" }}>
        <BodySaisMang />
      </div>
    </div>
  );
}
