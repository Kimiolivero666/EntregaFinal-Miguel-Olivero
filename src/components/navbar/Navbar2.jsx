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
            <Nav.Link as={Link} to={"/celular"} className='text-white link' href="#home">Inicio</Nav.Link>
            <Nav.Link as={Link} to={"/productos/celular"} className='text-white link' href="#link">Productos</Nav.Link>
            <Nav.Link as={Link} to={"/productos/TvyAudio"} className='text-white link' href="#link">Smarth tv</Nav.Link>
            <Nav.Link className='text-white link' href="#link">Blogs</Nav.Link>
            <Nav.Link className='text-white link' href="#link">Contacto</Nav.Link>
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