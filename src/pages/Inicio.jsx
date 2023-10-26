
import Container from 'react-bootstrap/Container';
import CarouselInicio from '../components/inicio/CarouselInicio'
import { Row, Col } from 'react-bootstrap';
import tvCategory from '../assets/TV.JPG';
import iphone from '../assets/iphone12.jpg';
import portatil from '../assets/portatil.samsung.jpg';
import pc from '../assets/pc.jpg';
import auricular from '../assets/auricular.jpg';
import monitor from '../assets/monitor.jpg';
import '../stylesheets/inicio.css';
import mac from '../assets/mac.webp'
import { Link } from 'react-router-dom';







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
                <h5> <Link to={"/productos/smart"} className='text-center title-category'>Smarts</Link></h5>
              </div>
            </Col>
            <Col xs={6} md={2}>
              <div className='mt-5 text-center'>
                <img className='img-category mb-3' src={iphone} alt="" />
                <h5>  <Link to={"/productos/smartphone"} className='text-center title-category'>Smartphones</Link></h5>
              </div>
            </Col>
            <Col xs={6} md={2} >
              <div className='mt-5 text-center'>
                <img className='img-category mb-3' src={portatil} alt="" />
                <h5><Link to={"/productos/laptop"} className='text-center title-category'>Laptops</Link></h5>
              </div>
            </Col>
            <Col xs={6} md={2} >
              <div className='mt-5 text-center'>
                <img className='img-category mb-3' src={pc} alt="" />
                <h5> <Link to={"/productos/pc"} className='text-center title-category'>PC</Link></h5>
              </div>
            </Col>
            <Col xs={6} md={2} >
              <div className='mt-5 text-center'>
                <img className='img-category mb-3' src={auricular} alt="" />
                <h5><Link to={"/productos/gamer"} className='text-center title-category'>Games y Streaming</Link></h5>
              </div>
            </Col>
            <Col xs={6} md={2} >
              <div className='mt-5 text-center'>
                <img className='img-category mb-3' src={monitor} alt="" />
                <h5><Link to={"/productos/monitor"} className='text-center title-category'>Monitores</Link></h5>
              </div>
            </Col>
          </Row>

          <div className="mt-5 my-3 contenedor-cajas">
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
          <div className="contenedor-productos">


          </div>
        
          <Row>
            <Col md={12}>
              <div className='img-i'>
          
                <img  src={mac} alt="" />
              </div>

            </Col>
          </Row>

        </section>
      </Container>
    </div>
  )
}

export default Inicio