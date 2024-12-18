import { createContext, useState } from 'react';

const CartContext = createContext() 
const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (item) => {
      setCartItems([...cartItems, item]);
    };
  
    const removeFromCart = (itemId) => {
      setCartItems(cartItems.filter(item => item.id !== itemId));
    }
  console.log(cartItems)
    return (
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
        {children}
      </CartContext.Provider>
       
    );
  }
  
  
export { CartProvider, CartContext};