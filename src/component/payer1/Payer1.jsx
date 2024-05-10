import React, { useState } from "react";
import BodyPayer1 from "./BodyPayer1";

export default function Payer1() {
  const [isRadioActive, setIsRadioActive] = useState(false);

  // Définir une fonction pour mettre à jour isRadioActive
  const handleRadioChange = (newValue) => {
    setIsRadioActive(newValue);
  };

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3" style={{ minWidth: "605px" }}>
        <BodyPayer1
          isRadioActive={isRadioActive}
          handleRadioChange={handleRadioChange}
        />
      </div>
    </div>
  );
}
