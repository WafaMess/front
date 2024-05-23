// cartActions.js
export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (product, quantity) => ({
  type: "ADD_TO_CART",
  payload: { product, quantity },
});

// Ajoutez l'exportation par défaut du réducteur
const initialState = {
  cart: [],
};
const cartReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case "ADD_TO_CART":
      // Logique pour ajouter au panier
      return {
        ...state,
        cart: [
          ...state.cart,
          { ...action.payload, qte: action.payload.quantity },
        ],
      };

    // console.log(cart);
    // Ajoutez d'autres cas ici
    default:
      return state;
  }
};

export default cartReducer;
