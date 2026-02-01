
import React, { useState } from 'react';
import { PRODUCTS } from './constants';
import ProductCard from './ProductCard';

const Products: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'truffles' | 'bars' | 'collections'>('all');

  const filteredProducts = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const categories: { label: string; value: typeof filter }[] = [
    { label: 'All Creations', value: 'all' },
    { label: 'Truffles', value: 'truffles' },
    { label: 'Artisan Bars', value: 'bars' },
    { label: 'Gift Collections', value: 'collections' },
  ];

  return (
    <div className="pt-20 pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif text-white tracking-widest uppercase">The Boutique</h1>
          <p className="text-luxuryGold/60 italic tracking-[0.2em]">Explore our full range of master-crafted delights</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-20">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] pb-2 border-b transition-all duration-300 ${filter === cat.value ? 'text-luxuryGold border-luxuryGold' : 'text-white/40 border-transparent hover:text-white'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-white/40 font-serif italic text-xl">
            No masterpieces currently in this vault.
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
