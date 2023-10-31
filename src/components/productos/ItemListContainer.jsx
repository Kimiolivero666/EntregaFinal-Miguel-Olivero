import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import ItemList from './ItemList'; 
import { db } from '../../firebase/data';
import { Container, Spinner } from 'react-bootstrap';
import '../../stylesheets/spinner.css'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  const category = useParams().category;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productosRef = collection(db, 'productos');
        const q = query(productosRef, where('category', '==', category));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          setProducts(
            snapshot.docs.map(doc => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            })
          );
        }
      } catch (error) {
        // Manejo de errores si la carga falla
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Una vez finalizada la carga, cambiar el estado de carga
      }
    };

    fetchData();
  }, [category]);

  // Muestra un mensaje de carga si está en proceso de carga
  if (loading) {
    return <div className="spinner"><Spinner /></div>;
  }

  // Cuando la carga haya finalizado, muestra los productos
  return (
    <>
      <Container>
        <h1>{greeting}</h1>
        <section className="mt-5 mb-5 productos">
          <ItemList products={products} />
        </section>
      </Container>
    </>
  );
};

export default ItemListContainer;

















































