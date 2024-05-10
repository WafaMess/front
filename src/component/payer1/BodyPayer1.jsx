import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Header from "../Header";
import BarcodeScanner from "../../_components/BarcodeScanner";

import Productfinder from "../../_components/apis/Productfinder";

const BodyPayer1 = ({ isRadioActive, handleRadioChange }) => {
  const handleSearchClick = () => {
    console.log("isRadioActive:", isRadioActive); // Vérifier la valeur de isRadioActive
    if (isRadioActive) {
      handleRadioChange(false);
    } else {
      alert("Recherche pas disponible");
    }
  };
  const [cods, setCods] = React.useState([]);
  const [productQte, setProductQte] = React.useState([]);
  useEffect(() => {
    console.log({ productQte });
  }, [productQte]);
  const onBarcodeScan = async (barcode) => {
    try {
      // Incrémente la quantité du produit scanné
      setProductQte((prevState) => ({
        ...prevState,
        [barcode]: (prevState[barcode] || 0) + 1, // Incrémente la quantité existante ou initialise à 1 si elle n'existe pas encore
      }));
      // Vérifie si le produit existe déjà dans l'état 'cods'
      const existingProductIndex = cods.findIndex(
        (cod) => cod.codebare === barcode
      );
      if (existingProductIndex !== -1) {
        // Met à jour la quantité du produit existant
        const newCods = [...cods];
        newCods[existingProductIndex] = {
          ...newCods[existingProductIndex],
          qte: productQte[barcode] + 1,
        };
        setCods(newCods);
      } else {
        // Supposons que Productfinder.get(barcode) renvoie les détails du produit scanné
        const response = await Productfinder.get(`/${barcode}`);
        if (response.data) {
          // Ajoutez le produit scanné à l'état 'cods'
          setCods((prevCods) => [...prevCods, { ...response.data, qte: 1 }]);
          // Définit l'URL de l'image du produit
        } else {
          console.error("Produit non trouvé");
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // ... (autres états et fonctions)
  const [selectedBarcode, setSelectedBarcode] = React.useState(null);
  const removeScannedItem = (barcode) => {
    // Décrémenter la quantité de l'article sélectionné
    setProductQte((prevState) => {
      if (prevState[barcode] > 1) {
        return { ...prevState, [barcode]: prevState[barcode] - 1 };
      } else {
        // Si la quantité est 1, supprimer l'article de l'état productQte
        const newState = { ...prevState };
        delete newState[barcode];
        return newState;
      }
    });

    // Mettre à jour l'état cods pour refléter la nouvelle quantité
    setCods((prevCods) => {
      return prevCods
        .map((cod) => {
          if (cod.codebare === barcode && cod.qte > 1) {
            return { ...cod, qte: cod.qte - 1 };
          } else if (cod.codebare === barcode && cod.qte === 1) {
            return null; // Préparer pour filtrer cet article
          }
          return cod;
        })
        .filter((cod) => cod !== null); // Filtrer les articles avec qte null
    });
  };

  // ... (le reste de votre composant, y compris les gestionnaires d'événements et le rendu JSX)
  // Fonction pour sélectionner un article pour la suppression
  // const selectItemForDeletion = (barcode) => {
  //   setSelectedBarcode(barcode);
  // };
  // Fonction pour supprimer l'article sélectionné
  const removeSelectedScannedItem = (barcode) => {
    console.log(
      "removeSelectedScannedItem called with barcode:",
      selectedBarcode
    );
    if (selectedBarcode) {
      console.log("Barcode to remove:", selectedBarcode); // Vérifiez que le code-barres est correct
      removeScannedItem(selectedBarcode);
      setSelectedBarcode(null); // Réinitialiser l'élément sélectionné
    } else {
      console.log("Aucun barcode sélectionné"); // Vérifiez si selectedBarcode est null ou undefined
    }
  };

  // Fonction pour calculer le prix total
  const calculateTotalPrice = (qte, prixl) => {
    return qte * prixl; // Assurez-vous que le résultat est un nombre à deux décimales;
  };
  //Dans cet exemple, la fonction calculateTotal utilise la méthode reduce pour parcourir le tableau cods et additionner les montants de chaque produit. La méthode toFixed(2) est utilisée pour formater le total avec deux décimales. Ensuite, nous appelons calculateTotal() dans le JSX pour afficher le total calculé sur le bouton “Payer”. N’oubliez pas de remplacer bsp; par des espaces ou de le retirer si ce n’était pas intentionnel.

  // Fonction pour calculer le total des prix
  const calculateTotal = () => {
    return cods.reduce((total, cod) => {
      const qte = productQte[cod.codebare] || 0;
      const prix = cod.prixl || 0;
      return total + qte * prix;
    }, 0);
  };
  //Dans cet exemple, la fonction resetCommand est appelée lorsque le bouton “Abandonner” est cliqué. Cette fonction met à jour les états cods et productQte pour les vider, ce qui aura pour effet de supprimer toutes les informations de la commande actuelle. Assurez-vous que le chemin vers l’image dans src est correct et que l’image existe à cet emplacement.
  // Fonction pour réinitialiser la commande
  const resetCommand = () => {
    console.log("Bouton Abandonner cliqué"); // Vérification dans la console
    setCods([]); // Réinitialise l'état des codes à un tableau vide
    setProductQte([]); // Réinitialise l'état des quantités à un tableau vide
  };
  // Fonction pour gérer le clic sur un élément de la liste
  const handleItemClick = (barcode) => {
    setSelectedBarcode(barcode); // Met à jour l'état avec le code-barres sélectionné
  };
  // Style pour l'élément sélectionné
  const selectedStyle = {
    backgroundColor: "#e9ecef", // Couleur de fond pour l'élément sélectionné
    border: "2px solid #007bff", // Bordure pour l'élément sélectionné
  };
  // Fonction pour défiler vers le haut
  const scrollUp = () => {
    const tableContainer = document.getElementById("tableContainer");
    console.log("Avant scrollUp:", tableContainer.scrollTop);
    tableContainer.scrollTop -= 50;
    console.log("Après scrollUp:", tableContainer.scrollTop);
  };

  // Fonction pour défiler vers le bas
  const scrollDown = () => {
    const tableContainer = document.getElementById("tableContainer");
    console.log("Avant scrollDown:", tableContainer.scrollTop);
    tableContainer.scrollTop += 50;
    console.log("Après scrollDown:", tableContainer.scrollTop);
  };

  return (
    <div className="border">
      <Header />
      <div className="grid">
        <div className="row ">
          <div
            className="col-6"
            style={{ paddingLeft: "20px", paddingRight: "10px" }}
          >
            <div className="row mt-1 mb-1">
              <div className="col-12">
                <div
                  className="card"
                  style={{ width: "18rem", height: "15rem" }}
                >
                  <BarcodeScanner
                    onBarcodeScan={(e) => {
                      console.log("ping: " + e);
                      onBarcodeScan(e);
                    }}
                  />
                </div>
              </div>
              <div className="row mt-1 mb-1">
                <div className="col-12">
                  <div
                    className="card"
                    style={{ border: "0", width: "18rem", height: "3rem" }}
                  ></div>
                </div>
              </div>
              <div className="row mt-1 mb-1">
                <div className="col-6 ">
                  <Button
                    as={Link}
                    to="/Payer2"
                    variant="outline-secondary   w-100"
                    style={{ fontSize: "9px" }}
                    onClick={() => {}}
                  >
                    <Image
                      src="/Groupe 22470.svg"
                      className="rounded mx-auto d-block"
                      style={{ width: "20rpx", height: "12px" }}
                    />
                    Demande d'assistance
                  </Button>
                </div>
                <div className="col-6 divLef">
                  <Button
                    variant="outline-secondary  w-100"
                    style={{ fontSize: "9px" }}
                    //Bouton pour supprimer l'article sélectionné
                    onClick={removeSelectedScannedItem}
                  >
                    <Image
                      src="/delete (3).svg"
                      className="rounded mx-auto d-block"
                      style={{ width: "20rpx", height: "12px" }}
                    />
                    Supprimer l'article
                  </Button>
                </div>
              </div>

              <div className="row mt-1 mb-1">
                <div className="col-6">
                  <Button
                    variant="outline-danger w-100"
                    style={{ fontSize: "9px" }}
                    onClick={resetCommand} // Ajoutez cette ligne pour lier la fonction au clic du bouton
                  >
                    <Image
                      src="/Groupe 26244.svg"
                      className="rounded mx-auto d-block"
                      style={{ width: "20rpx", height: "12px" }}
                    />
                    Abandonner
                  </Button>
                </div>
                <div className="col-6 divLef">
                  <Button
                    onClick={handleSearchClick}
                    variant="outline-secondary  w-100"
                    style={{ fontSize: "9px" }}
                  >
                    <Image
                      src="/Groupe 26249.svg"
                      className="rounded mx-auto d-block"
                      style={{ width: "20rpx", height: "12px" }}
                    />
                    Rechercher article
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-6"
            style={{
              paddingLeft: "0px",
              paddingRight: "16px",
              position: "relative",
              paddingBottom: "60px",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <div
              className="row mb-1"
              id="tableContainer"
              style={{ overflowY: "auto", flex: 1 }}
            >
              {" "}
              {/* Assurez-vous que le conteneur a un défilement vertical */}
              <div className="col-12">
                <Table
                  className="border  mt-1 mb-2"
                  style={{ width: "20rem", fontSize: "9px" }}
                >
                  <thead>
                    <tr className="table-secondary ">
                      <th>nompr</th>
                      <th>Prixl</th>
                      <th>qte</th>
                      <th>Montant</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cods.map((cod, index) => {
                      // Ajoutez une classe conditionnelle pour l'élément sélectionné
                      const isSelected = selectedBarcode === cod.codebare;
                      console.log(cod.codebare);
                      return (
                        <tr
                          key={index}
                          onClick={() => handleItemClick(cod.codebare)} // Ajoutez cet attribut onClick
                          style={isSelected ? selectedStyle : {}} // Appliquez le style conditionnellement
                        >
                          <td>{cod.nompr}</td>
                          <td>{cod.prixl}</td>
                          <td>{productQte[cod.codebare] || 0}</td>
                          <td>
                            {!isNaN(productQte[cod.codebare] || 0) &&
                            !isNaN(cod.prixl)
                              ? calculateTotalPrice(
                                  productQte[cod.codebare] || 0,
                                  cod.prixl
                                )
                              : "N/A"}
                          </td>
                        </tr>
                      );
                    })}
                    <tr className="table-secondary ">
                      <td colSpan={3}>Remise</td>
                      <td>1.50</td>
                    </tr>
                    <tr>
                      <td colSpan={3}>Promotion 15%</td>
                      <td>-0.50</td>
                    </tr>
                    <tr className="table-secondary ">
                      <td></td>
                      <td style={{ cursor: "pointer" }} onClick={scrollUp}>
                        ∧
                      </td>
                      <td style={{ cursor: "pointer" }} onClick={scrollDown}>
                        ∨
                      </td>
                      <td></td>
                    </tr>
                    <tr className="table-secondary ">
                      <td>quantité: 8</td>
                      <td colSpan={2}>Rem.: -0002.50$</td>
                      <td>Tot</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="col-12">
              <div
                style={{
                  //position: "absolute",
                  bottom: "10px",
                  left: "0",
                  width: "100%",
                  padding: "0 16px",
                  boxSizing: "border-box",
                }}
              >
                <Button
                  variant="dark pt-2 mb-2"
                  className="col-12 text-center"
                  style={{
                    fontSize: "17px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px",
                    position: "sticky",
                    bottom: "0",
                    //position: "sticky", // Fixe le bouton en bas de la carte
                    //   bottom: "0", // Positionne le bouton en bas de la carte
                    //   width: "100%",
                    //   fontSize: "17px",
                    //   display: "flex",
                    //   justifyContent: "space-between",
                    //   alignItems: "center",
                    //   padding: "10px",
                    //   boxSizing: "border-box",
                    //
                  }}
                >
                  <span>Payer</span>
                  <span>{calculateTotal().toFixed(2)}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BodyPayer1;
