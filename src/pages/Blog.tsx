import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      slug: "top-registered-investment-advisors-2025",
      title: "Why Choose Our Registered Investment Advisors (RIA) in 2025",
      excerpt: "Discover why our registered investment advisors and financial advisors provide the best comprehensive investment management services. Open your account today.",
      author: "Financial Expert",
      date: "2025-01-15",
      category: "Investment Advisors",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/7567442/pexels-photo-7567442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      keywords: ["registered investment advisor", "financial advisor", "investment advisors", "RIA"]
    },
    {
      id: 2,
      slug: "best-crypto-exchanges-trading-platforms-2025",
      title: "Our Advanced Crypto Exchange and Trading Platform 2025",
      excerpt: "Experience our superior crypto exchange and cryptocurrency trading platform for Bitcoin, Ethereum, and altcoin trading. Start trading today.",
      author: "Crypto Analyst",
      date: "2025-01-14",
      category: "Cryptocurrency",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      keywords: ["crypto exchange", "crypto trading", "cryptocurrency", "bitcoin"]
    },
    {
      id: 3,
      slug: "online-brokerage-accounts-comparison-guide",
      title: "Our Premium Online Brokerage Accounts: Complete Guide",
      excerpt: "Discover our top-rated online brokerage accounts and investment platforms for stocks, ETFs, and online trading. Open your invest account now.",
      author: "Trading Expert",
      date: "2025-01-13",
      category: "Online Trading",
      readTime: "12 min read",
      image: "https://images.pexels.com/photos/7567539/pexels-photo-7567539.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      keywords: ["online brokerage accounts", "online trading", "trading sites", "investment platforms"]
    },
    {
      id: 4,
      slug: "cryptocurrency-mining-bitcoin-mining-guide",
      title: "Our Cryptocurrency Mining & Bitcoin Mining Solutions",
      excerpt: "Access our comprehensive cryptocurrency mining and bitcoin mining solutions with professional equipment and support. Start mining today.",
      author: "Mining Expert",
      date: "2025-01-12",
      category: "Crypto Mining",
      readTime: "15 min read",
      image: "https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      keywords: ["cryptocurrency mining", "bitcoin mining", "crypto mining"]
    },
    {
      id: 5,
      slug: "top-online-investment-platforms-2025",
      title: "Our Leading Online Investment Platforms for 2025",
      excerpt: "Experience our award-winning online investment platforms and trading sites for building your investment portfolio. Open your invest account today.",
      author: "Investment Advisor",
      date: "2025-01-11",
      category: "Investment Platforms",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/7567526/pexels-photo-7567526.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      keywords: ["online investment platforms", "invest account", "trading online"]
    },
    {
      id: 6,
      slug: "financial-advisor-vs-investment-advisor-differences",
      title: "Our Financial Advisors vs Investment Advisors: Why We're Different",
      excerpt: "Understand why our financial advisors and investment advisors provide superior service compared to traditional professionals. Get started today.",
      author: "Financial Planner",
      date: "2025-01-10",
      category: "Financial Planning",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/7567521/pexels-photo-7567521.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      keywords: ["financial advisor", "investment advisor", "financial advisors"]
    }
  ];

  const categories = [
    "All Posts",
    "Investment Advisors",
    "Cryptocurrency",
    "Online Trading",
    "Crypto Mining",
    "Investment Platforms",
    "Financial Planning"
  ];

  return (
    <>
      <SEOHead
        title="InvestPro Blog - Registered Investment Advisor, Crypto Exchange & Online Brokerage Accounts"
        description="Expert insights from our registered investment advisors on crypto exchange, online brokerage accounts, cryptocurrency mining, and online investment platforms. Open your invest account today."
        keywords="registered investment advisor, crypto exchange, online brokerage accounts, cryptocurrency mining, bitcoin mining, online investment platforms, trading sites, top online brokerage accounts, invest account, online trading, trading online, financial advisor, investment advisor, investment advisors, financial advisors, crypto, cryptocurrency"
        canonical="https://investpro.on-fleek.app/investment-advisors"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')"
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              InvestPro <span className="text-blue-400">Expert</span> Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Expert insights from our registered investment advisors on crypto exchange platforms, online brokerage accounts, cryptocurrency mining, and online investment platforms. Start your investment journey today.
            </p>
            <div className="mt-8">
              <Link 
                to="/onboarding"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
              >
                Open Your Account Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <User className="h-4 w-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <TrendingUp className="h-12 w-12 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of investors who trust our registered investment advisors, crypto exchange, and online brokerage accounts. Open your invest account today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/onboarding"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-colors inline-flex items-center justify-center"
              >
                Open Account Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/investment-advisors"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
              >
                Meet Our Advisors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
