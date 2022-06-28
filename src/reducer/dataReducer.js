const intialState = {
  products: [],
  cart: [],
  wishlist: [],
  sortBy: "HIGH_TO_LOW",
  filter: "",
  includeOutOfStock: true,
};
const DataReducer = (state, { type, payload }) => {
  switch (type) {
    case "INITIALIZE_PRODUCTS":
      return { ...state, products: payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, state.payload] };
    case "ADD_SORT":
      return { ...state, sortBy: payload };
    case "ADD_FILTER":
      return { ...state, filter: payload };
    case "TOGGLE_OUT_OF_STOCK":
      return { ...state, includeOutOfStock: !state.includeOutOfStock };
    default:
      return state;
  }
};
export { intialState, DataReducer };
