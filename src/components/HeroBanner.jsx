import React, { useState, useEffect } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImages = [
  import.meta.env.BASE_URL + 'BackImagefirst.png',
  import.meta.env.BASE_URL + 'BackImagesecond.png',
  import.meta.env.BASE_URL + 'Backimagethird.png'
];

function HeroBanner() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Slideshow background */}
      {heroImages.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt=""
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${idx === currentImage ? 'opacity-100' : 'opacity-0'}`}
          style={{ zIndex: 0 }}
        />
      ))}
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center min-h-[600px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Removed Left Content */}
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;