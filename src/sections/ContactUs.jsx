import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/mbgggglr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-brandNavy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact <span className="text-brandBlue">Us</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Have a project in mind or need expert technical consultation? Reach out to our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            
            {submitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-6 rounded-xl flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 shrink-0" />
                <p className="text-sm font-medium">
                  Thank you for reaching out! Your message has been sent successfully. We will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brandBlue transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brandBlue transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help your business?"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brandBlue transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brandBlue hover:bg-blue-600 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Company Information */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Company Information</h3>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brandBlue/10 text-brandBlue rounded-xl flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Yakunex Technologies (Pvt) Ltd</h4>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                    88/11/1/2, William Gopallawa MW, Kandy
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brandBlue/10 text-brandBlue rounded-xl flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Phone</h4>
                  <a href="tel:+94742836771" className="text-slate-400 hover:text-brandBlue text-sm mt-1 block">
                    (+94 74 283 6771)
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brandBlue/10 text-brandBlue rounded-xl flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Email</h4>
                  <a href="mailto:chamudunihitihamu1204@gmail.com" className="text-slate-400 hover:text-brandBlue text-sm mt-1 block">
                    chamudunihitihamu1204@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl text-center flex flex-col items-center justify-center h-48">
              <MapPin className="w-8 h-8 text-brandBlue mb-2" />
              <p className="text-slate-300 font-semibold text-sm">Global Operations Hub</p>
              <p className="text-slate-500 text-xs mt-1">Serving clients worldwide with 24/7 dedicated support</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactUs;