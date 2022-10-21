import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Contacto from './components/Contacto'
import { CartContexProvider } from './context/CartContext'
import Checkout from './components/Checkout'

function App() {
  return (
    <CartContexProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartContexProvider>
  );
}

export default App;
