import { createContext, useContext, useEffect, useReducer } from "react";
import { MockPromise } from "../Database";
import { DataReducer, intialState } from "../reducer/dataReducer";

const DataContext = createContext();
export const useData = () => useContext(DataContext);
export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, intialState);

  useEffect(() => {
    (async function () {
      try {
        const data = await MockPromise(true);
        dispatch({ type: "INITIALIZE_PRODUCTS", payload: JSON.parse(data) });
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
        filterCatogories: state.filterCatogories,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
