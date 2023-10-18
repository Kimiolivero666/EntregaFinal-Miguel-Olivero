import { useState, useEffect } from "react"
import ItemDetail from '../productos/ItemDetail'
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/data";

const ItemDetailConteiner = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {

const docRef = doc(db, 'productos', id)
getDoc(docRef).then((snapshot) =>{
  setItem(
    { ...snapshot.data(),id: snapshot.id}
  )
})
    
    }, [id])
    
  return (
    <div>
        {item &&
        <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailConteiner