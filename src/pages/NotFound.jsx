import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Search,
  TrendingUp,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
} from "lucide-react";

const NotFound = () => {
  return (
    <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 py-12">

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

        {/* HERO */}
        <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-24 px-8 text-center overflow-hidden">

          {/* Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-white"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-white via-transparent to-white"></div>
          </div>

          {/* Blur Orbs */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-green-400/30 rounded-full blur-3xl"></div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-400/30 rounded-full blur-3xl"></div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 text-sm font-semibold mb-8">
              <TrendingUp size={16} />
              Error 404
            </div>

            {/* Main Title */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
              Page Not Found
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl max-w-4xl mx-auto opacity-95 leading-relaxed">
              The page you are trying to access may have been moved,
              deleted or the URL may be incorrect.
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">

              <Link
                to="/"
                className="group inline-flex items-center gap-2 bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold shadow-lg transition-all duration-300"
              >
                <Home size={18} />
                Back to Home
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition"
                />
              </Link>

              <Link
                to="/ipo/ipo-list"
                className="group inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300"
              >
                <Search size={18} />
                Explore IPOs
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition"
                />
              </Link>

            </div>

          </motion.div>
        </div>

        {/* FEATURE CARDS */}
        <div className="px-8 py-16 bg-gray-50">

          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-14">
            Continue Exploring
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

            {/* IPO LIST */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link
                to="/ipo/ipo-list"
                className="group block bg-white rounded-3xl shadow-lg p-10 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-7 text-green-600">
                  <BarChart3 size={34} />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 group-hover:text-green-600 transition">
                  IPO List
                </h3>

                <p className="text-gray-600 leading-relaxed text-center">
                  Track upcoming,live and listed IPOs,
                  allotment status.
                </p>

              </Link>
            </motion.div>

            {/* UNLISTED SHARES */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/pre-ipo-stocks"
                className="group block bg-white rounded-3xl shadow-lg p-10 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl flex items-center justify-center mx-auto mb-7 text-blue-600">
                  <BriefcaseBusiness size={34} />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 group-hover:text-blue-600 transition">
                  Unlisted Shares
                </h3>

                <p className="text-gray-600 leading-relaxed text-center">
                  Explore pre IPO and private market investment opportunities.
                </p>

              </Link>
            </motion.div>

            {/* INSIGHT HUB */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="/insight-hub"
                className="group block bg-white rounded-3xl shadow-lg p-10 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center mx-auto mb-7 text-purple-600">
                  <TrendingUp size={34} />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 group-hover:text-purple-600 transition">
                  Market Insights
                </h3>

                <p className="text-gray-600 leading-relaxed text-center">
                  Read IPO reviews, GMP updates and stock market insights.
                </p>

              </Link>
            </motion.div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default NotFound;