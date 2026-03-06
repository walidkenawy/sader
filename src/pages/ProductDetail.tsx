import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Heart, Share2, ChevronRight, Minus, Plus, Star, ShieldCheck, Truck, RotateCcw, Wind, Trees, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

const ScentNote: React.FC<{ label: string; notes: string[]; icon: React.ReactNode }> = ({ label, notes, icon }) => (
  <div className="flex flex-col space-y-3">
    <div className="flex items-center space-x-3 text-amber-600">
      {icon}
      <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-900">{label}</span>
    </div>
    <div className="flex flex-wrap gap-2">
      {notes.map((note) => (
        <span key={note} className="text-[11px] text-zinc-500 bg-zinc-50 px-3 py-1 rounded-full border border-zinc-100">
          {note}
        </span>
      ))}
    </div>
  </div>
);

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);
  const isWishlisted = product ? isInWishlist(product.id) : false;
  const relatedProducts = useMemo(() => 
    PRODUCTS.filter(p => p.category === product?.category && p.id !== id).slice(0, 4),
    [product, id]
  );

  const shareUrl = window.location.href;
  const shareText = `Check out ${product.name} at Sedra Perfumes!`;

  const shareLinks = [
    { icon: <Facebook size={18} />, label: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { icon: <Twitter size={18} />, label: 'Twitter', url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}` },
    { icon: <MessageCircle size={18} />, label: 'WhatsApp', url: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}` },
  ];

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-3xl font-serif text-zinc-900 mb-6">Product not found</h2>
        <Link to="/shop" className="px-10 py-4 bg-zinc-900 text-white text-[10px] uppercase tracking-widest font-bold rounded-full">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-12">
          <Link to="/" className="hover:text-zinc-900 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-zinc-900 transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <Link to={`/shop?category=${product.category}`} className="hover:text-zinc-900 transition-colors">{product.category}</Link>
          <ChevronRight size={12} />
          <span className="text-zinc-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          {/* Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-[4/5] bg-[#F9F9F9] overflow-hidden flex items-center justify-center relative"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-[80%] object-contain transition-transform duration-[2s] hover:scale-110"
              referrerPolicy="no-referrer"
            />
            {product.isNew && (
              <span className="absolute top-10 left-10 bg-zinc-900 text-white text-[8px] uppercase tracking-[0.4em] px-5 py-2 font-bold">New Arrival</span>
            )}
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-amber-600 font-bold mb-6">{product.category} Collection</span>
            <h1 className="text-5xl lg:text-7xl font-serif text-zinc-900 mb-8 leading-tight tracking-tight">{product.name}</h1>
            
            <div className="flex items-center space-x-6 mb-10">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold">12 Reviews</span>
            </div>

            <div className="text-3xl font-light text-zinc-900 mb-10 tracking-widest">
              {product.price.toFixed(3)} {product.currency}
            </div>

            <p className="text-zinc-500 leading-relaxed text-lg mb-12 font-light">
              {product.description}
            </p>

            {/* Scent Profile Quick View */}
            {product.notes && (
              <div className="mb-16 p-8 bg-[#F9F9F9] border border-zinc-100 rounded-2xl">
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-400 mb-8">Scent Profile</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <ScentNote 
                    label="Top Notes" 
                    notes={product.notes.top} 
                    icon={<Wind size={16} strokeWidth={1.5} />} 
                  />
                  <ScentNote 
                    label="Heart Notes" 
                    notes={product.notes.heart} 
                    icon={<Heart size={16} strokeWidth={1.5} />} 
                  />
                  <ScentNote 
                    label="Base Notes" 
                    notes={product.notes.base} 
                    icon={<Trees size={16} strokeWidth={1.5} />} 
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col space-y-10 mb-16">
              <div className="flex items-center space-x-8">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Size</span>
                <span className="px-8 py-2.5 border border-zinc-900 text-[10px] uppercase tracking-widest font-bold text-zinc-900">{product.size}</span>
              </div>

              <div className="flex items-center space-x-8">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Quantity</span>
                <div className="flex items-center border border-zinc-100 px-6 py-2.5">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors"><Minus size={14} /></button>
                  <span className="w-16 text-center font-bold text-zinc-900 text-sm">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors"><Plus size={14} /></button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button 
                onClick={() => addToCart(product)}
                className="flex-1 py-6 bg-zinc-900 text-white text-[10px] uppercase tracking-[0.4em] font-bold shadow-xl hover:bg-amber-600 transition-all duration-500 flex items-center justify-center space-x-4"
              >
                <ShoppingBag size={18} />
                <span>Add to Cart</span>
              </button>
              <button 
                onClick={() => toggleWishlist(product)}
                className={`p-6 border transition-all duration-500 ${
                  isWishlisted 
                    ? 'bg-amber-600 border-amber-600 text-white shadow-lg' 
                    : 'border-zinc-100 text-zinc-400 hover:text-amber-600 hover:border-amber-100'
                }`}
              >
                <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} strokeWidth={isWishlisted ? 0 : 1.5} />
              </button>
            </div>

            {/* Social Sharing Section */}
            <div className="flex items-center space-x-6 mb-16 py-6 border-y border-zinc-50">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Share this product</span>
              <div className="flex items-center gap-4">
                {shareLinks.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-100 text-zinc-400 hover:text-amber-600 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-300"
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Trust Badges Mini */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-zinc-100">
              <div className="flex items-center space-x-4">
                <Truck size={20} strokeWidth={1} className="text-amber-600" />
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-500">Free Delivery</span>
              </div>
              <div className="flex items-center space-x-4">
                <ShieldCheck size={20} strokeWidth={1} className="text-amber-600" />
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-500">Secure Payment</span>
              </div>
              <div className="flex items-center space-x-4">
                <RotateCcw size={20} strokeWidth={1} className="text-amber-600" />
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-500">Easy Returns</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mb-24">
          <div className="flex items-center space-x-12 border-b border-zinc-100 mb-12 overflow-x-auto no-scrollbar">
            {['description', 'shipping'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all whitespace-nowrap relative ${activeTab === tab ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-600'}`}
              >
                {tab}
                {activeTab === tab && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600" />}
              </button>
            ))}
          </div>

          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              {activeTab === 'description' && (
                <motion.div 
                  key="desc"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-zinc-500 leading-relaxed text-lg"
                >
                  <p className="mb-6">
                    Sedra is a luxury fragrance brand that combines oriental richness with modern elegance. The brand creates unique scents designed to reflect personality and leave a lasting impression.
                  </p>
                  <p>
                    Each fragrance is a masterpiece of refined luxury, crafted for those who seek exclusivity beyond the ordinary. Timeless elegance, sophistication, and unmatched distinction are at the heart of everything we create.
                  </p>
                </motion.div>
              )}
              {activeTab === 'shipping' && (
                <motion.div 
                  key="shipping"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-zinc-500 leading-relaxed text-sm space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-900 mb-4">Delivery Times</h4>
                      <ul className="space-y-2">
                        <li>Kuwait: 24 Hours</li>
                        <li>KSA: 2-3 Days</li>
                        <li>World Wide: 5-7 Business Days</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-900 mb-4">Shipping Rates</h4>
                      <p>Free shipping on all orders over $150. For orders below $150, a flat rate of $15 applies worldwide.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-serif text-zinc-900">Related <span className="italic font-light text-zinc-400">Products</span></h2>
              <Link to="/shop" className="text-[10px] uppercase tracking-widest font-bold text-zinc-900 hover:text-amber-600 transition-colors">View All</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
