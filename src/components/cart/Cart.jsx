import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import '../../stylesheets/cart.css'
import { Container, Row, Col } from "react-bootstrap"





const Cart = () => {

  const { cart, precioTotal, vaciarCart, eliminarDelCarrito} = useContext(CartContext)

  const totalActual = precioTotal();

  const handlerEliminarProducto = (productId) => {
    eliminarDelCarrito(productId);
  }

  const handlerVaciar = () => {
    vaciarCart();
    window.location.href = '/';
  }

  if (totalActual === 0) {
    return (
      <div className="no-hay-productos">
        <h1>No hay productos en el carrito</h1>
        <Link to={'/'} className="btn-no-hay-productos">Volver</Link>
      </div>
    );
  }

  return (
    <Container>
      <Row>
        <Col md={8}>
          <div className=" mt-5 mb-5">

            {
              cart.map((prod) => (
                <div key={prod.id}>
                  <div className="container-cart d-flex justify-content-between my-5">

                    <img className="img-cart " src={prod.img} alt="" />
                    <div>
                      <h2 className="title-cart mt-5">{prod.name}</h2>
                      <p className="title-precio-unitario">Precio unitario: <span className="precio-unitario">€  {prod.price}</span></p>
                      <button className="eliminar-producto" onClick={() => handlerEliminarProducto(prod.id)}>eliminar producto</button>
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
                <Link to='/checkout' className="option-cart"> Completar transacción</Link>
              </div>
              <div className="text-center mt-5">
                <h2 className="total-pagar">Total a pagar: <span className="precio-total-pagar">€ {precioTotal()}</span></h2>
              </div>
              <div className="btn-eliminar-volver">
                <button className="mt-5 eliminar-compra px-3 pb-3" onClick={handlerVaciar}>Eliminar compra</button>
                <Link to={'/'} className="volver-inicio mt-5 px-3 pb-3">Volver a Inicio</Link>
              </div>
            </div>
          }

        </Col>

      </Row>
    </Container>




  )
}

export default Cart