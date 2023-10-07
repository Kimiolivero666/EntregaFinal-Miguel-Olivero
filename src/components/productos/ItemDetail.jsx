import { Container, Row, Col, } from "react-bootstrap"
import ItenCount from "../itemCount/ItenCount"
import { useState } from "react"


const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1)


  const handleRestar = () => {
      quantity > 1 && setQuantity(quantity - 1) 
  }
  
  const handlerSumar = () => {
      quantity < item.stock && setQuantity(quantity + 1)
  } 

  const handlerAgregar = () => {
    console.log({...item, quantity})
  
  }

  return (
    <Container>
      <Row>
        <Col md={5}>
          <img className="w-100 my-5 img-detalle-producto" src={item.img} alt="" />
        </Col>
        <Col md={7} >
          <div>
            <h3 className="titulo my-5"><strong>{item.name}</strong></h3>
            <p className="descripcion mb-5">{item.description}</p>
            <p className="categoria">categoría: <strong>{item.category}</strong></p>
            <p>productos en stock: {item.stock}</p>
            <p >precio: <span className="precio-detail">€ {item.price}</span></p>
            <ItenCount quantity={quantity} handlerSumar={handlerSumar} handleRestar={handleRestar} handlerAgregar={handlerAgregar}/>
          </div>
        </Col>

      </Row>
    </Container>
  )
}

export default ItemDetail