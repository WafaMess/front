import React from "react";
import { Routes, Route } from "react-router-dom";
import Interface from "./component/interface/Interface";
import SaisirCode from "./component/saisircode/SaisirCode";
import CompteFidelite from "./component/comptfid/CompteFidelite";
import SuivezIndica from "./component/suivezindication/SuivezIndica";
import ModeIden from "./component/modeidenti/ModeIden";
import CarteFid from "./component/cartefidelite/CarteFid";
import NumCartFid from "./component/numcartefid/NumCartFid";
import Solde from "./component/solde/Solde";
import Merci from "./component/merci/Merci";
import CodePostal from "./component/codepostal";
import ModePaiement from "./component/modepaiement/ModePaiement";
import NumTel from "./component/numtel/NumTel";
import Payer2 from "./component/payer2/Payer2";
import Payer1 from "./component/payer1/Payer1";
import Payer3 from "./component/payer3/Payer3";
import Manager from "./component/manager/Manager";
import Modif from "./component/modif/Modif";
import Promo from "./component/promo/Promo";
import PaieManager from "./component/paiemanager/PaieManager";
import Montant from "./component/montant/Montant";
import RecherProd from "./component/recherprod/RecherProd";
import FindProduct from "./component/findproduct/FindProduct";
import SaisirManager from "./component/saisirmanager/SaisirManager";
import ManagerPaie from "./component/managerpaie/ManagerPaie";
import Impremente from "./component/parametrage/Impremente";
import General from "./component/parametrage/General";
import Design from "./component/parametrage/Design";
import Options from "./component/parametrage/Options";
import SignIn from "./component/SignIn";
import Login from "./component/parametrage/Login";
import Modal from "./component/parametrage/Modal";
import ParentComponent from "./component/ParentComponent";
export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/Payer1" element={<Payer1 />} /> {/*1/15 */}
      <Route path="/Payer2" element={<Payer2 />} /> {/*2/15 */}
      <Route path="/interface" element={<Interface />} /> {/*3/15 */}
      <Route path="/Saisircod" element={<SaisirCode />} /> {/*4/15 */}
      <Route path="/Payer3" element={<Payer3 />} /> {/*5/15 */}
      <Route path="/CompteFidelite" element={<CompteFidelite />} /> {/*6/15 */}
      <Route path="/ModeIden" element={<ModeIden />} /> {/*7/15 */}
      <Route path="/CarteFid" element={<CarteFid />} /> {/*8/15 */}
      <Route path="/NumCartFid" element={<NumCartFid />} /> {/*9/15 */}
      <Route path="/Solde" element={<Solde />} /> {/*10/15 */}
      <Route path="/CodePostal" element={<CodePostal />} /> {/*11/15 */}
      <Route path="/ModePaiement" element={<ModePaiement />} /> {/*12/15 */}
      <Route path="/SuivezIndica" element={<SuivezIndica />} /> {/*13/15 */}
      <Route path="/merci" element={<Merci />} /> {/*14/15 */}
      <Route path="/NumTel" element={<NumTel />} /> {/*15/15 */}
      <Route path="/Manager" element={<Manager />} /> {/*1/9 */}
      <Route path="/RecherProd" element={<RecherProd />} /> {/*2/9 */}
      <Route path="/FindProduct" element={<FindProduct />} /> {/*3/9 */}
      <Route path="/Promo" element={<Promo />} /> {/*4/9 */}
      <Route path="/SaisirManager" element={<SaisirManager />} /> {/*5/9 */}
      <Route path="/PaieManager" element={<PaieManager />} /> {/*6/9 */}
      <Route path="/modif" element={<Modif />} /> {/*8/9 */}
      <Route path="/ManagerPaie" element={<ManagerPaie />} /> {/*7/9 */}
      <Route path="/Montant" element={<Montant />} /> {/*9/9 */}
      {/* Add more routes here */}
      <Route path="/login" element={<Login />} />
      <Route path="/modal" element={<Modal />} /> {/*9/9 */}
      <Route path="/impremente" element={<Impremente />} /> {/*9/9 */}
      <Route path="/general" element={<General />} />
      <Route path="/option" element={<Options />} />
      <Route path="/design" element={<Design />} />
      <Route path="/parentcomponent" element={<ParentComponent />} />
    </Routes>
  );
}
