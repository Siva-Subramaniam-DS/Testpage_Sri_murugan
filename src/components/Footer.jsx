import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-paisley-pattern"></div>
      </div>

      {/* Main footer content */}
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Store info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-display font-bold">
                श्री <span className="text-gold-400">Fancy</span> Store
              </span>
              <span className="text-gold-400">✨</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted neighborhood store for authentic Indian products, 
              serving the community with quality items for over a decade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold-400 transition-colors p-2 bg-white/10 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-gold-400 transition-colors p-2 bg-white/10 rounded-full">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white hover:text-gold-400 transition-colors p-2 bg-white/10 rounded-full">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white hover:text-gold-400 transition-colors p-2 bg-white/10 rounded-full">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold-400 border-b border-gold-400/30 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/category/paan-corner" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-2"></span>
                  Paan Corner
                </Link>
              </li>
              <li>
                <Link to="/category/daily-essentials" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-2"></span>
                  Daily Essentials
                </Link>
              </li>
              <li>
                <Link to="/category/seasonal-festival" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-2"></span>
                  Festival Items
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Store Hours & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold-400 border-b border-gold-400/30 pb-2">Store Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-gold-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div className="font-medium">Monday - Saturday</div>
                  <div>10:00 AM - 8:00 PM</div>
                  <div className="font-medium mt-2">Sunday</div>
                  <div>11:00 AM - 6:00 PM</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gold-400 flex-shrink-0" />
                <span className="text-gray-300">044 - 43171666 , 84288 33666</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle size={18} className="text-gold-400 flex-shrink-0" />
                <span className="text-gray-300">WhatsApp Orders</span>
              </div>
            </div>
          </div>
          
          {/* Location */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold-400 border-b border-gold-400/30 pb-2">Visit Our Store</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>No 60, MGR Main Road</div>
                  <div>Kandanchavadi Perungudi</div>
                  <div>Chennai-600096</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gold-400 flex-shrink-0" />
                <a href="mailto:info@shrifancystore.com" className="text-gray-300 hover:text-white transition-colors">
                sivamurugaanstores@gmail.com
                </a>
              </div>
              <button className="bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors mt-3">
                Get Directions
              </button>
            </div>
          </div>
        </div>

        {/* WhatsApp Contact Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <MessageCircle size={24} className="text-white" />
              <h3 className="text-xl font-bold text-white">Order via WhatsApp</h3>
            </div>
            <p className="text-green-100 mb-4">
              Quick and easy ordering through WhatsApp. Send us your list and we'll prepare your order!
            </p>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-700 px-6 py-3 rounded-full font-medium hover:bg-green-50 transition-colors"
            >
              <MessageCircle size={20} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="relative bg-maroon-950/50 py-4 border-t border-white/10">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© {year} श्री Fancy Store. All rights reserved. | Made with ❤️ for our community</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/shipping" className="hover:text-white transition-colors">Delivery Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;