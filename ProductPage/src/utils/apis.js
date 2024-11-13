const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      return response.json();
    } catch (error) {
      console.error(error);
    }
  };
  
  // https://fakestoreapi.com/products/{id}
  const getProductDetailsById = async (id) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/" + id);
      return response.json();
    } catch (error) {
      console.error(error);
    }
  };
  
  export { getProducts, getProductDetailsById };