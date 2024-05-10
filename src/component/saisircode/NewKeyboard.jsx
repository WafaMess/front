import React, { useState} from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';


export default function NewKeyboard() {
	const [input, setInput] = useState('');

  const onChange = input => {
    setInput(input);
  };

  const onKeyPress = button => {
    console.log('Button pressed:', button);
  };

  return (
    <div>
	<div className="mt-3  d-flex justify-content-center">
      <input value={input} />
      </div>
      <div className="mt-3">
      <Keyboard onChange={onChange} onKeyPress={onKeyPress} />
    </div>
    </div>
  )
}



  
  

