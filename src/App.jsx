import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";
import AllProducts from "./pages/AllProducts";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";

function App() {

  return (
    <div>

      <Navbar />

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
              <ProductsSection />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Cart */}
        <Route path="/cart" element={<CartPage />} />

        {/* Category */}
        <Route path="/category/:name" element={<CategoryPage />} />
        
        <Route path="/all-products" element={<AllProducts />} />


      </Routes>

      <Footer />

    </div>
  );
}

export default App;