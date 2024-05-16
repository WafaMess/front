// cartActions.js
export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});
// Ajoutez l'exportation par défaut du réducteur
const initialState = {
  cart: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Logique pour ajouter au panier
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qte: 1 }],
      };
    // console.log(cart);
    // Ajoutez d'autres cas ici
    default:
      return state;
  }
};

export default cartReducer;
