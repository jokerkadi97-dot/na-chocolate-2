App.tsx

import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
