import React from 'react'
import  Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
    return (
      <header  style={{ backgroundColor: '#000' }} className=" py-2">
        <Image src='/Groupe 22470.svg' className="rounded float-start"/>
        <Image src='/logo.png' className='rounded mx-auto d-block'/>
        
      </header>
    );
  }