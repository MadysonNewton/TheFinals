/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { getProducts } from "../utils/apis";

// The first thing we need to do when creating a Context Global State is use the createContext() function form React to create it.
const ProductContext = createContext();

// The next thing we must do is create a Provider Component that will provide/give the global state to all components inside.
// Dont forget that the provider component is a Wrapper component. We must invoke the "children" value of the props object.
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

//   We need to call out API function inside a useEffect to handle unwanted infinite loops
// NOTE: Don't forget the Dependencies array!
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  // The Context that we created on line 4 gives us a Provider we must call and return.
  // the .Provider needs the value={{}} attribute to supply any state you give it to the rest of the children
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

// we need to export both the context and the provider
export { ProductContext, ProductProvider };