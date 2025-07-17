import React from "react";
import {
  Brain,
  Users,
  Heart,
  Award,
  Code,
  Lightbulb,
  Target,
  Calendar,
  Mail,
  Shield,
  CheckCircle,
  Film,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b-2 border-blue-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 mr-3 rounded-lg overflow-hidden">
                <Image
                  src="/StroomAI.png"
                  alt="StroomAI Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-orange-600 bg-clip-text text-transparent">
                StroomAI
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="transition-all duration-200 hover:text-blue-700 font-medium text-gray-700 hover:border-b-2 hover:border-blue-300 pb-1"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-blue-700 border-b-2 border-blue-700 pb-1 font-medium"
              >
                About
              </Link>
              <Link
                href="/#solutions"
                className="transition-all duration-200 hover:text-blue-700 font-medium text-gray-700 hover:border-b-2 hover:border-blue-300 pb-1"
              >
                Solutions
              </Link>
              <Link
                href="/#contact"
                className="transition-all duration-200 hover:text-blue-700 font-medium text-gray-700 hover:border-b-2 hover:border-blue-300 pb-1"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto mb-8 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/StroomAI.png"
              alt="StroomAI Logo"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-orange-600 bg-clip-text text-transparent">
            About StroomAI
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We&apos;re pioneering the future of enterprise AI with
            patent-pending innovations that transform how businesses operate,
            making intelligent automation accessible, reliable, and impactful
            across industries.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-white/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To democratize artificial intelligence for enterprises by
                building patent-pending innovations that are not just powerful,
                but practical, secure, and transformative. We believe AI should
                enhance human potential while delivering measurable business
                value.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-white/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                A world where breakthrough AI innovations solve humanity&apos;s
                most pressing challenges—from healthcare and conservation to
                personalized experiences and knowledge management—while
                maintaining the highest standards of privacy and ethical
                responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We combine cutting-edge AI research with practical business
              expertise to deliver patent-pending solutions that don&apos;t just
              work—they excel in real-world environments and deliver measurable
              impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl border-2 border-white/50">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 w-fit mx-auto mb-6 shadow-lg">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Innovation First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We don&apos;t just implement existing solutions—we pioneer new
                approaches with 6+ patent-pending innovations that push the
                boundaries of what&apos;s possible in AI.
              </p>
            </div>

            <div className="text-center p-8 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl border-2 border-white/50">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 w-fit mx-auto mb-6 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Privacy & Security
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every solution is built with privacy-first design principles and
                enterprise-grade security standards from day one, ensuring your
                data remains protected and compliant.
              </p>
            </div>

            <div className="text-center p-8 rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl border-2 border-white/50">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 w-fit mx-auto mb-6 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Partnership Focus
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We work as an extension of your team, understanding your unique
                challenges and building solutions that integrate seamlessly with
                your existing workflows and deliver real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the award-winning inventor behind StroomAI&apos;s
              breakthrough approach to enterprise artificial intelligence.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-white/50">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-2xl bg-gradient-to-r from-blue-600 to-orange-500 p-1 shadow-xl">
                  <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                    <Brain className="w-24 h-24 text-blue-600" />
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Parker Case
                  </h3>
                  <p className="text-xl text-blue-700 mb-6 font-bold">
                    Founder & Chief Technology Officer
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    With 6+ patent-pending AI innovations and a proven track
                    record of building production-ready systems serving real
                    users, Parker leads StroomAI with a vision of making
                    breakthrough artificial intelligence accessible to
                    enterprises worldwide. His unique combination of technical
                    expertise, creative storytelling (3+ film festival awards),
                    and business acumen drives the company&apos;s mission to
                    transform how businesses leverage AI.
                  </p>

                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold border-2 border-blue-200">
                      6+ Patents Pending
                    </span>
                    <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-bold border-2 border-orange-200">
                      Production AI Systems
                    </span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold border-2 border-green-200">
                      3+ Film Festival Awards
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-bold border-2 border-purple-200">
                      Enterprise Expertise
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Why Choose StroomAI?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We&apos;re not just another AI company — we&apos;re proven
              inventors with breakthrough technologies and a track record of
              transforming complex challenges into production-ready solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-100 border-2 border-blue-200 flex-shrink-0">
                  <Award className="w-7 h-7 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Proven Innovation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    6+ patent-pending technologies and production systems
                    serving real users demonstrate our commitment to
                    breakthrough solutions that deliver measurable results.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-orange-100 border-2 border-orange-200 flex-shrink-0">
                  <Target className="w-7 h-7 text-orange-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Enterprise-Grade Performance
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    MeridianAI reduces research time from hours to 45 minutes
                    maximum. Our systems deliver quantifiable efficiency gains
                    and ROI for enterprise clients.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-green-100 border-2 border-green-200 flex-shrink-0">
                  <CheckCircle className="w-7 h-7 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Rapid Implementation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Get from concept to production quickly with our streamlined
                    development process and proven integration methodologies
                    across multiple industries.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-100 border-2 border-purple-200 flex-shrink-0">
                  <Code className="w-7 h-7 text-purple-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Full-Stack Expertise
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    From AI research to production deployment, we handle every
                    aspect of your intelligent system with comprehensive
                    technical and business expertise.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-pink-100 border-2 border-pink-200 flex-shrink-0">
                  <Heart className="w-7 h-7 text-pink-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Cross-Industry Impact
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our solutions span healthcare, e-commerce, conservation, and
                    knowledge management, with proven results and satisfied
                    clients across multiple verticals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-100 border-2 border-indigo-200 flex-shrink-0">
                  <Film className="w-7 h-7 text-indigo-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Creative Excellence
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    3+ film festival awards demonstrate our ability to combine
                    technical innovation with compelling user experiences and
                    creative problem-solving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-gray-900">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Join the growing number of enterprises that trust StroomAI to
            deliver breakthrough innovations that drive real business value.
            Let&apos;s discuss how our patent-pending technologies can help you
            achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center gap-3"
            >
              <Mail className="w-6 h-6" />
              Get Started Today
            </Link>
            <a
              href="https://calendly.com/parkere-case/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors flex items-center gap-3"
            >
              <Calendar className="w-6 h-6" />
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
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
          <p className="text-gray-300 text-lg">
            © 2025 StroomAI LLC. All rights reserved. | Building intelligent
            solutions for tomorrow.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
