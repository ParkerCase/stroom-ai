// components/BlogPreview.js - Blog Preview Component
import React from "react";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";

const BlogPreview = ({ featured = false, showAll = false }) => {
  const blogPosts = [
    {
      id: "breaking-down-silos",
      title: "Breaking Down Silos to Accelerate Decision Velocity",
      excerpt:
        "In today's fast-paced business environment, chasms between organizational silos such as departments, functions, and data repositories, pose a critical threat to an enterprise's ability to make timely, informed decisions...",
      author: "StroomAI Team",
      date: "January 2025",
      readTime: "8 min read",
      category: "Enterprise AI",
      tags: ["Knowledge Management", "Decision Velocity", "AI Strategy"],
      featured: true,
      image: "/new-logo-logo-only.png",
    },
    {
      id: "future-enterprise-ai",
      title: "The Future of Enterprise AI Integration",
      excerpt:
        "Exploring how organizations can successfully integrate AI across their entire business ecosystem, from data infrastructure to end-user applications...",
      author: "StroomAI Team",
      date: "Coming Soon",
      readTime: "6 min read",
      category: "AI Strategy",
      tags: ["Enterprise AI", "Integration", "Digital Transformation"],
      featured: false,
      image: "/new-logo-logo-only.png",
    },
    {
      id: "team-collaboration-ai",
      title: "Maximizing Team Collaboration with AI",
      excerpt:
        "Practical strategies for leveraging AI to enhance team productivity and collaboration across distributed organizations...",
      author: "StroomAI Team",
      date: "Coming Soon",
      readTime: "7 min read",
      category: "Productivity",
      tags: ["Team Collaboration", "AI Tools", "Workflow Optimization"],
      featured: false,
      image: "/new-logo-logo-only.png",
    },
  ];

  const displayPosts = featured
    ? blogPosts.filter((post) => post.featured)
    : showAll
    ? blogPosts
    : blogPosts.slice(0, 2);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-6 py-3 rounded-full border-2 border-blue-200 dark:border-blue-700 mb-6">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-800 dark:text-blue-300 font-bold text-lg">
              Latest Insights
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            AI Intelligence & Strategy
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Stay ahead with expert analysis and practical strategies for the
            AI-powered future. Explore insights on enterprise AI, knowledge
            management, and digital transformation.
          </p>

          {!featured && (
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors text-lg"
            >
              View All Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-4">
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-500 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium group-hover:gap-3"
              >
                Read More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        {!featured && (
          <div className="mt-16">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white">
              <BookOpen className="w-16 h-16 mx-auto mb-6 text-blue-200" />
              <h3 className="text-3xl font-bold mb-4">
                Stay Updated with AI Insights
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get the latest articles on enterprise AI, knowledge management,
                and digital transformation delivered to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPreview;
