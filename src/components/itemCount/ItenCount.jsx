
import {  Button } from "react-bootstrap"
import  '../../stylesheets/itemCount.css'
import { Link } from "react-router-dom"


const ItenCount = ({quantity, handleRestar,handlerSumar, handlerAgregar }) => {
    
    return (
    <div className="counter ">
        <div className="controls">
            <h6>Cantidad:</h6>
            <div className="d-flex">
            <h6 className="number">{quantity}</h6>
            <button className="button ms-3" onClick={handleRestar}>-</button>
            <button className="button ms-3" onClick={handlerSumar}>+</button>
            </div>
        </div>
        <div>
            <Link to={'/cart'}>
        <Button className="btn-detail px-5 my-5" variant="warning" onClick={handlerAgregar}>¡Compra ahora!</Button>
        </Link>
        </div>
    </div>
  )
}

export default ItenCount