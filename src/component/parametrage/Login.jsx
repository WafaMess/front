import React from "react";
import { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import Header from "../Header";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./custom.css";

export default function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [postalCode, setPostalCode] = useState("");
  const appendNumber = (number) => {
    setPostalCode((prevPostalCode) => prevPostalCode + number);
  };
  const clearInput = () => {
    setPostalCode("");
  };

  const deleteLastCharacter = () => {
    setPostalCode((prevPostalCode) => prevPostalCode.slice(0, -1));
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div>
        <div className="content grid grid-cols-1 gap-8 align-middle items-center pt-44 ">
          <button
            onClick={handleShow}
            className="btn btn-lg w-48 h-48   border-black flex items-center justify-center"
          >
            <IoBagCheckOutline
              size={100}
              className="inline-block align-middle mr-2 text-2xl text-black"
            />
            <div className="font-bold text-black  pb-2 text-center">
              Checkout
            </div>
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Authentification </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-box w-11/12 max-w-5xl">
            <div className="flex justify-between ">
              <div className=" mx-auto text-center ">
                <input
                  type="text"
                  placeholder="Entrez mot de passe"
                  className="input w-full max-w-xs  "
                  value={postalCode}
                  readOnly
                />

                <div className="indicator pt-2 ">
                  <div className="grid grid-cols-4 w-72 h-72 bg-white place-items-center custom-buttons-grid">
                    <button
                      className="btn no-animation btn-lg border-black text-black text-2xl"
                      onClick={() => appendNumber("1")}
                    >
                      1
                    </button>
                    <button
                      className="btn no-animation btn-lg border-black text-black text-2xl"
                      onClick={() => appendNumber("2")}
                    >
                      2
                    </button>
                    <button
                      className="btn no-animation btn-lg border-black text-black text-2xl"
                      onClick={() => appendNumber("3")}
                    >
                      3
                    </button>
                    <button
                      className="btn btn-lg border-black text-black text-2xl"
                      onClick={() => appendNumber("4")}
                    >
                      4
                    </button>
                    <button
                      className="btn no-animation btn-lg border-black text-black text-2xl"
                      onClick={() => appendNumber("5")}
                    >
                      5
                    </button>
                    <button
                      className="btn no-animation btn-lg border-black text-black text-2xl"
                      onClick={() => appendNumber("6")}
                    >
                      6
                    </button>
                    <button
                      className="btn no-animation btn-lg border-black text-black text-2xl"
                      onClick={() => appendNumber("7")}
                    >
                      7
                    </button>
                    <button
                      className="btn no-animation btn-lg border-black text-black text-2xl"
                      onClick={() => appendNumber("8")}
                    >
                      8
                    </button>
                    <button
                      className="btn no-animation btn-lg border-black text-black text-2xl"
                      onClick={() => appendNumber("9")}
                    >
                      9
                    </button>
                    <button
                      className="btn no-animation btn-lg border-black text-black"
                      onClick={clearInput}
                    >
                      C
                    </button>
                    <button
                      className="btn no-animation btn-lg border-black text-black text-xl"
                      onClick={() => appendNumber("0")}
                    >
                      0
                    </button>
                    <button
                      className="btn no-animation btn-lg border-black text-black text-xl"
                      onClick={deleteLastCharacter}
                    >
                      <FaDeleteLeft />
                    </button>

                    {/* <div>
                      <button
                        className=" btn  no-animation btn-lg border-black  text-xl"
                        onClick={deleteLastCharacter}
                      >
                        <MdOutlineDoneOutline
                          size={60}
                          className="text-green-700"
                        />
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            as={Link}
            to="/general"
            variant="primary"
            onClick={handleClose}
          >
            Confirmer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
