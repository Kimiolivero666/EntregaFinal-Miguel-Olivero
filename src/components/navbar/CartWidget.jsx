import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"



const CartWidget = () => {
  
const {cantidadEnCarrito} = useContext(CartContext)
  return (
    <div className="cartwidget position-relative ">
      <Link to={'/cart'} className="fas fa-shopping-cart text-white"></Link>
    <div className="numbrer-cart position-absolute">{cantidadEnCarrito()}</div>
    </div>
  
  
  )
}

export default CartWidget