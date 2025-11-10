// pages/legal.js - Combined Legal Page (Privacy, Terms, Security)

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { Shield, FileText, Lock, Mail, Phone, ArrowLeft } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "../components/ThemeToggle";

const Legal = () => {
  const [activeSection, setActiveSection] = useState("privacy");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["privacy", "terms", "security"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "privacy", label: "Privacy Policy", icon: Shield },
    { id: "terms", label: "Terms of Service", icon: FileText },
    { id: "security", label: "Security", icon: Lock },
  ];

  return (
    <>
      <Head>
        <title>Legal - Privacy, Terms & Security | StroomAI</title>
        <meta
          name="description"
          content="StroomAI Privacy Policy, Terms of Service, and Security information"
        />
      </Head>

      <div className="site-shell">
        {/* Header */}
        <header className="site-nav">
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

            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/"
                className="nav-link-modern"
                style={{ color: "var(--accent-clay)" }}
              >
                <ArrowLeft className="w-4 h-4 inline mr-2" />
                Back to Home
              </Link>
              <ThemeToggle />
            </div>

            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <section className="section-shell" style={{ paddingTop: "6rem" }}>
            <div className="section-inner">
              <div className="section-heading" style={{ textAlign: "center" }}>
                <span className="section-label">Legal</span>
                <h1
                  className="hero-subtitle"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    marginBottom: "1rem",
                  }}
                >
                  Privacy, Terms & Security
                </h1>
                <p
                  className="hero-text"
                  style={{
                    maxWidth: "700px",
                    margin: "0 auto",
                    fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                    lineHeight: "1.7",
                  }}
                >
                  Comprehensive information about how we protect your data, our
                  terms of service, and our security practices.
                </p>
              </div>

              {/* Section Navigation */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  marginBottom: "3rem",
                  flexWrap: "wrap",
                }}
              >
                {sections.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => {
                      setActiveSection(id);
                      document.getElementById(id)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    style={{
                      padding: "0.75rem 1.5rem",
                      borderRadius: "8px",
                      border:
                        activeSection === id
                          ? "1px solid var(--accent-clay)"
                          : "1px solid var(--border-soft)",
                      background:
                        activeSection === id
                          ? "var(--accent-clay)"
                          : "transparent",
                      color: activeSection === id ? "white" : "var(--ink)",
                      fontSize: "0.95rem",
                      fontWeight: activeSection === id ? "600" : "400",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                ))}
              </div>

              {/* Privacy Policy Section */}
              <section id="privacy" className="section-shell">
                <div className="section-inner">
                  <div className="section-heading">
                    <span className="section-label">Privacy</span>
                    <h2 className="hero-subtitle">Privacy Policy</h2>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        1. Introduction and Commitment to Privacy
                      </h3>
                      <p
                        className="detail-text"
                        style={{ marginBottom: "1.5rem" }}
                      >
                        At StroomAI, we are committed to protecting your privacy
                        and maintaining the highest standards of data security.
                        This Privacy Policy explains how we collect, use,
                        protect, and share information in connection with our
                        AI-powered services, including our medical nutrition
                        therapy systems, personalization platforms, enterprise
                        knowledge management solutions, conservation monitoring
                        tools, and mental health support platforms.
                      </p>

                      <div
                        className="approach-card"
                        style={{ marginTop: "1.5rem" }}
                      >
                        <div>
                          <div className="detail-title">
                            Our Privacy Principles
                          </div>
                          <ul
                            className="detail-text"
                            style={{
                              marginTop: "0.75rem",
                              paddingLeft: "1.5rem",
                              listStyle: "disc",
                            }}
                          >
                            <li style={{ marginBottom: "0.5rem" }}>
                              <strong>Transparency:</strong> We clearly explain
                              what data we collect and how we use it
                            </li>
                            <li style={{ marginBottom: "0.5rem" }}>
                              <strong>Security First:</strong> We implement
                              enterprise-grade security measures to protect your
                              data
                            </li>
                            <li style={{ marginBottom: "0.5rem" }}>
                              <strong>Data Minimization:</strong> We only
                              collect data necessary for our services
                            </li>
                            <li style={{ marginBottom: "0.5rem" }}>
                              <strong>User Control:</strong> You have rights and
                              choices regarding your personal information
                            </li>
                            <li>
                              <strong>Purpose Limitation:</strong> We use data
                              only for the purposes disclosed to you
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        2. Information We Collect
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                          gap: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Information You Provide
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>Account Information</li>
                              <li>Health Information</li>
                              <li>Personal Preferences</li>
                              <li>Professional Information</li>
                              <li>Communication Data</li>
                              <li>Payment Information</li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Automatically Collected
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>Usage Data</li>
                              <li>Device Information</li>
                              <li>Performance Data</li>
                              <li>Analytics Data</li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Third Party Sources
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>Integration Data</li>
                              <li>Public Data Sources</li>
                              <li>Third-Party Services</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        3. How We Use Your Information
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(300px, 1fr))",
                          gap: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <div className="approach-card">
                          <div>
                            <div className="detail-title">Service Delivery</div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>
                                Provide personalized AI recommendations and
                                insights
                              </li>
                              <li>
                                Deliver medical nutrition therapy and health
                                optimization services
                              </li>
                              <li>
                                Enable cross-site personalization and styling
                                recommendations
                              </li>
                              <li>
                                Power enterprise knowledge management and
                                chatbot responses
                              </li>
                              <li>
                                Monitor and report on conservation and wildlife
                                protection activities
                              </li>
                              <li>
                                Provide mental health support and crisis
                                intervention services
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Service Improvement and AI Development
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>
                                Train and improve our AI models and algorithms
                              </li>
                              <li>
                                Analyze usage patterns to enhance service
                                performance
                              </li>
                              <li>Develop new features and capabilities</li>
                              <li>
                                Conduct research and development for
                                breakthrough innovations
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Communication and Support
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>
                                Send service updates, security notifications,
                                and important announcements
                              </li>
                              <li>
                                Provide customer support and technical
                                assistance
                              </li>
                              <li>Respond to inquiries and feedback</li>
                              <li>
                                Send marketing communications (with your
                                consent, where required)
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        4. Data Security and Infrastructure
                      </h3>
                      <div
                        className="approach-card"
                        style={{ marginTop: "1.5rem" }}
                      >
                        <div>
                          <div className="detail-title">
                            Enterprise-Grade Security Measures
                          </div>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns:
                                "repeat(auto-fit, minmax(250px, 1fr))",
                              gap: "1.5rem",
                              marginTop: "1.5rem",
                            }}
                          >
                            <div>
                              <h4
                                className="detail-title"
                                style={{
                                  fontSize: "1rem",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                Encryption & Access
                              </h4>
                              <ul
                                className="detail-text"
                                style={{
                                  paddingLeft: "1.5rem",
                                  listStyle: "disc",
                                }}
                              >
                                <li>AES-256 encryption at rest</li>
                                <li>TLS 1.2+ encryption in transit</li>
                                <li>Multi-factor authentication</li>
                                <li>Role-based access controls</li>
                              </ul>
                            </div>
                            <div>
                              <h4
                                className="detail-title"
                                style={{
                                  fontSize: "1rem",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                Compliance & Monitoring
                              </h4>
                              <ul
                                className="detail-text"
                                style={{
                                  paddingLeft: "1.5rem",
                                  listStyle: "disc",
                                }}
                              >
                                <li>SOC 2 Type 2 compliance</li>
                                <li>24/7 security monitoring</li>
                                <li>Automated threat detection</li>
                                <li>Point-in-time recovery</li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="approach-card"
                            style={{
                              marginTop: "1.5rem",
                              backgroundColor: "rgba(229, 115, 77, 0.05)",
                            }}
                          >
                            <div>
                              <div className="detail-title">
                                HIPAA Compliance (Healthcare Services)
                              </div>
                              <p
                                className="detail-text"
                                style={{ marginTop: "0.75rem" }}
                              >
                                For medical nutrition therapy and health-related
                                services, we maintain HIPAA compliance through
                                Business Associate Agreements (BAAs) and handle
                                Protected Health Information (PHI) according to
                                HIPAA privacy and security rules.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        5. Your Rights and Choices
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                          gap: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Access and Control
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>Access your personal information</li>
                              <li>Update or correct inaccurate data</li>
                              <li>Delete your account and associated data</li>
                              <li>Download your data in a portable format</li>
                              <li>Restrict certain processing activities</li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">AI and Marketing</div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>Opt out of AI training using your data</li>
                              <li>
                                Request human review of automated decisions
                              </li>
                              <li>Unsubscribe from marketing communications</li>
                              <li>Control push notifications and alerts</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        6. Contact Information
                      </h3>
                      <div
                        className="approach-card"
                        style={{ marginTop: "1.5rem", maxWidth: "600px" }}
                      >
                        <div>
                          <div className="detail-title">Privacy Officer</div>
                          <p
                            className="detail-text"
                            style={{ marginTop: "0.75rem" }}
                          >
                            <strong>StroomAI</strong>
                            <br />
                            Email:{" "}
                            <a
                              href="mailto:info@stroomai.com"
                              style={{ color: "var(--accent-clay)" }}
                            >
                              info@stroomai.com
                            </a>
                            <br />
                            Phone:{" "}
                            <a
                              href="tel:+19297079902"
                              style={{ color: "var(--accent-clay)" }}
                            >
                              +1 (929) 707-9902
                            </a>
                            <br />
                            Address: New York, NY
                            <br />
                            <br />
                            <span style={{ fontSize: "0.9rem" }}>
                              <strong>For EU Residents:</strong> You may also
                              file a complaint with your local data protection
                              authority.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        7. Regional Specific Rights
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(300px, 1fr))",
                          gap: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              California Residents (CCPA/CPRA)
                            </div>
                            <p
                              className="detail-text"
                              style={{ marginTop: "0.75rem" }}
                            >
                              You have additional rights under the California
                              Consumer Privacy Act, including the right to know
                              what personal information we collect and how we
                              use it, delete your personal information, and opt
                              out of the sale of personal information.
                            </p>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              EU/UK Residents (GDPR)
                            </div>
                            <p
                              className="detail-text"
                              style={{ marginTop: "0.75rem" }}
                            >
                              You have rights under the General Data Protection
                              Regulation, including data portability, the right
                              to be forgotten, and the right to object to
                              processing. You may also file a complaint with
                              your local data protection authority.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Terms of Service Section */}
              <section id="terms" className="section-shell">
                <div className="section-inner">
                  <div className="section-heading">
                    <span className="section-label">Terms</span>
                    <h2 className="hero-subtitle">Terms of Service</h2>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        1. Agreement and Acceptance
                      </h3>
                      <p
                        className="detail-text"
                        style={{ marginBottom: "1.5rem" }}
                      >
                        These Terms of Service (&quot;Terms&quot;) govern your
                        use of StroomAI&apos;s AI-powered services, platforms,
                        and technologies (collectively, the
                        &quot;Services&quot;). By accessing or using our
                        Services, you agree to be bound by these Terms and our
                        Privacy Policy.
                      </p>

                      <div
                        className="approach-card"
                        style={{ marginTop: "1.5rem" }}
                      >
                        <div>
                          <div className="detail-title">
                            Service Categories Covered:
                          </div>
                          <ul
                            className="detail-text"
                            style={{
                              marginTop: "0.75rem",
                              paddingLeft: "1.5rem",
                              listStyle: "disc",
                            }}
                          >
                            <li>
                              Medical nutrition therapy and health optimization
                              systems
                            </li>
                            <li>
                              Cross-site personalization and styling platforms
                            </li>
                            <li>
                              Enterprise knowledge management and chatbot
                              solutions
                            </li>
                            <li>Wildlife conservation and monitoring tools</li>
                            <li>
                              Mental health support platforms and crisis
                              intervention systems
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        2. Service Descriptions and Limitations
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(300px, 1fr))",
                          gap: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Medical Nutrition Therapy Services
                            </div>
                            <p
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                marginBottom: "0.75rem",
                              }}
                            >
                              Our AI-powered nutrition therapy platform provides
                              personalized meal planning and dietary
                              recommendations.
                            </p>
                            <div
                              style={{
                                backgroundColor: "rgba(239, 68, 68, 0.1)",
                                padding: "1rem",
                                borderRadius: "8px",
                              }}
                            >
                              <div
                                className="detail-title"
                                style={{
                                  fontSize: "0.95rem",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                Important Disclaimers:
                              </div>
                              <ul
                                className="detail-text"
                                style={{
                                  paddingLeft: "1.5rem",
                                  listStyle: "disc",
                                  fontSize: "0.9rem",
                                }}
                              >
                                <li>
                                  Our services are for informational purposes
                                  and do not constitute medical advice
                                </li>
                                <li>
                                  Always consult healthcare professionals before
                                  making significant dietary changes
                                </li>
                                <li>
                                  We monitor drug-food interactions but cannot
                                  replace professional medical supervision
                                </li>
                                <li>
                                  Emergency medical situations require immediate
                                  professional medical attention
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Personalization and Styling Services
                            </div>
                            <p
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                marginBottom: "0.75rem",
                              }}
                            >
                              Our cross-site personalization technology provides
                              styling recommendations and virtual try-on
                              capabilities.
                            </p>
                            <ul
                              className="detail-text"
                              style={{
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>
                                Recommendations are based on AI analysis and
                                personal preferences
                              </li>
                              <li>
                                Results may vary based on individual factors and
                                preferences
                              </li>
                              <li>
                                We partner with retailers but are not
                                responsible for third-party merchant policies
                              </li>
                              <li>
                                Virtual try-on results are approximations and
                                may not reflect actual fit
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Enterprise Knowledge Management
                            </div>
                            <p
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                marginBottom: "0.75rem",
                              }}
                            >
                              Our intelligent chatbot and knowledge management
                              systems provide information synthesis and query
                              responses.
                            </p>
                            <ul
                              className="detail-text"
                              style={{
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>
                                Provide information synthesis and query
                                responses based on available data
                              </li>
                              <li>
                                Accuracy depends on the quality and completeness
                                of input data
                              </li>
                              <li>
                                Should supplement, not replace, human judgment
                                and expertise
                              </li>
                              <li>
                                May require integration and customization for
                                optimal performance
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Conservation Monitoring Services
                            </div>
                            <p
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                marginBottom: "0.75rem",
                              }}
                            >
                              Our wildlife protection and monitoring systems
                              detect and report potential illegal activities.
                            </p>
                            <ul
                              className="detail-text"
                              style={{
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>
                                Detect and report potential illegal activities
                                based on available data
                              </li>
                              <li>
                                Reports are generated automatically and may
                                require human verification
                              </li>
                              <li>
                                We cooperate with law enforcement but are not
                                law enforcement agents
                              </li>
                              <li>
                                Detection accuracy may vary based on data
                                quality and system capabilities
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Mental Health Support Platform
                            </div>
                            <p
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                marginBottom: "0.75rem",
                              }}
                            >
                              Our AI-powered mental health platform provides
                              support and resources with crisis intervention
                              capabilities.
                            </p>
                            <ul
                              className="detail-text"
                              style={{
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>
                                24/7 AI crisis detection with immediate
                                escalation protocols
                              </li>
                              <li>
                                Services supplement but do not replace
                                professional mental health care
                              </li>
                              <li>
                                If you are in immediate danger, contact
                                emergency services (911) immediately
                              </li>
                              <li>
                                Our platform facilitates access to professional
                                support but does not provide therapy
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        3. User Responsibilities and Conduct
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                          gap: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <div className="approach-card">
                          <div>
                            <div className="detail-title">Account Security</div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>Maintain confidentiality of credentials</li>
                              <li>All activities under your account</li>
                              <li>Promptly notify us of security breaches</li>
                              <li>Use strong passwords and MFA</li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">Acceptable Use</div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>Do not use for illegal purposes</li>
                              <li>Do not attempt to bypass security</li>
                              <li>Do not interfere with operations</li>
                              <li>Do not upload malicious code</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        4. Data Use and AI Training
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(300px, 1fr))",
                          gap: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Data Processing for Service Delivery
                            </div>
                            <p
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                marginBottom: "0.5rem",
                              }}
                            >
                              We process your data to:
                            </p>
                            <ul
                              className="detail-text"
                              style={{
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>
                                Provide personalized AI recommendations and
                                insights
                              </li>
                              <li>
                                Maintain and improve service functionality
                              </li>
                              <li>Ensure security and prevent misuse</li>
                              <li>Comply with legal obligations</li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              AI Model Training and Improvement
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>
                                We may use aggregated, de-identified data to
                                improve our AI models
                              </li>
                              <li>
                                You can opt out of data use for AI training in
                                your account settings
                              </li>
                              <li>
                                We implement privacy-preserving techniques in
                                our training processes
                              </li>
                              <li>
                                Our AI systems are designed to minimize bias and
                                ensure fairness
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Transparency and Control
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>
                                We provide clear information about how our AI
                                systems make decisions
                              </li>
                              <li>
                                You can request human review of automated
                                decisions that significantly affect you
                              </li>
                              <li>
                                We maintain audit trails for AI decision-making
                                processes
                              </li>
                              <li>
                                You have rights to access, correct, and delete
                                your personal data
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        5. Intellectual Property Rights
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                          gap: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              StroomAI Intellectual Property
                            </div>
                            <p
                              className="detail-text"
                              style={{ marginTop: "0.75rem" }}
                            >
                              Our Services contain proprietary technologies,
                              including patent-pending AI innovations,
                              copyrighted software, trademarks, and trade
                              secrets. You may not copy, modify, distribute, or
                              create derivative works without explicit
                              permission.
                            </p>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              User Content and Data
                            </div>
                            <p
                              className="detail-text"
                              style={{ marginTop: "0.75rem" }}
                            >
                              You retain ownership of data and content you
                              provide. You grant us a license to use your data
                              as described in our Privacy Policy.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        6. Privacy and Security Guarantees
                      </h3>
                      <div
                        className="approach-card"
                        style={{ marginTop: "1.5rem" }}
                      >
                        <div>
                          <div className="detail-title">
                            Enterprise-Grade Security Commitment
                          </div>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns:
                                "repeat(auto-fit, minmax(250px, 1fr))",
                              gap: "1.5rem",
                              marginTop: "1.5rem",
                            }}
                          >
                            <div>
                              <h4
                                className="detail-title"
                                style={{
                                  fontSize: "1rem",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                Security Measures
                              </h4>
                              <ul
                                className="detail-text"
                                style={{
                                  paddingLeft: "1.5rem",
                                  listStyle: "disc",
                                }}
                              >
                                <li>
                                  AES-256 encryption at rest, TLS 1.2+ in
                                  transit
                                </li>
                                <li>SOC 2 Type 2 and HIPAA compliance</li>
                                <li>
                                  Multi-factor authentication and role-based
                                  permissions
                                </li>
                                <li>
                                  24/7 security monitoring with automated threat
                                  response
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4
                                className="detail-title"
                                style={{
                                  fontSize: "1rem",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                Data Protection
                              </h4>
                              <ul
                                className="detail-text"
                                style={{
                                  paddingLeft: "1.5rem",
                                  listStyle: "disc",
                                }}
                              >
                                <li>
                                  We never sell your personal data to third
                                  parties
                                </li>
                                <li>
                                  Data sharing limited to specific circumstances
                                </li>
                                <li>
                                  Regular security assessments and penetration
                                  testing
                                </li>
                                <li>
                                  Point-in-time recovery and encrypted backup
                                  systems
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        7. Service Level Agreements and Availability
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(200px, 1fr))",
                          gap: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <div className="approach-card">
                          <div style={{ textAlign: "center" }}>
                            <div className="detail-title">
                              Standard Services
                            </div>
                            <div
                              style={{
                                fontSize: "2rem",
                                fontWeight: "700",
                                color: "var(--accent-clay)",
                                margin: "1rem 0 0.5rem",
                              }}
                            >
                              High
                            </div>
                            <p className="detail-text">Uptime Commitment</p>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div style={{ textAlign: "center" }}>
                            <div className="detail-title">
                              Enterprise Services
                            </div>
                            <div
                              style={{
                                fontSize: "2rem",
                                fontWeight: "700",
                                color: "var(--accent-clay)",
                                margin: "1rem 0 0.5rem",
                              }}
                            >
                              Premium
                            </div>
                            <p className="detail-text">Uptime with SLAs</p>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div style={{ textAlign: "center" }}>
                            <div className="detail-title">Crisis Services</div>
                            <div
                              style={{
                                fontSize: "2rem",
                                fontWeight: "700",
                                color: "var(--accent-clay)",
                                margin: "1rem 0 0.5rem",
                              }}
                            >
                              Critical
                            </div>
                            <p className="detail-text">
                              Mental Health Crisis Detection
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        8. Limitation of Liability and Disclaimers
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(300px, 1fr))",
                          gap: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Service Disclaimers
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>
                                Services are provided &quot;as is&quot; without
                                warranties of any kind
                              </li>
                              <li>
                                We do not guarantee specific outcomes or results
                              </li>
                              <li>
                                AI recommendations are not substitutes for
                                professional judgment
                              </li>
                              <li>
                                Third-party integrations may have separate terms
                                and limitations
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Limitation of Liability
                            </div>
                            <p
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                marginBottom: "0.5rem",
                              }}
                            >
                              To the maximum extent permitted by law:
                            </p>
                            <ul
                              className="detail-text"
                              style={{
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>
                                Our liability is limited to the amount paid for
                                Services in the preceding 12 months
                              </li>
                              <li>
                                We are not liable for indirect, incidental, or
                                consequential damages
                              </li>
                              <li>
                                We are not responsible for decisions made based
                                on our recommendations
                              </li>
                              <li>
                                Business interruption or data loss limitations
                                apply
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        9. Pricing and Payment Terms
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                          gap: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <div className="approach-card">
                          <div>
                            <div className="detail-title">Service Pricing</div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>Transparent pricing with no hidden fees</li>
                              <li>
                                Enterprise pricing available with custom service
                                level agreements
                              </li>
                              <li>
                                Free trials and freemium options for qualifying
                                users
                              </li>
                              <li>
                                Volume discounts for large-scale deployments
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Payment and Billing
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>
                                Secure payment processing through certified
                                payment providers
                              </li>
                              <li>We do not store credit card information</li>
                              <li>
                                Automatic billing for subscription services with
                                advance notice
                              </li>
                              <li>
                                Refund policies detailed in specific service
                                agreements
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        10. Contact Information
                      </h3>
                      <div
                        className="approach-card"
                        style={{ marginTop: "1.5rem", maxWidth: "600px" }}
                      >
                        <div>
                          <div className="detail-title">Contact Us</div>
                          <p
                            className="detail-text"
                            style={{ marginTop: "0.75rem" }}
                          >
                            <strong>StroomAI</strong>
                            <br />
                            Email:{" "}
                            <a
                              href="mailto:info@stroomai.com"
                              style={{ color: "var(--accent-clay)" }}
                            >
                              info@stroomai.com
                            </a>
                            <br />
                            Phone:{" "}
                            <a
                              href="tel:+19297079902"
                              style={{ color: "var(--accent-clay)" }}
                            >
                              +1 (929) 707-9902
                            </a>
                            <br />
                            Address: New York, NY
                            <br />
                            <br />
                            <span style={{ fontSize: "0.9rem" }}>
                              For legal inquiries, customer support, or urgent
                              security concerns.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Security Section */}
              <section id="security" className="section-shell">
                <div className="section-inner">
                  <div className="section-heading">
                    <span className="section-label">Security</span>
                    <h2 className="hero-subtitle">
                      Security & Data Protection
                    </h2>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <div
                        className="approach-card"
                        style={{ marginTop: "1.5rem" }}
                      >
                        <div>
                          <div className="detail-title">Executive Summary</div>
                          <p
                            className="detail-text"
                            style={{ marginTop: "0.75rem" }}
                          >
                            StroomAI employs enterprise-grade security measures
                            and industry-leading data protection technologies to
                            ensure the highest levels of security, privacy, and
                            compliance. Our multi-layered security approach
                            protects sensitive data across healthcare,
                            enterprise, and personal information domains while
                            maintaining the performance and innovation our
                            clients expect.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        Infrastructure Security
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                          gap: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Database Security Architecture
                            </div>
                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns:
                                  "repeat(auto-fit, minmax(200px, 1fr))",
                                gap: "1rem",
                                marginTop: "1rem",
                              }}
                            >
                              <div>
                                <div
                                  className="detail-title"
                                  style={{
                                    fontSize: "0.95rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Isolated Infrastructure
                                </div>
                                <p
                                  className="detail-text"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  Each project operates in completely isolated
                                  database instances, eliminating
                                  cross-contamination risks
                                </p>
                              </div>
                              <div>
                                <div
                                  className="detail-title"
                                  style={{
                                    fontSize: "0.95rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Enterprise-Grade Database Engine
                                </div>
                                <p
                                  className="detail-text"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  Built on battle-tested, enterprise-standard
                                  database technology with proven reliability
                                </p>
                              </div>
                              <div>
                                <div
                                  className="detail-title"
                                  style={{
                                    fontSize: "0.95rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Network-Level Protection
                                </div>
                                <p
                                  className="detail-text"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  Advanced network security controls restrict
                                  database access to authorized systems only
                                </p>
                              </div>
                              <div>
                                <div
                                  className="detail-title"
                                  style={{
                                    fontSize: "0.95rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Geographic Data Residency
                                </div>
                                <p
                                  className="detail-text"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  Flexible data storage options to meet regional
                                  compliance requirements
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Encryption Standards
                            </div>
                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns:
                                  "repeat(auto-fit, minmax(200px, 1fr))",
                                gap: "1rem",
                                marginTop: "1rem",
                              }}
                            >
                              <div>
                                <div
                                  className="detail-title"
                                  style={{
                                    fontSize: "0.95rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  At-Rest Encryption
                                </div>
                                <p
                                  className="detail-text"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  All stored data is protected using AES-256
                                  encryption, the gold standard for data
                                  protection
                                </p>
                              </div>
                              <div>
                                <div
                                  className="detail-title"
                                  style={{
                                    fontSize: "0.95rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  In-Transit Encryption
                                </div>
                                <p
                                  className="detail-text"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  All data transmission secured via TLS 1.2+
                                  protocols
                                </p>
                              </div>
                              <div>
                                <div
                                  className="detail-title"
                                  style={{
                                    fontSize: "0.95rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Application-Level Encryption
                                </div>
                                <p
                                  className="detail-text"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  Sensitive information like access tokens and
                                  API keys receive additional encryption layers
                                </p>
                              </div>
                              <div>
                                <div
                                  className="detail-title"
                                  style={{
                                    fontSize: "0.95rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Key Management
                                </div>
                                <p
                                  className="detail-text"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  Secure key rotation and management practices
                                  following industry best practices
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        Access Control & Authentication
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                          gap: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Multi-Factor Authentication (MFA)
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>Account-level MFA</li>
                              <li>Enterprise SSO integration</li>
                              <li>SAML & OpenID Connect support</li>
                              <li>Role-based access control</li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Row-Level Security (RLS)
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>Granular access control</li>
                              <li>Multi-tenant isolation</li>
                              <li>Dynamic permissions</li>
                              <li>AI-assisted policy creation</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        Compliance & Certifications
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                          gap: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Healthcare Compliance (HIPAA)
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>Business Associate Agreements (BAA)</li>
                              <li>
                                Protected Health Information (PHI) handling
                              </li>
                              <li>Comprehensive audit trails</li>
                              <li>Shared responsibility model</li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Enterprise Security Standards
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>SOC 2 Type 2 Compliance</li>
                              <li>Regular security audits</li>
                              <li>Industry certifications</li>
                              <li>24/7 security monitoring</li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              International Privacy Laws
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>GDPR Compliance</li>
                              <li>CCPA/CPRA Compliance</li>
                              <li>Regional data laws</li>
                              <li>Data localization options</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        Monitoring & Incident Response
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                          gap: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              24/7 Security Monitoring
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>Real-time threat detection</li>
                              <li>AI-powered anomaly detection</li>
                              <li>Immediate containment procedures</li>
                              <li>Enterprise-grade SIEM logging</li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Incident Response Procedures
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>Dedicated 24/7 security response team</li>
                              <li>Clear escalation protocols</li>
                              <li>Prompt client notification</li>
                              <li>Advanced forensic capabilities</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        AI Security & Privacy
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(300px, 1fr))",
                          gap: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Secure AI Development
                            </div>
                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns:
                                  "repeat(auto-fit, minmax(200px, 1fr))",
                                gap: "1rem",
                                marginTop: "1rem",
                              }}
                            >
                              <div>
                                <div
                                  className="detail-title"
                                  style={{
                                    fontSize: "0.95rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Privacy-Preserving Training
                                </div>
                                <p
                                  className="detail-text"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  AI models trained using techniques that
                                  protect individual privacy
                                </p>
                              </div>
                              <div>
                                <div
                                  className="detail-title"
                                  style={{
                                    fontSize: "0.95rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Bias Detection and Mitigation
                                </div>
                                <p
                                  className="detail-text"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  Regular auditing of AI systems to ensure
                                  fairness and prevent discrimination
                                </p>
                              </div>
                              <div>
                                <div
                                  className="detail-title"
                                  style={{
                                    fontSize: "0.95rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Model Security
                                </div>
                                <p
                                  className="detail-text"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  Protection of proprietary AI algorithms and
                                  training data
                                </p>
                              </div>
                              <div>
                                <div
                                  className="detail-title"
                                  style={{
                                    fontSize: "0.95rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Federated Learning Options
                                </div>
                                <p
                                  className="detail-text"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  Advanced techniques for training AI without
                                  centralizing sensitive data
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Data Use Transparency
                            </div>
                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns:
                                  "repeat(auto-fit, minmax(200px, 1fr))",
                                gap: "1rem",
                                marginTop: "1rem",
                              }}
                            >
                              <div>
                                <div
                                  className="detail-title"
                                  style={{
                                    fontSize: "0.95rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Clear Data Usage Policies
                                </div>
                                <p
                                  className="detail-text"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  Explicit explanation of how data is used for
                                  AI training and improvement
                                </p>
                              </div>
                              <div>
                                <div
                                  className="detail-title"
                                  style={{
                                    fontSize: "0.95rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Opt-Out Mechanisms
                                </div>
                                <p
                                  className="detail-text"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  User controls to prevent data use for AI
                                  training purposes
                                </p>
                              </div>
                              <div>
                                <div
                                  className="detail-title"
                                  style={{
                                    fontSize: "0.95rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Algorithmic Transparency
                                </div>
                                <p
                                  className="detail-text"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  Information about how AI systems make
                                  decisions affecting users
                                </p>
                              </div>
                              <div>
                                <div
                                  className="detail-title"
                                  style={{
                                    fontSize: "0.95rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Human Review Options
                                </div>
                                <p
                                  className="detail-text"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  Ability to request human review of automated
                                  decisions
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        Advanced Security Features
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                          gap: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Database Security
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>SQL injection prevention</li>
                              <li>Secure connection pooling</li>
                              <li>Real-time query monitoring</li>
                              <li>Performance-optimized security</li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">API Security</div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>Auto-generated secure APIs</li>
                              <li>Rate limiting protection</li>
                              <li>Secure API key management</li>
                              <li>Comprehensive request validation</li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Real-Time Security
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>Secure WebSocket connections</li>
                              <li>Message authentication</li>
                              <li>Connection monitoring</li>
                              <li>Automatic disconnection</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        Security Best Practices for Clients
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                          gap: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Implementation Recommendations
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>
                                Use separate environments for development,
                                testing, and production
                              </li>
                              <li>
                                Secure storage and rotation of API keys and
                                credentials
                              </li>
                              <li>
                                Periodic assessment of security configurations
                              </li>
                              <li>
                                Security awareness training for all team members
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Monitoring and Maintenance
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>Utilize built-in security recommendations</li>
                              <li>Periodic review of access permissions</li>
                              <li>
                                Clear procedures for reporting security issues
                              </li>
                              <li>Prompt application of security updates</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="hero-subtitle"
                        style={{
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          marginBottom: "1rem",
                        }}
                      >
                        Transparency & Accountability
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                          gap: "1.5rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Regular Reporting
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>Security metrics and incident statistics</li>
                              <li>
                                Ongoing compliance and certification updates
                              </li>
                              <li>
                                Public transparency reports where permitted
                              </li>
                              <li>Independent third-party assessments</li>
                            </ul>
                          </div>
                        </div>

                        <div className="approach-card">
                          <div>
                            <div className="detail-title">
                              Client Communication
                            </div>
                            <ul
                              className="detail-text"
                              style={{
                                marginTop: "0.75rem",
                                paddingLeft: "1.5rem",
                                listStyle: "disc",
                              }}
                            >
                              <li>Prompt security issue notifications</li>
                              <li>Clear policy update communications</li>
                              <li>Dedicated security team contact</li>
                              <li>Ongoing security guidance and resources</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section className="section-shell">
                <div className="section-inner">
                  <div
                    className="section-heading"
                    style={{ textAlign: "center", marginBottom: "2rem" }}
                  >
                    <h2 className="hero-subtitle">Questions or Concerns?</h2>
                    <p
                      className="hero-text"
                      style={{
                        maxWidth: "600px",
                        margin: "0 auto",
                        fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                      }}
                    >
                      Contact our legal and security teams for any questions
                      about privacy, terms, or security.
                    </p>
                  </div>

                  <div
                    className="approach-card"
                    style={{ maxWidth: "600px", margin: "0 auto" }}
                  >
                    <div>
                      <div className="detail-title">Contact Us</div>
                      <p
                        className="detail-text"
                        style={{ marginTop: "0.75rem" }}
                      >
                        <strong>StroomAI</strong>
                        <br />
                        Email:{" "}
                        <a
                          href="mailto:info@stroomai.com"
                          style={{ color: "var(--accent-clay)" }}
                        >
                          info@stroomai.com
                        </a>
                        <br />
                        Phone:{" "}
                        <a
                          href="tel:+19297079902"
                          style={{ color: "var(--accent-clay)" }}
                        >
                          +1 (929) 707-9902
                        </a>
                        <br />
                        Address: New York, NY
                        <br />
                        <br />
                        <span style={{ fontSize: "0.9rem" }}>
                          For legal inquiries, customer support, or urgent
                          security concerns (available 24/7).
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </main>

        {/* Footer */}
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
                  compounds interact with individual physiology
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
                  <Link href="/#about" className="footer-link">
                    About
                  </Link>
                  <Link href="/blog" className="footer-link">
                    Blog
                  </Link>
                  <Link href="/#contact" className="footer-link">
                    Contact
                  </Link>
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

export default Legal;
