import React from 'react';
import HeroBanner from '../components/HeroBanner';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import SpecialOffers from '../components/SpecialOffers';
import Testimonials from '../components/Testimonials';

function HomePage() {
  return (
    <div>
      <HeroBanner />
      <CategoryGrid />
      <FeaturedProducts />
      <SpecialOffers />
      <Testimonials />
      
      {/* Store Info Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-maroon-700 mb-6">
              Visit Our Store
            </h2>
            <p className="text-gray-700 mb-8">
              Experience the charm of our physical store located in the heart of Delhi. 
              Browse our extensive collection of Indian fancy items and get personalized assistance from our friendly staff.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-maroon-50 rounded-full text-maroon-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Opening Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 10 AM - 8 PM</p>
                <p className="text-gray-600">Sunday: 11 AM - 6 PM</p>
              </div>
              
              <div className="p-4">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-maroon-50 rounded-full text-maroon-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">123 Gandhi Road, Sector 9</p>
                <p className="text-gray-600">New Delhi, 110001</p>
              </div>
              
              <div className="p-4">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-maroon-50 rounded-full text-maroon-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Contact</h3>
                <p className="text-gray-600">Phone: +91 98765 43210</p>
                <p className="text-gray-600">Email: info@indianfancy.com</p>
              </div>
            </div>
            
            <button className="mt-8 bg-saffron-600 hover:bg-saffron-700 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-md">
              Get Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;