import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import logo from '../assets/logo.png';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // 🔑 EmailJS Keys (dashboard.emailjs.com එකෙන් ලබාගත් අගයන් මෙතැනට යොදන්න)
    const SERVICE_ID = 'service_6gupioj';
    const TEMPLATE_ID = 'template_e4shkmb';
    const PUBLIC_KEY = 'Yb-Y7Ny6vwOYdWcyV';


    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: 'success',
            message: 'Your message has been sent successfully! We will contact you soon.'
          });
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.error('EmailJS Error:', error);
          setStatus({
            type: 'error',
            message: 'Failed to send the message. Please try again later.'
          });
        }
      );
  };
      
      
  return (
    <section id="contact" className="py-20 bg-slate-900/50 border-t border-b border-amber-500/20 relative overflow-hidden text-white min-h-screen">
      
      {/* Background Watermark Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <img src={logo} alt="Yakunex Watermark" className="w-[600px] h-auto object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight">
            Contact Us
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Have a project in mind or need expert technical consultation? Reach out to our team today.
          </p>
        </div>

        {/* 2-Column Grid Matching Image UI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Side: Send Us a Message Card */}
          <div className="bg-[#0c1427]/80 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-6">
              Send Us a Message
            </h3>

            {/* Alert Banner */}
            {status.message && (
              <div className={`mb-6 p-4 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                status.type === 'success' 
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' 
                  : 'bg-rose-500/10 border border-rose-500/30 text-rose-400'
              }`}>
                {status.type === 'success' ? <CheckCircle className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                <span>{status.message}</span>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#080d1a] border border-slate-800/80 rounded-xl px-4 py-3.5 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#080d1a] border border-slate-800/80 rounded-xl px-4 py-3.5 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  MESSAGE
                </label>
                <textarea
                  rows="4"
                  placeholder="How can we help your business?"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#080d1a] border border-slate-800/80 rounded-xl px-4 py-3.5 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-400/60 transition-all text-sm resize-none"
                ></textarea>
              </div>

              {/* Glowing Amber Action Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Side: Company Information Card */}
          <div className="bg-[#0c1427]/80 border border-slate-800 rounded-2xl p-8 shadow-xl flex flex-col justify-between min-h-full">
            <div>
              <h3 className="text-xl font-bold text-white mb-8">
                Company Information
              </h3>

              <div className="space-y-6 mb-8">
                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Yakunex Technologies (Pvt) Ltd</h4>
                    <p className="text-slate-400 text-xs mt-1">
                      86/11/1/2, William Gopallawa MW, Kandy
                    </p>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Phone</h4>
                    <p className="text-slate-400 text-xs mt-1">
                      (+94) 74 369 2999
                    </p>
                  </div>
                </div>

                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Email</h4>
                    <p className="text-slate-400 text-xs mt-1">
                      yakunextechnologies@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Map Area */}
              <div className="w-full h-52 rounded-xl overflow-hidden border border-slate-800 shadow-lg relative">
                <iframe
                  title="Yakunex Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.553823485072!2d80.6272!3d7.2906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36626649833bf%3A0x86131c2d338f3f6e!2sWilliam%20Gopallawa%20Mawatha%2C%20Kandy!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Bottom Footer Accent */}
            <div className="pt-6 border-t border-slate-800/80 mt-6 text-center text-xs text-slate-500">
               Kandy, Sri Lanka
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}