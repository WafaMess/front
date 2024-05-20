// cartActions.js
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});
export const removeFromCart = (barcode) => ({
  type: REMOVE_FROM_CART,
  payload: barcode,
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
        cart: [
          ...state.cart,
          { ...action.payload, qte: action.payload.quantity },
        ],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.codebare !== action.payload),
      };
    // console.log(cart);
    // Ajoutez d'autres cas ici
    default:
      return state;
  }
};

export default cartReducer;
