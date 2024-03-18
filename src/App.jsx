import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/layout'
import { Home } from './pages/home/Index'
import { Cart } from './pages/cart/Index'
import { Contact } from './pages/contact/Index'
import ProductDetails from './pages/productDetails/Productdetails'
import { CartProvider } from './context/cartContext/CartContext'



function App() {

  return (
  <div>
    <BrowserRouter>
      <CartProvider>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/product/:id" element={<ProductDetails/>}/>
            </Route>
          </Routes>
      </CartProvider>
    </BrowserRouter>
  </div>
  )
}

export default App
