import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import '../../stylesheets/cart.css'
import { Container, Row, Col } from "react-bootstrap"





const Cart = () => {

  const { cart, precioTotal, vaciarCart, } = useContext(CartContext)



  const handlerVaciar = () => {
    vaciarCart()
  }

  return (
    <Container>
      <Row>
        <Col md={8}>
        <div className="container-cart mt-5 mb-5">

          {
            cart.map((prod) => (
              <div key={prod.id}>
                <div className="d-flex justify-content-between">

                  <img className="img-cart" src={prod.img} alt="" />
                  <div>
                  <h2 className="title-cart mt-5">{prod.name}</h2>
                  <p className="title-precio-unitario">Precio unitario: <span className="precio-unitario">€  {prod.price}</span></p>
                  <button className="eliminar-producto">eliminar producto</button>
                  </div>
                  <div className="mt-5">
                  <p>Cant: {prod.quantity}</p>
                  </div>
                  <div className="mt-5">
                  <p>Total: <span className="precio-total-producto"> €  {prod.price * prod.quantity}</span></p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        </Col>
        <Col md={4}>
        {
          <div className="precio-total mt-5 mb-5">
            <div className="text-center mt-5">
            <Link to='/checkOut' className="option-cart"> Completar transacción</Link>
            </div>
            <div className="text-center mt-5">
            <h2 className="total-pagar">Total a pagar: <span className="precio-total-pagar">€ {precioTotal()}</span></h2>
            </div>
            <>
            <button className="mt-5" onClick={handlerVaciar}>eliminar compra</button>
            <Link to={'/celular'}>Volver a Inicio</Link>
            </> 
            
            
          </div>
        }

</Col>

      </Row>
    </Container>




  )
}

export default Cart