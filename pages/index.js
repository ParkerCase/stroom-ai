// pages/index.js - StroomAI Professional Landing Page (Real Content & Unique Design)

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import ThemeToggle from "../components/ThemeToggle";

const MeridianAISection = () => {
  return (
    <>
      {/* Featured MeridianAI Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 px-6 py-3 rounded-full border-2 border-green-200 dark:border-green-700 mb-6">
            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-green-800 dark:text-green-300 font-bold text-lg">
              Production Ready
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600 bg-clip-text text-transparent">
            MeridianAI Enterprise
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From silos to signals - the enterprise-grade AI platform unifying
            200+ business integrations.
            <span className="font-semibold text-blue-700 dark:text-blue-400">
              {" "}
              Trusted by organizations to revolutionize their business
              intelligence.
            </span>
          </p>
        </div>

        {/* Main MeridianAI Card */}
        <div className="relative max-w-6xl mx-auto">
          {/* Production Ready Badge */}
          <div className="absolute -top-4 -right-4 z-10">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg transform -rotate-12">
              Enterprise Ready
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-green-50/90 dark:from-gray-800/90 dark:to-green-900/20 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-3 border-green-100 dark:border-green-800/50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-green-600"></div>
            </div>

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Description */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600 shadow-xl">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        MeridianAI
                      </h4>
                      <p className="text-lg text-blue-700 dark:text-blue-400 font-bold">
                        Enterprise Intelligence Platform
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    Transform your business intelligence with our
                    production-ready AI platform. MeridianAI seamlessly
                    integrates 200+ business tools, delivers lightning-fast RAG
                    knowledge bases, and provides enterprise-grade security with
                    SOC 2 certification.{" "}
                    <span className="font-semibold text-blue-700 dark:text-blue-400">
                      Reduce research time from hours to 45 minutes maximum.
                    </span>
                  </p>

                  {/* Key Features Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        200+ Integrations
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        SOC 2 Certified
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-cyan-600" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        RAG Knowledge Base
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        Predictive Analytics
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://meridian.stroomai.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl flex items-center gap-3 justify-center"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Launch Platform
                    </a>
                    <a
                      href="#contact"
                      className="border-2 border-blue-600 dark:border-blue-400 text-blue-700 dark:text-blue-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center gap-3 justify-center"
                    >
                      <Calendar className="w-5 h-5" />
                      Schedule Demo
                    </a>
                  </div>
                </div>

                {/* Right Column - Enterprise Stats & Features */}
                <div className="space-y-8">
                  {/* Enterprise Stats */}
                  <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 dark:border-blue-700">
                    <h5 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      Enterprise Performance
                    </h5>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          200+
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          Business Integrations
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                          45min
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          Max Research Time
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                          75%
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          Task Automation
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                          Real-time
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          Data Sync
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Security Features */}
                  <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-green-200 dark:border-green-700">
                    <h5 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      Enterprise Security
                    </h5>
                    <div className="space-y-3">
                      {[
                        { feature: "SOC 2 Type II Certified", icon: "🔒" },
                        { feature: "AES-256 Encryption", icon: "🛡️" },
                        { feature: "GDPR Compliant", icon: "🌍" },
                        { feature: "Zero Data Mining", icon: "🚫" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <span className="text-lg">{item.icon}</span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                            {item.feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Client Testimonial */}
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-6 border border-cyan-200 dark:border-cyan-700">
                    <h5 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                      Client Success
                    </h5>
                    <blockquote className="text-gray-700 dark:text-gray-300 text-sm italic leading-relaxed mb-3">
                      "MeridianAI revolutionized our data management. The
                      patent-pending technology is truly innovative and brought
                      all insight to our fingertips."
                    </blockquote>
                    <cite className="text-blue-700 dark:text-blue-400 font-bold text-sm">
                      — Rejuvatek Medical Marketing Director
                    </cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="text-center mb-16">
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full"></div>
      </div>
    </>
  );
};

const MuseAISection = () => {
  return (
    <>
      {/* Featured MuseAI Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 px-6 py-3 rounded-full border-2 border-purple-200 dark:border-purple-700 mb-6">
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-800 dark:text-purple-300 font-bold text-lg">
              Coming Soon
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
            MuseAI Production Intelligence
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The industry&apos;s first ethical AI production intelligence
            platform.
            <span className="font-semibold text-purple-700 dark:text-purple-400">
              {" "}
              Empowering every aspect of filmmaking beyond content creation
              itself.
            </span>
          </p>
        </div>

        {/* Main MuseAI Card */}
        <div className="relative max-w-6xl mx-auto">
          {/* Coming Soon Badge */}
          <div className="absolute -top-4 -right-4 z-10">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg transform rotate-12">
              3 Patents Pending
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-purple-50/90 dark:from-gray-800/90 dark:to-purple-900/20 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-3 border-purple-100 dark:border-purple-800/50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600"></div>
            </div>

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Description */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 shadow-xl">
                      <Film className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        MuseAI
                      </h4>
                      <p className="text-lg text-purple-700 dark:text-purple-400 font-bold">
                        Production Intelligence Platform
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    Built by filmmakers, for filmmakers. MuseAI handles the
                    intelligence layer of production - from semantic script
                    analysis and ethical compliance monitoring to real-time
                    collaboration and weather-aware scheduling.{" "}
                    <span className="font-semibold text-purple-700 dark:text-purple-400">
                      We empower creativity, never replace it.
                    </span>
                  </p>

                  {/* Key Features Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        Script Intelligence
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        Ethical Compliance
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-indigo-600" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        Real-time Collaboration
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        Production Optimization
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#contact"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl flex items-center gap-3 justify-center"
                    >
                      <Calendar className="w-5 h-5" />
                      Request Early Access
                    </a>
                    <a
                      href="#contact"
                      className="border-2 border-purple-600 dark:border-purple-400 text-purple-700 dark:text-purple-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all flex items-center gap-3 justify-center"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Learn More
                    </a>
                  </div>
                </div>

                {/* Right Column - Tech Stack & Benefits */}
                <div className="space-y-8">
                  {/* Tech Stack */}
                  <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-200 dark:border-purple-700">
                    <h5 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      Patent-Pending Innovations
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Ethical AI Framework",
                        "Semantic Script Analysis",
                        "Production Intelligence",
                        "Real-time Collaboration",
                        "Compliance Monitoring",
                        "Multi-constraint Optimization",
                      ].map((tech, index) => (
                        <span
                          key={index}
                          className="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Industry Applications */}
                  <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 dark:border-blue-700">
                    <h5 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      Built for Every Production
                    </h5>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Feature Films",
                        "Television",
                        "Documentaries",
                        "Commercials",
                        "Independent Films",
                        "Streaming Content",
                      ].map((industry, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                            {industry}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Value Proposition */}
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-indigo-200 dark:border-indigo-700">
                    <h5 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                      The Ethical AI Difference
                    </h5>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold">Transparency first.</span>{" "}
                      Every AI decision is explainable.
                      <span className="font-semibold">
                        {" "}
                        Artist empowerment.
                      </span>{" "}
                      Technology serves creativity, not the other way around.
                      <span className="font-semibold">
                        {" "}
                        Industry-built.
                      </span>{" "}
                      Created by film professionals who understand the craft.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="text-center mb-16">
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
      </div>
    </>
  );
};

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
      title: "MeridianAI",
      status: "Production Ready",
      description:
        "Intelligent chatbot dashboard that leverages natural language processing to provide contextual knowledge management and automated responses across multiple domains including storage providers, CRMs, and more. Features multi-domain expertise with very high query resolution rate and integrates with many enterprise systems. Reduces deep research time from hours to 45 minutes maximum.",
      tech: ["NLP", "OpenAI GPT", "Node.js", "MongoDB", "React"],
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      metrics: "45 min max research time",
    },
    {
      title: "MuseAI Production Intelligence",
      status: "Coming Soon - 3 Patents Pending",
      description:
        "The industry's first ethical AI production intelligence platform. While content generation AI transforms what we create, MuseAI transforms how we create it - providing script intelligence, production optimization, real-time collaboration, and ethical compliance monitoring. Built by filmmakers, for filmmakers, with complete transparency and artist empowerment at its core.",
      tech: [
        "Ethical AI Framework",
        "Production Intelligence",
        "Real-time Collaboration",
        "Script Semantic Analysis",
        "Compliance Monitoring",
        "Weather Integration",
      ],
      icon: <Film className="w-6 h-6" />,
      gradient: "from-purple-600 via-blue-600 to-indigo-700",
      metrics: "3 Patents Pending",
      comingSoon: true,
      industries: ["Film & TV", "Documentary", "Commercial", "Independent"],
      features: [
        "Semantic script intelligence with version control",
        "Multi-constraint production optimization",
        "Real-time bias detection and diversity monitoring",
        "Collaborative production workflows",
        "Weather-aware scheduling intelligence",
        "Industry-first ethical AI compliance",
      ],
    },
    {
      title: "HygeiaAI",
      status: "Production Ready - 5 Patents Pending",
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
      title: "ModeAI Stylist",
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
      title: "ADM Platform",
      status: "Production Ready",
      description:
        "Safe, supportive social media platform specifically designed for men's mental health, featuring an AI mental health bot for discussion, assistance in finding support groups, and overall mental wellness tips and techniques. Built complete infrastructure with increasing beta users and 24/7 AI crisis detection and intervention capabilities.",
      tech: ["Next.js", "Supabase", "Railway", "OpenAI API", "WebRTC"],
      icon: <Users className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      metrics: "Live",
    },
  ];

  const industries = [
    {
      name: "Knowledge Management",
      description:
        "Intelligent dashboards, contextual knowledge management, multi-domain query resolution, and enterprise system integration.",
      icon: <Zap className="w-8 h-8" />,
      color: "text-orange-500",
    },
    {
      name: "Film & Entertainment",
      description:
        "Ethical AI production intelligence, script analysis, compliance monitoring, and collaborative workflows for film, TV, and streaming content.",
      icon: <Film className="w-8 h-8" />,
      color: "text-purple-500",
    },
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
  ];

  // Real achievements and industry statistics
  const stats = [
    {
      value: "9+",
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
      description: "Live and in development",
    },
    {
      value: "3+",
      label: "Film Festival Awards",
      description: "Founded on creative & technical expertise",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b-2 border-blue-100 dark:border-gray-700 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 mr-3 rounded-lg">
                <Image
                  src="/StroomAI.png"
                  alt="StroomAI Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                StroomAI
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "Solutions", "Industries", "About", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`transition-all duration-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium ${
                      activeSection === item.toLowerCase()
                        ? "text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400 pb-1"
                        : "text-gray-700 dark:text-gray-300 hover:border-b-2 hover:border-blue-300 dark:hover:border-blue-600 pb-1"
                    }`}
                  >
                    {item}
                  </a>
                )
              )}
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                className="p-2 rounded-lg bg-blue-50 dark:bg-gray-800 border border-orange-400 dark:border-gray-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-blue-700 dark:text-blue-400" />
                ) : (
                  <Menu className="w-5 h-5 text-blue-700 dark:text-blue-400" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-blue-100 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
              {["Home", "Solutions", "Industries", "About", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors rounded-lg mx-2"
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
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl shadow-xl">
                <Image
                  src="/StroomAI.png"
                  alt="StroomAI Logo"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-blue-600 dark:text-blue-400 leading-tight">
              StroomAI
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-gray-800 dark:text-gray-200 leading-snug">
              Patent-Pending AI Innovations
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-5xl mx-auto">
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
                className="border-2 border-blue-600 dark:border-blue-400 text-blue-700 dark:text-blue-400 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all flex items-center gap-3"
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
                  className="text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-blue-100 dark:border-gray-700 shadow-lg"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-800 dark:text-gray-200 font-bold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
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
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Breakthrough AI Innovations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our patent-pending AI solutions span healthcare, e-commerce,
              conservation, film production, and knowledge management. Each
              innovation addresses complex real-world challenges with measurable
              impact and production-ready implementation.
            </p>
          </div>

          {/* <MuseAISection /> */}

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-white/50 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-600"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-r ${solution.gradient} shadow-lg`}
                  >
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {solution.title}
                    </h3>
                    <span className="text-lg text-blue-700 dark:text-blue-400 font-bold">
                      {solution.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                  {solution.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {solution.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-orange-400 dark:border-orange-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={
                    solution.title === "MeridianAI"
                      ? "https://meridian.stroomai.com"
                      : "#contact"
                  }
                  target={
                    solution.title === "MeridianAI" ? "_blank" : undefined
                  }
                  rel={
                    solution.title === "MeridianAI"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-2 text-blue-700 dark:text-blue-400 hover:text-purple-700 dark:hover:text-purple-400 transition-colors font-bold text-lg"
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
      <section
        id="industries"
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI solutions address critical challenges across healthcare,
              retail, conservation, and enterprise knowledge management, with
              proven production systems and patent-pending innovations driving
              real change.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl border-2 border-white/50 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-600 transition-all"
              >
                <div className={`${industry.color} mb-4 flex justify-center`}>
                  {industry.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
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
        className="py-20 px-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Why Choose StroomAI?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We&apos;re not just another AI company. We&apos;re proven
                inventors with 6+ patent-pending innovations, production systems
                serving real users, and a track record of transforming complex
                challenges into breakthrough solutions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/50 border-2 border-orange-400 dark:border-orange-500">
                    <Award className="w-7 h-7 text-blue-700 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      Patent-Pending Portfolio
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      6+ breakthrough AI innovations currently under patent
                      review, with production systems serving real users across
                      multiple industries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-900/50 border-2 border-orange-200 dark:border-orange-500">
                    <Target className="w-7 h-7 text-orange-700 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      Proven Performance
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      MeridianAI reduces research time from hours to 45 minutes
                      maximum. Our systems deliver measurable efficiency gains.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/50 border-2 border-green-200 dark:border-green-500">
                    <Film className="w-7 h-7 text-green-700 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      Creative & Technical Excellence
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      3+ film festival awards demonstrate our ability to combine
                      technical innovation with creative storytelling and user
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-white/50 dark:border-gray-700/50">
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Real Client Testimonials
              </h3>

              {/* Real testimonials from original site */}
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-r-xl">
                  <p className="text-gray-600 dark:text-gray-300 italic mb-3 text-lg">
                    &quot;MeridianAI revolutionized our data management. The
                    patent-pending technology is truly innovative and brought
                    all insight to our fingertips.&quot;
                  </p>
                  <p className="text-sm font-bold text-blue-700 dark:text-blue-400">
                    — Rejuvatek Medical Marketing Director
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50/50 dark:bg-orange-900/20 rounded-r-xl">
                  <p className="text-gray-600 dark:text-gray-300 italic mb-3 text-lg">
                    &quot;The ModeAI Stylist tool touches on all things that you
                    might expect from an in-person shopping experience and more!
                    This could be a game changer.&quot;
                  </p>
                  <p className="text-sm font-bold text-orange-700 dark:text-orange-400">
                    — Former Nordstrom Employee of 20+ years
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50/50 dark:bg-green-900/20 rounded-r-xl">
                  <p className="text-gray-600 dark:text-gray-300 italic mb-3 text-lg">
                    &quot;Near completion with our entire mental health social
                    platform. The AI implementation could really better a lot of
                    lives.&quot;
                  </p>
                  <p className="text-sm font-bold text-green-700 dark:text-green-400">
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
            <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Let&apos;s discuss how our patent-pending AI innovations can
              deliver measurable results for your organization.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-white/50 dark:border-gray-700/50">
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
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
                    className="w-full bg-white/70 dark:bg-gray-700/70 border-2 border-blue-200 dark:border-gray-600 rounded-xl px-6 py-4 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none text-lg"
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
                    className="w-full bg-white/70 dark:bg-gray-700/70 border-2 border-blue-200 dark:border-gray-600 rounded-xl px-6 py-4 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none text-lg"
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
                    className="w-full bg-white/70 dark:bg-gray-700/70 border-2 border-blue-200 dark:border-gray-600 rounded-xl px-6 py-4 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none text-lg"
                  />
                </div>

                <div className="relative">
                  <select
                    name="projectInterest"
                    value={formData.projectInterest}
                    onChange={handleInputChange}
                    className="w-full bg-white/70 dark:bg-gray-700/70 border-2 border-blue-200 dark:border-gray-600 rounded-xl px-6 py-4 text-gray-900 dark:text-gray-100 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none appearance-none text-lg"
                  >
                    <option value="">Select Innovation Interest</option>
                    <option value="museai-partnership">
                      🎬 MuseAI Film Production Partnership
                    </option>
                    <option value="museai-early-access">
                      🎬 MuseAI Early Access
                    </option>
                    <option value="ai-stylist">ModeAI Stylist</option>
                    <option value="grocery-assistant">HygeiaAI</option>
                    <option value="MeridianAI">MeridianAI Dashboard</option>
                    <option value="conservatron">TraffickJam</option>
                    <option value="mental-space">MentalSpace Platform</option>
                    <option value="custom-solution">Custom AI Solution</option>
                    <option value="consultation">Strategic Consultation</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 dark:text-gray-500 pointer-events-none" />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full bg-white/70 dark:bg-gray-700/70 border-2 border-blue-200 dark:border-gray-600 rounded-xl px-6 py-4 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none resize-none text-lg"
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
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-white/50 dark:border-gray-700/50">
                <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300 text-lg">
                      sales@stroomai.com
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <a
                      href="tel:+19297079902"
                      className="text-gray-700 dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      +1 (929) 707-9902
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300 text-lg">
                      New York City, NY
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-white/50 dark:border-gray-700/50">
                <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
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
                <div className="w-8 h-8 mr-3 rounded-lg">
                  <Image
                    src="/StroomAI.png"
                    alt="StroomAI Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  StroomAI
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
                    ModeAI Stylist
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    className="hover:text-white transition-colors"
                  >
                    HygeiaAI
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    className="hover:text-white transition-colors"
                  >
                    MeridianAI
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    className="hover:text-white transition-colors"
                  >
                    TraffickJam Intelligence System
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
                  <Link
                    href="/privacy-policy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/security"
                    className="hover:text-white transition-colors"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300 text-lg">
              © 2025 Stroom AI LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StroomAI;
