import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { useForm } from "react-hook-form"
import { Container, Row, Col } from "react-bootstrap"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase/data"
import '../../stylesheets/checkOut.css'

const CheckOut = () => {

  const [pedidoId, setPedidoId] = useState('')


  const { cart, precioTotal, vaciarCart, } = useContext(CartContext)

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur"
  });


  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: cart,
      total: precioTotal()
    }
    console.log(pedido)

    const pedidosRef = collection(db, 'pedidos');

    addDoc(pedidosRef, pedido)
      .then((doc) => {
        setPedidoId(doc.id);
        vaciarCart([]);
      })
  }

  if (pedidoId) {
    return (
      <Container>
      <div className="container-checkout text-center ">
        <h1 className="main-title mt-5 mb-5">Muchas gracias por tu compra</h1>
        <p>Tu número de pedido es:  <span className="id-pedido">{pedidoId}</span></p>
      </div>
      </Container>
    )
  }

  return (
    <>

      <Container>
        <Row>
          <Col md={6}>
            <div className="title-checkout">
              <h2>Registrate con tu mail</h2>
            </div>
            <div className="form-div mb-5">
              <form className="form" onSubmit={handleSubmit(comprar)} >
                <p className="name">
                  <input type="text" className="validate feedback-input" placeholder="Nombre"  {...register('name', { required: true })} />
                  {errors.name && <span>Este campo es obligatorio</span>}
                </p>
                <p className="last-name">
                  <input type="text" className="validate feedback-input" placeholder="Apellido"  {...register('last-name', { required: true })} />
                  {errors['last-name'] && <span>Este campo es obligatorio</span>}
              </p>
                <p className="email">
                  <input type="text" className="validate feedback-input" placeholder="Email" {...register('email', { required: true })} />
                  {errors.email && <span>Este campo es obligatorio</span>}
                </p>
                <p className="contraseña">
                  <input type="password" className="validate feedback-input" placeholder="Contraseña" {...register('contraseña', { required: true })} />
                  {errors.contraseña && <span>Este campo es obligatorio</span>}
                </p>

                <div className="submit">
                  <input type="submit" value="CREAR CUENTA" id="button-blue" disabled={Object.keys(errors).length > 0}/>
                  <div className="ease"></div>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>

  )
}

export default CheckOut