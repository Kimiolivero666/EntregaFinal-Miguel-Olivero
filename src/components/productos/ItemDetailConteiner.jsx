import { useState, useEffect } from "react"
import { pedirItemPorId } from "./AsyncMock";
import ItemDetail from '../productos/ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
    pedirItemPorId(id)
    
    .then((res)=>{
        setItem(res);
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