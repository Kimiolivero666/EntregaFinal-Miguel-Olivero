import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { useForm } from "react-hook-form"
import { Container } from "react-bootstrap"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase/data"


const CheckOut = () => {

  const [pedidoId, setPedidoId] = useState('')


  const { cart, precioTotal, vaciarCart,} = useContext(CartContext)

  const { register, handleSubmit } = useForm()
  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: cart,
      total: precioTotal()
    }
    console.log(pedido)

    const pedidosRef = collection (db, 'pedidos');
    
    addDoc(pedidosRef, pedido)
    .then((doc)=>{
      setPedidoId(doc.id);
      vaciarCart([]);
    })
  }

  if(pedidoId){
    return(
      <div className="container">
        <h1 className="main-title">Muchas gracias por tu compra</h1>
        <p>Tu número de pedido es: {pedidoId}</p>
      </div>
    )
  }

  return (
    <div>

      <Container>
        <h2>Registrate con tu mail</h2>
        <div className="form-div mb-5">
          <form className="form" onSubmit={handleSubmit(comprar)} >
            <p className="name">
              <input type="text" className="validate feedback-input" placeholder="Nombre"  {...register('name')} />
            </p>
            <p className="last-name">
              <input type="text" className="validate feedback-input" placeholder="Apellido"  {...register('last-name')} />
            </p>
            <p className="email">
              <input type="text" className="validate feedback-input" placeholder="Email" {...register('email')} />
            </p>
            <p className="contraseña">
              <input type="password" className="validate feedback-input" placeholder="Contraseña" {...register('contraseña')} />
            </p>

            <div className="submit">
              <input type="submit" value="CREAR CUENTA" id="button-blue" />
              <div className="ease"></div>
            </div>
          </form>
        </div>
      </Container>
    </div>

  )
}

export default CheckOut