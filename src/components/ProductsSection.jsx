import ProductCard from "./ProductCard";
import products from "../data/products";

export default function ProductsSection() {
  return (
    <section className="bg-gray-50 py-16">

      {/* FEATURED */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">
          Featured Products
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Handpicked fresh items just for you
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      {/* OFFER BANNER */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="rounded-2xl p-10 bg-gradient-to-r from-green-500 to-yellow-400 text-white relative overflow-hidden">

          <span className="bg-white text-green-600 text-xs px-3 py-1 rounded-full font-bold">
            ONLY THIS WEEK
          </span>

          <h3 className="text-3xl font-bold mt-4">
            Get 30% Off on Fresh Organic Produce
          </h3>

          <p className="mt-2 text-sm max-w-lg">
            A different kind of grocery store. Quality, freshness, and value delivered straight to your kitchen.
          </p>

          <button className="mt-6 bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:scale-105 transition">
            Shop Now →
          </button>
        </div>
      </div>

      {/* TRENDING */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-center">
          Trending Now
        </h2>
        <p className="text-center text-gray-500 mb-10">
          What everyone's adding to their cart
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
