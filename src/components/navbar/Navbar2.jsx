import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Brand from './Brand';
import CartWidget from './CartWidget';
import User from './User';
import { Link } from 'react-router-dom';



const Navbar2 = () => {
  return (
    <Navbar expand="lg" variant='dark' className="navbar2">
      <Container>
        <div className='d-lg-none brand-navbar2'>
          
        <Link to="/" className='text-white text text-decoration-none'><Brand /></Link>
        
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className='icon-navbar' />
      
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link as={Link} to={"/"} className='text-white link' href="#home">Inicio</Nav.Link>
            <Nav.Link as={Link} to={"/productos/smartphone"} className='text-white link' href="#link">Smartphones</Nav.Link>
            <Nav.Link as={Link} to={"/productos/smart"} className='text-white link' href="#link">Smart tv</Nav.Link>
            <Nav.Link as={Link} to={"/productos/laptop"} className='text-white link' href="#link">Laptops</Nav.Link>
            <Nav.Link as={Link} to={"/productos/pc"} className='text-white link' href="#link">PCs</Nav.Link>
            <Nav.Link as={Link} to={"/productos/gamer"} className='text-white link' href="#link">Gamer</Nav.Link>
            <Nav.Link as={Link} to={"/productos/monitor"} className='text-white link' href="#link">Monitores</Nav.Link>
            <Nav.Link as={Link} to={"/contacto"} className='text-white link' href="#link">Contacto</Nav.Link>
          </Nav>
          <div className='d-flex d-lg-none text-white mt-3 mb-3'>
            <div className='cart-navbar2'>
              <CartWidget />
            </div>
            <div className='user-navbar2'>
              <User />
            </div>


          </div>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar2