import Button from 'react-bootstrap/Button';

const Footer1 = () => {
 
  const top =() => {
    window.scrollTo(0,0)
  }
  return (
    <div className='text-center footer1'>
      <Button className='TopButton' onClick={top}>
        Inicio de Página
      </Button>
    </div>
  )
}

export default Footer1