import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Bitcoin, Users, Shield, Star, CheckCircle, ArrowRight, Zap, BarChart3, DollarSign } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const ChineseInvestment = () => {
  const services = [
    {
      icon: <Bitcoin className="h-12 w-12 text-orange-500" />,
      title: "专业加密货币和虚拟货币交易平台",
      description: "领先的加密货币和虚拟货币交易平台，支持比特币、以太坊等主流数字货币。我们的虚拟币交易平台和数字货币交易平台提供最安全的加密货币交易环境，助您轻松进行加密货币投资。",
      features: ["加密货币零手续费", "虚拟货币安全交易", "专业投资顾问指导", "24/7加密货币支持"]
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "专业比特币挖矿和加密货币挖矿",
      description: "完整的比特币挖矿解决方案，专业的加密货币挖矿服务。我们提供最先进的挖矿设备和技术支持，帮助您在虚拟货币和加密货币投资中获得最大收益。",
      features: ["比特币挖矿设备", "加密货币挖矿优化", "虚拟货币挖矿支持", "专业技术指导"]
    },
    {
      icon: <Users className="h-12 w-12 text-blue-500" />,
      title: "专业投资顾问和财务顾问团队",
      description: "经验丰富的投资顾问和财务顾问团队，专门为加密货币和虚拟货币投资提供专业指导。我们的投资顾问和财务顾问将为您制定个性化的加密货币投资策略。",
      features: ["加密货币投资策略", "虚拟货币风险评估", "专业投资顾问咨询", "财务顾问规划"]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-green-500" />,
      title: "先进数字货币交易平台和虚拟币交易平台",
      description: "最先进的数字货币交易平台和虚拟币交易平台，专为加密货币投资和虚拟货币交易设计。我们的平台提供专业的加密货币交易工具和市场分析。",
      features: ["加密货币智能工具", "虚拟货币市场分析", "数字货币自动交易", "加密货币投资管理"]
    }
  ];

  const stats = [
    { number: "500万+", label: "加密货币投资用户" },
    { number: "¥3000亿+", label: "虚拟货币管理资产" },
    { number: "99.9%", label: "比特币挖矿稳定性" },
    { number: "24/7", label: "投资顾问服务" }
  ];

  const cryptoFeatures = [
    {
      title: "加密货币和虚拟货币投资优势",
      points: [
        "加密货币和虚拟货币最低交易手续费",
        "支持500+种加密货币和虚拟货币交易",
        "专业虚拟币交易平台和数字货币交易平台",
        "加密货币投资安全保障"
      ]
    },
    {
      title: "专业比特币挖矿和加密货币挖矿服务",
      points: [
        "专业比特币挖矿设备和加密货币挖矿工具",
        "优化比特币挖矿池，提高虚拟货币收益",
        "24/7比特币挖矿技术支持",
        "透明的加密货币挖矿收益分配"
      ]
    },
    {
      title: "专业投资顾问和财务顾问服务",
      points: [
        "经验丰富的加密货币投资顾问和财务顾问",
        "个性化加密货币和虚拟货币投资策略",
        "专业加密货币投资风险评估",
        "定期虚拟货币投资组合优化"
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="加密货币投资平台 | 虚拟货币 | 比特币挖矿 | 投资顾问 | 财务顾问 - 专业数字货币交易平台"
        description="中国领先的加密货币和虚拟货币投资平台。专业投资顾问和财务顾问提供比特币挖矿、加密货币投资、加密货币交易服务。安全的虚拟币交易平台和数字货币交易平台，助您轻松投资加密货币。"
        keywords="加密货币, 虚拟货币, 比特币挖矿, 投资顾问, 财务顾问, 加密货币投资, 加密货币交易, 虚拟币交易平台, 数字货币交易平台"
        canonical="https://investpro.com/chinese-investment"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block bg-gradient-to-r from-red-400 to-yellow-400 text-transparent bg-clip-text text-2xl font-bold mb-4">
              🚀 中国领先的加密货币和虚拟货币投资平台
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 text-transparent bg-clip-text">加密货币</span>和<span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 text-transparent bg-clip-text">虚拟货币</span>投资
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-6 max-w-4xl mx-auto leading-relaxed">
            专业<strong>加密货币</strong>和<strong>虚拟货币</strong>投资平台
          </p>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            提供<strong>比特币挖矿</strong>、<strong>加密货币交易</strong>和专业<strong>投资顾问</strong>、<strong>财务顾问</strong>服务
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto">
            安全的<strong>虚拟币交易平台</strong>和<strong>数字货币交易平台</strong>，专业<strong>加密货币投资</strong>解决方案
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link 
              to="/onboarding"
              className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25"
            >
              立即开户投资加密货币
              <ArrowRight className="inline-block ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-red-900 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105"
            >
              了解虚拟货币投资
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-red-200 text-lg font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-red-100 text-red-600 px-6 py-3 rounded-full text-lg font-bold mb-6">
              专业加密货币和虚拟货币服务
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              <span className="text-red-600">加密货币</span>和<span className="text-red-600">虚拟货币</span>投资平台
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-4">
              专业<strong>加密货币投资</strong>、<strong>比特币挖矿</strong>、<strong>虚拟货币</strong>交易服务
            </p>
            <p className="text-xl text-gray-500 max-w-4xl mx-auto">
              经验丰富的<strong>投资顾问</strong>和<strong>财务顾问</strong>团队为您服务
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 border border-gray-100 hover:border-red-200 transform hover:-translate-y-3">
                <div className="mb-8 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/onboarding"
              className="inline-flex items-center bg-gradient-to-r from-red-600 to-orange-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              立即开始加密货币和虚拟货币投资
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              为什么选择我们的<span className="text-red-600">加密货币</span>和<span className="text-red-600">虚拟货币</span>投资平台？
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {cryptoFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <ul className="space-y-4">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <Star className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 leading-relaxed text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section id="process" className="py-24 bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              开始您的<span className="text-yellow-400">加密货币</span>和<span className="text-yellow-400">虚拟货币投资</span>之旅
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                注册开户投资加密货币
              </h3>
              <p className="text-orange-200">
                快速注册开始<strong>加密货币</strong>和<strong>虚拟货币投资</strong>
              </p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                专业投资顾问制定策略
              </h3>
              <p className="text-orange-200">
                专业<strong>投资顾问</strong>和<strong>财务顾问</strong>制定<strong>虚拟货币</strong>投资策略
              </p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <div className="bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                开始加密货币投资
              </h3>
              <p className="text-orange-200">
                使用<strong>虚拟币交易平台</strong>和<strong>数字货币交易平台</strong>开始<strong>比特币挖矿</strong>
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/onboarding"
              className="inline-flex items-center bg-white text-red-600 hover:bg-gray-100 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              立即开始加密货币和虚拟货币投资
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              准备好投资<span className="text-red-600">加密货币</span>和<span className="text-red-600">虚拟货币</span>了吗？
            </h2>
            <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              专业<strong>加密货币</strong>和<strong>虚拟货币</strong>投资平台
            </p>
            <p className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto">
              提供<strong>比特币挖矿</strong>、<strong>加密货币交易</strong>、<strong>虚拟币交易平台</strong>、<strong>数字货币交易平台</strong>服务，专业<strong>投资顾问</strong>和<strong>财务顾问</strong>团队
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/onboarding"
                className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center"
              >
                立即开户投资加密货币和虚拟货币
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300"
              >
                了解更多服务
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <Shield className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">加密货币安全保障</div>
              </div>
              <div>
                <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">虚拟货币低手续费</div>
              </div>
              <div>
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">专业投资顾问</div>
              </div>
              <div>
                <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">比特币挖矿支持</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChineseInvestment;