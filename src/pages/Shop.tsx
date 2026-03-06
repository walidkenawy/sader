import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, ChevronDown, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { CollectionType } from '../types';

const ITEMS_PER_PAGE = 8;

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const currentCategory = searchParams.get('category') as CollectionType | null;

  // Reset to first page when category or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [currentCategory, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (currentCategory) {
      result = result.filter(p => p.category === currentCategory);
    }
    
    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'newest': result.sort((a, b) => (a.isNew ? -1 : 1)); break;
    }
    
    return result;
  }, [currentCategory, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const categories: CollectionType[] = ['Private', 'Grande', 'Luxury', 'Femi'];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-5xl lg:text-7xl font-serif text-zinc-900 mb-8 tracking-tight">
            {currentCategory ? `${currentCategory} Collection` : 'Our Collections'}
          </h1>
          <div className="w-24 h-px bg-amber-600 mx-auto mb-8"></div>
          <p className="text-zinc-500 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed tracking-wide">
            Discover our curated selection of fine fragrances, each crafted to evoke deep emotions and create unforgettable personal moments.
          </p>
        </div>

        {/* Filters & Sorting */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 border-y border-zinc-100 py-8">
          <div className="flex items-center space-x-6 overflow-x-auto w-full md:w-auto no-scrollbar pb-2 md:pb-0">
            <button 
              onClick={() => setSearchParams({})}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all whitespace-nowrap pb-1 border-b-2 ${!currentCategory ? 'border-zinc-900 text-zinc-900' : 'border-transparent text-zinc-400 hover:text-zinc-600'}`}
            >
              All Collections
            </button>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setSearchParams({ category: cat })}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all whitespace-nowrap pb-1 border-b-2 ${currentCategory === cat ? 'border-zinc-900 text-zinc-900' : 'border-transparent text-zinc-400 hover:text-zinc-600'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-8 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center space-x-3 text-zinc-500">
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400">Sort By</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-900 focus:ring-0 cursor-pointer pr-8"
              >
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
            <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-300">
              {filteredProducts.length} Results
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 mb-20">
          <AnimatePresence mode="popLayout">
            {paginatedProducts.map(product => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-4 border-t border-zinc-100 pt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-4 rounded-full border border-zinc-100 transition-all ${currentPage === 1 ? 'text-zinc-200 cursor-not-allowed' : 'text-zinc-900 hover:bg-zinc-50 hover:border-zinc-200'}`}
            >
              <ChevronLeft size={16} />
            </button>
            
            <div className="flex items-center space-x-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-12 h-12 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${currentPage === i + 1 ? 'bg-zinc-900 text-white shadow-lg' : 'text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-4 rounded-full border border-zinc-100 transition-all ${currentPage === totalPages ? 'text-zinc-200 cursor-not-allowed' : 'text-zinc-900 hover:bg-zinc-50 hover:border-zinc-200'}`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <Search size={48} className="mx-auto text-zinc-200 mb-6" />
            <h3 className="text-xl font-serif text-zinc-900 mb-2">No products found</h3>
            <p className="text-zinc-500">Try adjusting your filters or category selection.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
