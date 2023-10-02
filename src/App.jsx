
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer';
import Inicio from './pages/Inicio';
import Layout from './pages/Layout';
import ItemDetailConteiner from './components/productos/ItemDetailConteiner';








function App() {

  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      
      <Route path="/" element ={<Inicio/>}/>
      <Route  path="/productos" element={<ItemListContainer/>}/>
      <Route  path="/item/:id" element={<ItemDetailConteiner/>}/>
      
    </Routes>
    </Layout>
    </BrowserRouter>

    
)
}

export default App
