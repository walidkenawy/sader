/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { CurrencyProvider } from './context/CurrencyContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import GDPRBanner from './components/GDPRBanner';
import AnnouncementBar from './components/AnnouncementBar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Cinematics from './pages/Cinematics';
import Contact from './pages/Contact';
import About from './pages/About';
import Studio from './pages/Studio';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';

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
    <HelmetProvider>
      <Router>
        <CurrencyProvider>
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
                    <Route path="/about" element={<About />} />
                    <Route path="/studio" element={<Studio />} />
                    <Route path="/shipping" element={<Shipping />} />
                    <Route path="/returns" element={<Returns />} />
                  </Routes>
                </main>
      
                <Footer />
                <ChatBot />
                <GDPRBanner />
              </div>
            </CartProvider>
          </WishlistProvider>
        </CurrencyProvider>
      </Router>
    </HelmetProvider>
  );
}
