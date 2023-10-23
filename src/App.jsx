
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/productos/ItemListContainer';
import Inicio from './pages/Inicio';
import Layout from './pages/Layout';
import ItemDetailConteiner from './components/productos/ItemDetailConteiner';
import Cart from './components/cart/Cart';
import { CartProvider } from './components/context/CartContext';
import Productos from './pages/Productos';
import CheckOut from './components/checkout/CheckOut';
import Contacto from './pages/Contacto';










function App() {

 return (
   <CartProvider> 
    <BrowserRouter>
    <Layout>
    <Routes>
      
      <Route path="/" element ={<Inicio/>}/>
      <Route  path="/item/:id" element={<ItemDetailConteiner/>}/>
      <Route  path="/productos/:category" element={<Productos/>}/>
      <Route  path="/productos/:category" element={<ItemListContainer/>}/>
      <Route  path="/contacto" element={<Contacto/>} />
      <Route  path="/cart" element={<Cart/>}/>
      <Route  path="/checkout" element={<CheckOut/>}/>
     
      
    </Routes>
    </Layout>
    </BrowserRouter>
    </CartProvider>
    
)
}

export default App