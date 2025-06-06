import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';
import Notification from './Notification';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount, toggleCart, isCartOpen, notification } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-maroon-700 via-maroon-600 to-maroon-700 text-white py-2 px-4 text-center text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-paisley-pattern opacity-10"></div>
        <div className="relative flex items-center justify-center space-x-4">
          <span className="hidden md:inline">🎉 Festival Season Sale - Up to 50% OFF!</span>
          <span className="md:hidden">🎉 Festival Sale - 50% OFF!</span>
          <div className="flex items-center space-x-2 text-xs">
            <Phone size={14} />
            <span>+91 98765 43210</span>
            <MessageCircle size={14} />
            <span>WhatsApp</span>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with traditional motif */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <span className="text-2xl md:text-3xl font-display font-bold text-maroon-700 group-hover:text-maroon-800 transition-colors">
                Sri <span className="text-gold-600">Murugan </span>stores
              </span>
              <div className="absolute -top-1 -right-1 text-gold-600 text-xs">✨</div>
            </div>
          </Link>

          {/* Search bar - hidden on mobile */}
          <form 
            onSubmit={handleSearchSubmit}
            className="hidden md:flex relative flex-grow max-w-md mx-6"
          >
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 px-4 pr-12 rounded-full border-2 border-gold-200 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-cream-50"
            />
            <button 
              type="submit"
              className="absolute right-0 top-0 h-full px-4 text-maroon-600 hover:text-gold-600 transition-colors"
            >
              <Search size={20} />
            </button>
          </form>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-800 hover:text-maroon-700 font-medium transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-800 hover:text-maroon-700 font-medium transition-colors">
                Categories
              </button>
              {/* Dropdown menu can be added here */}
            </div>
            <Link to="/offers" className="text-gray-800 hover:text-maroon-700 font-medium transition-colors">
              Offers
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-maroon-700 font-medium transition-colors">
              Contact
            </Link>
            
            {/* Cart button with Indian styling */}
            <button 
              onClick={toggleCart}
              className="relative flex items-center text-gray-800 hover:text-maroon-700 bg-gold-50 hover:bg-gold-100 p-2 rounded-full transition-all duration-300"
            >
              <ShoppingBag size={24} />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-maroon-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
                  {getCartCount()}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-3 md:hidden">
            <button 
              onClick={toggleCart}
              className="relative flex items-center text-gray-800 bg-gold-50 p-2 rounded-full"
            >
              <ShoppingBag size={20} />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-maroon-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {getCartCount()}
                </span>
              )}
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gold-200 animate-slide-in">
            {/* Mobile search */}
            <form onSubmit={handleSearchSubmit} className="mb-4 mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2.5 px-4 pr-12 rounded-full border-2 border-gold-200 focus:outline-none focus:ring-2 focus:ring-gold-500 bg-cream-50"
                />
                <button 
                  type="submit"
                  className="absolute right-0 top-0 h-full px-4 text-maroon-600"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>

            {/* Mobile nav links */}
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-800 hover:text-maroon-700 font-medium py-2 px-4 rounded-lg hover:bg-gold-50 transition-all">
                Home
              </Link>
              <Link to="/categories" className="text-gray-800 hover:text-maroon-700 font-medium py-2 px-4 rounded-lg hover:bg-gold-50 transition-all">
                Categories
              </Link>
              <Link to="/offers" className="text-gray-800 hover:text-maroon-700 font-medium py-2 px-4 rounded-lg hover:bg-gold-50 transition-all">
                Offers
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-maroon-700 font-medium py-2 px-4 rounded-lg hover:bg-gold-50 transition-all">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>

      {/* Shopping cart side panel */}
      {isCartOpen && <Cart />}

      {/* Notifications */}
      {notification && <Notification message={notification.message} type={notification.type} />}
    </header>
  );
}

export default Header;