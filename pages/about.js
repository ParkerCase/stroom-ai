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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-200 via-blue-800 to-orange-400 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-yellow-100 to-yellow-100 bg-clip-text text-transparent flex items-center"
            >
              <Image
                src="/Artwork.png"
                alt="Parker Case Logo"
                className="inline-block h-15 w-24 mr-2"
              />
              Parker Case
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="transition-colors hover:text-red-400 text-white"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-red-400 text-red-400"
              >
                About
              </Link>
              <Link
                href="/#projects"
                className="transition-colors hover:text-red-400 text-white"
              >
                Projects
              </Link>
              <Link
                href="/#contact"
                className="transition-colors hover:text-red-400 text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-red-500 to-blue-500 p-2">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <Brain className="w-20 h-20 text-red-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-100 bg-clip-text text-transparent">
              The Inventor Behind the Innovation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              I`&apos;`m Parker Case, an AI Software Engineer and inventor based
              in New York City, driven by a singular mission: transforming
              complex real-world challenges into elegant AI solutions that make
              a meaningful impact.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-white">
            My Journey
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold">
                  From Storytelling to AI
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                My path to AI innovation began with a unique combination of
                technical precision and creative storytelling. As a filmmaker
                who achieved recognition at prestigious festivals including
                WorldFest-Houston International Film Festival and the
                Scriptation Showcase, I learned the art of crafting compelling
                narratives.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold">
                  Building Intelligent Systems
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Today, I apply that same creative vision to AI development, but
                instead of telling stories on screen, I`&apos;`m building
                intelligent systems that write the future. Each project combines
                technical excellence with human-centered design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Me Apart */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-white">
            What Sets Me Apart
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="p-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 w-fit mx-auto mb-4">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-100">
                Patent-Pending Innovation
              </h3>
              <p className="text-gray-300 text-sm">
                6+ patent applications in progress. I don`&apos;`t just build
                AI—I pioneer new approaches that push boundaries.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="p-4 rounded-full bg-gradient-to-r from-green-500 to-teal-500 w-fit mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-100">
                Cross-Industry Impact
              </h3>
              <p className="text-gray-300 text-sm">
                From healthcare and e-commerce to conservation and mental
                health—versatile solutions across verticals.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 w-fit mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-100">
                Production-Ready Focus
              </h3>
              <p className="text-gray-300 text-sm">
                Building robust, scalable systems that serve real users in
                production environments, not just prototypes.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="p-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 w-fit mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-100">
                Privacy-First Design
              </h3>
              <p className="text-gray-300 text-sm">
                All AI solutions built with privacy and ethical considerations
                at their core from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Philosophy */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-white">
            My Innovation Philosophy
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
            <p className="text-xl text-gray-300 text-center leading-relaxed mb-8">
              I believe the most powerful AI solutions emerge from the
              intersection of:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">
                  Deep Technical Expertise
                </div>
                <p className="text-gray-300 text-sm">
                  Advanced ML/DL capabilities with full-stack implementation
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  Real-World Application
                </div>
                <p className="text-gray-300 text-sm">
                  Solutions addressing genuine human needs and business
                  challenges
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  Ethical Responsibility
                </div>
                <p className="text-gray-300 text-sm">
                  AI that enhances human capability while respecting privacy
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  Collaborative Partnership
                </div>
                <p className="text-gray-300 text-sm">
                  Working with domain experts to ensure solutions truly serve
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-white">
            Why Work With Me?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-orange-100">
                For Enterprises
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I bring startup agility with enterprise-grade reliability. My
                solutions are designed to integrate seamlessly with existing
                systems while providing transformative capabilities.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Scalable AI architecture</li>
                <li>• Proven production systems</li>
                <li>• Enterprise integration expertise</li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-orange-100">
                For Startups
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I understand the need to move fast and validate quickly. My
                full-stack AI expertise means I can take your idea from concept
                to MVP to production.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Rapid prototyping</li>
                <li>• MVP development</li>
                <li>• Technical co-founder level expertise</li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-orange-100">
                For Non-Profits
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I`&apos;`m passionate about using AI for social good. My
                conservation and mental health projects demonstrate my
                commitment to creating positive impact.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Social impact focus</li>
                <li>• Conservation technology</li>
                <li>• Mental health solutions</li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-orange-100">
                For Investors & Partners
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                My patent portfolio represents significant IP value, while my
                production systems prove market viability.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Patent portfolio value</li>
                <li>• Proven market traction</li>
                <li>• Licensing opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-white">
            Let`&apos;`s Build the Future Together
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Whether you`&apos;`re looking to transform your business with custom
            AI solutions, license cutting-edge technology, or explore
            partnership opportunities, I`&apos;`m ready to bring the same
            passion and precision that earned me patent recognition to your next
            AI challenge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://calendly.com/parkere-case/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-blue-500 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Schedule Consultation
            </a>
            <a
              href="mailto:parker@parkercase.co"
              className="border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Reach Out Directly
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <blockquote className="text-xl italic text-gray-300 mb-4">
              `&quot;`The best AI solutions don`&apos;`t just process data—they
              understand context, respect privacy, and enhance human potential.
              That`&apos;`s the standard I hold myself to with every
              project.`&quot;`
            </blockquote>
            <cite className="text-red-400 font-semibold">— Parker Case</cite>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
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

export default AboutPage;
