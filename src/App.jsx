import React, { useState } from 'react';
import { Phone, MapPin, Clock, CheckCircle, Menu, X, ArrowRight, Star, Zap, Shield, Wrench, Users } from 'lucide-react';

const businessName = "Jerry's All Phase Electric";
const businessType = "Electrician";
const phone = "(213) 422-9537";
const address = "10008 National Blvd, Los Angeles, CA 90034";
const cityState = "Los Angeles, CA";
const services = [
  "Electrical Repairs & Troubleshooting",
  "Panel Upgrades & Breaker Replacement",
  "Wiring & Rewiring Services",
  "Lighting Installation & Design",
  "Outlet & Switch Installation",
  "Safety Inspections & Code Compliance"
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)' }}><Zap className="w-5 h-5 text-white" style={{margin: '10px'}} /></div>
              <span className="text-xl font-bold">{businessName}</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#why-us" className="text-gray-300 hover:text-white transition-colors">Why Us</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Reviews</a>
              <a href="#contact" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)' }} className="text-white px-5 py-2.5 rounded-lg font-medium" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({behavior: 'smooth'}); }}>Get Free Quote</a>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900" style={{ borderTop: '1px solid #1f2937' }}>
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block py-2 text-gray-300">Services</a>
              <a href="#why-us" className="block py-2 text-gray-300">Why Us</a>
              <a href="#testimonials" className="block py-2 text-gray-300">Reviews</a>
              <a href="#contact" className="block py-2" style={{ color: '#a78bfa' }}>Get Free Quote</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgba(139, 92, 246, 0.2), #0f0f1a, #0f0f1a)' }}>
        <div className="absolute top-20 left-1/4 w-96 h-96" style={{ background: 'rgba(139, 92, 246, 0.2)', borderRadius: '50%', filter: 'blur(100px)' }} />
        <div className="absolute bottom-20 right-1/4 w-96 h-96" style={{ background: 'rgba(236, 72, 153, 0.1)', borderRadius: '50%', filter: 'blur(100px)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-gray-300 mb-8" style={{ border: '1px solid rgba(139, 92, 246, 0.3)', background: 'rgba(139, 92, 246, 0.1)' }}>
              <span className="h-2 w-2 rounded-full bg-green-400" style={{ animation: 'pulse 2s infinite' }} />
              Licensed & Insured Electricians
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{ animation: 'fadeIn 0.5s ease-out' }}>
              Professional{' '}
              <span style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{businessType}</span>
              {' '}Services in<br />
              {cityState}
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto" style={{ animation: 'slideUp 0.5s ease-out' }}>
              {businessName} delivers top-quality electrical services with guaranteed satisfaction.
              Fast, reliable, and affordable solutions for all your electrical needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ animation: 'slideUp 0.5s ease-out' }}>
              <a href="#contact" className="text-white px-8 py-4 rounded-xl text-lg font-semibold" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)', boxShadow: '0 10px 40px rgba(124, 58, 237, 0.3)' }} onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({behavior: 'smooth'}); }}>
                Get Free Estimate <ArrowRight className="w-5 h-5 inline ml-2" />
              </a>
              <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="text-white px-8 py-4 rounded-xl text-lg font-semibold" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}>
                <Phone className="w-5 h-5 inline mr-2" /> {phone}
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '1000+', label: 'Happy Customers' },
              { number: '100%', label: 'Satisfaction' },
              { number: '24/7', label: 'Emergency Service' },
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl p-6 text-center" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}>
                <div className="text-3xl font-bold mb-1" style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20" style={{ background: 'rgba(17, 24, 39, 0.5)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive electrical solutions tailored to your needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="rounded-2xl p-6 transition-all group" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}>
                <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)' }}>
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-400 text-sm">Professional {service.toLowerCase()} services with quality workmanship guaranteed.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose{' '}
                <span style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{businessName}</span>
              </h2>
              <p className="text-gray-400 mb-8">
                We're committed to providing the best electrical services in the industry.
                Here's what sets us apart from the competition.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Shield, title: 'Licensed & Insured', desc: 'Fully certified professionals you can trust' },
                  { icon: Zap, title: 'Fast Response', desc: 'Same-day service available' },
                  { icon: Users, title: 'Expert Team', desc: 'Years of combined experience' },
                  { icon: CheckCircle, title: 'Satisfaction Guarantee', desc: 'We stand behind our work' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}>
                      <item.icon className="w-6 h-6" style={{ color: '#a78bfa' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #7c3aed, #ec4899)', borderRadius: '24px', filter: 'blur(40px)', opacity: 0.3 }} />
              <div className="relative rounded-3xl p-8" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}>
                <div className="text-center">
                  <div className="text-6xl mb-4">⭐⭐⭐⭐⭐</div>
                  <h3 className="text-2xl font-bold mb-2">5.0 Star Rating</h3>
                  <p className="text-gray-400">Based on 1000+ customer reviews</p>
                </div>
                <div className="mt-8 pt-8" style={{ borderTop: '1px solid #1f2937' }}>
                  <p className="text-lg italic text-gray-300">"Excellent work! Very professional, on time, and reasonably priced. Would highly recommend to anyone."</p>
                  <p className="mt-4 text-gray-400">— Satisfied Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20" style={{ background: 'rgba(17, 24, 39, 0.5)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-400">Don't just take our word for it</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Michael T.', role: 'Homeowner', text: 'Outstanding service! The team was professional, efficient, and reasonably priced. I would highly recommend them to anyone.' },
              { name: 'Jennifer K.', role: 'Property Manager', text: 'We use them for all our properties. Always reliable, on time, and do quality work. Best in the business!' },
              { name: 'David R.', role: 'Business Owner', text: 'They handled our commercial needs perfectly. Great communication and excellent results. Will definitely use again.' },
            ].map((testimonial, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)' }}>
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Get Your Free{' '}
                <span style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Estimate</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Ready to get started? Contact us today for a free, no-obligation quote.
                Our team is ready to help you with all your electrical needs.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)' }}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="text-lg font-semibold hover:text-purple-400">{phone}</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)' }}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Service Area</p>
                    <p className="text-lg font-semibold">{cityState}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)' }}>
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Hours</p>
                    <p className="text-lg font-semibold">24/7 Emergency Service</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl p-8" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}>
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'rgba(34, 197, 94, 0.2)' }}>
                    <CheckCircle className="w-8 h-8" style={{ color: '#4ade80' }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-400">We've received your request and will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl" style={{ background: '#111827', border: '1px solid #1f2937' }} />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Phone</label>
                      <input type="tel" required className="w-full px-4 py-3 rounded-xl" style={{ background: '#111827', border: '1px solid #1f2937' }} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-xl" style={{ background: '#111827', border: '1px solid #1f2937' }} />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Service Needed</label>
                    <select className="w-full px-4 py-3 rounded-xl" style={{ background: '#111827', border: '1px solid #1f2937' }}>
                      <option>Select a service...</option>
                      {services.map((s, i) => <option key={i}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Message</label>
                    <textarea rows="4" className="w-full px-4 py-3 rounded-xl" style={{ background: '#111827', border: '1px solid #1f2937' }}></textarea>
                  </div>
                  <button type="submit" className="w-full text-white py-4 rounded-xl font-semibold" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)' }}>
                    Get Free Quote
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ borderTop: '1px solid #1f2937' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)' }}><Zap className="w-5 h-5 text-white" style={{margin: '10px'}} /></div>
              <span className="text-xl font-bold">{businessName}</span>
            </div>
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {businessName}. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;