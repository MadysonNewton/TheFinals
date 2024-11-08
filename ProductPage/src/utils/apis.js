const getProducts = async () => {
    try {
const response = fetch("https://fakestoreapi.com/products");
return (await response).json();
    } catch(error) {
        console.error(error);
    }
}

export { getProducts }