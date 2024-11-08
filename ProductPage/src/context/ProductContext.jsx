import { createContext, useState, useEffect } from "react";
import { getProducts } from "../utils/apis";

// The first thing we need to do when creating a context global state is use the createContext() function from React to create it.
const ProductContext = createContext();

// The next thing we must do is create a Provider Component that will provide/give the global state to all components inside.
// Don't forget that the provider component is a Wrapper component. We must invoke the "children" value of the props object.
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);
  // The context that we created line 5 gives us a Provider we must call and return.
  // The .Provider needs the value={} attribute to supply any state you give it to the rest of the children.
  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
