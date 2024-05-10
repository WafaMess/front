// ParentComponent.jsx (le composant qui rend Options et BodyPayer1)
import React, { useState } from "react";
import Options from "./parametrage/Options";
import BodyPayer1 from "./payer1/BodyPayer1";

export default function ParentComponent() {
  const [isRadioActive, setIsRadioActive] = useState(false);

  const handleRadioChange = (event) => {
    setIsRadioActive(event.target.checked);
  };

  return (
    <>
      <Options
        isRadioActive={isRadioActive}
        handleRadioChange={handleRadioChange}
      />
      <BodyPayer1 isRadioActive={isRadioActive} />
    </>
  );
}
