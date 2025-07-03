// pages/index.js - Stroom AI Professional Landing Page (Real Content & Unique Design)

import React, { useState, useEffect } from "react";
// import Link from "next/link";
import {
  ChevronDown,
  Mail,
  Phone,
  Calendar,
  ExternalLink,
  Brain,
  Search,
  Users,
  Star,
  ArrowRight,
  Heart,
  Menu,
  X,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Award,
  Target,
  Film,
} from "lucide-react";
import Image from "next/image";

const StroomAI = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    projectInterest: "",
    message: "",
  });

  // Real projects from Parker Case's original site
  const solutions = [
    {
      title: "Mode AI Stylist",
      status: "Patent Pending",
      description:
        "Revolutionary cross-site personalization system deployed as browser extension and injectable widget. Features computer vision wardrobe analysis, celebrity styling database integration, real-time trend ingestion, and modular virtual try-on capabilities. Commission-based retailer model enables seamless partnerships while maintaining user privacy through encrypted profile synchronization across domains.",
      tech: [
        "TensorFlow.js",
        "Computer Vision",
        "WebSockets",
        "Browser Extensions",
        "Privacy Architecture",
      ],
      icon: <Star className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      metrics: "Patent Pending",
    },
    {
      title: "Hygeia AI",
      status: "5 Patents Pending",
      description:
        "Breakthrough medical nutrition therapy system combining multi-criteria optimization (health + budget + convenience) with conversational meal planning and cross-retailer integration. Features adaptive learning algorithms, health condition-specific recipe modification, drug-food interaction monitoring, family history-based disease prevention, and intelligent ingredient substitution.",
      tech: [
        "Medical AI",
        "Multi-Criteria Optimization",
        "Natural Language Processing",
        "Cross-Retailer APIs",
        "Clinical Integration",
      ],
      icon: <Heart className="w-6 h-6" />,
      gradient: "from-green-500 to-blue-600",
      metrics: "5 Patents Pending",
    },
    {
      title: "MERIDIAN",
      status: "Production Ready",
      description:
        "Intelligent chatbot dashboard that leverages natural language processing to provide contextual knowledge management and automated responses across multiple domains including storage providers, CRMs, and more. Features multi-domain expertise with very high query resolution rate and integrates with many enterprise systems. Reduces deep research time from hours to 45 minutes maximum.",
      tech: ["NLP", "OpenAI GPT", "Node.js", "MongoDB", "React"],
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      metrics: "45 min max research time",
    },
    {
      title: "TraffickJam",
      status: "Production Ready",
      description:
        "Advanced monitoring system that tracks illegal trade of endangered species products, stolen cultural artifacts, and protected materials across eBay, Craigslist, MercadoLibre, OLX, and other online marketplaces. Utilizes machine learning to identify suspicious listings and generates automated reports for law enforcement.",
      tech: [
        "Python",
        "Selenium",
        "NLP",
        "Image Recognition",
        "Legal Compliance APIs",
      ],
      icon: <Search className="w-6 h-6" />,
      gradient: "from-emerald-700 to-blue-300",
      metrics: "Production Ready",
    },
    {
      title: "MentalSpace (ADM Platform)",
      status: "Near Production",
      description:
        "Safe, supportive social media platform specifically designed for men's mental health, featuring an AI mental health bot for discussion, assistance in finding support groups, and overall mental wellness tips and techniques. Built complete infrastructure with increasing beta users and 24/7 AI crisis detection and intervention capabilities.",
      tech: ["Next.js", "Supabase", "Railway", "OpenAI API", "WebRTC"],
      icon: <Users className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      metrics: "Near Production",
    },
  ];

  const industries = [
    {
      name: "Healthcare",
      description:
        "Medical nutrition therapy, patient care optimization, and clinical decision support systems with drug-food interaction monitoring.",
      icon: <Heart className="w-8 h-8" />,
      color: "text-red-500",
    },
    {
      name: "E-commerce & Retail",
      description:
        "Cross-site personalization, wardrobe analysis, virtual try-ons, and commission-based retailer partnerships.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-blue-500",
    },
    {
      name: "Conservation & Legal",
      description:
        "Wildlife crime monitoring, illegal trade detection, automated law enforcement reporting, and anti-poaching support.",
      icon: <Shield className="w-8 h-8" />,
      color: "text-green-500",
    },
    {
      name: "Knowledge Management",
      description:
        "Intelligent dashboards, contextual knowledge management, multi-domain query resolution, and enterprise system integration.",
      icon: <Zap className="w-8 h-8" />,
      color: "text-orange-500",
    },
  ];

  // Real achievements and industry statistics
  const stats = [
    {
      value: "6+",
      label: "Patents Pending",
      description: "Breakthrough AI innovations",
    },
    {
      value: "100+",
      label: "Platform Users",
      description: "Active on production systems",
    },
    {
      value: "5",
      label: "Production AI Systems",
      description: "Live and serving users",
    },
    {
      value: "3+",
      label: "Film Festival Awards",
      description: "Founder has creative & technical recognition",
    },
  ];

  const handleFormSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.company ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          projectInterest: formData.projectInterest,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(
          "Thank you for your inquiry! Our team will contact you within 24 hours."
        );
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          projectInterest: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert(
        "There was an error sending your message. Please try again or contact us directly."
      );
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "solutions", "industries", "about", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b-2 border-blue-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 mr-3 rounded-lg overflow-hidden border-2 border-orange-400">
                <Image
                  src="/Artwork.JPG"
                  alt="Stroom AI Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-orange-600 bg-clip-text text-transparent">
                Stroom AI
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "Solutions", "Industries", "About", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`transition-all duration-200 hover:text-blue-700 font-medium ${
                      activeSection === item.toLowerCase()
                        ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                        : "text-gray-700 hover:border-b-2 hover:border-blue-300 pb-1"
                    }`}
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg bg-blue-50 border border-orange-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-blue-700" />
              ) : (
                <Menu className="w-5 h-5 text-blue-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-blue-100 bg-white/95 backdrop-blur-md">
              {["Home", "Solutions", "Industries", "About", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-3 px-4 text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors rounded-lg mx-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center pt-20 pb-16">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-orange-400 shadow-xl">
                <Image
                  src="/Artwork.JPG"
                  alt="Stroom AI Logo"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-orange-600 bg-clip-text text-transparent leading-tight">
              Stroom AI
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-gray-800 leading-snug">
              Patent-Pending AI Innovations
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-5xl mx-auto">
              Transform your business with 6+ breakthrough AI innovations from a
              proven inventor. From medical nutrition therapy to wildlife
              conservation, we build intelligent systems that deliver real-world
              impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-2xl flex items-center gap-3"
              >
                <Calendar className="w-6 h-6" />
                Schedule Consultation
              </a>
              <a
                href="#solutions"
                className="border-2 border-blue-600 text-blue-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center gap-3"
              >
                View Innovations
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>

            {/* Real Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-lg"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-800 font-bold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section - Real Projects */}
      <section
        id="solutions"
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Breakthrough AI Innovations
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our patent-pending AI solutions span healthcare, e-commerce,
              conservation, and knowledge management. Each innovation addresses
              complex real-world challenges with measurable impact and
              production-ready implementation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-white/50 hover:border-blue-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-r ${solution.gradient} shadow-lg`}
                  >
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {solution.title}
                    </h3>
                    <span className="text-lg text-blue-700 font-bold">
                      {solution.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {solution.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {solution.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium border border-orange-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="flex items-center gap-2 text-blue-700 hover:text-purple-700 transition-colors font-bold text-lg"
                >
                  <ExternalLink className="w-5 h-5" />
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our AI solutions address critical challenges across healthcare,
              retail, conservation, and enterprise knowledge management, with
              proven production systems and patent-pending innovations driving
              real change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl border-2 border-white/50 hover:border-blue-200 transition-all"
              >
                <div className={`${industry.color} mb-6 flex justify-center`}>
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {industry.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Real Achievements */}
      <section
        id="about"
        className="py-20 px-4 bg-gradient-to-r from-purple-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">
                Why Choose Stroom AI?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We&apos;re not just another AI company. We&apos;re proven
                inventors with 6+ patent-pending innovations, production systems
                serving real users, and a track record of transforming complex
                challenges into breakthrough solutions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-100 border-2 border-orange-400">
                    <Award className="w-7 h-7 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Patent-Pending Portfolio
                    </h3>
                    <p className="text-gray-600">
                      6+ breakthrough AI innovations currently under patent
                      review, with production systems serving real users across
                      multiple industries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-orange-100 border-2 border-orange-200">
                    <Target className="w-7 h-7 text-orange-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Proven Performance
                    </h3>
                    <p className="text-gray-600">
                      MERIDIAN reduces research time from hours to 45 minutes
                      maximum. Our systems deliver measurable efficiency gains.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-green-100 border-2 border-green-200">
                    <Film className="w-7 h-7 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Creative & Technical Excellence
                    </h3>
                    <p className="text-gray-600">
                      3+ film festival awards demonstrate our ability to combine
                      technical innovation with creative storytelling and user
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-white/50">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Real Client Testimonials
              </h3>

              {/* Real testimonials from original site */}
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50/50 rounded-r-xl">
                  <p className="text-gray-600 italic mb-3 text-lg">
                    &quot;MERIDIAN revolutionized our data management. The
                    patent-pending technology is truly innovative and brought
                    all insight to our fingertips.&quot;
                  </p>
                  <p className="text-sm font-bold text-blue-700">
                    — Rejuvatek Medical Marketing Director
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50/50 rounded-r-xl">
                  <p className="text-gray-600 italic mb-3 text-lg">
                    &quot;The Mode AI Stylist tool touches on all things that
                    you might expect from an in-person shopping experience and
                    more! This could be a game changer.&quot;
                  </p>
                  <p className="text-sm font-bold text-orange-700">
                    — Former Nordstrom Employee of 20+ years
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50/50 rounded-r-xl">
                  <p className="text-gray-600 italic mb-3 text-lg">
                    &quot;Near completion with our entire mental health social
                    platform. The AI implementation could really better a lot of
                    lives.&quot;
                  </p>
                  <p className="text-sm font-bold text-green-700">
                    — ADM Social Platform Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Let&apos;s discuss how our patent-pending AI innovations can
              deliver measurable results for your organization.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-white/50">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Get Started
              </h3>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/70 border-2 border-blue-200 rounded-xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none text-lg"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Business Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/70 border-2 border-blue-200 rounded-xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none text-lg"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/70 border-2 border-blue-200 rounded-xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none text-lg"
                  />
                </div>

                <div className="relative">
                  <select
                    name="projectInterest"
                    value={formData.projectInterest}
                    onChange={handleInputChange}
                    className="w-full bg-white/70 border-2 border-blue-200 rounded-xl px-6 py-4 text-gray-900 focus:border-blue-600 focus:outline-none appearance-none text-lg"
                  >
                    <option value="">Select Innovation Interest</option>
                    <option value="ai-stylist">Mode AI Stylist</option>
                    <option value="grocery-assistant">Hygeia AI</option>
                    <option value="meridian">MERIDIAN Dashboard</option>
                    <option value="conservatron">TraffickJam</option>
                    <option value="mental-space">MentalSpace Platform</option>
                    <option value="custom-solution">Custom AI Solution</option>
                    <option value="consultation">Strategic Consultation</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full bg-white/70 border-2 border-blue-200 rounded-xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:outline-none resize-none text-lg"
                  ></textarea>
                </div>

                <button
                  onClick={handleFormSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-white/50">
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <span className="text-gray-700 text-lg">
                      parker@parkercase.co
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <span className="text-gray-700 text-lg">
                      +1 (929) 707-9902
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                    <span className="text-gray-700 text-lg">
                      New York City, NY
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-white/50">
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Ready to discuss your AI project? Book a consultation to
                  explore how our patent-pending innovations can transform your
                  business.
                </p>
                <a
                  href="https://calendly.com/parkere-case/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
                >
                  <Calendar className="w-6 h-6" />
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 mr-3 rounded-lg overflow-hidden border border-blue-400">
                  <Image
                    src="/Artwork.JPG"
                    alt="Stroom AI Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                  Stroom AI
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Patent-pending AI innovations that transform businesses with
                measurable results across healthcare, retail, conservation, and
                enterprise systems.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-blue-300">
                Innovations
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="#solutions"
                    className="hover:text-white transition-colors"
                  >
                    Mode AI Stylist
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    className="hover:text-white transition-colors"
                  >
                    Hygeia AI
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    className="hover:text-white transition-colors"
                  >
                    MERIDIAN
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    className="hover:text-white transition-colors"
                  >
                    Conservatron 12000
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-blue-300">
                Industries
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="#industries"
                    className="hover:text-white transition-colors"
                  >
                    Healthcare
                  </a>
                </li>
                <li>
                  <a
                    href="#industries"
                    className="hover:text-white transition-colors"
                  >
                    E-commerce & Retail
                  </a>
                </li>
                <li>
                  <a
                    href="#industries"
                    className="hover:text-white transition-colors"
                  >
                    Conservation & Legal
                  </a>
                </li>
                <li>
                  <a
                    href="#industries"
                    className="hover:text-white transition-colors"
                  >
                    Knowledge Management
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-blue-300">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300 text-lg">
              © 2025 Stroom AI. All rights reserved. | 6+ Patents Pending |
              Founded by AI Inventor Parker Case
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StroomAI;
