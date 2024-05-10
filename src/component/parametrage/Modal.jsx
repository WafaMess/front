import React from "react";
import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdOutlineDoneOutline } from "react-icons/md";
import Header from "../Header";

export default function Login() {
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

  const openModal = () => {
    const modal = document.getElementById("my_modal_4");
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div>
        <div className="content grid grid-cols-1 gap-8 align-middle items-center pt-44 ">
          <a href="/general">
            <button className="btn btn-lg w-48 h-48   border-black flex items-center justify-center">
              <IoBagCheckOutline
                size={100}
                className="inline-block align-middle mr-2 text-2xl text-black"
              />
              <div className="font-bold text-black  pb-2 text-center">
                Checkout
              </div>
            </button>
          </a>
        </div>
      </div>
      <button className=" text-5xl pb-5" onClick={openModal}>
        <IoSettingsOutline />
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex justify-between">
            <div>
              <input
                type="text"
                placeholder="Mot de passe/Scanner Carte"
                className="input w-full max-w-xs"
                value={postalCode}
                readOnly
              />

              <div className="indicator pt-2 ">
                <div className="grid grid-cols-4 w-72 h-72 bg-white place-items-center">
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
                </div>
                <div className="pt-4 ml-2 ">
                  <button
                    className="btn no-animation w-22 h-full btn-lg border-green-700 text-green-700 text-sm"
                    onClick={deleteLastCharacter}
                  >
                    <MdOutlineDoneOutline
                      size={60}
                      className="text-green-700"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col py-32 mr-32 gap-2 ">
              <button className="btn bg-gray-800 text-white font-bold uppercase text-3xl">
                Borne Auto
              </button>
              <button className="btn bg-gray-800 text-white font-bold uppercase text-3xl">
                Superviseur
              </button>
            </div>
          </div>

          <div className="modal-action flex justify-center">
            <form method="dialog " className="items-center">
              <div className="align-middle">
                <button className="btn mr-4">Annuler</button>
                <button className="btn bg-green-700 text-white">
                  Confirmer
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </main>
  );
}
