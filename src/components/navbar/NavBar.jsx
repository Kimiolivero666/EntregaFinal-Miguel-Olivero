
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import '../../stylesheets/navbar.css'
import Brand from './Brand';
import CartWidget from './CartWidget';
import User from './User';
import Search from './Search';
import { Link } from 'react-router-dom';




function NavScrollExample() {
  return (

    <div className='seeker'>
      <Container >
        <Row>
          <Col md={2} className=' brand d-none d-lg-block mt-3 mb-3'>
             <Link to="/" className='text-white text text-decoration-none'><Brand /></Link>
          </Col>
          <Col xs={12} lg={8} className=' text-white'>
            <Search />
          </Col>
          <Col md={2} className=' d-none d-lg-block'>
            <div className="d-flex justify-content-around mt-3 text-white">
              <div className='cart-navbar'>
                <CartWidget />
              </div>
              <div className='user-navbar'>
                <User />
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavScrollExample;