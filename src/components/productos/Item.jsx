
import Card from 'react-bootstrap/Card';
import '../../stylesheets/productos.css'
import { Link } from 'react-router-dom';


const Item = ({ id, name, img, price, }) => {
  return (
    <div className="card-productos m-3">
      
      <Card className="box-card" style={{ width: '13rem', height: '60vh' }}>
        <Card.Img className='imagen-item' variant="top" src={img} />
        <Card.Body className='position-relative'>
          <Card.Title>{name}</Card.Title>
          <Card.Text className='mb-3'>
            <p className='precio'>€{price}</p>
          </Card.Text>
          <Link to={`/item/${id}`} className='position-absolute btn-card ' variant="warning">Ver Detalle</Link>
        </Card.Body>
      </Card>
      </div>
    
  )
}

export default Item