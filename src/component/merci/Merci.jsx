import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './cod.css'
import { Image} from 'react-bootstrap';


export default function Merci() {
  return (
    <div className='d-flex justify-content-center'>
    <div className="gris mt-3  ">
    <div className="blanc " style={{ position: "relative" }}>
      <div className="d-flex justify-content-center">
        <Image src='/logo.png' style={{margin:"10%",
        marginTop: "0px",top: "105px",left: "450px",width: "120px",
        height: "66px",background: "black 0% 0% no-repeat padding-box",opacity: "1", 
         marginLeft: "auto",marginRight: "auto",}}/>
      </div>
      <p className="card-text display-6 text-center">Merci pour votre commande</p>
       <h2 className='text-center'><b>A bientot</b></h2>
   
    <Image src='/Groupe 21454.svg' className='rounded mx-auto d-block'/>
  </div>
  </div>
  </div>
)}

