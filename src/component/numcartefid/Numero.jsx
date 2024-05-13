import React, { useState } from "react";
import "./style.css";

export default function Numero({ onValidate, setCardNumber }) {
  const [value, setValue] = useState("");
  React.useEffect(() => {
    setCardNumber(value);
  }, [value, setCardNumber]);
  return (
    <div className="container">
      <div className="calculator" style={{ backgroundColor: "green" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onValidate(value); // Utiliser onValidate pour mettre à jour l'état dans BodyNumCart
          }}
        >
          <div className="display">
            <input
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="button"
              value="1"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="2"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="3"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="4"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="5"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="6"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="7"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="8"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="9"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input type="button" value="C" onClick={(e) => setValue("")} />
            <input
              type="button"
              value="0"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="⌦"
              onClick={(e) => setValue(value.slice(0, -1))}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
