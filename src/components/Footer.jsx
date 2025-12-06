// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Twitter, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Company Info + LOGO */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
           
              <img 
                src="/images/sharebazaar.png" 
                alt="ShareBazaarOnline Logo" 
                className="h-10 w-auto"
              />
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Vaishnavi Tech Park, South Tower, 3rd Floor<br />
              Sarjapur Main Road, Bellandur<br />
              Bengaluru – 560103, Karnataka
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-3">Contact Us</p>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-500 hover:text-gray-900 transition"><Twitter size={20} /></a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 transition"><Instagram size={20} /></a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 transition"><Facebook size={20} /></a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 transition"><Linkedin size={20} /></a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 transition"><Youtube size={20} /></a>
                </div>
              </div>

             
           
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-5">COMPANY</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-gray-900 transition">About Us</Link></li>
              <li><Link to="/ipotracker" className="hover:text-gray-900 transition">IPO Tracker</Link></li>
              <li><Link to="/skillup" className="hover:text-gray-900 transition">SkillUp</Link></li>
              <li><Link to="/media" className="hover:text-gray-900 transition">Media & Press</Link></li>
              <li><Link to="/insighthub" className="hover:text-gray-900 transition">Insight Hub</Link></li>
              <li><Link to="/help" className="hover:text-gray-900 transition">Help & Support</Link></li>
            </ul>
          </div>

          {/* Products */}
       <div>
            <h3 className="text-lg font-bold text-gray-900 mb-5">PRODUCTS</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/ipo" className="hover:text-gray-900 transition">IPO Updates</Link></li>
              <li><Link to="/unlisted" className="hover:text-gray-900 transition">Unlisted Shares</Link></li>
              <li><Link to="/broker-comparison" className="hover:text-gray-900 transition">Broker Comparison</Link></li>
              <li><Link to="/options" className="hover:text-gray-900 transition">Options</Link></li>
              <li><Link to="/futures" className="hover:text-gray-900 transition">Futures</Link></li>
              <li><Link to="/commodity" className="hover:text-gray-900 transition">Commodity</Link></li>
              <li><Link to="/etf" className="hover:text-gray-900 transition">ETFs</Link></li>
              <li><Link to="/mutual-funds" className="hover:text-gray-900 transition">Mutual Funds</Link></li>
              <li><Link to="/nfo" className="hover:text-gray-900 transition">NFO</Link></li>
              <li><Link to="/corporate-actions" className="hover:text-gray-900 transition">Corporate Actions</Link></li>
            </ul>
          </div>
         
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 ShareBazaarOnline. All rights reserved.</p>
          <div className="flex gap-6 mt-4 lg:mt-0">
            <Link to="/privacy" className="hover:text-gray-900 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-900 transition">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-gray-900 transition">Disclaimer</Link>
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;