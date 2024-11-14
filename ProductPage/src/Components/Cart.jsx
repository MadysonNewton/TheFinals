import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Box } from "@mui/material"
import { Navigate } from "react-router-dom"


function Cart(CartDisplay) {
const {cartItems} = useContext(CartContext)
{/* <button onClick={() => removeFromCart(item.id)}>Remove</button> */}
    return <Box>
        {cartItems.map((item) => {
            return (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: 150,
                        padding: 20,
                        height: 350,
                        justifyContent: "space-between",
                        cursor: "pointer"
                    }}
                    key={item.id}
                    onClick={() => {
                        Navigate("/product-details/" + item.id)
                    }}
                    >
                        <img src={item.image} height={150} />
                        <h5>{truncateString(item.title, 20)}</h5>
                        <p>{item.rating.rate}</p>
                        <p>${item.price}</p>
                </div>
            )
        })} 
        
    </Box>

}

export default Cart