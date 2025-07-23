import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, TrendingUp, Shield, Star, CheckCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const InvestmentAdvisors = () => {
  const advisorTypes = [
    {
      title: "Registered Investment Advisors (RIA)",
      description: "Fiduciary-bound financial advisors providing personalized investment management and financial planning services.",
      benefits: ["Fiduciary duty", "Personalized service", "Fee transparency", "Regulatory oversight"]
    },
    {
      title: "Financial Advisors",
      description: "Comprehensive financial planning professionals helping with investment strategies, retirement planning, and wealth management.",
      benefits: ["Holistic planning", "Tax optimization", "Estate planning", "Risk management"]
    },
    {
      title: "Investment Advisors",
      description: "Specialized professionals focused on portfolio management and investment strategy development.",
      benefits: ["Portfolio optimization", "Market analysis", "Risk assessment", "Performance tracking"]
    }
  ];

  const advisoryServices = [
    {
      title: "Personal Investment Advisory",
      description: "Dedicated registered investment advisors providing personalized portfolio management",
      features: ["1-on-1 advisor meetings", "Custom portfolio design", "Tax optimization", "Estate planning"],
      minInvestment: "$10,000",
      fee: "0.75% annually"
    },
    {
      title: "AI-Powered Robo Advisory",
      description: "Automated investment management with machine learning optimization",
      features: ["Automated rebalancing", "Tax-loss harvesting", "Goal-based investing", "24/7 monitoring"],
      minInvestment: "$500",
      fee: "0.25% annually"
    },
    {
      title: "Premium Wealth Management",
      description: "Comprehensive wealth management for high-net-worth individuals",
      features: ["Dedicated wealth manager", "Alternative investments", "Private banking", "Concierge services"],
      minInvestment: "$1,000,000",
      fee: "0.50% annually"
    }
  ];

  return (
    <>
      <SEOHead
        title="Investment Advisors & Registered Investment Advisors (RIA) - FinanceHub"
        description="Find top registered investment advisors and financial advisors for personalized investment management. Compare RIA services, fees, and specialties to choose the best financial advisor for your needs."
        keywords="investment advisors, registered investment advisor, financial advisors, RIA, financial advisor, investment management, wealth management, financial planning"
        canonical="https://financehub.com/investment-advisors"
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/7567526/pexels-photo-7567526.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')"
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text text-lg font-semibold">
                🎯 Professional Investment Advisory
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Your Personal <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Investment</span> Advisor
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Get personalized investment strategies from our registered investment advisors. Professional portfolio management, tax optimization, and wealth building tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Open Account Now
                <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is an Investment Advisor Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Investment Advisory Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our registered investment advisors are fiduciary-bound professionals who put your interests first, providing personalized strategies to grow and protect your wealth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advisorTypes.map((type, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {type.description}
                </p>
                <h4 className="font-bold text-gray-900 mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Advisory Services */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Advisory Level
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From automated investing to premium wealth management, we offer advisory services tailored to every investor's needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advisoryServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 transform hover:-translate-y-2 ${index === 1 ? 'border-blue-500 relative' : 'border-gray-100 hover:border-blue-200'}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{service.fee}</div>
                  <div className="text-gray-500">Minimum: {service.minInvestment}</div>
                </div>
                <h4 className="font-bold text-gray-900 mb-3">Features:</h4>
                <ul className="space-y-1 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${index === 1 ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
                  Open Account
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Process
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                How We Help You Succeed
              </h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-3 mr-4 mt-1">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Comprehensive Assessment
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We analyze your financial situation, risk tolerance, and investment goals to create a personalized strategy that aligns with your objectives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-3 mr-4 mt-1">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Active Portfolio Management
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our registered investment advisors actively monitor and adjust your portfolio, ensuring optimal performance and risk management at all times.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-3 mr-4 mt-1">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Ongoing Support & Optimization
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Regular portfolio reviews, tax optimization strategies, and continuous communication ensure your investments stay on track to meet your goals.
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link 
                    to="/onboarding"
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Open Account Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:order-first">
              <img 
                src="https://images.pexels.com/photos/7567442/pexels-photo-7567442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Investment advisor meeting with client"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Wealth?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get matched with a registered investment advisor today and start building a portfolio designed for your success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/onboarding"
              className="group bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center justify-center"
            >
              Open Account Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/blog" 
              className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvestmentAdvisors;