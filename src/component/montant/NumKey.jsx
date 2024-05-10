import React from 'react'
import "./wrapper.css";
export default function Numkey() {
  return (
    <div>
      <div className="keypad">
  
  <div className="key">1</div>
  <div className="key">2</div>
  <div className="key">3</div>
  <div className="key function">/</div>
  
 
  <div className="key">4</div>
  <div className="key">5</div>
  <div className="key">6</div>
  <div className="key function">*</div>
  
  
  <div className="key">7</div>
  <div className="key">8</div>
  <div className="key">9</div>
  <div className="key function">-</div>
  
  
  <div className="key montant">Montant</div>
  <div className="key">0</div>
  <div className="key function">+</div>
  <div className="key validate">✓</div>
</div>

    </div>
  )
}
