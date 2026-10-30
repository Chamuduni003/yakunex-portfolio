import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import AboutUs from './sections/AboutUs';
import ServicesSection from './sections/ServicesSection';
import Portfolio from './sections/Portfolio';
import ContactUs from './sections/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brandNavy text-white font-sans antialiased">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections with IDs */}
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <AboutUs />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="contact">
          <ContactUs />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;