import React, { useState, useContext, useReducer, useEffect } from "react";
// import cartItems from "./data";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "Clear_Cart" });
  };

  const remove = (id) => {
    dispatch({ type: "Remove", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "Increase", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "Decrease", payload: id });
  };

  const getTotal = () => {
    dispatch({ type: "Get_Total" });
  };

  useEffect(() => {
    getTotal();
  }, [state.cart]);

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    dispatch({type:'Loading'})
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({type: 'Display_Items', payload: cart});
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
