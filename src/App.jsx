import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";

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

        {/* Cart */}
        <Route path="/cart" element={<CartPage />} />

        {/* Category */}
        <Route path="/category/:name" element={<CategoryPage />} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;