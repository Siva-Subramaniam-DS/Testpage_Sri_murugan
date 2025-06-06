import React from 'react';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getCartTotal, 
    toggleCart 
  } = useCart();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50" 
        onClick={toggleCart}
      />
      
      {/* Cart panel */}
      <div className="absolute top-0 right-0 w-full max-w-md h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out animate-slide-in overflow-auto">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-cream-100">
          <h2 className="text-xl font-semibold font-display text-maroon-700">Your Cart</h2>
          <button 
            onClick={toggleCart}
            className="p-1 rounded-full hover:bg-cream-200 text-gray-500"
          >
            <X size={24} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <button 
              onClick={toggleCart}
              className="bg-saffron-600 hover:bg-saffron-700 text-white px-6 py-2 rounded-full transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={item.id} className="p-4 flex">
                  <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="ml-4 flex-grow">
                    <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                    <div className="mt-1 flex justify-between">
                      <p className="text-sm text-gray-500">
                        ₹{item.salePrice || item.price}
                      </p>
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded hover:bg-gray-100"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="mx-2 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 text-gray-400 hover:text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{getCartTotal()}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">{getCartTotal() > 999 ? 'Free' : '₹99'}</span>
              </div>
              <div className="flex justify-between mb-6 text-lg font-semibold">
                <span>Total</span>
                <span>₹{getCartTotal() > 999 ? getCartTotal() : getCartTotal() + 99}</span>
              </div>
              
              <button className="w-full bg-maroon-700 hover:bg-maroon-800 text-white py-3 rounded-lg mb-3 transition-colors">
                Checkout
              </button>
              
              <button 
                onClick={clearCart}
                className="w-full text-red-500 hover:text-red-700 py-2 flex justify-center items-center transition-colors"
              >
                <Trash2 size={18} className="mr-2" />
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;