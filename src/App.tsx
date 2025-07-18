import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import InvestmentAdvisors from './pages/InvestmentAdvisors';
import CryptoTrading from './pages/CryptoTrading';
import OnlineBrokerage from './pages/OnlineBrokerage';
import CryptoMining from './pages/CryptoMining';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Onboarding from './pages/Onboarding';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/investment-advisors" element={<InvestmentAdvisors />} />
              <Route path="/crypto-trading" element={<CryptoTrading />} />
              <Route path="/online-brokerage" element={<OnlineBrokerage />} />
              <Route path="/crypto-mining" element={<CryptoMining />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/onboarding" element={<Onboarding />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
