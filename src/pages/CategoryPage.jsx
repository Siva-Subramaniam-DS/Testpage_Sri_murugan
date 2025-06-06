import React from 'react';
import { useParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { 
  Coffee, Book, Home, Utensils, Gift, Sparkles, Star
} from 'lucide-react';

function CategoryPage() {
  const { categoryId } = useParams();
  
  // Get all products if "all" is specified, otherwise filter by category
  const categoryProducts = categoryId === 'all' 
    ? products 
    : products.filter(product => product.category === categoryId);
  
  // Find the current category
  const currentCategory = categories.find(cat => cat.id === categoryId);
  
  // Map category IDs to Lucide icons
  const getCategoryIcon = (iconName, size = 24) => {
    switch(iconName) {
      case 'coffee': return <Coffee size={size} />;
      case 'book': return <Book size={size} />;
      case 'home': return <Home size={size} />;
      case 'utensils': return <Utensils size={size} />;
      case 'gift': return <Gift size={size} />;
      case 'sparkles': return <Sparkles size={size} />;
      case 'star': return <Star size={size} />;
      default: return <Star size={size} />;
    }
  };

  return (
    <div>
      {/* Category Header */}
      <div className="relative bg-maroon-700 py-16 px-4">
        <div className="container mx-auto text-center text-white">
          {categoryId === 'all' ? (
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              All Products
            </h1>
          ) : currentCategory ? (
            <>
              <div className="flex items-center justify-center mb-4">
                {getCategoryIcon(currentCategory.icon, 32)}
                <h1 className="text-3xl md:text-4xl font-display font-bold ml-3">
                  {currentCategory.name}
                </h1>
              </div>
              <p className="max-w-2xl mx-auto text-gray-200">
                {currentCategory.description}
              </p>
            </>
          ) : (
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Category Not Found
            </h1>
          )}
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 opacity-20">
          <img 
            src="https://images.pexels.com/photos/6195664/pexels-photo-6195664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Decorative Mandala" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 opacity-20">
          <img 
            src="https://images.pexels.com/photos/6195664/pexels-photo-6195664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Decorative Mandala" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="py-12 px-4 bg-cream-50">
        <div className="container mx-auto">
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {categoryProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-700 mb-4">No products found in this category</h3>
              <p className="text-gray-500">Please check back later or explore other categories.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;