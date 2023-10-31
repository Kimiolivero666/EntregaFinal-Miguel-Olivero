import { useState, useEffect } from "react";
import ItemDetail from '../productos/ItemDetail';
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/data";
import { Spinner } from "react-bootstrap";
import '../../stylesheets/spinner.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true); // Estado para controlar el estado de carga
    const id = useParams().id;

    useEffect(() => {
        const docRef = doc(db, 'productos', id);
        getDoc(docRef).then((snapshot) => {
            setItem({ ...snapshot.data(), id: snapshot.id });
            setLoading(false); // Una vez que se obtienen los datos, se establece el estado de carga en false
        }).catch(error => {
            setLoading(false); // En caso de error, se establece el estado de carga en false
            console.error("Error fetching document:", error);
        });
    }, [id]);

    return (
        <div>
            {loading ? (
              <div className="spinner">< Spinner /></div>
                
            ) : (
                item && <ItemDetail item={item} /> // Muestra el componente ItemDetail una vez se han cargado los datos
            )}
        </div>
    );
}

export default ItemDetailContainer;

























