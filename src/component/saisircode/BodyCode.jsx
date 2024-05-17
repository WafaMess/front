import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import { Link } from "react-router-dom";
import Header from "../Header";
import NewKeyboard from "./NewKeyboard";

export default function BodyCode() {
  return (
    <div className="border">
      <Header />
      <Form>
        <FormGroup className=" text-center">
          <FormLabel className=" mt-5">
            <h1>Veuillez saisir votre code</h1>
          </FormLabel>
        </FormGroup>
      </Form>
      <NewKeyboard />
      {/* <div className='container'>
            <div className='row justify-content-center'>
                <div className=' text-center'>
                  <h1 className=" mt-5">Veuillez saisir votre code </h1>
                  <form className="text-center mt-2" >
                    <div className="  mb-5">
                       <input type='text' className='form-control  col-md-6 w-50 mx-auto '/>
                     </div>
                 </form>
                </div> 
            </div>
        </div> */}

      <div className="d-flex justify-content-center mt-3">
        <Button type="button" variant="light mx-2">
          Retour
        </Button>
        <Button as={Link} to="/Payer2" type="button" variant="dark mb-1">
          Valider
        </Button>
      </div>
    </div>
  );
}
