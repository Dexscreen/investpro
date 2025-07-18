import React from 'react';
import { Link } from 'react-router-dom';
import { Bitcoin, TrendingUp, Shield, Zap, Star, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const CryptoTrading = () => {
  const exchanges = [
    {
      name: "Coinbase Pro",
      rating: 4.7,
      fees: "0.5% - 0.05%",
      cryptos: "200+",
      features: ["Advanced trading", "High liquidity", "Insurance coverage", "Mobile app"]
    },
    {
      name: "Binance",
      rating: 4.6,
      fees: "0.1% - 0.02%",
      cryptos: "500+",
      features: ["Lowest fees", "Futures trading", "Staking rewards", "Global access"]
    },
    {
      name: "Kraken",
      rating: 4.5,
      fees: "0.26% - 0.16%",
      cryptos: "100+",
      features: ["Security focus", "Advanced charts", "Margin trading", "Regulatory compliance"]
    }
  ];

  const tradingFeatures = [
    {
      icon: <Bitcoin className="h-8 w-8 text-orange-500" />,
      title: "Cryptocurrency Trading",
      description: "Trade Bitcoin, Ethereum, and hundreds of other cryptocurrencies with advanced trading tools and real-time market data."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: "Advanced Analytics",
      description: "Professional charting tools, technical indicators, and market analysis to make informed trading decisions."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Secure Trading",
      description: "Industry-leading security measures including cold storage, two-factor authentication, and insurance protection."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Fast Execution",
      description: "Lightning-fast order execution with low latency and high-frequency trading capabilities."
    }
  ];

  const cryptoTypes = [
    {
      name: "Bitcoin (BTC)",
      description: "The original cryptocurrency and digital store of value",
      marketCap: "$800B+",
      use: "Digital gold, store of value"
    },
    {
      name: "Ethereum (ETH)",
      description: "Smart contract platform enabling decentralized applications",
      marketCap: "$400B+",
      use: "DeFi, NFTs, smart contracts"
    },
    {
      name: "Altcoins",
      description: "Alternative cryptocurrencies with various use cases",
      marketCap: "$500B+",
      use: "Payments, privacy, gaming"
    }
  ];

  return (
    <>
      <SEOHead
        title="Crypto Trading & Cryptocurrency Exchange Platforms - FinanceHub"
        description="Discover the best cryptocurrency trading platforms and crypto exchanges. Trade Bitcoin, Ethereum, and altcoins with advanced trading tools, low fees, and secure storage."
        keywords="crypto trading, cryptocurrency exchange, bitcoin trading, crypto exchange, cryptocurrency trading, trading sites, online trading, crypto platforms"
        canonical="https://financehub.com/crypto-trading"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-900 via-orange-800 to-red-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')"
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-orange-400">Crypto Trading</span> Platforms
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Trade Bitcoin, Ethereum, and hundreds of cryptocurrencies on the world's most trusted crypto exchanges and trading platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/onboarding"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Open Trading Account
              </Link>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Compare Exchanges
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Cryptocurrency Trading Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience professional-grade crypto trading with cutting-edge tools and features designed for both beginners and advanced traders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tradingFeatures.map((feature, index) => (
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

      {/* Top Crypto Exchanges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Top Cryptocurrency Exchanges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare the best crypto exchanges and trading platforms based on fees, security, and available cryptocurrencies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {exchanges.map((exchange, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {exchange.name}
                  </h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <span className="text-gray-700">{exchange.rating}</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Trading Fees:</span>
                    <span className="font-semibold">{exchange.fees}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cryptocurrencies:</span>
                    <span className="font-semibold">{exchange.cryptos}</span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-1 mb-6">
                  {exchange.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                  Open Account
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cryptocurrency Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Cryptocurrencies to Trade
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the most popular cryptocurrencies available for trading, from Bitcoin to emerging altcoins.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cryptoTypes.map((crypto, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {crypto.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {crypto.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Market Cap:</span>
                    <span className="font-semibold">{crypto.marketCap}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Primary Use:</span>
                    <span className="font-semibold">{crypto.use}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Guide */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                How to Start Cryptocurrency Trading
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Choose a Crypto Exchange
                    </h3>
                    <p className="text-blue-100">
                      Select a reputable cryptocurrency exchange with low fees, good security, and the cryptocurrencies you want to trade.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Complete Account Verification
                    </h3>
                    <p className="text-blue-100">
                      Verify your identity and link your bank account or payment method to start funding your trading account.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Start Trading
                    </h3>
                    <p className="text-blue-100">
                      Begin with small amounts, use proper risk management, and gradually increase your trading as you gain experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/7567521/pexels-photo-7567521.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Cryptocurrency trading chart"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Crypto Trading?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join millions of traders worldwide and start your cryptocurrency trading journey today with the best crypto exchanges and trading platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/onboarding"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Open Trading Account
            </Link>
            <Link 
              to="/crypto-mining" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore Crypto Mining
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CryptoTrading;