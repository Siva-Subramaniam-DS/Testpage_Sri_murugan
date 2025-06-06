import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from './ProductCard';

function FeaturedProducts() {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800">
            Featured Products
          </h2>
          <Link 
            to="/category/all" 
            className="flex items-center text-saffron-600 hover:text-saffron-700 font-medium"
          >
            View All <ChevronRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;