// pages/privacy-policy.js - StroomAI Privacy Policy Page

import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Users, Globe, Mail } from "lucide-react";
import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="py-6 px-4 bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 mr-3 rounded-lg overflow-hidden">
              <Image
                src="/StroomAI.png"
                alt="StroomAI Logo"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              StroomAI
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-white/50">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your privacy and data security are our top priorities. Learn how
              we protect your information across all StroomAI services.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Lock className="w-8 h-8 text-blue-600" />
                1. Introduction and Commitment to Privacy
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6">
                  At StroomAI, we are committed to protecting your privacy and
                  maintaining the highest standards of data security. This
                  Privacy Policy explains how we collect, use, protect, and
                  share information in connection with our AI-powered services,
                  including our medical nutrition therapy systems,
                  personalization platforms, enterprise knowledge management
                  solutions, conservation monitoring tools, and mental health
                  support platforms.
                </p>

                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    Our Privacy Principles:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Transparency:</strong> We clearly explain what
                        data we collect and how we use it
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Security First:</strong> We implement
                        enterprise-grade security measures to protect your data
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Data Minimization:</strong> We only collect data
                        necessary for our services
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>User Control:</strong> You have rights and
                        choices regarding your personal information
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Purpose Limitation:</strong> We use data only
                        for the purposes disclosed to you
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Eye className="w-8 h-8 text-blue-600" />
                2. Information We Collect
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold mb-4 text-blue-900">
                    Information You Provide
                  </h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Account Information</li>
                    <li>• Health Information</li>
                    <li>• Personal Preferences</li>
                    <li>• Professional Information</li>
                    <li>• Communication Data</li>
                    <li>• Payment Information</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                  <h3 className="text-xl font-bold mb-4 text-green-900">
                    Automatically Collected
                  </h3>
                  <ul className="space-y-2 text-green-800">
                    <li>• Usage Data</li>
                    <li>• Device Information</li>
                    <li>• Performance Data</li>
                    <li>• Analytics Data</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200">
                  <h3 className="text-xl font-bold mb-4 text-orange-900">
                    Third Party Sources
                  </h3>
                  <ul className="space-y-2 text-orange-800">
                    <li>• Integration Data</li>
                    <li>• Public Data Sources</li>
                    <li>• Third-Party Services</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Globe className="w-8 h-8 text-blue-600" />
                3. How We Use Your Information
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Service Delivery
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Provide personalized AI recommendations and insights
                    </li>
                    <li>
                      • Deliver medical nutrition therapy and health
                      optimization services
                    </li>
                    <li>
                      • Enable cross-site personalization and styling
                      recommendations
                    </li>
                    <li>
                      • Power enterprise knowledge management and chatbot
                      responses
                    </li>
                    <li>
                      • Monitor and report on conservation and wildlife
                      protection activities
                    </li>
                    <li>
                      • Provide mental health support and crisis intervention
                      services
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Service Improvement and AI Development
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Train and improve our AI models and algorithms</li>
                    <li>
                      • Analyze usage patterns to enhance service performance
                    </li>
                    <li>• Develop new features and capabilities</li>
                    <li>
                      • Conduct research and development for breakthrough
                      innovations
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Communication and Support
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Send service updates, security notifications, and
                      important announcements
                    </li>
                    <li>• Provide customer support and technical assistance</li>
                    <li>• Respond to inquiries and feedback</li>
                    <li>
                      • Send marketing communications (with your consent, where
                      required)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-600" />
                4. Data Security and Infrastructure
              </h2>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl border border-blue-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Enterprise-Grade Security Measures
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-900">
                      Encryption & Access
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• AES-256 encryption at rest</li>
                      <li>• TLS 1.2+ encryption in transit</li>
                      <li>• Multi-factor authentication</li>
                      <li>• Role-based access controls</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-900">
                      Compliance & Monitoring
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• SOC 2 Type 2 compliance</li>
                      <li>• 24/7 security monitoring</li>
                      <li>• Automated threat detection</li>
                      <li>• Point-in-time recovery</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-100 rounded-xl">
                  <h4 className="font-bold text-blue-900 mb-2">
                    HIPAA Compliance (Healthcare Services)
                  </h4>
                  <p className="text-blue-800">
                    For medical nutrition therapy and health-related services,
                    we maintain HIPAA compliance through Business Associate
                    Agreements (BAAs) and handle Protected Health Information
                    (PHI) according to HIPAA privacy and security rules.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-600" />
                5. Your Rights and Choices
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                  <h3 className="text-xl font-bold mb-4 text-purple-900">
                    Access and Control
                  </h3>
                  <ul className="space-y-2 text-purple-800">
                    <li>• Access your personal information</li>
                    <li>• Update or correct inaccurate data</li>
                    <li>• Delete your account and associated data</li>
                    <li>• Download your data in a portable format</li>
                    <li>• Restrict certain processing activities</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200">
                  <h3 className="text-xl font-bold mb-4 text-orange-900">
                    AI and Marketing
                  </h3>
                  <ul className="space-y-2 text-orange-800">
                    <li>• Opt out of AI training using your data</li>
                    <li>• Request human review of automated decisions</li>
                    <li>• Unsubscribe from marketing communications</li>
                    <li>• Control push notifications and alerts</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Mail className="w-8 h-8 text-blue-600" />
                6. Contact Information
              </h2>

              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-8 rounded-2xl border border-blue-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      Privacy Officer
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>StroomAI</strong>
                      </p>
                      <p>
                        Email:{" "}
                        <a
                          href="mailto:info@stroomai.com"
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          info@stroomai.com
                        </a>
                      </p>
                      <p>
                        Phone:{" "}
                        <a
                          href="tel:+19297079902"
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          +1 (929) 707-9902
                        </a>
                      </p>
                      <p>Address: New York, NY</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      Data Protection Officer
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>For EU Residents</strong>
                      </p>
                      <p>
                        Email:{" "}
                        <a
                          href="mailto:info@stroomai.com"
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          info@stroomai.com
                        </a>
                      </p>
                      <p className="text-sm text-gray-600">
                        You may also file a complaint with your local data
                        protection authority.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Regional Rights */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                7. Regional Specific Rights
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl border border-yellow-200">
                  <h3 className="text-xl font-bold mb-4 text-yellow-900">
                    California Residents (CCPA/CPRA)
                  </h3>
                  <p className="text-yellow-800">
                    You have additional rights under the California Consumer
                    Privacy Act, including the right to know what personal
                    information we collect and how we use it, delete your
                    personal information, and opt out of the sale of personal
                    information.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold mb-4 text-blue-900">
                    EU/UK Residents (GDPR)
                  </h3>
                  <p className="text-blue-800">
                    You have rights under the General Data Protection
                    Regulation, including data portability, the right to be
                    forgotten, and the right to object to processing. You may
                    also file a complaint with your local data protection
                    authority.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="text-center text-gray-600 italic">
              This Privacy Policy is designed to provide transparency about our
              data practices while ensuring the highest standards of security
              and compliance across all StroomAI services.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-16 px-4 bg-gradient-to-r from-gray-900 to-blue-900 text-white mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 mr-3 rounded-lg overflow-hidden">
                  <Image
                    src="/StroomAI.png"
                    alt="StroomAI Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
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
                  <Link
                    href="/#solutions"
                    className="hover:text-white transition-colors"
                  >
                    ModeAI Stylist
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#solutions"
                    className="hover:text-white transition-colors"
                  >
                    HygeiaAI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#solutions"
                    className="hover:text-white transition-colors"
                  >
                    MeridianAI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#solutions"
                    className="hover:text-white transition-colors"
                  >
                    TraffickJam Intelligence System
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-blue-300">
                Industries
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    href="/#industries"
                    className="hover:text-white transition-colors"
                  >
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#industries"
                    className="hover:text-white transition-colors"
                  >
                    E-commerce & Retail
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#industries"
                    className="hover:text-white transition-colors"
                  >
                    Conservation & Legal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#industries"
                    className="hover:text-white transition-colors"
                  >
                    Knowledge Management
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-blue-300">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    href="/#about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
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
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
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

export default PrivacyPolicy;
