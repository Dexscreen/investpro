import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, Shield, Smartphone, Star, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const OnlineBrokerage = () => {
  const brokerages = [
    {
      name: "Charles Schwab",
      rating: 4.8,
      commissions: "$0 stocks & ETFs",
      accountMin: "$0",
      features: ["Commission-free trades", "Excellent research", "24/7 support", "Advanced platform"]
    },
    {
      name: "Fidelity",
      rating: 4.7,
      commissions: "$0 stocks & ETFs",
      accountMin: "$0",
      features: ["Zero fees", "Great mobile app", "Fractional shares", "Retirement planning"]
    },
    {
      name: "E*TRADE",
      rating: 4.6,
      commissions: "$0 stocks & ETFs",
      accountMin: "$0",
      features: ["User-friendly platform", "Options trading", "Banking services", "Investment guidance"]
    },
    {
      name: "TD Ameritrade",
      rating: 4.5,
      commissions: "$0 stocks & ETFs",
      accountMin: "$0",
      features: ["Thinkorswim platform", "Education resources", "Paper trading", "Advanced charting"]
    },
    {
      name: "Interactive Brokers",
      rating: 4.4,
      commissions: "$0.005/share",
      accountMin: "$0",
      features: ["Global markets", "Low margin rates", "Advanced tools", "Institutional quality"]
    },
    {
      name: "Robinhood",
      rating: 4.2,
      commissions: "$0 stocks & ETFs",
      accountMin: "$0",
      features: ["Mobile-first", "Easy interface", "Crypto trading", "No account minimums"]
    }
  ];

  const accountTypes = [
    {
      title: "Individual Brokerage Account",
      description: "Standard taxable investment account for personal investing",
      benefits: ["No contribution limits", "Flexible withdrawals", "Full investment options"]
    },
    {
      title: "IRA (Individual Retirement Account)",
      description: "Tax-advantaged retirement account with contribution limits",
      benefits: ["Tax benefits", "Retirement focused", "Various IRA types available"]
    },
    {
      title: "Roth IRA",
      description: "After-tax contributions with tax-free growth and withdrawals",
      benefits: ["Tax-free growth", "No required distributions", "Flexible contributions"]
    },
    {
      title: "Margin Account",
      description: "Borrow money to purchase securities with leverage",
      benefits: ["Increased buying power", "Short selling", "Advanced strategies"]
    }
  ];

  const features = [
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Advanced Trading Tools",
      description: "Professional-grade charts, technical analysis, and research tools for informed investment decisions."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: "Mobile Trading",
      description: "Trade on the go with powerful mobile apps offering full functionality and real-time market data."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Account Protection",
      description: "SIPC insurance protection up to $500,000 and additional coverage for peace of mind."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      title: "Investment Research",
      description: "Access to analyst reports, market insights, and investment recommendations from top research firms."
    }
  ];

  return (
    <>
      <SEOHead
        title="Top Online Brokerage Accounts & Investment Platforms - FinanceHub"
        description="Compare the best online brokerage accounts and investment platforms. Find top online brokers with low fees, advanced trading tools, and comprehensive investment options."
        keywords="online brokerage accounts, online investment platforms, top online brokerage, invest account, online trading, trading online, investment platforms, brokerage accounts"
        canonical="https://investpro.on-fleek.app/online-brokerage"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/7567539/pexels-photo-7567539.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')"
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Top <span className="text-green-400">Online Brokerage</span> Accounts
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Compare the best online brokerage accounts and investment platforms. Start investing with low fees, advanced tools, and comprehensive research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/onboarding"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Open Brokerage Account
              </Link>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Compare Brokers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Online Brokerage Accounts?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Online investment platforms offer powerful tools, competitive fees, and convenience for modern investors and traders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:bg-gray-50 p-6 rounded-lg transition-colors">
                <div className="mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Brokerages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Best Online Brokerage Accounts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare top online brokerage accounts based on fees, features, and overall value for different types of investors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brokerages.map((broker, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {broker.name}
                  </h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <span className="text-gray-700">{broker.rating}</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Commissions:</span>
                    <span className="font-semibold text-green-600">{broker.commissions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Account Min:</span>
                    <span className="font-semibold">{broker.accountMin}</span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-1 mb-6">
                  {broker.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types of Investment Accounts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right investment account type based on your financial goals and tax situation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accountTypes.map((account, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {account.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {account.description}
                </p>
                <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {account.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                How to Choose the Right Online Brokerage
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Compare Fees and Commissions
                    </h3>
                    <p className="text-blue-100">
                      Look for brokers with low or zero commissions on stocks and ETFs, and competitive fees for other services.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Evaluate Trading Platform
                    </h3>
                    <p className="text-blue-100">
                      Test the platform's usability, available tools, research capabilities, and mobile app functionality.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Check Account Minimums
                    </h3>
                    <p className="text-blue-100">
                      Consider account minimums, margin requirements, and any maintenance fees that may apply.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Online trading platform interface"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Online Trading?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Open your online brokerage account today and start investing with the best online trading platforms and investment tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/onboarding"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Open Account Now
            </Link>
            <Link 
              to="/investment-advisors" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Investment Advice
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineBrokerage;
