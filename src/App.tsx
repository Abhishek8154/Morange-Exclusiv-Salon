import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scissors, 
  Sparkles, 
  Droplets, 
  Palette, 
  Crown, 
  Star, 
  Flower2, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen font-sans text-charcoal bg-beige-light">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#home" className="font-serif text-2xl md:text-3xl font-bold text-rose-gold-dark">
              Morange <span className="text-charcoal font-light text-xl">Exclusiv</span>
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium hover:text-rose-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                className="bg-rose-gold hover:bg-rose-gold-dark text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-charcoal"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-3 text-base font-medium text-charcoal hover:bg-soft-pink hover:text-rose-gold rounded-md"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block mt-4 text-center bg-rose-gold text-white px-6 py-3 rounded-full text-base font-medium"
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80" 
            alt="Elegant beauty salon" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6"
          >
            Where Beauty Meets <span className="text-rose-gold-light italic">Elegance</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-10 font-light tracking-wide"
          >
            Professional Ladies Hair & Beauty Services in Andheri East, Mumbai
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#contact" className="bg-rose-gold hover:bg-rose-gold-dark text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Book Appointment
            </a>
            <a href="tel:+919870635261" className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all">
              Call Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="relative"
            >
              <div className="absolute -inset-4 bg-soft-pink rounded-2xl transform rotate-3 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80" 
                alt="Woman getting beauty treatment" 
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h4 className="text-rose-gold font-semibold tracking-widest uppercase text-sm mb-3">Welcome to Morange</h4>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Your Sanctuary of <span className="italic text-rose-gold-dark">Beauty</span></h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Morange Exclusiv Salon is a trusted ladies beauty salon offering high-quality hair styling, skincare, and beauty treatments in a hygienic and relaxing environment. Located in the heart of Andheri East, Mumbai, we are dedicated to helping you look and feel your absolute best.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team of experienced professionals uses only premium products to deliver personalized services tailored to your unique style and needs. Whether you're preparing for a special occasion or just need a day of pampering, Morange Exclusiv is your ultimate destination for elegance and care.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-soft-pink flex items-center justify-center text-rose-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call for appointments</p>
                  <p className="font-serif text-xl font-semibold">+91 9870635261</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-soft-pink/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-rose-gold font-semibold tracking-widest uppercase text-sm mb-3">Our Services</h4>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Indulge in <span className="italic text-rose-gold-dark">Luxury</span></h2>
            <p className="text-gray-600">Discover our comprehensive range of premium beauty and hair services designed to enhance your natural radiance.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: <Scissors size={28} />, title: "Haircut & Styling", desc: "Expert cuts and styling tailored to your face shape and lifestyle." },
              { icon: <Droplets size={28} />, title: "Hair Spa & Treatments", desc: "Nourishing treatments to restore health and shine to your hair." },
              { icon: <Palette size={28} />, title: "Coloring & Highlights", desc: "Premium color services from root touch-ups to balayage." },
              { icon: <Sparkles size={28} />, title: "Facial & Skin", desc: "Rejuvenating facials customized for your specific skin type." },
              { icon: <Crown size={28} />, title: "Bridal Makeup", desc: "Flawless, long-lasting makeup for your most special day." },
              { icon: <Star size={28} />, title: "Party Makeup", desc: "Glamorous looks for evening events and special occasions." },
              { icon: <Flower2 size={28} />, title: "Manicure & Pedicure", desc: "Relaxing nail care services for beautiful hands and feet." },
              { icon: <Scissors size={28} className="rotate-90" />, title: "Threading & Waxing", desc: "Gentle and precise hair removal services for smooth skin." },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-50 group"
              >
                <div className="w-14 h-14 rounded-full bg-soft-pink flex items-center justify-center text-rose-gold mb-6 group-hover:bg-rose-gold group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-rose-gold fill-current">
            <polygon points="100,0 0,100 100,100" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h4 className="text-rose-gold-light font-semibold tracking-widest uppercase text-sm mb-3">The Morange Difference</h4>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Why Choose <span className="italic text-rose-gold-light">Us</span></h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Experienced Beauty Professionals",
                  "Premium Beauty Products",
                  "Hygienic & Comfortable Environment",
                  "Modern Beauty Equipment",
                  "Affordable Pricing",
                  "Friendly Staff"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-rose-gold-light shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="grid grid-cols-2 gap-4"
            >
              <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80" alt="Hair styling" className="rounded-xl h-64 w-full object-cover mt-8" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80" alt="Skincare" className="rounded-xl h-64 w-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-rose-gold font-semibold tracking-widest uppercase text-sm mb-3">Portfolio</h4>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Our <span className="italic text-rose-gold-dark">Gallery</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80"
            ].map((src, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="overflow-hidden rounded-xl aspect-square group"
              >
                <img 
                  src={src} 
                  alt={`Gallery image ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-rose-gold font-semibold tracking-widest uppercase text-sm mb-3">Testimonials</h4>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">What Our <span className="italic text-rose-gold-dark">Clients Say</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya Sharma", text: "Absolutely loved my bridal makeup! The team is so professional and made me feel like a princess on my big day. Highly recommend Morange Exclusiv!" },
              { name: "Neha Desai", text: "Best hair spa in Andheri East. The staff is very polite and the hygiene standards are top-notch. Will definitely be visiting again." },
              { name: "Anjali Verma", text: "I've been coming here for my regular threading and facials for months. The quality of products they use is excellent and the prices are very reasonable." }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl shadow-sm relative"
              >
                <div className="text-rose-gold-light mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} className="inline fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                <h4 className="font-serif font-semibold text-lg">{review.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h4 className="text-rose-gold font-semibold tracking-widest uppercase text-sm mb-3">Get in Touch</h4>
              <h2 className="text-4xl font-serif mb-8">Book an <span className="italic text-rose-gold-dark">Appointment</span></h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-gold focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-gold focus:border-transparent outline-none transition-all" placeholder="Your Phone" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-gold focus:border-transparent outline-none transition-all bg-white">
                      <option>Select a service</option>
                      <option>Haircut & Styling</option>
                      <option>Hair Spa & Treatment</option>
                      <option>Facial & Skin</option>
                      <option>Bridal Makeup</option>
                      <option>Manicure & Pedicure</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date/Time</label>
                    <input type="datetime-local" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-gold focus:border-transparent outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-gold focus:border-transparent outline-none transition-all" placeholder="Any special requests?"></textarea>
                </div>

                <button type="submit" className="w-full bg-charcoal hover:bg-black text-white px-8 py-4 rounded-lg text-sm font-semibold tracking-wider uppercase transition-colors">
                  Confirm Booking
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col"
            >
              <div className="bg-soft-pink rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-rose-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-charcoal mb-1">Address</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Shop No. 1, Jay Ganesh Society,<br />
                        Shriniwas Bagarka Rd, Bamanpuri,<br />
                        Kanti Nagar, J B Nagar, Andheri East,<br />
                        Mumbai, Maharashtra 400059, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="text-rose-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-charcoal mb-1">Phone</h4>
                      <a href="tel:+919870635261" className="text-gray-600 text-sm hover:text-rose-gold transition-colors">+91 9870635261</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="text-rose-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-charcoal mb-1">Hours</h4>
                      <p className="text-gray-600 text-sm">Mon - Sun: 10:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-rose-gold-light/30">
                  <a 
                    href="https://wa.me/919870635261" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex-grow rounded-2xl overflow-hidden min-h-[300px] shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9702742966145!2d72.8687895!3d19.1089601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c900350d2771%3A0x67540a8315183427!2sMorange%20Exclusiv%20Salon!5e0!3m2!1sen!2sin!4v1709640000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Morange Exclusiv Salon Location"
                ></iframe>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bfc17484d20?auto=format&fit=crop&q=80" 
            alt="Spa products" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-charcoal/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Ready to Transform Your Look?</h2>
          <p className="text-gray-300 mb-10 text-lg">Book your beauty appointment today and let our experts pamper you.</p>
          <a href="#contact" className="inline-block bg-rose-gold hover:bg-rose-gold-dark text-white px-10 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Book Your Appointment
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            <div className="lg:col-span-1">
              <a href="#home" className="font-serif text-2xl font-bold text-rose-gold-light block mb-6">
                Morange <span className="text-white font-light text-xl">Exclusiv</span>
              </a>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Where beauty meets elegance. Your premium destination for ladies hair and beauty services in Andheri East, Mumbai.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-gold transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-gold transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-gold transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-rose-gold-light transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-400 hover:text-rose-gold-light transition-colors text-sm">Haircut & Styling</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-rose-gold-light transition-colors text-sm">Facial & Skin Treatments</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-rose-gold-light transition-colors text-sm">Bridal & Party Makeup</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-rose-gold-light transition-colors text-sm">Manicure & Pedicure</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-rose-gold-light transition-colors text-sm">Hair Spa & Treatments</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-rose-gold-light shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm">Shop 1, Jay Ganesh Society, Shriniwas Bagarka Rd, Kanti Nagar, J B Nagar, Andheri East, Mumbai 400059</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-rose-gold-light shrink-0" />
                  <a href="tel:+919870635261" className="text-gray-400 hover:text-rose-gold-light transition-colors text-sm">+91 9870635261</a>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Morange Exclusiv Salon. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
