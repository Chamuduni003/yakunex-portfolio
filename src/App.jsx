import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import AboutUs from './sections/AboutUs';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import ContactUs from './sections/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brandNavy text-white font-sans antialiased">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Portfolio />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;