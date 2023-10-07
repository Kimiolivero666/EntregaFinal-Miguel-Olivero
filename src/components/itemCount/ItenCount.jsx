
import {  Button } from "react-bootstrap"
import  '../../stylesheets/itemCount.css'


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
        <Button className="btn-detail px-5 my-5" variant="warning" onClick={handlerAgregar}>¡Compra ahora!</Button>
        </div>
    </div>
  )
}

export default ItenCount