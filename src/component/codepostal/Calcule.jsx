import React from "react";
import "./style.css";

export default function Calcule({ value, onChange }) {
  // Gestionnaire pour mettre à jour la valeur du champ
  const handleChange = (e) => {
    onChange({ target: { value: e.target.value } });
  };

  return (
    <div className="container">
      <div className="calculator" style={{ backgroundColor: "green" }}>
        <form action="">
          <div className="display">
            <input type="text" value={value} onChange={handleChange} />
          </div>
          <div>
            <input
              type="button"
              value="1"
              onClick={(e) =>
                onChange({ target: { value: value + e.target.value } })
              }
            />
            <input
              type="button"
              value="2"
              onClick={(e) =>
                onChange({ target: { value: value + e.target.value } })
              }
            />
            <input
              type="button"
              value="3"
              onClick={(e) =>
                onChange({ target: { value: value + e.target.value } })
              }
            />
          </div>
          <div>
            <input
              type="button"
              value="4"
              onClick={(e) =>
                onChange({ target: { value: value + e.target.value } })
              }
            />
            <input
              type="button"
              value="5"
              onClick={(e) =>
                onChange({ target: { value: value + e.target.value } })
              }
            />
            <input
              type="button"
              value="6"
              onClick={(e) =>
                onChange({ target: { value: value + e.target.value } })
              }
            />
          </div>
          <div>
            <input
              type="button"
              value="7"
              onClick={(e) =>
                onChange({ target: { value: value + e.target.value } })
              }
            />
            <input
              type="button"
              value="8"
              onClick={(e) =>
                onChange({ target: { value: value + e.target.value } })
              }
            />
            <input
              type="button"
              value="9"
              onClick={(e) =>
                onChange({ target: { value: value + e.target.value } })
              }
            />
          </div>
          <div>
            <input
              type="button"
              value="C"
              onClick={() => onChange({ target: { value: "" } })}
            />
            <input
              type="button"
              value="0"
              onClick={(e) =>
                onChange({ target: { value: value + e.target.value } })
              }
            />
            <input
              type="button"
              value="⌦"
              onClick={(e) =>
                onChange({ target: { value: value + e.target.value } })
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
}
