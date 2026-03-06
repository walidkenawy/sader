/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Cinematics from './pages/Cinematics';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <WishlistProvider>
        <CartProvider>
          <ScrollToTop />
          <div className="min-h-screen bg-white font-sans selection:bg-amber-100 selection:text-amber-900 flex flex-col">
            <header className="fixed top-0 left-0 right-0 z-[60]">
              <AnnouncementBar />
              <Navbar />
            </header>
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/cinematics" element={<Cinematics />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<div className="pt-40 pb-24 text-center px-6"><h1 className="text-4xl font-serif mb-8">Our Story</h1><p className="max-w-2xl mx-auto text-zinc-500 leading-relaxed">Sedra Perfumes is a luxury fragrance brand from Kuwait dedicated to the art of scent. Each fragrance is a masterpiece of refined luxury, crafted for those who seek exclusivity beyond the ordinary.</p></div>} />
              </Routes>
            </main>
  
            <Footer />
          </div>
        </CartProvider>
      </WishlistProvider>
    </Router>
  );
}
