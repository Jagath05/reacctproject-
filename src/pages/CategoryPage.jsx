import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function CategoryPage() {

  const { name } = useParams();

  const filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === name
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">

      <h1 className="text-4xl font-bold capitalize mb-10">
        {name} Products
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

    </div>
  );
}