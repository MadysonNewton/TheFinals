// We need to use the useParams function to pull the id out of the URL
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductDetailsById } from "../utils/apis";
import { Box, Button } from "@mui/material";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  // in order to get the data from the url we must object destructure the useParams returned object
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProductDetailsById(id).then((res) => {
      console.log(res);
      setProductDetails(res);
    });
  }, []);

  return (
    <Box display="flex" justifyContent="space-around" sx={{ height: "125vh" }}>
      <Box >
       
        <img src={productDetails.image}  style={{ height: "50vh", width: "135%" }} />
      </Box>
      <Box sx={{ p: 5 }}>
        <p>{productDetails.title}</p>
        <p>{productDetails.price}</p>
        <p>{productDetails.description}</p>
        <Button onClick={() => {addToCart(productDetails)}}>Add to Cart</Button>
        <Button onClick={() => {removeFromCart(productDetails)}}>Remove from Cart</Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;