// pages/index.js - Fixed Red/Blue Theme Version

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  Calendar,
  Download,
  ExternalLink,
  Brain,
  Search,
  Users,
  Star,
  ArrowRight,
  Heart,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

const AIEngineerWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectInterest: "",
    message: "",
  });

  const projects = [
    {
      title: "AI Personal Stylist",
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
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "Multi-Faceted AI Grocery Assistant",
      status: "5 Patents Pending",
      description:
        "Breakthrough medical nutrition therapy system combining multi-criteria optimization (health + budget + convenience) with conversational meal planning and cross-retailer integration. Features adaptive learning algorithms, health condition-specific recipe modification, drug-food interaction monitoring, family history-based disease prevention, and intelligent ingredient substitution. Transforms grocery shopping into personalized medical nutrition therapy with predictive shopping intelligence and clinical guideline integration.",
      tech: [
        "Medical AI",
        "Multi-Criteria Optimization",
        "Natural Language Processing",
        "Cross-Retailer APIs",
        "Behavioral Learning",
        "Clinical Integration",
        "Browser Extensions",
      ],
      icon: <Heart className="w-6 h-6" />,
      gradient: "from-green-500 to-blue-600",
    },
    {
      title: "AI Knowledge Dashboard",
      status: "Potentially Patentable",
      description:
        "Intelligent chatbot dashboard that leverages natural language processing to provide contextual knowledge management and automated responses across multiple domains including storage providers, CRM's, and more! Features multi-domain expertise with a very high query resolution rate and integrates with many enterprise systems.",
      tech: ["NLP", "OpenAI GPT", "Node.js", "MongoDB", "React"],
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-pink-500 to-cyan-400",
    },
    {
      title: "Conservatron 12000",
      status: "Production Ready",
      description:
        "Advanced wildlife crime monitoring system that tracks illegal trade of endangered species products, stolen cultural artifacts, and protected materials across eBay, Craigslist, Poshmark, and other online marketplaces. Utilizes machine learning to identify suspicious listings, generates automated reports for law enforcement, and supports anti-poaching organizations with real-time marketplace surveillance.",
      tech: [
        "Python",
        "Selenium",
        "NLP",
        "Image Recognition",
        "Legal Compliance APIs",
      ],
      icon: <Search className="w-6 h-6" />,
      gradient: "from-emerald-700 to-blue-300",
    },
    {
      title: "MentalSpace (ADM Platform)",
      status: "Near Production",
      description:
        "Safe, supportive social media platform specifically designed for men's mental health, featuring an AI mental health bot for discussion, assistance in finding your support group, and overall mental wellness tips and techniques. Built complete infrastructure with an increasing set of beta users with 24/7 AI crisis detection and intervention capabilities through the AI chat integration.",
      tech: ["Next.js", "Supabase", "Railway", "OpenAI API", "WebRTC"],
      icon: <Users className="w-6 h-6" />,
      gradient: "from-red-700 to-yellow-400",
    },
  ];

  const skills = [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Python",
    "TensorFlow",
    "PyTorch",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "Docker",
    "MongoDB",
    "Supabase",
    "OpenAI API",
  ];

  const handleFormSubmit = async () => {
    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      // Send to our Vercel API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          projectInterest: formData.projectInterest,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Thank you for your message! I'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
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
        "There was an error sending your message. Please try again or contact me directly at parker@parkercase.co"
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
      const sections = ["home", "about", "projects", "contact"];
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
    <div className="min-h-screen bg-gradient-to-br from-red-200 via-blue-800 to-orange-400 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-yellow-100 to-yellow-100 bg-clip-text text-transparent flex items-center">
              <Image
                src="/Artwork.png"
                alt="Parker Case Logo"
                className="inline-block h-15 w-24 mr-2"
              />
              Parker Case
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors hover:text-red-400 ${
                    activeSection === item.toLowerCase()
                      ? "text-red-400"
                      : "text-white"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-white hover:text-red-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-500 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <Brain className="w-16 h-16 text-red-400" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-100 bg-clip-text text-transparent">
            Parker Case
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-red-100">
            AI Software Engineer
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Transforming ideas into intelligent solutions through cutting-edge
            AI and machine learning technologies from New York City
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contact"
              className="border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Consultation
            </a>
            <a
              href="#projects"
              className="border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/parker-c-582854106/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/parkercase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:parker@parkercase.co"
              className="text-white hover:text-red-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-white">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Passionate AI Innovator
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I&apos;m a dedicated AI software engineer based in New York City
                with a passion for creating intelligent solutions that make a
                real-world impact. My expertise spans machine learning, deep
                learning, and full-stack development, with a focus on bringing
                cutting-edge AI research into practical applications.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                With multiple patent-pending innovations and a track record of
                building production-ready AI systems, I specialize in
                transforming complex problems into elegant, scalable solutions.
                Currently freelancing and building my own AI consulting
                business.
              </p>

              <a
                href="/Resume.pdf"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-500 px-6 py-3 rounded-lg hover:scale-105 transition-transform"
                download="Parker_Case_Resume.pdf"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Achievements Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-white">
            Impact & Achievements
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-100 mb-2">6+</div>
              <div className="text-gray-300">Patent-Pending Innovations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-100 mb-2">
                100+
              </div>
              <div className="text-gray-300">Platform Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-100 mb-2">5</div>
              <div className="text-gray-300">Production AI Systems</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-100 mb-2">3+</div>
              <div className="text-gray-300">Film Festival Awards</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-orange-100">
                AI Innovation
              </h3>
              <p className="text-gray-300">
                Pioneering patent-pending AI solutions in personal styling,
                conservation with ease, knowledge management systems, etc.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-orange-100">
                Social Impact
              </h3>
              <p className="text-gray-300">
                Building AI systems for environmental conservation and
                men&apos;s mental health support.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-orange-100">
                Technical Excellence
              </h3>
              <p className="text-gray-300">
                Full-stack AI development from research to production deployment
                across multiple industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-white">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r ${project.gradient}`}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-sm text-red-400 font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white/10 px-3 py-1 rounded-full text-xs border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  View Demo
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text ">
            Client Testimonials
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-red-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;Parker&apos;s AI knowledge dashboard revolutionized our
                data management. The patent-pending technology is truly
                innovative and brought all insight to our fingertips.&quot;
              </p>
              <div className="font-semibold text-slate-400">
                - Rejuvatek Medical Marketing Director
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-red-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;The AI Personal Stylist tool touches on all things that
                you might expect from an in-person shopping experience and more!
                This could be a game changer.&quot;
              </p>
              <div className="font-semibold text-slate-400">
                - Former Nordstrom Employee of over 20 years
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-red-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                &quot;Parker is near completion with our entire mental health
                social platform. His implementation of AI could really better a
                lot of life&apos;s.&quot;
              </p>
              <div className="font-semibold text-slate-400">
                - ADM Social Platform Founder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text ">
            Let&apos;s Work Together
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                  />
                </div>

                <div className="relative">
                  <select
                    name="projectInterest"
                    value={formData.projectInterest}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-red-400 focus:outline-none appearance-none"
                  >
                    <option value="">Select Project of Interest</option>
                    <option value="ai-stylist">AI Personal Stylist</option>
                    <option value="knowledge-dashboard">
                      AI Knowledge Dashboard
                    </option>
                    <option value="eco-scraper">EcoScraper Pro</option>
                    <option value="mental-space">MentalSpace Platform</option>
                    <option value="custom">Custom AI Solution</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-400 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  onClick={handleFormSubmit}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-500 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Info & Calendly */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold mb-6">
                  Book your Meeting
                </h3>
                <p className="text-gray-300 mb-6">
                  Ready to discuss your AI project? Schedule a consultation to
                  explore how we can bring your ideas to life.
                </p>
                <a
                  href="https://calendly.com/parkere-case/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-500 px-6 py-3 rounded-lg hover:scale-105 transition-transform"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule on Calendly
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-red-400" />
                    <span>parker@parkercase.co</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-red-400" />
                    <span>+1 (929) 707-9902</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-red-400" />
                    <a
                      href="https://www.linkedin.com/in/parker-c-582854106/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-400 transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-red-400" />
                    <a
                      href="https://github.com/parkercase"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-400 transition-colors"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Parker Case. All rights reserved. | Building the future with
            artificial intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AIEngineerWebsite;
