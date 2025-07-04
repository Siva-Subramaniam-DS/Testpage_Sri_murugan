import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router basename="/Testpage_Sri_murugan/">
        <div className="font-body min-h-screen flex flex-col bg-cream-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;