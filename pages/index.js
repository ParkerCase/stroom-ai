// pages/index.js - StroomAI Professional Landing Page (Real Content & Unique Design)

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  Mail,
  Phone,
  Calendar,
  ExternalLink,
  Brain,
  Search,
  Heart,
  Menu,
  X,
  Shield,
  Globe,
  Target,
} from "lucide-react";
import Image from "next/image";
import ThemeToggle from "../components/ThemeToggle";

const StroomAI = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  // Active Research & Applications
  const solutions = [
    {
      title: "Performance Nutrition Optimization",
      status: "Active Consulting",
      description:
        "Biochemical interaction platforms that translate wearable biometric data into personalized nutrition protocols for elite athletes. Real-time optimization based on training load and recovery metrics.",
      tech: [
        "Wearable Integration",
        "Biomarker Tracking",
        "Real-time Optimization",
        "Training Load Analysis",
      ],
      icon: <Heart className="w-6 h-6" />,
      gradient: "from-green-500 to-blue-600",
      features: [
        "Wearable integration (Whoop, Oura, Garmin)",
        "Biomarker tracking and optimization",
        "Professional teams in consultation",
      ],
    },
    {
      title: "Cannabis Biochemical Recommendations",
      status: "Production Platform",
      description:
        "Comprehensive platform modeling terpene-cannabinoid-physiology interactions for personalized cannabis recommendations. Integrates health screening, genetic considerations, and experience optimization.",
      tech: [
        "Biochemical Modeling",
        "Health Screening",
        "Genetic Analysis",
        "Experience Optimization",
      ],
      icon: <Heart className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-600",
      features: [
        "90+ active users validating recommendations",
        "Terpene-food synergy prediction algorithms",
        "Real-time safety screening for contraindications",
      ],
    },
    {
      title: "Psychedelic Harm Reduction",
      status: "Production Ready",
      description:
        "Applying biochemical interactions modeling to psychedelic therapeautic selections. Incorporates set/setting assessment, dosage optimization, medication screening, and species-specific effect profiling.",
      tech: [
        "Biochemical Modeling",
        "Medication Screening",
        "Dosage Optimization",
        "Psychedelic Profiling",
      ],
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-purple-600 via-blue-600 to-indigo-700",
      features: [
        "8 truffle species with distinct biochemical profiles",
        "Medical contraindication screening system",
        "Smart shop integration ready",
      ],
    },
    {
      title: "Drug Discovery Analytics",
      status: "Research Collaboration",
      description:
        "AI-driven analysis systems for identifying therapeutic applications of medications. Computational approaches combining databases, multi-dimensional analysis, and correlation.",
      tech: [
        "AI Analysis",
        "Computational Biology",
        "Multi-Dimensional Analysis",
        " Statistical Correlation",
      ],
      icon: <Search className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "University research collaboration",
        "Multi-target analysis framework",
        "Patient stratification insights",
      ],
    },
  ];

  const solutionStyles = {
    "Performance Nutrition Optimization": {
      iconBackground:
        "linear-gradient(135deg, rgba(157, 181, 168, 0.85), rgba(139, 165, 184, 0.75))",
      iconColor: "#ffffff",
      badgeColor: "rgba(157, 181, 168, 0.85)",
    },
    "Cannabis Biochemical Recommendations": {
      iconBackground:
        "linear-gradient(135deg, rgba(157, 181, 168, 0.85), rgba(139, 165, 184, 0.75))",
      iconColor: "#ffffff",
      badgeColor: "rgba(157, 181, 168, 0.85)",
    },
    "Psychedelic Harm Reduction": {
      iconBackground:
        "linear-gradient(135deg, rgba(228, 168, 138, 0.85), rgba(229, 115, 77, 0.75))",
      iconColor: "#ffffff",
      badgeColor: "rgba(228, 168, 138, 0.85)",
    },
    "Drug Discovery Analytics": {
      iconBackground:
        "linear-gradient(135deg, rgba(229, 115, 77, 0.85), rgba(139, 165, 184, 0.75))",
      iconColor: "#ffffff",
      badgeColor: "rgba(229, 115, 77, 0.9)",
    },
  };

  // Real achievements and industry statistics
  // const stats = [
  //   {
  //     value: "9+",
  //     label: "Patents Pending",
  //     description: "Breakthrough AI innovations",
  //   },
  //   {
  //     value: "100+",
  //     label: "Platform Users",
  //     description: "Active on production systems",
  //   },
  //   {
  //     value: "5",
  //     label: "Production AI Systems",
  //     description: "Live and in development",
  //   },
  //   {
  //     value: "3+",
  //     label: "Film Festival Awards",
  //     description: "Founded on creative & technical expertise",
  //   },
  // ];

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
      const sections = ["home", "solutions", "about", "contact"];
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
    <>
      <Head>
        <title>
          StroomAI - Enterprise AI Solutions for Knowledge Management & Digital
          Transformation
        </title>
        <meta
          name="description"
          content="StroomAI delivers patent-pending enterprise AI solutions that break down organizational silos, accelerate decision velocity, and transform business intelligence through advanced knowledge management."
        />
        <meta
          name="keywords"
          content="enterprise AI, knowledge management, decision velocity, organizational silos, business intelligence, digital transformation, AI strategy, enterprise knowledge management, EKM, generative AI, StroomAI, enterprise solutions"
        />
        <meta name="author" content="StroomAI Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="StroomAI - Enterprise AI Solutions for Knowledge Management & Digital Transformation"
        />
        <meta
          property="og:description"
          content="StroomAI delivers patent-pending enterprise AI solutions that break down organizational silos, accelerate decision velocity, and transform business intelligence."
        />
        <meta property="og:url" content="https://stroomai.com" />
        <meta property="og:site_name" content="StroomAI" />
        <meta
          property="og:image"
          content="https://stroomai.com/new-logo-logo-only.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="StroomAI - Enterprise AI Solutions for Knowledge Management & Digital Transformation"
        />
        <meta
          name="twitter:description"
          content="StroomAI delivers patent-pending enterprise AI solutions that break down organizational silos, accelerate decision velocity, and transform business intelligence."
        />
        <meta
          name="twitter:image"
          content="https://stroomai.com/new-logo-logo-only.png"
        />

        {/* Structured Data for AI tools */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "StroomAI",
              url: "https://stroomai.com",
              logo: "https://stroomai.com/new-logo-logo-only.png",
              description:
                "Enterprise AI solutions for knowledge management and digital transformation",
              foundingDate: "2024",
              address: {
                "@type": "PostalAddress",
                addressLocality: "New York City",
                addressRegion: "NY",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-929-707-9902",
                contactType: "sales",
                email: "sales@stroomai.com",
              },
              sameAs: ["https://calendly.com/parkere-case/30min"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Enterprise AI Solutions",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Enterprise Knowledge Management",
                      description:
                        "AI-powered knowledge management solutions that break down organizational silos",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Decision Velocity Acceleration",
                      description:
                        "Transform business intelligence and accelerate decision-making processes",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </Head>

      <div className="site-shell">
        <nav className="site-nav">
          <div className="nav-inner">
            <div
              className="flex items-center gap-3"
              style={{ marginLeft: "-0.5rem" }}
            >
              <div className="hidden sm:block w-20">
                <Image
                  src="/new-logo-logo-only.png"
                  alt="StroomAI Logo"
                  width={80}
                  height={80}
                  className="w-full h-auto object-contain"
                />
              </div>
              <Link
                href="/"
                className="nav-brand"
                style={{
                  color: "var(--accent-clay)",
                  fontWeight: "800",
                  fontSize: "1.5rem",
                }}
              >
                StroomAI
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <div className="nav-links">
                {["Home", "Solutions", "About", "Contact"].map((item) => {
                  const href =
                    item === "Home" ? "#home" : `#${item.toLowerCase()}`;
                  const isActive = activeSection === item.toLowerCase();

                  return (
                    <a
                      key={item}
                      href={href}
                      className={`nav-link-modern ${
                        isActive ? "nav-link-modern--active" : ""
                      }`}
                      style={{ color: "var(--accent-clay)" }}
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
              <a
                href="#contact"
                className="cta-button-condesa"
                style={{
                  padding: "0.65rem 1.5rem",
                  borderRadius: "6px",
                  border: "1px solid var(--accent-clay)",
                  background: "transparent",
                  color: "var(--accent-clay)",
                  fontSize: "0.9rem",
                  fontWeight: "400",
                  textTransform: "none",
                  letterSpacing: "0",
                }}
              >
                Inquire Now
              </a>
              <ThemeToggle />
            </div>

            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="p-2 rounded-full border border-[rgba(47,42,40,0.2)] bg-white/70"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-[rgba(47,42,40,0.72)]" />
                ) : (
                  <Menu className="w-5 h-5 text-[rgba(47,42,40,0.72)]" />
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden px-6 py-4 space-y-2 bg-[#fdf8f3]/95 border-t border-[rgba(47,42,40,0.12)]">
              {["Home", "Solutions", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
                  className="block py-2 text-[0.82rem] uppercase tracking-[0.28em] text-[rgba(47,42,40,0.72)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="block text-center py-3 mt-2 rounded-full border border-[rgba(47,42,40,0.18)] text-[0.82rem] uppercase tracking-[0.28em]"
                onClick={() => setIsMenuOpen(false)}
              >
                Inquire Now
              </a>
            </div>
          )}
        </nav>

        <main>
          <section id="home" className="section-shell hero-section">
            <div
              className="section-inner hero-grid"
              style={{
                maxWidth: "1400px",
              }}
            >
              <div>
                <h1
                  className="hero-title-condesa"
                  style={{
                    fontSize: "clamp(5.5rem, 15vw, 11rem)",
                    lineHeight: "0.95",
                    fontWeight: "800",
                    color: "var(--accent-clay)",
                    marginBottom: "1.5rem",
                    letterSpacing: "-0.04em",
                  }}
                >
                  StroomAI
                </h1>
                <p
                  className="hero-text-condesa"
                  style={{
                    fontSize: "clamp(1.25rem, 2.8vw, 1.75rem)",
                    lineHeight: "1.7",
                    color: "var(--accent-clay)",
                    maxWidth: "750px",
                    marginBottom: "0",
                  }}
                >
                  Developing AI-powered systems to help teams predict how
                  biological compounds interact with individual physiology, so
                  that breakthroughs in precision medicine, performance
                  optimization, and environmental restoration don&apos;t feel
                  like climbing Everest.{" "}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    borderRadius: "24px",
                    border: "6px solid #d85a3a",
                    overflow: "hidden",
                    backgroundColor: "transparent",
                  }}
                >
                  <Image
                    src="/everest.png"
                    alt="Climbing Everest - Achieving breakthroughs"
                    width={600}
                    height={600}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      display: "block",
                      transform: "scale(1.15) translateY(4%)",
                      transformOrigin: "center center",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* <div className="section-inner" style={{ marginTop: "4.5rem" }}>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                    <div className="stat-description">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div> */}
          </section>

          <section
            id="solutions"
            className="section-shell"
            style={{ paddingTop: "clamp(6rem, 8vw, 8rem)" }}
          >
            <div className="section-inner">
              <div className="section-heading">
                <span className="section-label">Some of Our Work</span>
                <h2 className="hero-subtitle">
                  {" "}
                  Active Research & Applications
                </h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {solutions.map((solution, index) => {
                  const accent = solutionStyles[solution.title] || {};

                  return (
                    <div key={index} className="story-card">
                      <div className="story-card__header">
                        <div
                          className="story-icon"
                          style={{
                            background: accent.iconBackground,
                            color: accent.iconColor || "var(--ink)",
                            boxShadow:
                              accent.iconShadow ||
                              "0 18px 30px -24px rgba(47, 42, 40, 0.55)",
                          }}
                        >
                          {solution.icon}
                        </div>
                        <div>
                          <h3 className="story-title">{solution.title}</h3>
                          <div
                            className="story-status"
                            style={{
                              color:
                                accent.badgeColor || "rgba(47, 42, 40, 0.55)",
                            }}
                          >
                            {solution.status}
                          </div>
                        </div>
                      </div>

                      <p className="detail-text">{solution.description}</p>

                      <div className="flex flex-wrap gap-3">
                        {solution.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-chip">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {solution.metrics && (
                          <div
                            className="story-metric"
                            style={{
                              color:
                                accent.badgeColor || "rgba(47, 42, 40, 0.5)",
                            }}
                          >
                            {solution.metrics}
                          </div>
                        )}
                        <a href="#contact" className="solution-footer">
                          <ExternalLink className="w-4 h-4" />
                          Learn More
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="about" className="section-shell">
            <div className="section-inner">
              <div className="section-heading">
                <span className="section-label">About</span>
                <h2 className="hero-subtitle">Our Approach</h2>
              </div>

              <div className="section-columns approach-grid">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "500px",
                      borderRadius: "24px",
                      border: "6px solid #d85a3a",
                      overflow: "hidden",
                      backgroundColor: "transparent",
                    }}
                  >
                    <Image
                      src="/bio.png"
                      alt="Biological and scientific concepts"
                      width={500}
                      height={500}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        display: "block",
                        transform: "scale(1.1) translateY(1%)",
                        transformOrigin: "center center",
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="detail-item approach-card">
                    <div className="detail-icon">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="detail-title">Individual-First</div>
                      <p className="detail-text">
                        We account for genetic differences, metabolic rates,
                        lifestyle factors, and real-time biological states - not
                        population averages.
                      </p>
                    </div>
                  </div>

                  <div className="detail-item approach-card">
                    <div className="detail-icon">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="detail-title">Evidence-Based</div>
                      <p className="detail-text">
                        Every model is grounded in peer-reviewed research,
                        clinical data, and validated biochemical principles.
                      </p>
                    </div>
                  </div>

                  <div className="detail-item approach-card">
                    <div className="detail-icon">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="detail-title">Adaptive Learning</div>
                      <p className="detail-text">
                        Machine learning enables continuous improvement, with
                        models becoming more accurate through real-world
                        validation.
                      </p>
                    </div>
                  </div>

                  <div className="detail-item approach-card">
                    <div className="detail-icon">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="detail-title">Safety-First</div>
                      <p className="detail-text">
                        Privacy, safety, and ethical considerations are designed
                        in from the foundation - never added as an afterthought.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-shell">
            <div className="section-inner">
              <div
                className="section-heading tech-section-heading"
                style={{ textAlign: "center", marginBottom: "0" }}
              >
                <span className="section-label tech-label">Technology</span>
                <h2
                  className="hero-subtitle"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    marginBottom: "1rem",
                  }}
                >
                  Proprietary Technology
                </h2>
                <p
                  className="hero-text"
                  style={{
                    margin: "0 auto",
                    maxWidth: "700px",
                    fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                    lineHeight: "1.7",
                  }}
                >
                  Our patent-pending biochemical interaction models predict how
                  specific compounds affect individual biological systems. By
                  integrating biometric data, genetic factors, and metabolic
                  profiles, we generate personalized recommendations with
                  unprecedented accuracy across therapeutic applications,
                  performance optimization, and harm reduction.
                </p>
              </div>
            </div>
          </section>
          <section
            className="section-shell"
            style={{ paddingTop: "clamp(2.5rem, 3.5vw, 3.75rem)" }}
          >
            <div className="section-inner">
              <div className="surface-panel space-y-6">
                <h3 className="hero-subtitle" style={{ fontSize: "2rem" }}>
                  Real Client Testimonials
                </h3>
                <div className="space-y-3">
                  <div className="testimonial-card">
                    <p className="detail-text" style={{ fontStyle: "italic" }}>
                      &quot;StroomAI revolutionized our data management. The
                      approach they take is truly innovative and brought all
                      insight to our fingertips.&quot;
                    </p>
                    <p
                      className="story-metric"
                      style={{ letterSpacing: "0.16em" }}
                    >
                      — Rejuvatek Medical Marketing Director
                    </p>
                  </div>
                  <div className="testimonial-card">
                    <p className="detail-text" style={{ fontStyle: "italic" }}>
                      &quot;The BFF Cannabis App is like having a Budtender with
                      a PHD in your pocket. Finally, I know just what to
                      buy.&quot;
                    </p>
                    <p
                      className="story-metric"
                      style={{ letterSpacing: "0.16em" }}
                    >
                      — CEO of Cannabis Therapeutics Organization
                    </p>
                  </div>
                  <div className="testimonial-card">
                    <p className="detail-text" style={{ fontStyle: "italic" }}>
                      &quot;Near completion with our entire mental health social
                      platform. The AI implementation could really better a lot
                      of lives.&quot;
                    </p>
                    <p
                      className="story-metric"
                      style={{ letterSpacing: "0.16em" }}
                    >
                      — Mens Mental Health Social Platform Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="section-shell">
            <div className="section-inner">
              <div className="blog-panel">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div
                    className="detail-icon"
                    style={{ width: "52px", height: "52px" }}
                  >
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span
                    className="story-metric"
                    style={{ letterSpacing: "0.24em" }}
                  >
                  Blog Posts
                </span>
              </div>

                <h2 className="hero-subtitle" style={{ fontSize: "2.4rem" }}>
                Stay Ahead with Expert Analysis
              </h2>
                <p
                  className="hero-text"
                  style={{ margin: "1.5rem auto", maxWidth: "36rem" }}
                >
                  Stay ahead with expert analysis and practical strategies for
                  the AI-powered future. Explore insights on enterprise AI,
                  knowledge management, and digital transformation.
                </p>
              <Link
                href="/blog"
                  className="cta-button cta-button--primary"
                  style={{ marginTop: "1rem" }}
              >
                View Articles
                  <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          </section> */}

          <section id="contact" className="section-shell">
            <div className="section-inner">
              <div className="section-heading" style={{ textAlign: "center" }}>
                <span className="section-label">Contact</span>
                <h2 className="hero-subtitle" style={{ fontSize: "2.8rem" }}>
                  Partner With Us{" "}
                </h2>
                <p
                  className="hero-text"
                  style={{ margin: "0 auto", maxWidth: "38rem" }}
                >
                  We collaborate with research institutions, pharmaceutical
                  companies, professional sports organizations, and healthcare
                  systems.
                </p>
                <div
                  className="hero-actions"
                  style={{ justifyContent: "center" }}
                ></div>
              </div>

              <div className="contact-grid">
                <div className="surface-panel">
                  <h3 className="hero-subtitle" style={{ fontSize: "2rem" }}>
                    Get Started
                  </h3>
                  <div className="contact-form">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="contact-input"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Business Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="contact-input"
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="contact-input"
                    />
                    <textarea
                      name="message"
                      placeholder="Tell us about your project requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="contact-input"
                      style={{ resize: "none" }}
                    ></textarea>
                    <button
                      onClick={handleFormSubmit}
                      className="cta-button cta-button--primary contact-submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>

                <div className="surface-panel space-y-8">
                  <div>
                    <h3 className="hero-subtitle" style={{ fontSize: "2rem" }}>
                      Contact Information
                    </h3>
                    <div className="contact-info-list">
                      <div className="contact-info-item">
                        <Mail className="w-5 h-5" />
                        <span>sales@stroomai.com</span>
                      </div>
                      <div className="contact-info-item">
                        <Phone className="w-5 h-5" />
                        <a href="tel:+19297079902">+1 (929) 707-9902</a>
                      </div>
                      <div className="contact-info-item">
                        <Globe className="w-5 h-5" />
                        <span>New York City, NY</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="hero-subtitle" style={{ fontSize: "2rem" }}>
                      Schedule a Consultation
                    </h3>
                    <p className="detail-text">
                      Ready to discuss your AI project? Book a consultation to
                      explore how our patent-pending innovations can transform
                      your business.
                    </p>
                    <a
                      href="https://calendly.com/parkere-case/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button cta-button--outline"
                    >
                      <Calendar className="w-5 h-5" />
                      Book Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer-shell">
          <div className="footer-inner">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div style={{ maxWidth: "600px" }}>
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-20">
                    <Image
                      src="/new-logo-logo-only.png"
                      alt="StroomAI Logo"
                      width={80}
                      height={80}
                      className="w-full h-auto object-contain opacity-80"
                    />
                  </div>
                </div>
                <p
                  className="detail-text"
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
                  }}
                >
                  AI-powered systems to help teams predict how biological
                  compounds interact with individual physiology.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1.5rem",
                    justifyContent: "center",
                    fontSize: "0.85rem",
                    marginBottom: "2rem",
                  }}
                >
                  <a href="#about" className="footer-link">
                    About
                  </a>
                  {/* <Link href="/blog" className="footer-link">
                    Blog
                  </Link> */}
                  <a href="#contact" className="footer-link">
                    Contact
                  </a>
                  <Link href="/legal" className="footer-link">
                    Legal
                  </Link>
                </div>
              </div>
            </div>

            <div className="footer-note">
              © 2025 Stroom AI LLC. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default StroomAI;
