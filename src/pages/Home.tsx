import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Zap, Users, BarChart3, Bitcoin, DollarSign, LineChart, ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Home = () => {
  const services = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Investment Advisors",
      description: "Our registered investment advisors provide personalized portfolio management and wealth building strategies.",
      link: "/investment-advisors"
    },
    {
      icon: <Bitcoin className="h-8 w-8 text-blue-600" />,
      title: "Crypto Trading",
      description: "Trade Bitcoin, Ethereum, and 500+ cryptocurrencies on our advanced trading platform with the lowest fees.",
      link: "/crypto-trading"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Online Brokerage",
      description: "Commission-free stock trading with advanced tools, real-time data, and professional research.",
      link: "/online-brokerage"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Crypto Mining",
      description: "Complete cryptocurrency mining solutions with hardware, pools, and 24/7 support.",
      link: "/crypto-mining"
    }
  ];

  const stats = [
    { number: "500K+", label: "Active Traders" },
    { number: "$50B+", label: "Assets Under Management" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Customer Support" }
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: "Bank-Level Security",
      description: "Your funds are protected with military-grade encryption and SIPC insurance"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      title: "AI-Powered Trading",
      description: "Advanced algorithms and machine learning for optimal trade execution"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
      title: "Zero Commissions",
      description: "Trade stocks, ETFs, and crypto with no hidden fees or commissions"
    },
    {
      icon: <LineChart className="h-6 w-6 text-green-600" />,
      title: "Real-Time Analytics",
      description: "Professional-grade charts, indicators, and market analysis tools"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Portfolio Manager",
      content: "The platform's AI-driven insights have helped me achieve 23% returns this year. Best investment platform I've ever used.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Crypto Trader",
      content: "Lightning-fast execution and the lowest fees in the market. Perfect for both beginners and professional traders.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Financial Advisor",
      content: "Our clients love the comprehensive tools and personalized advisory services. Truly revolutionary platform.",
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="InvestPro - All-in-One Investment & Trading Platform"
        description="The ultimate investment platform combining registered investment advisors, crypto trading, online brokerage, and cryptocurrency mining. Zero commissions, AI-powered tools, and 24/7 support."
        keywords="investment advisors, registered investment advisor, crypto trading, online brokerage accounts, cryptocurrency mining, bitcoin mining, financial advisors, online investment platforms, trading sites"
        canonical="https://investpro.com"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text text-lg font-semibold mb-4">
              🚀 The Future of Finance is Here
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            All-in-One <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">Investment</span> Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Trade stocks, crypto, and get expert investment advice all in one powerful platform. Zero commissions, AI-powered insights, and professional-grade tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link 
              to="/onboarding"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
            >
              Open Account Now
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/crypto-trading" 
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Features
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/chinese-investment" 
              className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25"
            >
              中文投资 🇨🇳
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to Build Wealth
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our comprehensive platform combines professional investment advisory, advanced trading tools, and cutting-edge technology to maximize your returns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to={service.link}
                  className="group/link text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/onboarding"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Open Your Account Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for Modern Investors
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Experience the next generation of investing with our cutting-edge platform designed for both beginners and professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Thousands of Investors
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-blue-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Building Your Wealth Today
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join over 500,000 investors who trust our platform for their investment needs. Get started in minutes with zero commissions and professional support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link 
              to="/onboarding" 
              className="group bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center justify-center"
            >
              Open Free Account
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-blue-100">
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2" />
              <span>SIPC Insured</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
