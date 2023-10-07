
import Container from 'react-bootstrap/Container';
import CarouselInicio from '../components/inicio/CarouselInicio'
import { Row, Col } from 'react-bootstrap';
import tvCategory from '../assets/TV.JPG';
import iphone from '../assets/iphone12.jpg';
import portatil from '../assets/portatil.samsung.jpg';
import pc from '../assets/pc.jpg';
import auricular from '../assets/auricular.jpg';
import heladera from '../assets/heladera.jpg';
import '../stylesheets/inicio.css';
import Slider from '../components/inicio/Slider';






const Inicio = () => {
  return (
    <div className="inicio py-5">
      <Container >
        <CarouselInicio />
        <section className='mt-5'>
          <Row>

            <Col xs={6} md={2} >
              <div className='mt-5 text-center'>
                <img className='img-category mb-3' src={tvCategory} alt="" />
                <h5 className='text-center title-category'>TV y Audio</h5>
              </div>
            </Col>
            <Col xs={6} md={2}>
              <div className='mt-5 text-center'>
                <img className='img-category mb-3' src={iphone} alt="" />
                <h5 className='text-center title-category'>Smartphones</h5>
              </div>
            </Col>
            <Col xs={6} md={2} >
              <div className='mt-5 text-center'>
                <img className='img-category mb-3' src={portatil} alt="" />
                <h5 className='text-center title-category'>Ordenadores</h5>
              </div>
            </Col>
            <Col xs={6} md={2} >
              <div className='mt-5 text-center'>
                <img className='img-category mb-3' src={pc} alt="" />
                <h5 className='text-center title-category'>PC</h5>
              </div>
            </Col>
            <Col xs={6} md={2} >
              <div className='mt-5 text-center'>
                <img className='img-category mb-3' src={auricular} alt="" />
                <h5 className='text-center title-category'>Games y Streaming</h5>
              </div>
            </Col>
            <Col xs={6} md={2} >
              <div className='mt-5 text-center'>
                <img className='img-category mb-3' src={heladera} alt="" />
                <h5 className='text-center title-category'>Hogar</h5>
              </div>
            </Col>
          </Row>

          <div className="mt-5 my-3">
          <Row>
            <Col md={3}>
          <div className="box d-flex p-3 mb-3">
            <div className="icon">
              <i className="fa-solid fa-truck"></i>
            </div>
            <div className="detail text-center">
              <h3>Envío gratis</h3>
              <p>Apartir de los € 1000</p>
            </div>
          </div>
          </Col>
          <Col md={3}>
          <div className="box d-flex p-3 mb-3">
            <div className="icon">
              <i className="fa-solid fa-euro-sign"></i>
            </div>
            <div className="detail text-center">
              <h3>Devolución y reembolso</h3>
              <p>Garantía</p>
            </div>
          </div>
          </Col>
          <Col md={3}>
          <div className="box d-flex p-3 mb-3">
            <div className="icon">
              <i className="fa-solid fa-percent"></i>
            </div>
            <div className="detail text-center">
              <h3>Descuento para miembros</h3>
              <p>En cada compra</p>
            </div>
          </div>
          </Col>
          <Col md={3}>
          <div className="box d-flex p-3 mb-3">
            <div className="icon">
              <i className="fa-solid fa-headphones"></i>
            </div>
            <div className="detail text-center">
              <h3>Atención al cliente</h3>
              <p>Todos los dias</p>
            </div>
          </div>
          </Col>
        </Row>
        </div>
          <Slider />

        </section>
      </Container>
    </div>
  )
}

export default Inicio