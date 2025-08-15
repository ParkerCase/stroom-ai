// pages/beta.js - Simple Beta Access Page
import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  Brain,
  Heart,
  Film,
  Users,
  Search,
  Star,
  Sparkles,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import ThemeToggle from "../components/ThemeToggle";

const BetaPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    selectedPlatforms: [],
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const platforms = [
    {
      id: "MeridianAI",
      name: "MeridianAI",
      description: "Enterprise Intelligence Platform - From Silos to Signals",
      icon: <Brain className="w-5 h-5" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "MuseAI",
      name: "MuseAI Production Intelligence",
      description:
        "Ethical AI for film production - Script intelligence & compliance monitoring",
      icon: <Film className="w-5 h-5" />,
      gradient: "from-purple-600 via-blue-600 to-indigo-700",
    },
    {
      id: "HygeiaAI",
      name: "HygeiaAI",
      description:
        "Medical nutrition therapy with Instacart integration & health optimization",
      icon: <Heart className="w-5 h-5" />,
      gradient: "from-green-500 to-blue-600",
    },
    {
      id: "ModeAI",
      name: "ModeAI Stylist",
      description: "AI personal stylist with computer vision wardrobe analysis",
      icon: <Star className="w-5 h-5" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "TraffickJam",
      name: "TraffickJam",
      description:
        "Wildlife crime monitoring across multiple marketplaces with ML detection",
      icon: <Search className="w-5 h-5" />,
      gradient: "from-emerald-700 to-blue-300",
    },
    {
      id: "ADM",
      name: "ADM Platform",
      description:
        "Men's mental health social platform with AI crisis detection",
      icon: <Users className="w-5 h-5" />,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const handlePlatformToggle = (platformId) => {
    setFormData((prev) => ({
      ...prev,
      selectedPlatforms: prev.selectedPlatforms.includes(platformId)
        ? prev.selectedPlatforms.filter((id) => id !== platformId)
        : [...prev.selectedPlatforms, platformId],
    }));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      formData.selectedPlatforms.length === 0
    ) {
      alert(
        "Please fill in your name, email, and select at least one platform."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/beta-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          selectedPlatforms: [],
          notes: "",
        });
      } else {
        throw new Error(data.message || "Failed to submit beta request");
      }
    } catch (error) {
      console.error("Error submitting beta request:", error);
      alert(
        "There was an error submitting your request. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100">
        {/* Simple Header */}
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b-2 border-blue-100 dark:border-gray-700 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center">
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
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </nav>

        <div className="pt-20 px-4">
          <div className="max-w-4xl mx-auto text-center py-20">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border-2 border-green-200 dark:border-green-700">
              <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-8" />
              <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Beta Request Submitted!
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Thank you for your interest in our beta program! Our team will
                reach out within
                <strong> 48 hours</strong> to discuss your specific needs,
                pricing, and next steps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl flex items-center gap-3 justify-center"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to Homepage
                </Link>
                <a
                  href="https://calendly.com/parkere-case/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-600 dark:border-blue-400 text-blue-700 dark:text-blue-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center gap-3 justify-center"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      {/* Simple Header */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b-2 border-blue-100 dark:border-gray-700 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
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
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="pt-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center py-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Homepage
            </Link>

            {/* <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 px-6 py-3 rounded-full border-2 border-purple-200 dark:border-purple-700 mb-6">
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-purple-800 dark:text-purple-300 font-bold text-lg">
                Beta Program - September 2024
              </span>
            </div> */}

            <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Request Beta Access
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get early access to our breakthrough AI innovations. Select the
              platforms you're interested in and our team will reach out within
              48 hours to discuss pricing, features, and implementation
              timeline.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Platform Selection */}
            <div style={{ marginBottom: "10%" }} className="lg:col-span-2">
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-white/50 dark:border-gray-700/50">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                  Select Platforms
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  Choose the AI platforms you'd like to explore during our beta
                  program:
                </p>

                <div className="space-y-4">
                  {platforms.map((platform) => (
                    <div
                      key={platform.id}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        formData.selectedPlatforms.includes(platform.id)
                          ? "border-purple-500 bg-purple-50 dark:bg-purple-900/30 shadow-lg"
                          : "border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 hover:border-purple-300 dark:hover:border-purple-600"
                      }`}
                      onClick={() => handlePlatformToggle(platform.id)}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <input
                            type="checkbox"
                            checked={formData.selectedPlatforms.includes(
                              platform.id
                            )}
                            onChange={() => handlePlatformToggle(platform.id)}
                            className="w-5 h-5 text-purple-600 border-2 border-gray-300 rounded focus:ring-purple-500"
                          />
                        </div>
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${platform.gradient} shadow-lg flex-shrink-0`}
                        >
                          {platform.icon}
                        </div>
                        <div className="flex-grow">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                              {platform.name}
                            </h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {platform.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-white/50 dark:border-gray-700/50">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/70 dark:bg-gray-700/70 border-2 border-gray-200 dark:border-gray-600 rounded-xl px-6 py-4 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-600 dark:focus:border-purple-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Business Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/70 dark:bg-gray-700/70 border-2 border-gray-200 dark:border-gray-600 rounded-xl px-6 py-4 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-600 dark:focus:border-purple-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-white/70 dark:bg-gray-700/70 border-2 border-gray-200 dark:border-gray-600 rounded-xl px-6 py-4 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-600 dark:focus:border-purple-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <textarea
                      name="notes"
                      placeholder="Tell us about your specific use case or requirements..."
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-white/70 dark:bg-gray-700/70 border-2 border-gray-200 dark:border-gray-600 rounded-xl px-6 py-4 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-600 dark:focus:border-purple-400 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={
                      isSubmitting || formData.selectedPlatforms.length === 0
                    }
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Submitting..." : "Request Beta Access"}
                  </button>

                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    * Our team will contact you within 48 hours to discuss
                    pricing and next steps
                  </p>
                </div>
              </div>

              {/* Selected Platforms Summary */}
              {formData.selectedPlatforms.length > 0 && (
                <div className="mt-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Selected Platforms ({formData.selectedPlatforms.length})
                  </h3>
                  <div className="space-y-2">
                    {formData.selectedPlatforms.map((platformId) => {
                      const platform = platforms.find(
                        (p) => p.id === platformId
                      );
                      return (
                        <div
                          key={platformId}
                          className="text-sm text-gray-700 dark:text-gray-300"
                        >
                          • {platform?.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetaPage;
