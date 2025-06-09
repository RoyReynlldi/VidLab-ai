import React from 'react';
import logo from '../assets/logo.png'; // Gunakan path relatif dari file Footer.tsx
import { Mail, Twitter, Youtube, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-10 h-10 rounded-xl flex items-center justify-center">
                <img src={logo} alt="VidLab Logo" className="w-6 h-6 object-contain" />
              </div>
              <span className="text-2xl font-bold text-white">VidLab AI</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Transform your long-form content into viral clips with the power of artificial intelligence. 
              Create engaging short videos for all major social platforms.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <div className="space-y-4">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">API</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Integrations</a>
            </div>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <div className="space-y-4">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Help Center</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        {/* Contact & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Mail className="w-4 h-4" />
            <span>support@vidlab.ai</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2024 VidLab AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;