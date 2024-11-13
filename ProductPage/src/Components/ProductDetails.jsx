// We need to use the useParams function to pull the id out of the URL
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetailsById } from "../utils/apis";
import { Box, Button } from "@mui/material";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  // in order to get the data from the url we must object destructure the useParams returned object
  const { id } = useParams();

  useEffect(() => {
    getProductDetailsById(id).then((res) => {
      console.log(res);
      setProductDetails(res);
    });
  }, []);

  return (
    <Box display="flex" justifyContent="space-around" sx={{ height: "100vh" }}>
      <Box sx={{ height: "100vh", width: "50%" }}>
        <img src={productDetails.image} />
      </Box>
      <Box sx={{ p: 5 }}>
        <p>{productDetails.title}</p>
        <p>{productDetails.price}</p>
        <p>{productDetails.description}</p>
        <Button>Add to Cart</Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;