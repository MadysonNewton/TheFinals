import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
// In order to use the context I create I must import the context and import the useContext hook from react
const ProductList = () => {
    //When you want to pull something from the global state context you just use object destructuring.
    //When you call the useConext hook you need to pass it a context to use.
    const { products } = useContext(ProductContext)

    //we need to map over products and list out the price, title, photo, and rating
    return <div>{products.map((item) => {
        return <div>{item.title}</div>})}</div>
}

export default ProductList