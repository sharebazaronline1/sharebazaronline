// src/components/Footer.jsx

import { Link } from "react-router-dom";
import {
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 border-t border-gray-300 mt-2">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* COMPANY INFO */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/sharebazaar.png"
                alt="ShareBazaarOnline Logo"
                className="h-6 w-auto"
              />
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Vaishnavi Tech Park, South Tower, 3rd Floor
              <br />
              Sarjapur Main Road, Bellandur
              <br />
              Bengaluru – 560103, Karnataka
            </p>

            {/* CONTACT */}
            <div className="space-y-4">

              <div>
                <p className="text-sm font-semibold text-gray-800 mb-3">
                  Contact Us
                </p>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 transition"
                  >
                    <Twitter size={20} />
                  </a>

                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 transition"
                  >
                    <Instagram size={20} />
                  </a>

                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 transition"
                  >
                    <Facebook size={20} />
                  </a>

                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 transition"
                  >
                    <Linkedin size={20} />
                  </a>

                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900 transition"
                  >
                    <Youtube size={20} />
                  </a>
                </div>
              </div>

              <div>
                <a
                  href="mailto:support@sharebazaaronline.com"
                  className="text-sm text-gray-700 hover:text-black transition"
                >
                  support@sharebazaaronline.com
                </a>
              </div>

            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-5">
              COMPANY
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">

              <li>
                <Link
                  to="/"
                  className="hover:text-gray-900 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/ipo/ipo-list"
                  className="hover:text-gray-900 transition"
                >
                  IPO Tracker
                </Link>
              </li>

              <li>
                <Link
                  to="/skill-up"
                  className="hover:text-gray-900 transition"
                >
                  SkillUp
                </Link>
              </li>

              <li>
                <Link
                  to="/insight-hub"
                  className="hover:text-gray-900 transition"
                >
                  Insight Hub
                </Link>
              </li>

              <li>
                <a
                  href="mailto:support@sharebazaaronline.com"
                  className="hover:text-gray-900 transition"
                >
                  Help & Support
                </a>
              </li>

            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-5">
              PRODUCTS
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">

              <li>
                <Link
                  to="/ipo/ipo-list"
                  className="hover:text-gray-900 transition"
                >
                  IPO Updates
                </Link>
              </li>

              <li>
                <Link
                  to="/pre-ipo-stocks"
                  className="hover:text-gray-900 transition"
                >
                  Unlisted Shares
                </Link>
              </li>

              <li>
                <Link
                  to="/broker-analyzer"
                  className="hover:text-gray-900 transition"
                >
                  Broker Comparison
                </Link>
              </li>

              <li>
                <Link
                  to="/skill-up"
                  className="hover:text-gray-900 transition"
                >
                  Options
                </Link>
              </li>

              <li>
                <Link
                  to="/skill-up"
                  className="hover:text-gray-900 transition"
                >
                  Futures
                </Link>
              </li>

              <li>
                <Link
                  to="/skill-up"
                  className="hover:text-gray-900 transition"
                >
                  Commodity
                </Link>
              </li>

              <li>
                <Link
                  to="/skill-up"
                  className="hover:text-gray-900 transition"
                >
                  ETFs
                </Link>
              </li>

              <li>
                <Link
                  to="/skill-up"
                  className="hover:text-gray-900 transition"
                >
                  Mutual Funds
                </Link>
              </li>

              <li>
                <Link
                  to="/skill-up"
                  className="hover:text-gray-900 transition"
                >
                  NFO
                </Link>
              </li>

              <li>
                <Link
                  to="/skill-up"
                  className="hover:text-gray-900 transition"
                >
                  Corporate Actions
                </Link>
              </li>

            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-8 border-t border-gray-300 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-500">

          <p>
            © {year} ShareBazaarOnline. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 lg:mt-0">

            <Link
              to="/"
              className="hover:text-gray-900 transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/"
              className="hover:text-gray-900 transition"
            >
              Terms of Service
            </Link>

            <Link
              to="/"
              className="hover:text-gray-900 transition"
            >
              Disclaimer
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;