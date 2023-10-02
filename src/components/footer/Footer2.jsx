import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const Footer2 = () => {
  return (
    <div className="footer2">
      <Container>
        <Row>
          <Col md={4}>
            <h4 className='text-white mt-5 mb-4'>Contáctanos</h4>
            <div className="footer-link d-flex flex-column">
              <p className='text-white'>C/ de la Junta de Comerç, 17, 08001 Barcelona, España</p>
              <p className='text-white'>+34615957644</p>
              <p className='text-white'>Sneakers@gmail.com</p>
              <div className="social-icons d-inline-flex  mt-4 mb-5">
              <i className="fa-brands fa-twitter text-white me-4"></i>
              <i className="fa-brands fa-linkedin-in text-white mx-4"></i>
              <i className="fa-brands fa-instagram text-white mx-4"></i>
              <i className="fa-brands fa-facebook-f text-white mx-4"></i>
              </div>
              
            </div>
          </Col>
          <Col md={3} >
            <h4 className='text-white mt-5 mb-4'>Información</h4>
            <div className="footer-link d-flex flex-column">
              <Link className='text-white py2 mb-2 text-decoration-none'>Política de privacidad</Link>
              <Link className='text-white py2 mb-2 text-decoration-none'>Política de reembolso</Link>
              <Link className='text-white py2 mb-2 text-decoration-none'>Política de envio</Link>
              <Link className='text-white py2 mb-2 text-decoration-none'>Términos y condiciones</Link>
              <Link className='text-white py2 mb-2 text-decoration-none'>Blogs</Link>
            </div>
          </Col>
          <Col md={3} >
            <h4 className='text-white mt-5 mb-4'>Cuenta</h4>
            <div className="footer-link d-flex flex-column">
              <Link className='text-white py2 mb-2 text-decoration-none'>Sobre nosotros</Link>
              <Link className='text-white py2 mb-2 text-decoration-none'>Preguntas frecuentes</Link>
              <Link className='text-white py2 mb-2 text-decoration-none'>Contacto</Link>
            </div>
          </Col>
          <Col md={2}>
            <h4 className='text-white mt-5 mb-4'>Enlace rápido</h4>
            <div className="footer-link d-flex flex-column">
              <Link className='text-white py2 mb-2 text-decoration-none'>Accesorios</Link>
              <Link className='text-white py2 mb-2 text-decoration-none'>Laptops</Link>
              <Link className='text-white py2 mb-2 text-decoration-none'>Auriculares</Link>
              <Link className='text-white py2 mb-2 text-decoration-none'>Tablets</Link>
              <Link className='text-white py2 mb-2 text-decoration-none'>Relojes</Link>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Footer2