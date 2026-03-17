import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Heart, Share2, ChevronRight, Minus, Plus, Star, ShieldCheck, Truck, RotateCcw, Wind, Trees, Leaf, Facebook, Twitter, MessageCircle, Sparkles, Quote } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCurrency } from '../context/CurrencyContext';
import ProductCard from '../components/ProductCard';
import FragrancePyramid from '../components/FragrancePyramid';

const ScentNote: React.FC<{ label: string; notes: string[]; icon: React.ReactNode; color: string }> = ({ label, notes, icon, color }) => (
  <div className="flex flex-col space-y-3">
    <div className="flex items-center space-x-3">
      <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center`}>
        {icon}
      </div>
      <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-900">{label}</span>
    </div>
    <div className="flex flex-wrap gap-2">
      {notes.map((note) => (
        <span key={note} className="text-[11px] text-zinc-500 bg-white px-3 py-1 rounded-full border border-zinc-100 shadow-sm">
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
  const { formatPrice } = useCurrency();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);

  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const isWishlisted = product ? isInWishlist(product.id) : false;
  const relatedProducts = useMemo(() => 
    PRODUCTS.filter(p => p.category === product?.category && p.id !== id).slice(0, 8),
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
        <Helmet>
          <title>Product Not Found | Sedra Perfumes</title>
        </Helmet>
        <h2 className="text-3xl font-serif text-zinc-900 mb-6">Product not found</h2>
        <Link to="/shop" className="px-10 py-4 bg-zinc-900 text-white text-[10px] uppercase tracking-widest font-bold rounded-full">
          Back to Shop
        </Link>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Sedra Perfumes"
    },
    "offers": {
      "@type": "Offer",
      "url": window.location.href,
      "priceCurrency": product.currency,
      "price": product.price,
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <Helmet>
        <title>{product.name} - {product.category} Collection | Sedra Perfumes</title>
        <meta name="description" content={`Discover ${product.name} from our ${product.category} Collection. ${product.description.substring(0, 160)}`} />
        <meta property="og:title" content={`${product.name} - ${product.category} Collection | Sedra Perfumes`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:type" content="product" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
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

        <div className="grid grid-cols-2 gap-6 sm:gap-12 lg:gap-24 mb-32">
          {/* Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            className="aspect-[4/5] bg-[#F9F9F9] overflow-hidden flex items-center justify-center relative rounded-2xl cursor-zoom-in"
          >
            <motion.img 
              src={product.image} 
              alt={product.name} 
              animate={{
                scale: isZoomed ? 2 : 1,
                transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="max-h-[85%] object-contain"
              referrerPolicy="no-referrer"
            />
            {product.isNew && (
              <span className="absolute top-4 left-4 sm:top-10 sm:left-10 bg-zinc-900 text-white text-[6px] sm:text-[8px] uppercase tracking-[0.4em] px-3 py-1.5 sm:px-5 sm:py-2 font-bold z-10">New Arrival</span>
            )}
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em] text-amber-600 font-bold mb-4 sm:mb-6">{product.category} Collection</span>
            <h1 className="text-xl sm:text-3xl lg:text-7xl font-serif text-zinc-900 mb-4 sm:mb-8 leading-tight tracking-tight uppercase">{product.name}</h1>
            
            <div className="flex items-center space-x-3 sm:space-x-6 mb-6 sm:mb-10">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={10} className="sm:w-[14px] sm:h-[14px]" fill="currentColor" />)}
              </div>
              <span className="text-[8px] sm:text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold">12 Reviews</span>
            </div>

            <div className="text-lg sm:text-2xl lg:text-3xl font-light text-zinc-900 mb-6 sm:mb-10 tracking-widest">
              {formatPrice(product.price)}
            </div>

            {product.olfactoryFamily && (
              <div className="mb-6 flex items-center space-x-3">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Olfactory Family:</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-600">{product.olfactoryFamily}</span>
              </div>
            )}

            {product.mood && (
              <div className="flex flex-wrap gap-2 mb-8">
                {product.mood.map(m => (
                  <span key={m} className="px-4 py-1.5 bg-zinc-50 border border-zinc-100 text-[9px] uppercase tracking-widest font-bold text-zinc-400 rounded-full flex items-center">
                    <Sparkles size={10} className="mr-2 text-amber-500" />
                    {m}
                  </span>
                ))}
              </div>
            )}

            <p className="text-zinc-500 leading-relaxed text-xs sm:text-lg mb-8 sm:mb-12 font-light line-clamp-3 sm:line-clamp-none">
              {product.description}
            </p>

            {/* Scent Profile Quick View */}
            {product.notes && (
              <div className="mb-10 sm:mb-16 p-4 sm:p-8 bg-[#F9F9F9] border border-zinc-100 rounded-2xl">
                <h3 className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold text-zinc-400 mb-4 sm:mb-8">Scent Profile</h3>
                <div className="grid grid-cols-1 gap-6 sm:gap-10">
                  <ScentNote 
                    label="Top Notes" 
                    notes={product.notes.top} 
                    icon={<Wind size={14} className="text-amber-600" />} 
                    color="bg-amber-50"
                  />
                  <ScentNote 
                    label="Heart Notes" 
                    notes={product.notes.heart} 
                    icon={<Heart size={14} className="text-rose-600" />} 
                    color="bg-rose-50"
                  />
                  <ScentNote 
                    label="Base Notes" 
                    notes={product.notes.base} 
                    icon={<Trees size={14} className="text-emerald-600" />} 
                    color="bg-emerald-50"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col space-y-6 sm:space-y-10 mb-10 sm:mb-16">
              <div className="flex items-center space-x-4 sm:space-x-8">
                <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-zinc-400">Size</span>
                <span className="px-4 sm:px-8 py-1.5 sm:py-2.5 border border-zinc-900 text-[8px] sm:text-[10px] uppercase tracking-widest font-bold text-zinc-900">{product.size}</span>
              </div>

              <div className="flex items-center space-x-4 sm:space-x-8">
                <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-zinc-400">Quantity</span>
                <div className="flex items-center border border-zinc-100 px-3 sm:px-6 py-1.5 sm:py-2.5">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 sm:p-2 text-zinc-400 hover:text-zinc-900 transition-colors"><Minus size={12} /></button>
                  <span className="w-8 sm:w-16 text-center font-bold text-zinc-900 text-xs sm:text-sm">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-1 sm:p-2 text-zinc-400 hover:text-zinc-900 transition-colors"><Plus size={12} /></button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 mb-10 sm:mb-12">
              <button 
                onClick={() => addToCart(product)}
                className="flex-1 py-4 sm:py-6 bg-zinc-900 text-white text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold shadow-xl hover:bg-amber-600 transition-all duration-500 flex items-center justify-center space-x-2 sm:space-x-4"
              >
                <ShoppingBag size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>Add to Cart</span>
              </button>
              <button 
                onClick={() => toggleWishlist(product)}
                className={`py-4 sm:py-6 px-6 sm:px-10 border transition-all duration-500 flex items-center justify-center ${
                  isWishlisted 
                    ? 'bg-amber-600 border-amber-600 text-white shadow-lg' 
                    : 'border-zinc-100 text-zinc-400 hover:text-amber-600 hover:border-amber-100'
                }`}
              >
                <Heart size={18} className="sm:w-[20px] sm:h-[20px]" fill={isWishlisted ? "currentColor" : "none"} strokeWidth={isWishlisted ? 0 : 1.5} />
              </button>
            </div>

            {/* Social Sharing Section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:space-x-6 mb-16 py-4 sm:py-6 border-y border-zinc-50">
              <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.2em] font-bold text-zinc-400">Share this product</span>
              <div className="flex items-center gap-3 sm:gap-4">
                {shareLinks.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-zinc-100 text-zinc-400 hover:text-amber-600 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-300"
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

        {/* Related Products Carousel */}
        {relatedProducts.length > 0 && (
          <div className="mb-24">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-serif text-zinc-900 uppercase tracking-tight">Related <span className="italic font-light text-zinc-400">Products</span></h2>
              <Link to={`/shop?category=${product.category}`} className="text-[10px] uppercase tracking-widest font-bold text-zinc-900 hover:text-amber-600 transition-colors border-b border-zinc-900 pb-1">View All</Link>
            </div>
            <div className="flex space-x-8 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory">
              {relatedProducts.map(p => (
                <div key={p.id} className="min-w-[280px] sm:min-w-[320px] lg:min-w-[calc(25%-24px)] snap-start">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="mb-24">
          <div className="flex items-center space-x-12 border-b border-zinc-100 mb-12 overflow-x-auto no-scrollbar">
            {['the story', 'scent profile', 'shipping'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab === 'the story' ? 'description' : tab === 'scent profile' ? 'notes' : tab)}
                className={`pb-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all whitespace-nowrap relative ${
                  (activeTab === 'description' && tab === 'the story') || 
                  (activeTab === 'notes' && tab === 'scent profile') || 
                  activeTab === tab 
                    ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-600'
                }`}
              >
                {tab}
                {((activeTab === 'description' && tab === 'the story') || 
                  (activeTab === 'notes' && tab === 'scent profile') || 
                  activeTab === tab) && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600" />}
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
                  className="space-y-12"
                >
                  <div className="flex items-start space-x-6">
                    <Quote size={40} className="text-amber-100 shrink-0" />
                    <p className="text-zinc-900 font-serif italic text-2xl leading-relaxed">
                      {product.story || product.description}
                    </p>
                  </div>
                  
                  <div className="text-zinc-500 leading-relaxed text-lg pl-16">
                    {product.description}
                  </div>
                </motion.div>
              )}
              {activeTab === 'notes' && (
                <motion.div 
                  key="notes"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="max-w-2xl"
                >
                  {product.notes && (
                    <FragrancePyramid notes={product.notes} />
                  )}
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
      </div>
    </div>
  );
};

export default ProductDetail;
