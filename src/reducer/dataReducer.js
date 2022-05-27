const intialState = {
  products: [],
  cart: [],
  wishlist: [],
  sortBy: "PRICE_HIGH_TO_LOW",
  filterCatogories: [],
};
const DataReducer = (state, { type, payload }) => {
  switch (type) {
    case "INITIALIZE_PRODUCTS":
      return { ...state, products: payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, state.payload] };
    default:
      break;
  }
};
export { intialState, DataReducer };
