import { ShoppingCart } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">

      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-44 w-full object-cover"
        />

        {product.sale && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            SALE
          </span>
        )}

        {product.new && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            NEW
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        <p className="text-xs text-gray-400 uppercase">{product.category}</p>

        <h3 className="font-semibold text-sm">{product.name}</h3>

        <p className="text-xs text-gray-400">{product.size}</p>

        <p className="text-yellow-500 text-xs mt-1">
          ⭐ {product.rating}
        </p>

        <div className="flex justify-between items-center mt-2">
          <div>
            <span className="text-green-600 font-bold">
              Rs.{product.price}
            </span>
            {product.oldPrice && (
              <span className="text-gray-400 line-through text-sm ml-1">
                Rs.{product.oldPrice}
              </span>
            )}
          </div>

          <button className="bg-green-600 p-2 rounded-full text-white hover:bg-green-700 transition">
            <ShoppingCart size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
