import React from "react";
import BodyManager from "./BodyManager";

export default function Manager() {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3" style={{ minWidth: "605px" }}>
        <BodyManager />
      </div>
    </div>
  );
}
