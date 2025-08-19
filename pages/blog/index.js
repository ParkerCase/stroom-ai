// pages/blog/index.js - Blog Index Page
import React from "react";
import Link from "next/link";
import Head from "next/head";
import {
  Calendar,
  Clock,
  User,
  Search,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import ThemeToggle from "../../components/ThemeToggle";

const BlogIndexPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const blogPosts = [
    {
      id: "breaking-down-silos",
      title: "Breaking Down Silos to Accelerate Decision Velocity",
      excerpt:
        "In today's fast-paced business environment, chasms between organizational silos such as departments, functions, and data repositories, pose a critical threat to an enterprise's ability to make timely, informed decisions...",
      author: "StroomAI Team",
      date: "August 2025",
      readTime: "8 min read",
      category: "Enterprise AI",
      tags: ["Knowledge Management", "Decision Velocity", "AI Strategy"],
      featured: true,
      image: "/MeridianAI_Logo_Square_HD.png",
    },
  ];

  const categories = [
    { name: "All", count: blogPosts.length, active: true },
    {
      name: "Enterprise AI",
      count: blogPosts.filter((post) => post.category === "Enterprise AI")
        .length,
      active: false,
    },
  ];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>Insights & Intelligence | StroomAI Blog</title>
        <meta
          name="description"
          content="Explore the latest insights on enterprise AI, knowledge management, and digital transformation. Stay ahead with expert analysis and practical strategies for the AI-powered future."
        />
        <meta
          name="keywords"
          content="enterprise AI blog, knowledge management articles, digital transformation insights, AI strategy, enterprise knowledge management, EKM, generative AI, business intelligence"
        />
        <meta name="author" content="StroomAI Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Insights & Intelligence | StroomAI Blog"
        />
        <meta
          property="og:description"
          content="Explore the latest insights on enterprise AI, knowledge management, and digital transformation."
        />
        <meta property="og:url" content="https://stroomai.com/blog" />
        <meta property="og:site_name" content="StroomAI" />
        <meta property="og:image" content="https://stroomai.com/StroomAI.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Insights & Intelligence | StroomAI Blog"
        />
        <meta
          name="twitter:description"
          content="Explore the latest insights on enterprise AI, knowledge management, and digital transformation."
        />
        <meta
          name="twitter:image"
          content="https://stroomai.com/StroomAI.png"
        />

        {/* Structured Data for AI tools */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "StroomAI Insights & Intelligence",
              description:
                "Expert insights on enterprise AI, knowledge management, and digital transformation",
              url: "https://stroomai.com/blog",
              publisher: {
                "@type": "Organization",
                name: "StroomAI",
                logo: {
                  "@type": "ImageObject",
                  url: "https://stroomai.com/StroomAI.png",
                },
              },
              blogPost: [
                {
                  "@type": "BlogPosting",
                  headline:
                    "Breaking Down Silos to Accelerate Decision Velocity",
                  description:
                    "Learn how organizational silos impact decision velocity and discover how Enterprise Knowledge Management with AI can accelerate your business intelligence.",
                  url: "https://stroomai.com/blog/breaking-down-silos",
                  author: {
                    "@type": "Organization",
                    name: "StroomAI",
                  },
                  datePublished: "2025-01-01T00:00:00.000Z",
                  articleSection: "Enterprise AI",
                  keywords:
                    "enterprise AI, knowledge management, decision velocity, organizational silos, business intelligence",
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

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-6 py-3 rounded-full border-2 border-blue-200 dark:border-blue-700 mb-6">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-blue-800 dark:text-blue-300 font-bold text-lg">
                  StroomAI Blog
                </span>
              </div>
            </div>

            <h1
              style={{ paddingBottom: "5px" }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
            >
              Insights & Intelligence
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore the latest insights on enterprise AI, knowledge
              management, and digital transformation. Stay ahead with expert
              analysis and practical strategies for the AI-powered future.
            </p>

            {/* Search and Filter Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/80 dark:bg-gray-800/80 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors text-gray-900 dark:text-gray-100"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="px-4 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.name
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700/80 border border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-75">
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="px-4 pb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100 text-center">
              Featured Article
            </h2>

            {filteredPosts
              .filter((post) => post.featured)
              .map((post) => (
                <div
                  key={post.id}
                  className="bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-gray-800/90 dark:to-blue-900/20 rounded-3xl p-8 shadow-2xl border border-blue-100 dark:border-blue-800/50"
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                          {post.category}
                        </div>
                        <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                          Featured
                        </div>
                      </div>

                      <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100 leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-500 text-sm mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    <div className="flex justify-center">
                      <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={256}
                          height={256}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <section className="px-4 pb-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <Search className="w-16 h-16 mx-auto mb-6 text-gray-400 dark:text-gray-500" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                  No articles found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your search terms or category filter.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BlogIndexPage;
