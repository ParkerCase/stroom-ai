// pages/blog/breaking-down-silos.js - Individual Blog Post
import React from "react";
import Link from "next/link";
import Head from "next/head";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  BookOpen,
  Brain,
  Twitter,
  Linkedin,
  Facebook,
  Mail,
  MessageCircle,
  Copy,
} from "lucide-react";
import Image from "next/image";
import ThemeToggle from "../../components/ThemeToggle";

const BreakingDownSilosPost = () => {
  const [showShareDropdown, setShowShareDropdown] = React.useState(false);
  const [copySuccess, setCopySuccess] = React.useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://stroomai.com/blog/breaking-down-silos"
      );
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const shareOptions = [
    {
      name: "Copy Link",
      icon: <Copy className="w-4 h-4" />,
      action: handleCopyLink,
      className: "text-gray-700 dark:text-gray-300",
    },
    {
      name: "Email",
      icon: <Mail className="w-4 h-4" />,
      href: `mailto:?subject=Check out this article: Breaking Down Silos to Accelerate Decision Velocity&body=I thought you might find this article interesting:%0D%0A%0D%0ABreaking Down Silos to Accelerate Decision Velocity%0D%0Ahttps://stroomai.com/blog/breaking-down-silos%0D%0A%0D%0AIt's about enterprise AI and knowledge management.`,
      className: "text-blue-600 dark:text-blue-400",
    },
    {
      name: "Text Message",
      icon: <MessageCircle className="w-4 h-4" />,
      href: `sms:?body=Check out this article: Breaking Down Silos to Accelerate Decision Velocity - https://stroomai.com/blog/breaking-down-silos`,
      className: "text-green-600 dark:text-green-400",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-4 h-4" />,
      href: "https://twitter.com/intent/tweet?text=Breaking%20Down%20Silos%20to%20Accelerate%20Decision%20Velocity%20-%20Check%20out%20this%20article%20on%20enterprise%20AI%20and%20knowledge%20management&url=https://stroomai.com/blog/breaking-down-silos",
      className: "text-blue-500 dark:text-blue-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-4 h-4" />,
      href: "https://www.linkedin.com/sharing/share-offsite/?url=https://stroomai.com/blog/breaking-down-silos",
      className: "text-blue-700 dark:text-blue-400",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-4 h-4" />,
      href: "https://www.facebook.com/sharer/sharer.php?u=https://stroomai.com/blog/breaking-down-silos",
      className: "text-blue-600 dark:text-blue-400",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Breaking Down Silos to Accelerate Decision Velocity | StroomAI Blog
        </title>
        <meta
          name="description"
          content="Learn how organizational silos impact decision velocity and discover how Enterprise Knowledge Management with AI can accelerate your business intelligence. Expert insights on breaking down knowledge barriers."
        />
        <meta
          name="keywords"
          content="enterprise AI, knowledge management, decision velocity, organizational silos, business intelligence, digital transformation, AI strategy, enterprise knowledge management, EKM, generative AI"
        />
        <meta name="author" content="StroomAI Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Breaking Down Silos to Accelerate Decision Velocity"
        />
        <meta
          property="og:description"
          content="Learn how organizational silos impact decision velocity and discover how Enterprise Knowledge Management with AI can accelerate your business intelligence."
        />
        <meta
          property="og:url"
          content="https://stroomai.com/blog/breaking-down-silos"
        />
        <meta property="og:site_name" content="StroomAI" />
        <meta
          property="og:image"
          content="https://stroomai.com/new-logo-logo-only.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Breaking Down Silos to Accelerate Decision Velocity"
        />
        <meta
          name="twitter:description"
          content="Learn how organizational silos impact decision velocity and discover how Enterprise Knowledge Management with AI can accelerate your business intelligence."
        />
        <meta
          name="twitter:image"
          content="https://stroomai.com/new-logo-logo-only.png"
        />

        {/* Article specific meta */}
        <meta
          property="article:published_time"
          content="2025-01-01T00:00:00.000Z"
        />
        <meta
          property="article:modified_time"
          content="2025-01-01T00:00:00.000Z"
        />
        <meta property="article:author" content="StroomAI Team" />
        <meta property="article:section" content="Enterprise AI" />
        <meta
          property="article:tag"
          content="Knowledge Management, Decision Velocity, AI Strategy, Enterprise AI, Digital Transformation, Organizational Silos, Business Intelligence"
        />

        {/* Structured Data for AI tools */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Breaking Down Silos to Accelerate Decision Velocity",
              description:
                "Learn how organizational silos impact decision velocity and discover how Enterprise Knowledge Management with AI can accelerate your business intelligence.",
              image: "https://stroomai.com/new-logo-logo-only.png",
              author: {
                "@type": "Organization",
                name: "StroomAI",
                url: "https://stroomai.com",
              },
              publisher: {
                "@type": "Organization",
                name: "StroomAI",
                logo: {
                  "@type": "ImageObject",
                  url: "https://stroomai.com/new-logo-logo-only.png",
                },
              },
              datePublished: "2025-01-01T00:00:00.000Z",
              dateModified: "2025-01-01T00:00:00.000Z",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://stroomai.com/blog/breaking-down-silos",
              },
              keywords:
                "enterprise AI, knowledge management, decision velocity, organizational silos, business intelligence, digital transformation, AI strategy, enterprise knowledge management, EKM, generative AI",
              articleSection: "Enterprise AI",
              about: [
                {
                  "@type": "Thing",
                  name: "Enterprise Knowledge Management",
                },
                {
                  "@type": "Thing",
                  name: "Decision Velocity",
                },
                {
                  "@type": "Thing",
                  name: "Organizational Silos",
                },
                {
                  "@type": "Thing",
                  name: "Business Intelligence",
                },
                {
                  "@type": "Thing",
                  name: "AI Strategy",
                },
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b-2 border-blue-100 dark:border-gray-700 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <div className="h-20">
                  <Image
                    src="/wormhole-full-logo.png"
                    alt="StroomAI Logo"
                    width={350}
                    height={80}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {[
                  "Home",
                  "Solutions",
                  "Industries",
                  "About",
                  "Blog",
                  "Contact",
                ].map((item) => (
                  <a
                    key={item}
                    href={
                      item === "Home"
                        ? "/"
                        : item === "Blog"
                        ? "/blog"
                        : `/${item.toLowerCase()}`
                    }
                    className={`transition-all duration-200 hover:text-blue-700 dark:hover:text-blue-400 font-medium ${
                      item === "Blog"
                        ? "text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400 pb-1"
                        : "text-gray-700 dark:text-gray-300 hover:border-b-2 hover:border-blue-300 dark:hover:border-blue-600 pb-1"
                    }`}
                  >
                    {item}
                  </a>
                ))}
                <ThemeToggle />
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center space-x-2">
                <ThemeToggle />
                <button className="p-2 rounded-lg bg-blue-50 dark:bg-gray-800 border border-orange-400 dark:border-gray-600">
                  <BookOpen className="w-5 h-5 text-blue-700 dark:text-blue-400" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Back to Blog */}
        <div className="pt-20 pb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Blog Article */}
        <article className="px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                  Enterprise AI
                </div>
                <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                  Knowledge Management
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Breaking Down Silos to Accelerate Decision Velocity
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>August 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>StroomAI Team</span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                In today's fast-paced business environment, chasms between
                organizational silos such as departments, functions, and data
                repositories, pose a critical threat to an enterprise's ability
                to make timely, informed decisions. A 2025 Harvard Business
                Review analysis highlights that silo mentalities account for up
                to 67% of collaboration failures, with 70% of
                customer-experience leaders citing silos as their greatest
                obstacle to delivering consistent service (Harvard Business
                Review). When teams can't readily access collective
                institutional knowledge, every decision becomes a hand-to-hand
                combat for context, hampering responsiveness to market shifts
                and eroding stakeholder confidence.
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                The Imperative of Decision Velocity
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Decision velocity, the speed at which an organization gathers,
                processes, and acts on information, is emerging as a decisive
                competitive differentiator. According to IDC, enterprise leaders
                are increasingly taking ownership of initiatives aimed at
                accelerating decision velocity, extending well beyond
                traditional IT domains to involve C-suite executives across
                functions (IDC Blog). McKinsey research further reveals that
                executives spend nearly 40% of their time on decision-making
                activities, yet most believe a large portion of that time is
                poorly used (McKinsey & Company). In this context, every minute
                lost to searching disparate repositories or reconciling
                conflicting data sources translates directly into missed
                opportunities and increased risk exposure.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                How Silos Impede Speed and Accuracy
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Silos manifest in many forms: departmental, technological, and
                cultural. No matter the iteration, their impact on decision
                velocity is universal. When data silos are allowed to
                proliferate, teams rely on outdated or partial information,
                leading to duplicated efforts, inconsistent insights, and
                elongated approval cycles. IDC's research indicates that
                enterprises toggle among an average of 112 (!) SaaS applications
                and switch contexts over 1,200 times per day, each transition
                costing up to 9.5 minutes in lost productivity (IDC Blog).
                Meanwhile, a Salesforce study (cited by Harvard Business Review)
                underscores that fractured communication pipelines directly
                undermine service quality and execution speed (HBR). The net
                result: suboptimal decisions made too late.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Defining the Enterprise Knowledge Management Category
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Enterprise Knowledge Management (EKM) emerges as the antidote to
                silos, providing a unified platform to capture, organize, and
                deliver institutional knowledge across an organization.
                Forrester's Wave on Knowledge Management Solutions (Q4 2024)
                identifies AI-enhanced platforms as the vanguard of this market,
                enabling intelligent categorization, search, and personalization
                that turn passive repositories into active decision-support
                engines (Forrester). Complementary research from Bloomfire
                outlines that a robust KM strategy, incorporating wikis,
                knowledge bases, and structured workflows, yields productivity
                boosts of up to 34% by centralizing critical assets and
                streamlining access points (Bloomfire).
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                The Role of Generative AI in EKM
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                At the heart of modern EKM platforms lies generative AI, which
                exponentially amplifies knowledge discovery and
                contextualization. Forrester asserts that AI enables KM systems
                to "process vast amounts of data quickly, providing insights
                that humans might miss," while still preserving human oversight
                for judgment and ethics (Forrester). McKinsey's 2025 Global
                Survey on AI finds nine in ten employees using generative AI in
                their workflows, yet formal adoption lags; this indicates vast
                untapped potential for integrated AI-powered Knowledge
                Management to accelerate insight generation and decision quality
                (McKinsey & Company).
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Overcoming AI and Knowledge Silos
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Ironically, even AI agents can become siloed if not architected
                within a unified data fabric. A recent analysis warns that
                isolated AI deployments (e.g. standalone chatbots for sales or
                service) fail to deliver the promised ROI unless they can
                seamlessly access and contribute to a central knowledge hub
                (TechRadar). This underscores the imperative of designing
                AI-driven KM platforms from the ground up with interoperability,
                governance, and orchestration layers that ensure each agent
                enriches the shared knowledge ecosystem.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Best Practices for Breaking Silos and Accelerating Decisions
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-blue-800 dark:text-blue-300 font-bold text-sm">
                      1
                    </span>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      <strong>Establish a Central Knowledge Fabric:</strong>{" "}
                      Integrate disparate data sources into a unified index that
                      AI can traverse and enrich in real time; include ERP, CRM,
                      and all document management. (TechRadar)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-blue-800 dark:text-blue-300 font-bold text-sm">
                      2
                    </span>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      <strong>Embed AI Across Workflows:</strong> Deploy
                      generative AI modules directly within collaboration and
                      execution tools, bringing contextually relevant insights
                      to users at the point of need. (Forrester)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-blue-800 dark:text-blue-300 font-bold text-sm">
                      3
                    </span>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      <strong>Govern for Quality and Compliance:</strong>{" "}
                      Implement metadata standards, access controls, and audit
                      trails to maintain trust in the knowledge base and drive
                      consistent decision protocols. (IDC Blog)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-blue-800 dark:text-blue-300 font-bold text-sm">
                      4
                    </span>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      <strong>Cultivate Cross-Functional Leadership:</strong>{" "}
                      Assign accountability for decision velocity to a
                      cross-functional council that oversees both technological
                      integration and cultural adoption. (HBR)
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Conclusion
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                In an era defined by rapid disruption, the ability to make
                accurate, timely decisions is non-negotiable. Enterprise
                Knowledge Management, supercharged by generative AI, offers a
                proven framework for dismantling silos, unifying institutional
                wisdom, and embedding insights directly into the decision-making
                fabric of the organization. Organizations that move decisively
                to break down knowledge barriers will not only accelerate
                decision velocity but will also cultivate the agility and
                innovation capacity required to thrive in today's dynamic
                markets.
              </p>
            </div>

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <button
                      onClick={() => setShowShareDropdown(!showShareDropdown)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      Share Article
                    </button>

                    {/* Share Dropdown */}
                    {showShareDropdown && (
                      <div className="absolute bottom-full left-0 mb-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50">
                        <div className="p-3">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 px-2">
                            Share this article
                          </h4>
                          <div className="space-y-1">
                            {shareOptions.map((option, index) => (
                              <div key={index}>
                                {option.action ? (
                                  <button
                                    onClick={option.action}
                                    className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                                  >
                                    <span className={option.className}>
                                      {option.icon}
                                    </span>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                      {option.name}
                                      {copySuccess &&
                                        option.name === "Copy Link" && (
                                          <span className="ml-2 text-green-600 dark:text-green-400 text-xs">
                                            ✓ Copied!
                                          </span>
                                        )}
                                    </span>
                                  </button>
                                ) : (
                                  <a
                                    href={option.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                                    onClick={() => setShowShareDropdown(false)}
                                  >
                                    <span className={option.className}>
                                      {option.icon}
                                    </span>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                      {option.name}
                                    </span>
                                  </a>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>
                    Tags: Enterprise AI, Knowledge Management, Decision Velocity
                  </span>
                </div>
              </div>
            </footer>
          </div>
        </article>

        {/* Related Articles Section */}
        {/* <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                  AI Strategy
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                The Future of Enterprise AI Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Exploring how organizations can successfully integrate AI across
                their entire business ecosystem.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>Coming Soon</span>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                  Productivity
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                Maximizing Team Collaboration with AI
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Practical strategies for leveraging AI to enhance team
                productivity and collaboration.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

        {/* Call to Action */}
        <section className="px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div
              className="rounded-3xl p-8 text-center text-white"
              style={{ backgroundColor: "#5C92B2" }}
            >
              <Brain className="w-16 h-16 mx-auto mb-6 text-blue-200" />
              <h3 className="text-3xl font-bold mb-4">
                Ready to Break Down Your Silos?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Discover how StroomAI's enterprise knowledge management platform
                can accelerate your decision velocity and transform your
                organization's intelligence capabilities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/beta"
                  className="px-8 py-3 bg-white text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors"
                >
                  Request Beta Access
                </Link>
                <a
                  href="mailto:sales@stroomai.com?subject=Inquiry about StroomAI Enterprise Solutions&body=Hi StroomAI team,%0D%0A%0D%0AI'm interested in learning more about your enterprise AI solutions and would like to discuss how they could benefit our organization.%0D%0A%0D%0APlease contact me to schedule a consultation.%0D%0A%0D%0ABest regards,"
                  className="px-8 py-3 border-2 border-white text-white rounded-xl font-medium hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BreakingDownSilosPost;
