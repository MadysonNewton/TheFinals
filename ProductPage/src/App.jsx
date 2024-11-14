import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";
import { ProductProvider } from "./context/ProductContext";
import {CartProvider} from "./context/CartContext"

function App() {
  return (
   
    <CartProvider>
    <ProductProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* The standard for a home page is it set the path equal to a / (ie. path="/") */}
          <Route element={<ProductList />} path="/" />
          {/* adding the /: at the end of our path will allow us to pass data through the url/path. Dont forget to give the data a name. */}
          <Route element={<ProductDetails />} path="/product-details/:id" />
          <Route element={<Cart />} path="/cart" />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
    </CartProvider>
   
  );
}

export default App;