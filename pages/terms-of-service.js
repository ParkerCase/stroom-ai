// pages/terms-of-service.js - StroomAI Terms of Service Page

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  FileText,
  Scale,
  Users,
  Globe,
  Mail,
  AlertTriangle,
  Clock,
  DollarSign,
} from "lucide-react";
import Image from "next/image";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="py-6 px-4 bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 mr-3 rounded-lg">
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
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fair, transparent, and secure use of StroomAI&apos;s innovative AI
              technologies while protecting both user rights and our
              intellectual property.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Agreement and Acceptance */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Scale className="w-8 h-8 text-blue-600" />
                1. Agreement and Acceptance
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-6">
                  These Terms of Service (&quot;Terms&quot;) govern your use of
                  StroomAI&apos;s AI-powered services, platforms, and
                  technologies (collectively, the &quot;Services&quot;). By
                  accessing or using our Services, you agree to be bound by
                  these Terms and our Privacy Policy.
                </p>

                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    Service Categories Covered:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Medical nutrition therapy and health optimization
                        systems
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Cross-site personalization and styling platforms
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Enterprise knowledge management and chatbot solutions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Wildlife conservation and monitoring tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        Mental health support platforms and crisis intervention
                        systems
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Service Descriptions and Limitations */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-600" />
                2. Service Descriptions and Limitations
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl border border-red-200">
                  <h3 className="text-xl font-bold mb-4 text-red-900 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    Medical Nutrition Therapy Services
                  </h3>
                  <p className="text-red-800 mb-4">
                    Our AI-powered nutrition therapy platform provides
                    personalized meal planning and dietary recommendations.
                  </p>
                  <div className="bg-red-200 p-4 rounded-xl">
                    <h4 className="font-bold text-red-900 mb-2">
                      Important Disclaimers:
                    </h4>
                    <ul className="space-y-2 text-red-800">
                      <li>
                        • Our services are for informational purposes and do not
                        constitute medical advice
                      </li>
                      <li>
                        • Always consult healthcare professionals before making
                        significant dietary changes
                      </li>
                      <li>
                        • We monitor drug-food interactions but cannot replace
                        professional medical supervision
                      </li>
                      <li>
                        • Emergency medical situations require immediate
                        professional medical attention
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold mb-4 text-blue-900">
                    Personalization and Styling Services
                  </h3>
                  <p className="text-blue-800 mb-4">
                    Our cross-site personalization technology provides styling
                    recommendations and virtual try-on capabilities.
                  </p>
                  <ul className="space-y-2 text-blue-800">
                    <li>
                      • Recommendations are based on AI analysis and personal
                      preferences
                    </li>
                    <li>
                      • Results may vary based on individual factors and
                      preferences
                    </li>
                    <li>
                      • We partner with retailers but are not responsible for
                      third-party merchant policies
                    </li>
                    <li>
                      • Virtual try-on results are approximations and may not
                      reflect actual fit
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                  <h3 className="text-xl font-bold mb-4 text-green-900">
                    Enterprise Knowledge Management
                  </h3>
                  <p className="text-green-800 mb-4">
                    Our intelligent chatbot and knowledge management systems
                    provide information synthesis and query responses.
                  </p>
                  <ul className="space-y-2 text-green-800">
                    <li>
                      • Provide information synthesis and query responses based
                      on available data
                    </li>
                    <li>
                      • Accuracy depends on the quality and completeness of
                      input data
                    </li>
                    <li>
                      • Should supplement, not replace, human judgment and
                      expertise
                    </li>
                    <li>
                      • May require integration and customization for optimal
                      performance
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                  <h3 className="text-xl font-bold mb-4 text-purple-900">
                    Conservation Monitoring Services
                  </h3>
                  <p className="text-purple-800 mb-4">
                    Our wildlife protection and monitoring systems detect and
                    report potential illegal activities.
                  </p>
                  <ul className="space-y-2 text-purple-800">
                    <li>
                      • Detect and report potential illegal activities based on
                      available data
                    </li>
                    <li>
                      • Reports are generated automatically and may require
                      human verification
                    </li>
                    <li>
                      • We cooperate with law enforcement but are not law
                      enforcement agents
                    </li>
                    <li>
                      • Detection accuracy may vary based on data quality and
                      system capabilities
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200">
                  <h3 className="text-xl font-bold mb-4 text-orange-900">
                    Mental Health Support Platform
                  </h3>
                  <p className="text-orange-800 mb-4">
                    Our AI-powered mental health platform provides support and
                    resources with crisis intervention capabilities.
                  </p>
                  <ul className="space-y-2 text-orange-800">
                    <li>
                      • 24/7 AI crisis detection with immediate escalation
                      protocols
                    </li>
                    <li>
                      • Services supplement but do not replace professional
                      mental health care
                    </li>
                    <li>
                      • If you are in immediate danger, contact emergency
                      services (911) immediately
                    </li>
                    <li>
                      • Our platform facilitates access to professional support
                      but does not provide therapy
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-600" />
                3. User Responsibilities and Conduct
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold mb-4 text-blue-900">
                    Account Security
                  </h3>
                  <p className="text-blue-800 mb-4">You are responsible for:</p>
                  <ul className="space-y-2 text-blue-800">
                    <li>
                      • Maintaining the confidentiality of your account
                      credentials
                    </li>
                    <li>• All activities that occur under your account</li>
                    <li>• Promptly notifying us of any security breaches</li>
                    <li>
                      • Using strong passwords and enabling multi-factor
                      authentication
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl border border-red-200">
                  <h3 className="text-xl font-bold mb-4 text-red-900">
                    Acceptable Use
                  </h3>
                  <p className="text-red-800 mb-4">You agree NOT to:</p>
                  <ul className="space-y-2 text-red-800">
                    <li>• Use our Services for illegal purposes</li>
                    <li>• Attempt to bypass security measures</li>
                    <li>• Interfere with the operation of our Services</li>
                    <li>• Upload malicious code or harmful content</li>
                    <li>• Misrepresent your identity or impersonate others</li>
                    <li>• Use our Services to harass or abuse others</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Use and AI Training */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Globe className="w-8 h-8 text-blue-600" />
                4. Data Use and AI Training
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Data Processing for Service Delivery
                  </h3>
                  <p className="text-gray-700 mb-4">We process your data to:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Provide personalized AI recommendations and insights
                    </li>
                    <li>• Maintain and improve service functionality</li>
                    <li>• Ensure security and prevent misuse</li>
                    <li>• Comply with legal obligations</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    AI Model Training and Improvement
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • We may use aggregated, de-identified data to improve our
                      AI models
                    </li>
                    <li>
                      • You can opt out of data use for AI training in your
                      account settings
                    </li>
                    <li>
                      • We implement privacy-preserving techniques in our
                      training processes
                    </li>
                    <li>
                      • Our AI systems are designed to minimize bias and ensure
                      fairness
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Transparency and Control
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • We provide clear information about how our AI systems
                      make decisions
                    </li>
                    <li>
                      • You can request human review of automated decisions that
                      significantly affect you
                    </li>
                    <li>
                      • We maintain audit trails for AI decision-making
                      processes
                    </li>
                    <li>
                      • You have rights to access, correct, and delete your
                      personal data
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-600" />
                5. Intellectual Property Rights
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                  <h3 className="text-xl font-bold mb-4 text-purple-900">
                    StroomAI Intellectual Property
                  </h3>
                  <p className="text-purple-800 mb-4">
                    Our Services contain proprietary technologies, including:
                  </p>
                  <ul className="space-y-2 text-purple-800">
                    <li>• Patent-pending AI innovations and algorithms</li>
                    <li>• Copyrighted software, content, and documentation</li>
                    <li>• Trademarks, service marks, and trade names</li>
                    <li>• Trade secrets and confidential information</li>
                  </ul>
                  <p className="text-purple-800 mt-4 font-semibold">
                    You may not copy, modify, distribute, or create derivative
                    works without explicit permission.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                  <h3 className="text-xl font-bold mb-4 text-green-900">
                    User Content and Data
                  </h3>
                  <ul className="space-y-2 text-green-800">
                    <li>
                      • You retain ownership of data and content you provide to
                      our Services
                    </li>
                    <li>
                      • You grant us a license to use your data as described in
                      our Privacy Policy
                    </li>
                    <li>
                      • We respect your intellectual property rights and respond
                      to valid takedown notices
                    </li>
                    <li>
                      • User-generated insights and recommendations remain your
                      property
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Privacy and Security */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-600" />
                6. Privacy and Security Guarantees
              </h2>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl border border-blue-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Enterprise-Grade Security Commitment
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-900">
                      Security Measures
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• AES-256 encryption at rest, TLS 1.2+ in transit</li>
                      <li>• SOC 2 Type 2 and HIPAA compliance</li>
                      <li>
                        • Multi-factor authentication and role-based permissions
                      </li>
                      <li>
                        • 24/7 security monitoring with automated threat
                        response
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-3 text-gray-900">
                      Data Protection
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • We never sell your personal data to third parties
                      </li>
                      <li>• Data sharing limited to specific circumstances</li>
                      <li>
                        • Regular security assessments and penetration testing
                      </li>
                      <li>
                        • Point-in-time recovery and encrypted backup systems
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Level Agreements */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Clock className="w-8 h-8 text-blue-600" />
                7. Service Level Agreements and Availability
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold mb-4 text-blue-900">
                    Standard Services
                  </h3>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      High
                    </div>
                    <p className="text-blue-800">Uptime Commitment</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                  <h3 className="text-xl font-bold mb-4 text-green-900">
                    Enterprise Services
                  </h3>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      Premium
                    </div>
                    <p className="text-green-800">Uptime with SLAs</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl border border-red-200">
                  <h3 className="text-xl font-bold mb-4 text-red-900">
                    Crisis Services
                  </h3>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      Critical
                    </div>
                    <p className="text-red-800">
                      Mental Health Crisis Detection
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-blue-600" />
                8. Limitation of Liability and Disclaimers
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl border border-yellow-200">
                  <h3 className="text-xl font-bold mb-4 text-yellow-900">
                    Service Disclaimers
                  </h3>
                  <ul className="space-y-2 text-yellow-800">
                    <li>
                      • Services are provided &quot;as is&quot; without
                      warranties of any kind
                    </li>
                    <li>• We do not guarantee specific outcomes or results</li>
                    <li>
                      • AI recommendations are not substitutes for professional
                      judgment
                    </li>
                    <li>
                      • Third-party integrations may have separate terms and
                      limitations
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl border border-red-200">
                  <h3 className="text-xl font-bold mb-4 text-red-900">
                    Limitation of Liability
                  </h3>
                  <p className="text-red-800 mb-4">
                    To the maximum extent permitted by law:
                  </p>
                  <ul className="space-y-2 text-red-800">
                    <li>
                      • Our liability is limited to the amount paid for Services
                      in the preceding 12 months
                    </li>
                    <li>
                      • We are not liable for indirect, incidental, or
                      consequential damages
                    </li>
                    <li>
                      • We are not responsible for decisions made based on our
                      recommendations
                    </li>
                    <li>
                      • Business interruption or data loss limitations apply
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Pricing and Payment */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-blue-600" />
                9. Pricing and Payment Terms
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                  <h3 className="text-xl font-bold mb-4 text-green-900">
                    Service Pricing
                  </h3>
                  <ul className="space-y-2 text-green-800">
                    <li>• Transparent pricing with no hidden fees</li>
                    <li>
                      • Enterprise pricing available with custom service level
                      agreements
                    </li>
                    <li>
                      • Free trials and freemium options for qualifying users
                    </li>
                    <li>• Volume discounts for large-scale deployments</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold mb-4 text-blue-900">
                    Payment and Billing
                  </h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>
                      • Secure payment processing through certified payment
                      providers
                    </li>
                    <li>• We do not store credit card information</li>
                    <li>
                      • Automatic billing for subscription services with advance
                      notice
                    </li>
                    <li>
                      • Refund policies detailed in specific service agreements
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Mail className="w-8 h-8 text-blue-600" />
                10. Contact Information
              </h2>

              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-8 rounded-2xl border border-blue-200">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      Legal Department
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
                      Customer Support
                    </h3>
                    <div className="space-y-3 text-gray-700">
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
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      Security Issues
                    </h3>
                    <div className="space-y-3 text-gray-700">
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
                        For urgent security concerns or data breaches.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="text-center text-gray-600 italic">
              These Terms of Service are designed to ensure fair, transparent,
              and secure use of StroomAI&apos;s innovative AI technologies while
              protecting both user rights and our intellectual property.
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

export default TermsOfService;
