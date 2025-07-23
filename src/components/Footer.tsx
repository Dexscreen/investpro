import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-blue-400" />
              <TrendingUp className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">InvestPro</span>
            </div>
            <p className="text-gray-400 mb-4">
              The ultimate all-in-one investment platform with zero commissions, AI-powered tools, and professional advisory services.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/investment-advisors" className="text-gray-400 hover:text-white">Investment Advisors</Link></li>
              <li><Link to="/crypto-trading" className="text-gray-400 hover:text-white">Crypto Trading</Link></li>
              <li><Link to="/online-brokerage" className="text-gray-400 hover:text-white">Online Brokerage</Link></li>
              <li><Link to="/crypto-mining" className="text-gray-400 hover:text-white">Crypto Mining</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Market Analysis</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Trading Tools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@financehub.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Financial St, NY 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 FinanceHub. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;