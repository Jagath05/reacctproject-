import './App.css'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductsSection from './components/ProductsSection'
function App() {
  

  return (
    <>
      <div>
        <Navbar/>
        
        <Hero/>

        <Categories/>

        <ProductsSection />

        <Footer />
      </div>
    </>
  )
}

export default App
