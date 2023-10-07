import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../stylesheets/productos.css'


const Item = ({ id, name, img, price, stock,}) => {
  return (
    <div className="card-productos m-3">
    <Card style={{ width: '18rem', height: '80vh' }}>
      <Card.Img className='w-100 mt-3' variant="top" src={img} />
      <Card.Body className='position-relative'>
        <Card.Title>{name}</Card.Title>
        <Card.Text className='mb-3'>
          <p>productos en stock: {stock}</p>
          <p className='precio'>€{price}</p>
        </Card.Text>
        <Button href={`/item/${id}`} className='position-absolute btn-card ' variant="warning">Ver Detalle</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item