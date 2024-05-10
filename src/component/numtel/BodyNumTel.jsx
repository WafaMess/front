import React from 'react'
import Button  from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import Numero from '../numcartefid/Numero';




export default function BodyNumTel(){ 
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
                                Saisissez votre</p>
                                <p><b> <h4>numéro de téléphone</h4></b></p>
                            </div> 
                        </div>  
                </div>
                
            </div>
            
             
             
            {/* <div className="d-flex justify-content-center">
                <div className="mb-4 d-flex align-items-center">
                </div>
            </div> */}
            
            <div className=' d-flex justify-content-center'><Numero/></div>
            <div className="d-flex justify-content-center mt-2">
             <Button type="button" variant="light mx-2">Retour</Button>
          <Button variant="dark">Valider</Button>
        </div>
       
    </div>
  
          
    )
}  