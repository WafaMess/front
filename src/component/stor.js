import { configureStore } from "@reduxjs/toolkit";
// Importez les outils nécessaires de Redux

import cartReducer from "./cartActions";

/// Combinez les réducteurs
const rootReducer = {
  cart: cartReducer,
  // other: someOtherReducer
};

// Créez le store Redux
// Créez le store Redux avec Redux Toolkit
export const store = configureStore({
  reducer: rootReducer,
});

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       // Vérifiez si le produit est déjà dans le panier
//       const existingIndex = state.cart.findIndex(
//         (item) => item.codepr === action.payload.codepr
//       );

//       if (existingIndex >= 0) {
//         // Le produit existe déjà, mettez à jour la quantité
//         const cart = [...state.cart];
//         cart[existingIndex] = {
//           ...cart[existingIndex],
//           qte: cart[existingIndex].qte + 1,
//         };
//         return { ...state, cart };
//       } else {
//         // Le produit n'existe pas, ajoutez-le au panier
//         return {
//           ...state,
//           cart: [...state.cart, { ...action.payload, qte: 1 }],
//         };
//       }
//     // Autres cas
//     default:
//       return state;
//   }
// };

// Exportez le réducteur et le store
export default cartReducer;
