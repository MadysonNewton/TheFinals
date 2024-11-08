import "./App.css";
import NavBar from "./Components/NavBar"
import { ProductProvider } from "./context/ProductContext";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import ProductDetails from "./Components/ProductDetails";
function App() {
 
  return (
    <ProductProvider>        
    <BrowserRouter>
           <NavBar />
    <Routes>
      <Route path="/home" element={ < ProductList/>} />
      <Route path="/product-details" element={ < ProductDetails/>} />
      <Route path="/cart" element={ < Cart/>} />
    </Routes>
    </BrowserRouter>
     </ProductProvider>
  )
}

export default App;





