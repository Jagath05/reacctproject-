export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-green-800 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-xl font-bold">Freshly</h3>
          <p className="text-sm mt-2 text-green-200">
            Your trusted online grocery store delivering fresh produce daily.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <p className="text-sm text-green-200">Home</p>
          <p className="text-sm text-green-200">Products</p>
          <p className="text-sm text-green-200">Fresh Fruits</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Categories</h4>
          <p className="text-sm text-green-200">Milk & Dairy</p>
          <p className="text-sm text-green-200">Juices</p>
          <p className="text-sm text-green-200">Desserts</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm text-green-200">info@freshly.com</p>
          <p className="text-sm text-green-200">+91 90474552921 </p>
        </div>
      </div>

      <div className="text-center py-4 border-t border-green-700 text-sm text-green-200">
        © 2025 Freshly. All rights reserved.
      </div>
    </footer>
  );
}
