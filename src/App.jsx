import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Products from './components/Products.jsx'
import Ingredients from './components/Ingredients.jsx'
import Footer from './components/Footer.jsx'
import Contact from './pages/Contact.jsx'
import ProductsPage from './pages/Products.jsx'
import Order from './pages/Order.jsx'
import About from './pages/About.jsx'
import Combo from './pages/Combo.jsx'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Products />
                <Ingredients />
              </>
            } />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/combo" element={<Combo />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<Order />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
