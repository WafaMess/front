// ParentComponent.jsx (le composant qui rend Options et BodyPayer1)
import React, { useState } from "react";
import Options from "./parametrage/Options";
import BodyPayer2 from "./payer2/BodyPayer2";

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
      <BodyPayer2 isRadioActive={isRadioActive} />
    </>
  );
}
