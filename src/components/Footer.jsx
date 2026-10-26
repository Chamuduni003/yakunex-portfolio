import React from 'react';
import { Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="bg-brandBlue p-1.5 rounded-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-wide">
                Yakunex<span className="text-brandBlue">.tech</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              Innovating digital futures through software engineering, cloud architecture, and custom application development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-brandBlue transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brandBlue transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brandBlue transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-brandBlue transition-colors">Portfolio</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-xs">
              <li>Software Development</li>
              <li>Web Application Systems</li>
              <li>Mobile App Engineering</li>
              <li>Cloud & AI Integration</li>
             
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Get in Touch</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Yakunex Technologies(Pvt)Ltd<br />
              88/11/1/2, Williyam Gopallawa MW, Kandy<br />
              yakunextechnologies@gmail.com
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          <p>© 2026 Yakunex Technologies (Pvt) Ltd. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;