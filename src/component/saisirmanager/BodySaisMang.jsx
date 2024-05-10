import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import { Link } from 'react-router-dom';
import Header from '../Header';
import NewKeyboard from './../../_components/NewKeyboard';



export default function BodySaisMang() {
  return (
    <div className='border'>
      <Header/>
      <Form>
        <FormGroup className=' text-center'>
          <FormLabel  className=" mt-5"><h1 >Veuillez saisir votre code</h1></FormLabel>
        </FormGroup>
      </Form>
      <NewKeyboard />
       
        
        <div className='d-flex justify-content-center mt-3'>
        
          <Button type='button' variant='light mx-2'>Retour</Button>
          <Button as={Link} to="/PaieManager" type='button' variant='dark mb-1'>Valider</Button>
        </div>
              
            
    </div>
  )
}
