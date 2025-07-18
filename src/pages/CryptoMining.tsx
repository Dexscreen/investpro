import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Bitcoin, Shield, TrendingUp, Star, CheckCircle, Cpu } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const CryptoMining = () => {
  const miningMethods = [
    {
      title: "Bitcoin Mining",
      description: "Mine Bitcoin using ASIC hardware with the SHA-256 algorithm",
      profitability: "High",
      difficulty: "Very High",
      equipment: "ASIC miners (Antminer, Whatsminer)",
      powerConsumption: "3000-3500W"
    },
    {
      title: "Ethereum Mining",
      description: "GPU mining of Ethereum and other altcoins with proof-of-work",
      profitability: "Medium",
      difficulty: "High",
      equipment: "GPU rigs (RTX 3080, RTX 4090)",
      powerConsumption: "1000-1500W"
    },
    {
      title: "Altcoin Mining",
      description: "Mine alternative cryptocurrencies with lower difficulty",
      profitability: "Variable",
      difficulty: "Medium",
      equipment: "GPUs, CPUs, ASIC",
      powerConsumption: "500-2000W"
    }
  ];

  const miningHardware = [
    {
      name: "Antminer S19 Pro",
      type: "ASIC Bitcoin Miner",
      hashrate: "110 TH/s",
      power: "3250W",
      efficiency: "29.5 J/TH",
      price: "$3,000-$4,000"
    },
    {
      name: "Whatsminer M30S++",
      type: "ASIC Bitcoin Miner",
      hashrate: "112 TH/s",
      power: "3472W",
      efficiency: "31 J/TH",
      price: "$2,800-$3,500"
    },
    {
      name: "NVIDIA RTX 4090",
      type: "GPU Miner",
      hashrate: "120 MH/s (ETH)",
      power: "450W",
      efficiency: "0.27 J/MH",
      price: "$1,500-$2,000"
    }
  ];

  const miningPools = [
    {
      name: "Antpool",
      coins: ["Bitcoin", "Bitcoin Cash", "Litecoin"],
      fee: "2.5%",
      features: ["Large hash rate", "Stable payouts", "Mobile app"]
    },
    {
      name: "F2Pool",
      coins: ["Bitcoin", "Ethereum", "Litecoin", "Zcash"],
      fee: "2.5% - 3%",
      features: ["Multi-coin support", "Real-time stats", "24/7 support"]
    },
    {
      name: "Slush Pool",
      coins: ["Bitcoin", "Zcash"],
      fee: "2%",
      features: ["Oldest pool", "Advanced features", "Security focused"]
    }
  ];

  return (
    <>
      <SEOHead
        title="Cryptocurrency Mining & Bitcoin Mining Equipment Guide - FinanceHub"
        description="Complete guide to cryptocurrency mining and bitcoin mining. Learn about mining hardware, mining pools, profitability, and start your crypto mining operation today."
        keywords="cryptocurrency mining, bitcoin mining, crypto mining, mining equipment, ASIC miners, GPU mining, mining pools, mining profitability"
        canonical="https://investpro.on-fleek.app/crypto-mining"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-yellow-900 via-orange-900 to-red-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')"
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-yellow-400">Cryptocurrency Mining</span> & Bitcoin Mining
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Complete guide to cryptocurrency mining and bitcoin mining. Learn about mining hardware, pools, profitability, and start your mining operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/onboarding"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Started
              </Link>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-yellow-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Mining Calculator
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mining Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cryptocurrency Mining Methods
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore different cryptocurrency mining methods including Bitcoin mining, Ethereum mining, and altcoin mining opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {miningMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Bitcoin className="h-8 w-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {method.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {method.description}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Profitability:</span>
                    <span className={`font-semibold ${
                      method.profitability === 'High' ? 'text-green-600' : 
                      method.profitability === 'Medium' ? 'text-yellow-600' : 'text-gray-600'
                    }`}>
                      {method.profitability}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-semibold text-red-600">{method.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Equipment:</span>
                    <span className="font-semibold">{method.equipment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Power:</span>
                    <span className="font-semibold">{method.powerConsumption}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mining Hardware */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Top Cryptocurrency Mining Hardware
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare the best Bitcoin mining equipment and cryptocurrency mining hardware for optimal profitability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {miningHardware.map((hardware, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Cpu className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {hardware.name}
                    </h3>
                    <p className="text-blue-600 font-medium">{hardware.type}</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hash Rate:</span>
                    <span className="font-semibold">{hardware.hashrate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Power:</span>
                    <span className="font-semibold">{hardware.power}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Efficiency:</span>
                    <span className="font-semibold">{hardware.efficiency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-semibold text-green-600">{hardware.price}</span>
                  </div>
                </div>
                <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mining Pools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Top Cryptocurrency Mining Pools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the best mining pools for consistent payouts and stable cryptocurrency mining rewards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {miningPools.map((pool, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {pool.name}
                </h3>
                <div className="mb-4">
                  <span className="text-gray-600">Supported Coins:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {pool.coins.map((coin, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {coin}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-gray-600">Pool Fee: </span>
                  <span className="font-semibold">{pool.fee}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                <ul className="space-y-1 mb-6">
                  {pool.features.map((feature, idx) => (
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

      {/* Mining Setup Guide */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                How to Start Cryptocurrency Mining
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Choose Your Mining Method
                    </h3>
                    <p className="text-blue-100">
                      Decide between Bitcoin mining, Ethereum mining, or altcoin mining based on your budget and technical expertise.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Select Mining Hardware
                    </h3>
                    <p className="text-blue-100">
                      Choose appropriate mining equipment - ASIC miners for Bitcoin or GPU rigs for Ethereum and altcoins.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Join a Mining Pool
                    </h3>
                    <p className="text-blue-100">
                      Connect to a mining pool for consistent payouts and reduced variance in your mining rewards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Setup and Monitor
                    </h3>
                    <p className="text-blue-100">
                      Configure your mining software, monitor performance, and optimize your setup for maximum profitability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Cryptocurrency mining setup"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Cryptocurrency Mining?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Begin your cryptocurrency mining journey with the right equipment, pools, and strategies for profitable mining operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/onboarding"
              className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Open Account
            </Link>
            <Link 
              to="/crypto-trading" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore Crypto Trading
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CryptoMining;
