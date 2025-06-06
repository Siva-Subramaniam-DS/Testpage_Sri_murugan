import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Delhi',
    rating: 5,
    comment: 'The best fancy store online! I ordered decorative items for my daughter\'s wedding and everything arrived in perfect condition. The quality exceeded my expectations.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    name: 'Rahul Patel',
    location: 'Mumbai',
    rating: 4,
    comment: 'Great selection of kitchen essentials. The pressure cooker I bought is high quality and was delivered quickly. Will definitely shop here again.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    name: 'Ananya Gupta',
    location: 'Bangalore',
    rating: 5,
    comment: 'I bought Diwali decorations and they were so beautiful! Everyone complimented them during our celebrations. The customer service was also excellent.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

function Testimonials() {
  return (
    <section className="py-12 px-4 bg-cream-50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center text-gray-800 mb-8">
          What Our Customers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star 
                    key={index}
                    size={18}
                    className={index < testimonial.rating ? 'text-gold-600 fill-gold-600' : 'text-gray-300'}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;