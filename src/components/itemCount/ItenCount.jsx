import { useState } from "react"
import {  Button } from "react-bootstrap"
import  '../../stylesheets/itemCount.css'


const ItenCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }


  return (
    <div className="counter ">
        <div className="controls">
            <h6>Cantidad:</h6>
            <div className="d-flex">
            <h6 className="number">{quantity}</h6>
            <button className="button ms-3" onClick={decrement}>-</button>
            <button className="button ms-3" onClick={increment}>+</button>
            </div>
        </div>
        <div>
        <Button className="btn-detail px-5 my-5" variant="warning" onClick={()=> onAdd(quantity)} disabled={!stock}>¡Compra ahora!</Button>
        </div>
    </div>
  )
}

export default ItenCount