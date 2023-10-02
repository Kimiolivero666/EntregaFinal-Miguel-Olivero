import Footer from '../components/footer/Footer'
import TotalNavbar from '../components/navbar/TotalNavbar'




const Layout = (props) => {
  return (
    <div>
        <TotalNavbar />
        {props.children}
      <Footer />  
    </div>
  )
}

export default Layout