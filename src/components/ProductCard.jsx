import React, { useState } from 'react';
import { ShoppingBag, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { id, name, price, image, sale, salePrice, category } = product;
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // TODO: Implement quick view modal
    console.log('Quick view for:', product.name);
  };

  return (
    <div 
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gold-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sale badge */}
      {sale && (
        <div className="absolute top-3 left-3 bg-gradient-to-r from-maroon-600 to-maroon-700 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg">
          SALE
        </div>
      )}
      
      {/* Wishlist button */}
      <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-gray-600 hover:text-red-500 p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <Heart size={16} />
      </button>
      
      {/* Product image */}
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-cream-100 to-cream-200 relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay with quick actions */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center space-x-3 transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button 
            onClick={handleQuickView}
            className="bg-white text-maroon-700 p-3 rounded-full hover:bg-gold-50 transition-colors shadow-lg transform hover:scale-110"
          >
            <Eye size={18} />
          </button>
          <button 
            onClick={handleAddToCart}
            className="bg-gold-600 hover:bg-gold-700 text-white p-3 rounded-full transition-colors shadow-lg transform hover:scale-110"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
      
      {/* Product info */}
      <div className="p-4 space-y-3">
        <h3 className="text-gray-800 font-medium line-clamp-2 group-hover:text-maroon-700 transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            {sale ? (
              <div className="flex items-center space-x-2">
                <span className="text-maroon-700 font-bold text-lg">₹{salePrice}</span>
                <span className="text-gray-500 text-sm line-through">₹{price}</span>
              </div>
            ) : (
              <span className="text-gray-900 font-bold text-lg">₹{price}</span>
            )}
            {sale && (
              <div className="text-green-600 text-xs font-medium">
                Save ₹{price - salePrice}
              </div>
            )}
          </div>
        </div>
        
        {/* Add to cart button */}
        <button 
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-maroon-600 to-maroon-700 hover:from-maroon-700 hover:to-maroon-800 text-white py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          Add to Cart
        </button>
      </div>
      
      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-gold-200 to-transparent opacity-50"></div>
    </div>
  );
}

export default ProductCard;