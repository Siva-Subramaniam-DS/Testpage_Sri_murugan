import React, { useState, useEffect } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { offers } from '../data/products';

function HeroBanner() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  // Auto-rotate offers
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex((prevIndex) => 
        prevIndex === offers.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const currentOffer = offers[currentOfferIndex];

  return (
    <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-700 to-maroon-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-paisley-pattern"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-saffron-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 text-gold-400 opacity-30 animate-pulse">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
          <path d="M30 0L35 20H55L40 32L45 52L30 40L15 52L20 32L5 20H25L30 0Z"/>
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 text-gold-400 opacity-30 animate-pulse animation-delay-2000">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
          <path d="M30 0L35 20H55L40 32L45 52L30 40L15 52L20 32L5 20H25L30 0Z"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center min-h-[600px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Welcome to
                <span className="block text-gold-400"> Sri Murugan stores</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-lg">
                Your trusted neighborhood store for authentic Indian products, 
                from daily essentials to festive celebrations.
              </p>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-md">
              <input 
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 px-5 pr-12 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-500 bg-white/90 backdrop-blur-sm text-gray-800"
              />
              <button 
                type="submit"
                className="absolute right-0 top-0 h-full px-4 text-maroon-600 hover:text-gold-600 transition-colors"
              >
                <Search size={24} />
              </button>
            </form>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/category/seasonal-festival" 
                className="bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
              >
                Shop Festival Items
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link 
                to="/category/daily-essentials" 
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:border-white/50"
              >
                Daily Essentials
              </Link>
            </div>
          </div>

          {/* Right Content - Rotating Offers */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center space-y-4">
                <div className="inline-block bg-gold-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  {currentOffer.discount}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {currentOffer.title}
                </h3>
                <p className="text-gray-200">
                  {currentOffer.description}
                </p>
                <div className="aspect-square w-48 mx-auto rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={currentOffer.image} 
                    alt={currentOffer.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Link 
                  to={`/category/${currentOffer.category}`}
                  className="inline-block bg-white text-maroon-700 px-6 py-2 rounded-full font-medium hover:bg-gold-50 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Offer indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {offers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentOfferIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentOfferIndex ? 'bg-gold-400 scale-125' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;