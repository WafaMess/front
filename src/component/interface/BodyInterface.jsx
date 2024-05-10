import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Header from '../Header';

export default function BodyInterface() {
  return (
    <>
      <Header />
      <div className="border">
        <div className="d-flex flex-column align-items-center mb-5">
          <p className='pt-3 mt-4'> Veuillez Scanner Votre <b>Code Promo</b></p>
          <Image src='/offer.svg' className='mx-auto d-block w-45 mb-4' 
          style={{width:"261px",height:"259px"}}/>
        </div>
        <div className="d-flex justify-content-center">
          <Button as={Link} to="/Payer2" variant="light mx-2">Ignorer</Button>
          <Button as={Link} to="/Saisircod" variant="secondary">Saisir manuellement</Button>
        </div>
      </div>
    </>
  )
}
