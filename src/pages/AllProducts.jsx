import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function AllProducts() {

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">

      <h1 className="text-4xl font-bold mb-12">
        All Categories
      </h1>

      {categories.map((cat) => {

        const filtered = products.filter(p => p.category === cat);

        return (
          <div key={cat} className="mb-16">

            <h2 className="text-2xl font-bold mb-6">
              {cat}
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

              {filtered.map(product => (
                <ProductCard key={product.id} product={product}/>
              ))}

            </div>

          </div>
        );

      })}

    </div>
  );
}