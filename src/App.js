import './App.css';
import Cart from "./components/Cart/Cart"
import CartModal from "./components/CartModal/cartModal"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/items/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from './context/CartContext';
import CheckoutForm from "./components/CheckoutForm/CheckoutForm"
import Checkout from "./components/Checkout/Checkout"
import Footer  from './components/Footer/Footer';

function App() {
  return (
<div className="App">
  <div>
    <BrowserRouter>
      <CartProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={ <ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/cartModal' element={<CartModal />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkoutform" element={<CheckoutForm />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
    <Footer />
  </div>
</div>
  );
}

export default App;
