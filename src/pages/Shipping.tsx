import React from 'react';
import { motion } from 'motion/react';
import { Truck, Globe, Clock, ShieldCheck, Package, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ShippingFeature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 group">
    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-amber-600 mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-900 mb-4">{title}</h3>
    <p className="text-xs text-zinc-500 leading-relaxed tracking-wider uppercase font-light">{description}</p>
  </div>
);

const ShippingZone: React.FC<{ country: string; flag: string; time: string; cost: string; details: string[] }> = ({ country, flag, time, cost, details }) => (
  <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-700 group">
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-4">
        <span className="text-4xl">{flag}</span>
        <div>
          <h3 className="text-2xl font-serif text-zinc-900">{country}</h3>
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-bold">Priority Shipping</span>
        </div>
      </div>
      <div className="text-right">
        <div className="text-xl font-light text-zinc-900">{cost}</div>
        <div className="text-[9px] uppercase tracking-widest text-zinc-400 font-medium">Flat Rate</div>
      </div>
    </div>
    
    <div className="space-y-4 mb-10">
      <div className="flex items-center space-x-3 text-zinc-600">
        <Clock size={16} className="text-amber-500" />
        <span className="text-xs tracking-wider uppercase font-medium">{time}</span>
      </div>
      <div className="flex items-center space-x-3 text-zinc-600">
        <ShieldCheck size={16} className="text-emerald-500" />
        <span className="text-xs tracking-wider uppercase font-medium">Fully Insured & Tracked</span>
      </div>
    </div>

    <ul className="space-y-4 pt-8 border-t border-zinc-50">
      {details.map((detail, idx) => (
        <li key={idx} className="flex items-start space-x-3">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
          <p className="text-[11px] text-zinc-500 leading-relaxed uppercase tracking-wider font-light">{detail}</p>
        </li>
      ))}
    </ul>
  </div>
);

const Shipping: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>Shipping & Delivery | Sedra Perfumes</title>
        <meta name="description" content="Sedra Perfumes shipping information for UK, Netherlands, and International orders. Luxury fragrance delivery details." />
      </Helmet>

      {/* Hero Section */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.8em] text-amber-600 font-bold mb-6 block"
          >
            Global Logistics
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-serif text-zinc-900 mb-8 tracking-tight"
          >
            Shipping & <span className="italic text-zinc-400">Delivery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-sm tracking-[0.2em] uppercase max-w-2xl mx-auto leading-relaxed font-light"
          >
            We ensure our luxury fragrances reach you in perfect condition, no matter where you are in the world. Our specialized logistics network handles every bottle with the utmost care.
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <ShippingFeature 
            icon={<Globe size={28} />}
            title="Worldwide Delivery"
            description="Shipping to over 50 countries with specialized fragrance handling."
          />
          <ShippingFeature 
            icon={<ShieldCheck size={28} />}
            title="Secure Packaging"
            description="Double-walled protection and temperature-controlled storage."
          />
          <ShippingFeature 
            icon={<Truck size={28} />}
            title="Real-time Tracking"
            description="Full visibility from our atelier in Kuwait to your doorstep."
          />
        </div>
      </section>

      {/* Shipping Partners Logos */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zinc-50 rounded-[3rem] p-12 lg:p-20 border border-zinc-100">
            <div className="text-center mb-16">
              <span className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-bold mb-4 block">Trusted Logistics</span>
              <h2 className="text-3xl font-serif text-zinc-900">Our Global <span className="italic text-zinc-400">Carriers</span></h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-60">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/DHL_Logo.svg" alt="DHL" className="h-6 lg:h-8 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/FedEx_Express_logo.svg" alt="FedEx" className="h-8 lg:h-10 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/PostNL_logo.svg" alt="PostNL" className="h-8 lg:h-10 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Royal_Mail_logo.svg/1200px-Royal_Mail_logo.svg.png" alt="Royal Mail" className="h-10 lg:h-14 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Shipping Zones */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-serif text-zinc-900 mb-4">European & UK <span className="italic text-zinc-400">Hubs</span></h2>
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 leading-relaxed font-bold">
                We have optimized our delivery routes to the United Kingdom and the Netherlands, offering faster transit times and simplified customs.
              </p>
            </div>
            <div className="flex items-center space-x-4 text-amber-600">
              <MapPin size={20} />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Direct Routes Active</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ShippingZone 
              country="United Kingdom"
              flag="🇬🇧"
              time="3 - 5 Business Days"
              cost="£15.00"
              details={[
                "Express delivery via DHL, FedEx, or Royal Mail.",
                "All customs duties and taxes are calculated at checkout.",
                "Signature required upon delivery for security.",
                "Specialized handling for high-concentration extraits.",
                "Local fulfillment from our London distribution center."
              ]}
            />
            <ShippingZone 
              country="Netherlands"
              flag="🇳🇱"
              time="2 - 4 Business Days"
              cost="€12.50"
              details={[
                "Priority shipping through our European logistics partner.",
                "No hidden customs fees for EU residents.",
                "Local tracking updates via PostNL or DHL Express.",
                "Climate-controlled transit to preserve scent integrity.",
                "EU-wide distribution from our Amsterdam hub."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Order Fulfillment & Logistics */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-bold block">Logistics Excellence</span>
              <h2 className="text-4xl font-serif text-zinc-900">Order <span className="italic text-zinc-400">Fulfillment</span></h2>
              <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-wider font-light">
                Every Sedra Perfume order is treated as a bespoke delivery. Our fulfillment process is designed to ensure that the delicate chemical balance of our fragrances is maintained from our atelier to your collection.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Quality Inspection", desc: "Each bottle undergoes a final olfactory and visual inspection before sealing." },
                  { title: "Protective Layering", desc: "We use specialized shock-absorbent materials and thermal-insulating wraps." },
                  { title: "Priority Dispatch", desc: "Orders placed before 2 PM local time are dispatched the same business day." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-[11px] uppercase tracking-widest font-bold text-zinc-900 mb-1">{item.title}</h4>
                      <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-zinc-50 rounded-[3rem] p-12 lg:p-16 border border-zinc-100">
              <h3 className="text-xl font-serif text-zinc-900 mb-8">Fulfillment <span className="italic text-zinc-400">Centers</span></h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-600 mb-2">Middle East Hub (Headquarters)</h4>
                  <p className="text-[11px] text-zinc-500 leading-relaxed uppercase tracking-wider font-light">
                    Sedra Perfumes Atelier<br />
                    Al-Hamra Tower, Floor 52<br />
                    Kuwait City, Kuwait
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-600 mb-2">European Distribution Center</h4>
                  <p className="text-[11px] text-zinc-500 leading-relaxed uppercase tracking-wider font-light">
                    Sedra Logistics EU<br />
                    Keizersgracht 241<br />
                    1016 EA Amsterdam, Netherlands
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-600 mb-2">UK Distribution Center</h4>
                  <p className="text-[11px] text-zinc-500 leading-relaxed uppercase tracking-wider font-light">
                    Sedra Perfumes UK Ltd<br />
                    71-75 Shelton Street, Covent Garden<br />
                    London, WC2H 9JQ, United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Returns & Exchanges */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zinc-900 rounded-[3rem] p-12 lg:p-24 text-white">
            <div className="max-w-3xl mb-16">
              <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-bold mb-4 block">Our Commitment</span>
              <h2 className="text-4xl font-serif mb-6">Returns & <span className="italic text-zinc-500">Exchanges</span></h2>
              <p className="text-zinc-400 text-sm leading-relaxed uppercase tracking-widest font-light">
                Due to the nature of our products and for hygiene reasons, we can only accept returns of items that are unopened, unused, and in their original cellophane-wrapped packaging.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">14-Day Window</h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed uppercase tracking-widest font-light">
                  You have 14 days from the date of delivery to request a return or exchange.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Complimentary Samples</h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed uppercase tracking-widest font-light">
                  Every full bottle comes with a matching 2ml sample. Please use the sample to test the fragrance before opening the full bottle.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Refund Process</h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed uppercase tracking-widest font-light">
                  Once your return is received and inspected, we will process your refund within 5-7 business days.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-16">
              <h3 className="text-xl font-serif mb-8">Return <span className="italic text-zinc-500">Addresses</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-500 mb-4">EU & International Returns</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed uppercase tracking-wider font-light">
                    Sedra Returns Center (EU)<br />
                    Postbus 12345<br />
                    1000 AA Amsterdam, Netherlands
                  </p>
                </div>
                <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-500 mb-4">UK Returns</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed uppercase tracking-wider font-light">
                    Sedra Returns Center (UK)<br />
                    Unit 4, Trade City<br />
                    London, SE1 0AA, United Kingdom
                  </p>
                </div>
              </div>
              <div className="mt-12 text-center">
                <p className="text-[10px] text-zinc-500 tracking-[0.2em] font-medium uppercase">
                  Please contact <a href="mailto:concierge@sedraperfumes.com" className="text-amber-500 hover:underline lowercase">concierge@sedraperfumes.com</a> for a return authorization number before shipping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International & Other Info */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto bg-zinc-900 rounded-[3rem] p-12 lg:p-24 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 blur-[100px] rounded-full -mr-48 -mt-48" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl font-serif mb-10">International <span className="italic text-zinc-500">Orders</span></h2>
              <div className="space-y-12">
                <div className="flex space-x-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Package size={20} className="text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-3">Processing Time</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed tracking-widest uppercase font-light">
                      All orders are processed within 24-48 hours. You will receive a tracking number via email as soon as your package leaves our facility.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} className="text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-3">Customs & Duties</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed tracking-widest uppercase font-light">
                      For international orders outside the UK and EU, customs duties and taxes may be applied by your local authorities. These are the responsibility of the recipient.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10">
              <h3 className="text-xl font-serif mb-8">Delivery <span className="italic text-zinc-500">Estimates</span></h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">GCC Countries</span>
                  <span className="text-xs tracking-widest font-light">1 - 2 Days</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">USA & Canada</span>
                  <span className="text-xs tracking-widest font-light">4 - 6 Days</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Asia Pacific</span>
                  <span className="text-xs tracking-widest font-light">5 - 7 Days</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Rest of World</span>
                  <span className="text-xs tracking-widest font-light">7 - 10 Days</span>
                </div>
              </div>
              <div className="mt-10 p-6 bg-amber-600/10 rounded-2xl border border-amber-600/20">
                <p className="text-[9px] uppercase tracking-[0.2em] text-amber-500 font-bold leading-relaxed text-center">
                  Free Worldwide Shipping on orders over KWD 150 (or equivalent)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shipping;
