import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

function SpecialOffers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const saleProducts = products.filter(product => product.sale);
  
  const itemsPerSlide = {
    sm: 1,
    md: 2,
    lg: 3
  };
  
  const [itemsToShow, setItemsToShow] = useState(itemsPerSlide.sm);
  
  // Update items to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(itemsPerSlide.lg);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(itemsPerSlide.md);
      } else {
        setItemsToShow(itemsPerSlide.sm);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const totalSlides = Math.ceil(saleProducts.length / itemsToShow);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };
  
  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, totalSlides]);
  
  const visibleProducts = saleProducts.slice(
    currentIndex * itemsToShow, 
    (currentIndex * itemsToShow) + itemsToShow
  );

  return (
    <section className="py-12 px-4 bg-maroon-50">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-maroon-700 mb-2">
            Special Offers
          </h2>
          <p className="text-gray-600">Limited time deals you don't want to miss!</p>
        </div>
        
        <div className="relative">
          {/* Carousel controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {saleProducts.map((product) => (
                <div 
                  key={product.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-3"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
          
          {/* Carousel indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-maroon-700' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;