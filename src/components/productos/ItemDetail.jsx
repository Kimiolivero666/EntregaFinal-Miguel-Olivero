import { Container, Row, Col, } from "react-bootstrap"
import ItenCount from "../itemCount/ItenCount"


const ItemDetail = ({ item }) => {
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
            
            <p >precio: <span className="precio-detail">€ {item.price}</span></p>
            <ItenCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
            
            
          
            

          </div>
          </Col>
        
      </Row>
    </Container>
  )
}

export default ItemDetail