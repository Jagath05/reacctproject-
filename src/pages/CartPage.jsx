import { useCart } from "../context/CartContext";

export default function CartPage() {

  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice,
  } = useCart();

  return (
    <div className="max-w-6xl mx-auto py-20 px-4">

      <h1 className="text-4xl font-bold mb-10">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow mb-4"
            >

              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />

                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>

              </div>

              <div className="flex items-center gap-3">

                <button onClick={() => decreaseQty(item.id)}>-</button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQty(item.id)}>+</button>

              </div>

              <div>₹{item.price * item.quantity}</div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>

            </div>
          ))}

          <div className="text-right mt-8">

            <h2 className="text-2xl font-bold">
              Total: ₹{totalPrice}
            </h2>

            <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded">
              Checkout
            </button>

          </div>
        </>
      )}
    </div>
  );
}