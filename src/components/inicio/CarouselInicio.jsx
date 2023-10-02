import Carousel from 'react-bootstrap/Carousel';
import img1carousel from '../../assets/carusel1desktop.jpg'
import img2carousel from '../../assets/carusel2desktop.jpg'
import img3carousel from '../../assets/carusel3desktop.jpg'


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src={img1carousel} alt="" />
  
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src={img2carousel} alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src={img3carousel} alt="" /> 

        
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;






