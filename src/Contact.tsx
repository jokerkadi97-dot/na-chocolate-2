
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white tracking-widest uppercase">Contact Us</h1>
          <p className="text-luxuryGold/60 italic tracking-[0.2em]">Personalized assistance for a sublime experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-luxuryGold font-bold uppercase tracking-[0.3em] text-xs mb-6">Flagship Boutique</h3>
              <p className="text-white/80 font-serif text-xl mb-2">12 Place Vendôme</p>
              <p className="text-white/60 text-sm mb-4">75001 Paris, France</p>
              <p className="text-white/40 text-xs uppercase tracking-widest">Mon - Sat: 10:00 — 19:00</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-luxuryGold font-bold uppercase tracking-[0.3em] text-xs">Direct Liaison</h3>
              <p className="text-white/80 block hover:text-luxuryGold transition-all">concierge@nachocolate.com</p>
              <p className="text-white/80 block hover:text-luxuryGold transition-all">+33 1 23 45 67 89</p>
            </div>

            <div className="p-8 border border-luxuryGold/20 bg-chocolate-dark/50">
              <h4 className="text-luxuryGold font-bold uppercase tracking-widest text-xs mb-4">Bespoke Inquiries</h4>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Planning a grand event or seeking corporate gifting solutions? Our specialists are at your disposal.
              </p>
              <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxuryGold border-b border-luxuryGold pb-1 hover:text-white hover:border-white transition-all">
                Book a Consultation
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-brandBlack p-10 border border-white/5 shadow-2xl">
            <h3 className="text-2xl font-serif text-white mb-8 tracking-widest uppercase">Send a Message</h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className="text-[10px] text-luxuryGold uppercase tracking-widest font-bold">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:border-luxuryGold outline-none transition-all text-white font-light"
                  placeholder="Jean Dupont"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-luxuryGold uppercase tracking-widest font-bold">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/20 py-3 focus:border-luxuryGold outline-none transition-all text-white font-light"
                  placeholder="jean@example.com"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-luxuryGold uppercase tracking-widest font-bold">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border border-white/20 p-4 mt-2 focus:border-luxuryGold outline-none transition-all text-white font-light resize-none"
                  placeholder="How can we assist you?"
                ></textarea>
              </div>
              <button className="w-full py-5 bg-luxuryGold text-brandBlack font-bold uppercase tracking-[0.4em] hover:bg-white transition-all">
                Deliver Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
