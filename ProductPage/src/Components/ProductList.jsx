import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
//  we will use the useNavigate function to change urls
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import truncateString from "../utils/truncateString";

// in order to use the context I create I must import the context and import the useContext hook from react
const ProductList = () => {
  // when you want to pull something from the global state context you just use object destructuring.
  //  when you call the useContext hook you need to pass it a context to use.
  const { products } = useContext(ProductContext);
  console.log(products);

  const navigate = useNavigate();

  //   we need to map over products and list out the price, title, photo and rating
  return (
    <Box display="flex" flexWrap="wrap" gap={2} sx={{ width: "100vw" }}>
      {products.map((item) => {
        // I would use a card here to display the different thing in the object
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 150,
              padding: 20,
              height: 350,
              justifyContent: "space-between",
              cursor: "pointer",
            }}
            key={item.id}
            onClick={() => {
              navigate("/product-details/" + item.id);
            }}
          >
            <img src={item.image} height={150} />
            {/*  I wanted to put space between the image and the text. Not every single element in the flexbox */}
            <div>
              {/* I noticed the titles are all not the same length. This causes some ugly display issues. I will create a helper function that will Truncate the string(add the '...' at the end of a long string) */}
              <h5>{truncateString(item.title, 20)}</h5>
              <p>{item.rating.rate}</p>
              <p>${item.price}</p>
            </div>
          </div>
        );
      })}
    </Box>
  );
};

export default ProductList;