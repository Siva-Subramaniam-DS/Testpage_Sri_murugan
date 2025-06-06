import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import { 
  Coffee, Home, Book, Utensils, Gift, Sparkles
} from 'lucide-react';

function CategoryGrid() {
  const getCategoryIcon = (iconName, size = 24) => {
    switch(iconName) {
      case 'coffee': return <Coffee size={size} />;
      case 'home': return <Home size={size} />;
      case 'book': return <Book size={size} />;
      case 'utensils': return <Utensils size={size} />;
      case 'gift': return <Gift size={size} />;
      case 'sparkles': return <Sparkles size={size} />;
      default: return <Coffee size={size} />;
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-cream-50 to-gold-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-30"></div>
      
      <div className="relative container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-maroon-800 mb-4">
            Explore Our Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover authentic Indian products across various categories, 
            from daily essentials to festive celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gold-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Category Icon */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full text-maroon-700 group-hover:bg-gold-100 transition-colors">
                  {getCategoryIcon(category.icon, 24)}
                </div>
                
                {/* Category Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gold-300 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-200 text-sm line-clamp-2 group-hover:text-gray-100 transition-colors">
                    {category.description}
                  </p>
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-400 rounded-2xl transition-all duration-300"></div>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-0 h-0 border-l-[30px] border-l-gold-400 border-b-[30px] border-b-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryGrid;