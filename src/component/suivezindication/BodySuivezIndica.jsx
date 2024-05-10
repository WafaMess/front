import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header';


export default function BodySuivezIndica() {
     
  return (
  
    <div className='border' >
        <Header/>
        
           <div class="card-body text-center mt-3 mb-5">
             <span style={{color:"red"}}><b>Reste à payer</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>100.00£</b></span><br/>
            
             <hr className="mx-auto my-0 " style={{width:"300px"}}/> 
             <span>Total commande&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;105.50£</span><br/>
             </div>
             <div className='text-center mb-5'>
             <h2><b>Suivez les indication</b></h2>
              <p  className="display-6">du lecteur de carte bancaire</p> 
             
             
             <Image  src='/Groupe 21471.svg' className="rounded mx-auto d-block"/>
             </div>
             <div className=" d-flex justify-content-center">
          <Button as={Link} to="/Merci" 
          variant="light mx-2 mb-1">Retour</Button>
          <Button as={Link} to="/Merci" 
          variant="secondary mb-1">Continusez ma commande</Button>
        </div>
    </div>
  )
}
