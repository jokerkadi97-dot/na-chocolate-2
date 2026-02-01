
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, BRAND_SLOGAN } from '.';
import ProductCard from './ProductCard';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1547046067-9d3632f7f740?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Chocolate" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-brandBlack/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl space-y-8 animate-fade-in">
          <p className="text-luxuryGold font-serif italic text-lg md:text-2xl tracking-[0.2em]">{BRAND_SLOGAN}</p>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white tracking-widest leading-tight">
            CRAFTED FOR THE <br /> <span className="gold-gradient">CONNOISSEUR</span>
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base tracking-widest leading-loose">
            From the heart of Paris to your doorstep. Experience the art of high-end French chocolaterie.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 pt-4">
            <Link 
              to="/products"
              className="px-10 py-4 bg-luxuryGold text-brandBlack font-bold uppercase tracking-[0.3em] hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl"
            >
              Explore Collection
            </Link>
            <Link 
              to="/about"
              className="px-10 py-4 border border-white/30 text-white font-bold uppercase tracking-[0.3em] hover:border-luxuryGold hover:text-luxuryGold transition-all"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 px-6 bg-brandBlack">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
            <div>
              <p className="text-luxuryGold text-xs font-bold uppercase tracking-[0.4em] mb-4">Curated Selection</p>
              <h2 className="text-3xl md:text-5xl font-serif text-white tracking-widest uppercase">The Signature Collection</h2>
            </div>
            <Link to="/products" className="text-luxuryGold text-xs font-bold uppercase tracking-[0.2em] hover:text-white flex items-center space-x-2">
              <span>View All Masterpieces</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 border border-luxuryGold/30 -z-10 group-hover:scale-105 transition-transform duration-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1545601445-4d6a5a05d6f2?auto=format&fit=crop&q=80&w=1000" 
              className="w-full aspect-[4/5] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-95" 
              alt="Experience" 
            />
          </div>
          <div className="space-y-10">
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-widest leading-tight uppercase">
              The Art of <br /> <span className="italic font-normal">Savoring</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed font-light">
              "We don't just sell chocolate; we offer a voyage through the soul of cocoa. Each ingredient is hand-picked from remote plantations, processed with traditional techniques, and finished with a modern touch."
            </p>
            <div className="space-y-6 border-l-2 border-luxuryGold pl-8">
              <div>
                <h4 className="text-luxuryGold font-bold tracking-widest uppercase mb-1">Ethical Sourcing</h4>
                <p className="text-white/40 text-sm">Direct trade with farmers in Madagascar and Ecuador.</p>
              </div>
              <div>
                <h4 className="text-luxuryGold font-bold tracking-widest uppercase mb-1">24k Gold Accents</h4>
                <p className="text-white/40 text-sm">Our signature creations feature edible real gold leaf.</p>
              </div>
              <div>
                <h4 className="text-luxuryGold font-bold tracking-widest uppercase mb-1">Bespoke Gifting</h4>
                <p className="text-white/40 text-sm">Custom velvet packaging and personalized notes.</p>
              </div>
            </div>
            <Link 
              to="/about"
              className="inline-block border-b border-luxuryGold pb-2 text-luxuryGold font-bold uppercase tracking-[0.2em] hover:text-white hover:border-white transition-all"
            >
              Discover Our Craft
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-chocolate py-32 text-center px-6">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl font-serif text-luxuryGold italic">Un Cadeau Inoubliable</h2>
          <p className="text-white/80 tracking-widest text-sm leading-loose">
            Whether for a cherished one or a personal indulgence, the gift of NA Chocolate is a statement of elegance and refined taste.
          </p>
          <div className="pt-8">
            <Link 
              to="/products"
              className="px-12 py-5 bg-brandBlack text-luxuryGold border border-luxuryGold hover:bg-luxuryGold hover:text-brandBlack font-bold uppercase tracking-[0.4em] transition-all"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
