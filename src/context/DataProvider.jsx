import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

import { DataReducer, intialState } from "../reducer/dataReducer";

const DataContext = createContext();
export const useData = () => useContext(DataContext);
export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, intialState);

  useEffect(() => {
    (async function () {
      try {
        const data = await axios.get(
          "https://e-commerce-newServer.harshitbharani.repl.co/products"
        );
        dispatch({
          type: "INITIALIZE_PRODUCTS",
          payload: data.data,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <DataContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        wishlist: state.wishlist,
        sortBy: state.sortBy,
        filter: state.filter,
        includeOutOfStock: state.includeOutOfStock,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
