
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pb-40">
      {/* Banner */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1549007953-2f2dc0b24019?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover opacity-40" 
          alt="About Banner" 
        />
        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white tracking-widest uppercase">Notre Histoire</h1>
          <p className="text-luxuryGold tracking-[0.4em] uppercase text-xs">Since 1924</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 mt-24 space-y-24">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-serif text-luxuryGold italic tracking-widest">A century of excellence</h2>
          <p className="text-white/70 leading-relaxed text-lg font-light tracking-wide">
            NA Chocolate began in a small boutique on Rue de Rivoli. Founded by Nicolas Arnault, the brand quickly became synonymous with the "haute couture" of sweets. Every recipe has been passed down through three generations of master chocolatiers, refined yet never losing its original soul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <img 
            src="https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=800" 
            className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-1000 luxury-border p-4"
            alt="Process"
          />
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-white tracking-widest uppercase">The Rare Cocoa</h3>
            <p className="text-white/50 text-sm leading-loose">
              We travel to the ends of the earth to find the "Criollo" beans, representing less than 3% of the world's production. Our commitment is not just to taste, but to the hands that harvest these precious gems.
            </p>
            <ul className="space-y-4 text-luxuryGold/80 text-xs font-bold uppercase tracking-widest">
              <li>• Direct Fair Trade</li>
              <li>• Zero Additives</li>
              <li>• Small Batch Production</li>
            </ul>
          </div>
        </div>

        <div className="text-center space-y-12">
          <div className="w-px h-24 bg-luxuryGold/30 mx-auto"></div>
          <h2 className="text-4xl font-serif text-white tracking-widest uppercase">Our Mission</h2>
          <p className="text-white/60 italic max-w-2xl mx-auto text-xl leading-relaxed">
            "To elevate the simple act of eating a chocolate into a profound moment of reflection, beauty, and luxury."
          </p>
          <div className="flex justify-center italic font-serif text-luxuryGold">
            — Nicolas Arnault II
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
