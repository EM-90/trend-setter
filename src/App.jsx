import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/layout'
import { Home } from './pages/home/Home'
import { Cart } from './pages/cart/Cart'
import { Contact } from './pages/contact/Contact'

function App() {

  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
