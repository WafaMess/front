import React, { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

export default function NewKeyboard({ onEnterPress }) {
  const [input, setInput] = useState("");

  const onChange = (input) => {
    setInput(input);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed:", button);
    // Vérifiez si la touche pressée est 'Enter'
    if (button === "{enter}") {
      // Appeler la fonction passée en prop
      onEnterPress(input);
    }
  };

  return (
    <div>
      <div className="mt-3  d-flex justify-content-center">
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <div className="mt-3">
        <Keyboard onChange={onChange} onKeyPress={onKeyPress} />
      </div>
    </div>
  );
}
