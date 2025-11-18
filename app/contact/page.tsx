"use client";

import { useState, useEffect } from "react";

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    }, 2000);
  };

  const contactInfo = [
    {
      title: "Phone",
      value: "+971 4 XXX XXXX",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      link: "tel:+9714XXXXXXX"
    },
    {
      title: "Email",
      value: "info@restartfitness.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: "mailto:info@restartfitness.com"
    },
    {
      title: "Address",
      value: "Dubai, UAE",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      link: "#"
    }
  ];

  const services = [
    "Personal Training",
    "Group Fitness Classes",
    "Nutrition Coaching",
    "Online Training",
    "Corporate Wellness",
    "Youth Programs",
    "Franchise Opportunity",
    "Career Opportunities",
    "General Inquiry"
  ];

  const locations = [
    {
      name: "Al Mamzar Branch",
      address: "Al Mamzar, Dubai",
      phone: "+971 4 XXX XXXX",
      hours: "Mon-Fri: 6:00 AM - 10:00 PM\nSat-Sun: 7:00 AM - 9:00 PM"
    },
    {
      name: "Al Moukhool Branch",
      address: "Al Moukhool, Dubai",
      phone: "+971 4 XXX XXXX",
      hours: "Mon-Fri: 6:00 AM - 10:00 PM\nSat-Sun: 7:00 AM - 9:00 PM"
    },
    {
      name: "Al Rafa Branch",
      address: "Al Rafa, Dubai",
      phone: "+971 4 XXX XXXX",
      hours: "Mon-Fri: 6:00 AM - 10:00 PM\nSat-Sun: 7:00 AM - 9:00 PM"
    },
    {
      name: "Al Rolla Branch",
      address: "Al Rolla, Dubai",
      phone: "+971 4 XXX XXXX",
      hours: "Mon-Fri: 6:00 AM - 10:00 PM\nSat-Sun: 7:00 AM - 9:00 PM"
    }
  ];

  const faqs = [
    {
      question: "Do I need to be fit to join?",
      answer: "Not at all! RestartFitness is designed for people of all fitness levels. Our trainers will help you start at your current level and gradually build up your fitness."
    },
    {
      question: "What should I bring to my first session?",
      answer: "Just bring comfortable workout clothes, a water bottle, and a positive attitude! We provide all the equipment you'll need."
    },
    {
      question: "Can I try before I commit?",
      answer: "Yes! We offer free trial sessions so you can experience our programs and meet our trainers before making any commitment."
    },
    {
      question: "Do you offer nutrition guidance?",
      answer: "Absolutely! We have certified nutrition coaches who can help you develop healthy eating habits that support your fitness goals."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-darker)] via-[var(--color-dark)] to-[var(--color-darker)] relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div 
        className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)]/20 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-secondary)]/20 rounded-full blur-3xl animate-pulse delay-1000"
        style={{
          transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[var(--color-primary)]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-secondary)]/30 to-[var(--color-primary)]/20 animate-pulse"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 30px 30px, var(--color-primary) 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
              animation: 'gridMove 20s linear infinite'
            }}
          ></div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-[var(--color-primary)] rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-[var(--color-secondary)] rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[var(--color-primary)] rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-[var(--color-secondary)] rounded-full animate-pulse delay-700"></div>

        {/* Corner Accents with Animation */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[var(--color-primary)]/30 to-transparent rounded-br-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[var(--color-secondary)]/30 to-transparent rounded-tl-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-0 w-32 h-32 bg-gradient-to-l from-[var(--color-primary)]/20 to-transparent rounded-l-full"></div>
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-gradient-to-t from-[var(--color-secondary)]/20 to-transparent rounded-t-full"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-block mb-8 animate-fade-in">
            <span className="px-6 py-3 bg-[var(--color-primary)]/20 backdrop-blur-md border-2 border-[var(--color-primary)]/40 rounded-full text-[var(--color-primary)] text-sm font-bold shadow-lg shadow-[var(--color-primary)]/20 hover:scale-110 transition-transform duration-300 inline-block">
              ✨ Get In Touch
            </span>
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] bg-[length:200%_auto] animate-gradient">
              Us
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Ready to start your fitness journey? Have questions about our services? We're here to help! Get in touch with us today.
          </p>
          
          {/* Decorative Line */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[var(--color-primary)]"></div>
            <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[var(--color-primary)]"></div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-[var(--color-card)] to-[var(--color-primary)]/5"></div>
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 30px 30px, var(--color-primary) 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative bg-white/5 backdrop-blur-md rounded-3xl border-2 border-white/10 p-8 lg:p-10 hover:bg-white/10 hover:border-[var(--color-primary)]/50 transition-all duration-500 shadow-2xl shadow-black/20 group">
              {/* Glowing Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--color-primary)]/0 via-[var(--color-primary)]/10 to-[var(--color-primary)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--color-primary)]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Send us a Message</h2>
                    <p className="text-gray-300 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>
              
              {isSubmitted ? (
                <div className="relative z-10 text-center py-12">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-green-500/40 animate-bounce">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    </div>
                    <div className="absolute inset-0 w-24 h-24 bg-green-500/30 rounded-full animate-ping mx-auto"></div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    Message Sent Successfully! 🎉
                  </h3>
                  <p className="text-gray-300 mb-8 text-lg max-w-md mx-auto">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-8 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[var(--color-primary)]/30 hover:shadow-2xl hover:shadow-[var(--color-primary)]/40"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="flex text-sm font-bold text-white mb-3 items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></span>
                        Full Name *
                      </label>
                      <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                          className="w-full px-5 py-4 bg-white/5 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] focus:bg-white/10 transition-all duration-300 hover:border-white/30"
                        placeholder="Your full name"
                      />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--color-primary)]/0 to-[var(--color-primary)]/0 group-focus-within:from-[var(--color-primary)]/10 group-focus-within:to-transparent pointer-events-none transition-all duration-300"></div>
                      </div>
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="flex text-sm font-bold text-white mb-3 items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></span>
                        Email Address *
                      </label>
                      <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                          className="w-full px-5 py-4 bg-white/5 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] focus:bg-white/10 transition-all duration-300 hover:border-white/30"
                        placeholder="your.email@example.com"
                      />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--color-primary)]/0 to-[var(--color-primary)]/0 group-focus-within:from-[var(--color-primary)]/10 group-focus-within:to-transparent pointer-events-none transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="phone" className="flex text-sm font-bold text-white mb-3 items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full"></span>
                        Phone Number
                      </label>
                      <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                          className="w-full px-5 py-4 bg-white/5 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] focus:bg-white/10 transition-all duration-300 hover:border-white/30"
                        placeholder="+971 XX XXX XXXX"
                      />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--color-primary)]/0 to-[var(--color-primary)]/0 group-focus-within:from-[var(--color-primary)]/10 group-focus-within:to-transparent pointer-events-none transition-all duration-300"></div>
                      </div>
                    </div>
                    <div className="group">
                      <label htmlFor="service" className="flex text-sm font-bold text-white mb-3 items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full"></span>
                        Service Interested In
                      </label>
                      <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                          className="w-full px-5 py-4 bg-white/5 border-2 border-white/20 rounded-xl text-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] focus:bg-white/10 transition-all duration-300 hover:border-white/30 appearance-none cursor-pointer"
                      >
                          <option value="" className="bg-[var(--color-dark)]">Select a service</option>
                        {services.map((service, index) => (
                            <option key={index} value={service} className="bg-[var(--color-dark)]">{service}</option>
                        ))}
                      </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="message" className="flex text-sm font-bold text-white mb-3 items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></span>
                      Message *
                    </label>
                    <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                        className="w-full px-5 py-4 bg-white/5 border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] focus:bg-white/10 transition-all duration-300 resize-none hover:border-white/30"
                      placeholder="Tell us about your fitness goals or any questions you have..."
                    />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--color-primary)]/0 to-[var(--color-primary)]/0 group-focus-within:from-[var(--color-primary)]/10 group-focus-within:to-transparent pointer-events-none transition-all duration-300"></div>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full px-6 py-5 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] bg-[length:200%_auto] text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-2xl shadow-[var(--color-primary)]/40 hover:shadow-[var(--color-primary)]/60 overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="relative bg-white/5 backdrop-blur-md rounded-3xl border-2 border-white/10 p-8 hover:bg-white/10 hover:border-[var(--color-primary)]/50 transition-all duration-500 shadow-2xl shadow-black/20 group overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/0 via-[var(--color-primary)]/5 to-[var(--color-secondary)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
                  </div>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.link}
                        className="group/item flex items-center p-5 rounded-2xl bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-[var(--color-primary)]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl flex items-center justify-center text-white mr-5 group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform duration-300 shadow-xl">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-1.5 group-hover/item:text-[var(--color-primary)] transition-colors text-lg">{info.title}</h3>
                          <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors">{info.value}</p>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover/item:text-[var(--color-primary)] group-hover/item:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="relative bg-white/5 backdrop-blur-md rounded-3xl border-2 border-white/10 p-8 hover:bg-white/10 hover:border-[var(--color-primary)]/50 transition-all duration-500 shadow-2xl shadow-black/20 group overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-secondary)]/0 via-[var(--color-secondary)]/5 to-[var(--color-primary)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl flex items-center justify-center text-white shadow-xl">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Business Hours</h2>
                      <p className="text-sm text-gray-400">We're here for you</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[var(--color-primary)]/30 transition-all duration-300">
                      <span className="text-gray-300 font-medium">Monday - Friday</span>
                      <span className="font-bold text-white text-lg">6:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[var(--color-primary)]/30 transition-all duration-300">
                      <span className="text-gray-300 font-medium">Saturday - Sunday</span>
                      <span className="font-bold text-white text-lg">7:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t-2 border-white/10">
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      All locations follow the same operating hours. We're closed on public holidays.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-darker)]"></div>
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 30px 30px, var(--color-primary) 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[var(--color-primary)]/20 to-transparent rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[var(--color-primary)]/20 to-transparent rounded-tl-full"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 relative inline-block">
            Visit Our Locations
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></span>
          </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6">
              Find us at one of our convenient locations across Dubai
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-[var(--color-primary)]/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">{location.name}</h3>
                <p className="text-gray-300 mb-3">{location.address}</p>
                <p className="text-[var(--color-primary)] font-semibold mb-4">{location.phone}</p>
                <div className="text-sm text-gray-400 mb-6">
                  <pre className="whitespace-pre-line font-sans">{location.hours}</pre>
                </div>
                <a
                  href={`tel:${location.phone}`}
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Call Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-[var(--color-card)] to-[var(--color-primary)]/5"></div>
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 30px 30px, var(--color-primary) 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 relative inline-block">
            Frequently Asked Questions
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></span>
          </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6">
              Find answers to common questions about our services and programs
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 hover:border-[var(--color-primary)]/50 transition-all duration-500"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-start">
                  <span className="w-8 h-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-lg flex items-center justify-center text-white mr-3 flex-shrink-0 text-sm font-bold">
                    {index + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed ml-11">{faq.answer}</p>
            </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
