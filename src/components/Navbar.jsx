import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Page එක Scroll කරද්දී active section එක automatic මාරු වෙන Logic එක
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b1329]/95 backdrop-blur-md text-white z-50 border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <a href="#home" className="flex items-center space-x-3 cursor-pointer group">
            <img 
              src={logo} 
              alt="Yakunex Technologies Logo" 
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wide group-hover:text-amber-400 transition-colors leading-tight">
                Yakunex
              </span>
              <span className="text-[9px] text-amber-400 font-semibold tracking-widest uppercase leading-tight">
                Technologies
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-amber-400 font-semibold'
                      : 'text-slate-300 hover:text-amber-400'
                  }`}
                >
                  {link.name}
                  {/* Active Link වෙනකොට යටින් එන Gold Glow Underline එක */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
                  )}
                </a>
              );
            })}

            <a
              href="#contact"
              className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-md shadow-amber-500/20 hover:shadow-amber-500/35"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-amber-400 focus:outline-none p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0b1329] border-b border-amber-500/20 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setIsOpen(false);
                }}
                className={`block text-base font-medium py-1.5 transition-colors ${
                  isActive
                    ? 'text-amber-400 font-bold border-l-2 border-amber-400 pl-2'
                    : 'text-slate-300 hover:text-amber-400'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm mt-4"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;