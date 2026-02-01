
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-chocolate-dark text-white/80 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-serif font-bold text-luxuryGold tracking-widest mb-4">NA CHOCOLATE</h2>
          <p className="font-serif italic text-luxuryGold/60 mb-8 tracking-widest">Le coin du chocolat</p>
          <p className="max-w-sm text-sm leading-relaxed mb-8">
            Crafting the world's most exquisite chocolate experiences since 1924. Every piece is a testament to our passion for perfection.
          </p>
          <div className="flex space-x-4">
            {['Instagram', 'Facebook', 'Twitter'].map(social => (
              <a key={social} href="#" className="w-10 h-10 rounded-full border border-luxuryGold/20 flex items-center justify-center hover:bg-luxuryGold hover:text-brandBlack transition-all">
                <span className="sr-only">{social}</span>
                <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-luxuryGold font-bold uppercase tracking-[0.2em] text-sm mb-6">Maison</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-luxuryGold transition-colors">Heritage</Link></li>
            <li><Link to="/products" className="hover:text-luxuryGold transition-colors">Our Creations</Link></li>
            <li><Link to="/about" className="hover:text-luxuryGold transition-colors">Sustainability</Link></li>
            <li><Link to="/contact" className="hover:text-luxuryGold transition-colors">Find Boutique</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-luxuryGold font-bold uppercase tracking-[0.2em] text-sm mb-6">Concierge</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-luxuryGold transition-colors">Bespoke Orders</a></li>
            <li><a href="#" className="hover:text-luxuryGold transition-colors">Gifting Services</a></li>
            <li><a href="#" className="hover:text-luxuryGold transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-luxuryGold transition-colors">Contact Expert</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-luxuryGold/10 flex flex-col md:row justify-between items-center text-[10px] tracking-widest uppercase opacity-40">
        <p>&copy; 2024 NA Chocolate. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
