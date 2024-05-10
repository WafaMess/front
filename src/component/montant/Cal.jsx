import React, { useState } from "react";
import "./wrapper.css";

export default function Cal() {
  const [value, setValue] = useState("");
  return (
    <div
      style={{ border: "1px solid black", height: "370px", marginLeft: "2px" }}
    >
      <p
        style={{
          width: "19.5rem",
          height: "20px",
          fontSize: "12px",
          backgroundColor: "gray",
          textAlign: "center",
        }}
      >
        <b>↶ Modifier montant/quantité</b>
      </p>

      <div className="calculatore ">
        <form action="">
          <div className="display">
            <input type="text" value={value} />
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
            <input
              type="button"
              value="+"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="⌦"
              onClick={(e) => {
                try {
                  setValue(value.slice(0, -1));
                } catch (error) {
                  console.error("Error occurred while slicing:", error);
                }
              }}
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
            <input
              type="button"
              value="-"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input type="button" value="C" onClick={(e) => setValue("")} />
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
            <input
              type="button"
              value="X"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value=" ✓"
              className="touch"
              onClick={(e) => {
                try {
                  setValue(eval(value));
                } catch (error) {
                  setValue("Error");
                }
              }}
            />
          </div>

          <div>
            <input
              type="button"
              value="0"
              className="equal"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="."
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="/"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
