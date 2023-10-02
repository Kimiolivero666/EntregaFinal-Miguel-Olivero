import { useEffect, useState } from "react"
import { getProduct } from "../components/productos/AsyncMock"
import ItemList from "../components/productos/ItemList"
import { Container,} from "react-bootstrap"




const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  useEffect(() =>{
    getProduct()
    .then(response => {
      setProducts(response)
    })
    .catch(error => {
      console.error(error)
    })
  }, []
  )
  return (
    <div >
      <Container>
      <h1>{greeting}</h1>
      <section className="mt-5 mb-5 productos">
      <ItemList products={products}/>

      

      </section>
      </Container>

    </div>
  )
}

export default ItemListContainer