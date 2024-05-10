import React from 'react'
import Button  from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import { Link } from 'react-router-dom';



export default function BodyCarte(){ 
    return (
        <div className="border">
          <Header />
            <div className='container'>
                <div className="row">
                    <div className="col ">          
                        <div >
                        <Image src='/Groupe 21289.svg' className='pt-3 mt-4 rounded mx-auto d-block'/>
                        </div>
                    </div> 
                    
                        <div className="col "> 
                        <div style={{borderLeft: "2px solid #000000", 
                    height: "100px",position: "absolute",
                    left: "50%", marginLeft: "-3px", top: "100px"}}></div> 
                            <div>       
                              <p className=" pt-3 mt-3 ">
                                Scanner votre</p>
                                <p><b> carte de fidélité</b></p>
                            </div> 
                        </div>  
                </div>
                
            </div>
          
            <div className="d-flex justify-content-center">
                <div className="mb-4 d-flex align-items-center">
                
                  <Image src='/Groupe 26197.svg' className='pt-3 mt-4 rounded mx-auto d-block'/>

                </div>
            </div>
            <div className="d-flex justify-content-center">
            <div className=" d-flex justify-content-center">
          <Button 
          variant="light mx-2">Retour</Button>
          <Button as={Link} to="/NumCartFid"
          variant="secondary">Saisir le N° de la carte</Button>
        </div>
        </div>
    </div>
  
          
    )
}  