// pages/security.js - StroomAI Security & Data Protection Page

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  Lock,
  Database,
  Globe,
  Mail,
  Phone,
  CheckCircle,
  Server,
  Key,
  Eye,
  Zap,
  Cpu,
} from "lucide-react";
import Image from "next/image";

const Security = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="py-6 px-4 bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 mr-3 rounded-lg overflow-hidden border border-blue-400">
              <Image
                src="/Artwork.JPG"
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
              Security & Data Protection
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade security measures and industry-leading data
              protection technologies ensuring the highest levels of security,
              privacy, and compliance.
            </p>
          </div>

          {/* Executive Summary */}
          <section className="mb-12">
            <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-blue-500">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Executive Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">
                StroomAI employs enterprise-grade security measures and
                industry-leading data protection technologies to ensure the
                highest levels of security, privacy, and compliance. Our
                multi-layered security approach protects sensitive data across
                healthcare, enterprise, and personal information domains while
                maintaining the performance and innovation our clients expect.
              </p>
            </div>
          </section>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Infrastructure Security */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Server className="w-8 h-8 text-blue-600" />
                Infrastructure Security
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold mb-4 text-blue-900 flex items-center gap-2">
                    <Database className="w-6 h-6" />
                    Database Security Architecture
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">
                        Isolated Infrastructure
                      </h4>
                      <p className="text-blue-700 text-sm">
                        Each project operates in completely isolated database
                        instances, eliminating cross-contamination risks
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">
                        Enterprise-Grade Database Engine
                      </h4>
                      <p className="text-blue-700 text-sm">
                        Built on battle-tested, enterprise-standard database
                        technology with proven reliability
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">
                        Network-Level Protection
                      </h4>
                      <p className="text-blue-700 text-sm">
                        Advanced network security controls restrict database
                        access to authorized systems only
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">
                        Geographic Data Residency
                      </h4>
                      <p className="text-blue-700 text-sm">
                        Flexible data storage options to meet regional
                        compliance requirements
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                  <h3 className="text-xl font-bold mb-4 text-green-900 flex items-center gap-2">
                    <Lock className="w-6 h-6" />
                    Encryption Standards
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-green-800 mb-2">
                        At-Rest Encryption
                      </h4>
                      <p className="text-green-700 text-sm">
                        All stored data is protected using AES-256 encryption,
                        the gold standard for data protection
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800 mb-2">
                        In-Transit Encryption
                      </h4>
                      <p className="text-green-700 text-sm">
                        All data transmission secured via TLS 1.2+ protocols
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800 mb-2">
                        Application-Level Encryption
                      </h4>
                      <p className="text-green-700 text-sm">
                        Sensitive information like access tokens and API keys
                        receive additional encryption layers
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800 mb-2">
                        Key Management
                      </h4>
                      <p className="text-green-700 text-sm">
                        Secure key rotation and management practices following
                        industry best practices
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Access Control & Authentication */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Key className="w-8 h-8 text-blue-600" />
                Access Control & Authentication
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                  <h3 className="text-xl font-bold mb-4 text-purple-900">
                    Multi-Factor Authentication (MFA)
                  </h3>
                  <ul className="space-y-2 text-purple-800">
                    <li>• Account-Level MFA with authenticator apps and SMS</li>
                    <li>
                      • Enterprise SSO integration (Azure AD, Google Workspace,
                      Okta)
                    </li>
                    <li>• SAML & OpenID Connect support</li>
                    <li>• Custom claims for role-based access control</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200">
                  <h3 className="text-xl font-bold mb-4 text-orange-900">
                    Row-Level Security (RLS)
                  </h3>
                  <ul className="space-y-2 text-orange-800">
                    <li>• Granular access control with SQL-based rules</li>
                    <li>
                      • Multi-tenant isolation for complete data separation
                    </li>
                    <li>• Dynamic permissions based on user roles</li>
                    <li>• AI-assisted policy creation tools</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Compliance & Certifications */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-blue-600" />
                Compliance & Certifications
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl border border-red-200">
                  <h3 className="text-xl font-bold mb-4 text-red-900">
                    Healthcare Compliance (HIPAA)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-red-800 mb-2">
                        Business Associate Agreements (BAA)
                      </h4>
                      <p className="text-red-700 text-sm">
                        Available for healthcare clients requiring HIPAA
                        compliance
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-800 mb-2">
                        Protected Health Information (PHI)
                      </h4>
                      <p className="text-red-700 text-sm">
                        Specialized handling procedures for medical data
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-800 mb-2">
                        Audit Trails
                      </h4>
                      <p className="text-red-700 text-sm">
                        Comprehensive logging of all access to healthcare
                        information
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-800 mb-2">
                        Shared Responsibility Model
                      </h4>
                      <p className="text-red-700 text-sm">
                        Clear delineation of security responsibilities
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold mb-4 text-blue-900">
                    Enterprise Security Standards
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">
                        SOC 2 Type 2 Compliance
                      </h4>
                      <p className="text-blue-700 text-sm">
                        Independently verified security controls and procedures
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">
                        Regular Security Audits
                      </h4>
                      <p className="text-blue-700 text-sm">
                        Third-party penetration testing and security assessments
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">
                        Industry Certifications
                      </h4>
                      <p className="text-blue-700 text-sm">
                        Compliance with financial services, government, and
                        enterprise requirements
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">
                        Continuous Monitoring
                      </h4>
                      <p className="text-blue-700 text-sm">
                        24/7 security monitoring with automated threat detection
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                  <h3 className="text-xl font-bold mb-4 text-green-900">
                    International Privacy Laws
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-green-800 mb-2">
                        GDPR Compliance
                      </h4>
                      <p className="text-green-700 text-sm">
                        Full compliance with European General Data Protection
                        Regulation
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800 mb-2">
                        CCPA/CPRA Compliance
                      </h4>
                      <p className="text-green-700 text-sm">
                        California Consumer Privacy Act and amendment compliance
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800 mb-2">
                        Regional Data Laws
                      </h4>
                      <p className="text-green-700 text-sm">
                        Adherence to privacy laws across multiple jurisdictions
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800 mb-2">
                        Data Localization
                      </h4>
                      <p className="text-green-700 text-sm">
                        Options for region-specific data storage where required
                        by law
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Monitoring & Incident Response */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Eye className="w-8 h-8 text-blue-600" />
                Monitoring & Incident Response
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl border border-yellow-200">
                  <h3 className="text-xl font-bold mb-4 text-yellow-900">
                    24/7 Security Monitoring
                  </h3>
                  <ul className="space-y-2 text-yellow-800">
                    <li>• Real-time threat detection and automated response</li>
                    <li>• AI-powered anomaly detection systems</li>
                    <li>• Immediate containment procedures for threats</li>
                    <li>• Enterprise-grade SIEM logging and analysis</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl border border-red-200">
                  <h3 className="text-xl font-bold mb-4 text-red-900">
                    Incident Response Procedures
                  </h3>
                  <ul className="space-y-2 text-red-800">
                    <li>• Dedicated 24/7 security response team</li>
                    <li>
                      • Clear escalation protocols for different incident types
                    </li>
                    <li>
                      • Prompt client notification according to legal
                      requirements
                    </li>
                    <li>• Advanced forensic capabilities for investigation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* AI Security & Privacy */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Cpu className="w-8 h-8 text-blue-600" />
                AI Security & Privacy
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                  <h3 className="text-xl font-bold mb-4 text-purple-900">
                    Secure AI Development
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-purple-800 mb-2">
                        Privacy-Preserving Training
                      </h4>
                      <p className="text-purple-700 text-sm">
                        AI models trained using techniques that protect
                        individual privacy
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-800 mb-2">
                        Bias Detection and Mitigation
                      </h4>
                      <p className="text-purple-700 text-sm">
                        Regular auditing of AI systems to ensure fairness and
                        prevent discrimination
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-800 mb-2">
                        Model Security
                      </h4>
                      <p className="text-purple-700 text-sm">
                        Protection of proprietary AI algorithms and training
                        data
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-800 mb-2">
                        Federated Learning Options
                      </h4>
                      <p className="text-purple-700 text-sm">
                        Advanced techniques for training AI without centralizing
                        sensitive data
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold mb-4 text-blue-900">
                    Data Use Transparency
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">
                        Clear Data Usage Policies
                      </h4>
                      <p className="text-blue-700 text-sm">
                        Explicit explanation of how data is used for AI training
                        and improvement
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">
                        Opt-Out Mechanisms
                      </h4>
                      <p className="text-blue-700 text-sm">
                        User controls to prevent data use for AI training
                        purposes
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">
                        Algorithmic Transparency
                      </h4>
                      <p className="text-blue-700 text-sm">
                        Information about how AI systems make decisions
                        affecting users
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">
                        Human Review Options
                      </h4>
                      <p className="text-blue-700 text-sm">
                        Ability to request human review of automated decisions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Advanced Security Features */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Zap className="w-8 h-8 text-blue-600" />
                Advanced Security Features
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                  <h3 className="text-xl font-bold mb-4 text-green-900">
                    Database Security
                  </h3>
                  <ul className="space-y-2 text-green-800">
                    <li>• SQL injection prevention</li>
                    <li>• Secure connection pooling</li>
                    <li>• Real-time query monitoring</li>
                    <li>• Performance-optimized security</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold mb-4 text-blue-900">
                    API Security
                  </h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Auto-generated secure APIs</li>
                    <li>• Rate limiting protection</li>
                    <li>• Secure API key management</li>
                    <li>• Comprehensive request validation</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                  <h3 className="text-xl font-bold mb-4 text-purple-900">
                    Real-Time Security
                  </h3>
                  <ul className="space-y-2 text-purple-800">
                    <li>• Secure WebSocket connections</li>
                    <li>• Message authentication</li>
                    <li>• Connection monitoring</li>
                    <li>• Automatic disconnection</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Security Best Practices */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-600" />
                Security Best Practices for Clients
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200">
                  <h3 className="text-xl font-bold mb-4 text-orange-900">
                    Implementation Recommendations
                  </h3>
                  <ul className="space-y-2 text-orange-800">
                    <li>
                      • Use separate environments for development, testing, and
                      production
                    </li>
                    <li>
                      • Secure storage and rotation of API keys and credentials
                    </li>
                    <li>• Periodic assessment of security configurations</li>
                    <li>• Security awareness training for all team members</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                  <h3 className="text-xl font-bold mb-4 text-green-900">
                    Monitoring and Maintenance
                  </h3>
                  <ul className="space-y-2 text-green-800">
                    <li>• Utilize built-in security recommendations</li>
                    <li>• Periodic review of access permissions</li>
                    <li>• Clear procedures for reporting security issues</li>
                    <li>• Prompt application of security updates</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Transparency & Accountability */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Globe className="w-8 h-8 text-blue-600" />
                Transparency & Accountability
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold mb-4 text-blue-900">
                    Regular Reporting
                  </h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Security metrics and incident statistics</li>
                    <li>• Ongoing compliance and certification updates</li>
                    <li>• Public transparency reports where permitted</li>
                    <li>• Independent third-party assessments</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                  <h3 className="text-xl font-bold mb-4 text-green-900">
                    Client Communication
                  </h3>
                  <ul className="space-y-2 text-green-800">
                    <li>• Prompt security issue notifications</li>
                    <li>• Clear policy update communications</li>
                    <li>• Dedicated security team contact</li>
                    <li>• Ongoing security guidance and resources</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Contact Section */}
          <section className="mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-8 rounded-2xl border border-blue-200">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
                Contact Our Security Team
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    Security Questions
                  </h3>
                  <p className="text-gray-700">
                    <a
                      href="mailto:info@stroomai.com"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      info@stroomai.com
                    </a>
                  </p>
                </div>
                <div className="text-center">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    Emergency Contact
                  </h3>
                  <p className="text-gray-700">
                    Available 24/7 for urgent security issues
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="text-center text-gray-600 italic">
              This security overview demonstrates StroomAI&apos;s commitment to
              maintaining the highest standards of data protection while
              enabling innovative AI solutions. Our enterprise-grade security
              measures ensure that your sensitive data remains protected without
              compromising the performance and functionality of our AI services.
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
                <div className="w-8 h-8 mr-3 rounded-lg overflow-hidden border border-blue-400">
                  <Image
                    src="/Artwork.JPG"
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
                    Mode AI Stylist
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#solutions"
                    className="hover:text-white transition-colors"
                  >
                    Hygeia AI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#solutions"
                    className="hover:text-white transition-colors"
                  >
                    MERIDIAN
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#solutions"
                    className="hover:text-white transition-colors"
                  >
                    Conservatron 12000
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
                  <Link
                    href="/terms-of-service"
                    className="hover:text-white transition-colors"
                  >
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

export default Security;
