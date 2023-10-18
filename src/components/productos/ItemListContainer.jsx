import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { Container, } from "react-bootstrap"

import { collection, getDocs, } from 'firebase/firestore'
import { db } from '../../firebase/data'
import { useParams } from "react-router-dom"



const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
   const category = useParams().category;
   console.log(category)
   

  useEffect(() => {
    
    

    const productosRef = collection(db, 'productos')
    getDocs(productosRef).then((snapshot)=>{
      if(!snapshot.empty){
        setProducts(snapshot.docs.map(doc =>{
          return{
            id: doc.id,
            ...doc.data()
          }
        }))
      }
    })


    
  }, [category]
  )
  return (
    <>
      <Container>
        <h1>{greeting}</h1>
        <section className="mt-5 mb-5 productos">
          <ItemList products={products} />



        </section>
      </Container>

    </>
  )
}

export default ItemListContainer