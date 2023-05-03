type intialStateType = {
  products: [];
  cart: [];
  wishlist: [];
  sortBy: string;
  filter: string;
  includeOutOfStock: boolean;
};
const intialState: intialStateType = {
  products: [],
  cart: [],
  wishlist: [],
  sortBy: "HIGH_TO_LOW",
  filter: "",
  includeOutOfStock: true,
};
type dispatchType =
  | {
      type: "INITIALIZE_PRODUCTS";
      payload: [];
    }
  | { type: "ADD_TO_CART"; payload: [] }
  | { type: "ADD_SORT"; payload: string }
  | { type: "ADD_FILTER"; payload: string }
  | { type: "TOGGLE_OUT_OF_STOCK"; payload: boolean };
const DataReducer = (state: intialStateType, dispatch: dispatchType) => {
  const { type, payload } = dispatch;
  switch (type) {
    case "INITIALIZE_PRODUCTS":
      return { ...state, products: payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, payload] };
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
