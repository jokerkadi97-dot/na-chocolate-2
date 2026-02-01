
import React from 'react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleOrder = () => {
    const message = encodeURIComponent(`I'd like to order the "${product.name}" (${product.price}€)`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="group relative bg-brandBlack luxury-border transition-all duration-500 overflow-hidden">
      {/* Image Container */}
      <div className="aspect-[4/5] overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-brandBlack/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
          <p className="text-white text-sm font-light italic leading-relaxed">
            "{product.description}"
          </p>
        </div>
        <div className="absolute top-4 right-4 bg-brandBlack/80 backdrop-blur-sm px-3 py-1 text-luxuryGold text-xs tracking-widest border border-luxuryGold/30 uppercase">
          {product.category}
        </div>
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col items-center text-center">
        <h3 className="text-xl font-serif text-white mb-2 tracking-wide uppercase">{product.name}</h3>
        <p className="text-luxuryGold font-medium text-lg mb-6">{product.price}€</p>
        
        <button 
          onClick={handleOrder}
          className="w-full py-3 border border-luxuryGold text-luxuryGold text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-luxuryGold hover:text-brandBlack transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <span>Order via WhatsApp</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
