import React from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';

function Cart() {
  const cartItems = [
    {
      id: 1,
      name: 'BMW 3 Series',
      price: '45,000',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center mb-12">
          <ShoppingCart className="h-8 w-8 text-blue-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
        </div>

        {cartItems.length > 0 ? (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {cartItems.map((item) => (
              <div key={item.id} className="p-6 border-b">
                <div className="flex items-center space-x-6">
                  <img src={item.image} alt={item.name} className="w-32 h-24 object-cover rounded-md" />
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-2xl font-bold text-blue-600">${item.price}</p>
                  </div>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="h-6 w-6" />
                  </button>
                </div>
              </div>
            ))}
            <div className="p-6 bg-gray-50">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-semibold">Total:</span>
                <span className="text-2xl font-bold text-blue-600">$45,000</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600">Start browsing our collection of cars to add items to your cart.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;