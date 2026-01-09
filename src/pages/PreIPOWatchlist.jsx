// src/pages/PreIPOWatchlist.jsx

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Menu, AlertCircle, TrendingUp, Plus, X } from "lucide-react";

const PreIPOWatchlist = () => {
  const [user, setUser] = useState(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) navigate("/login");
      else setUser(currentUser);
    });
    return () => unsub();
  }, [navigate]);

  if (!user) return null;

  // Actual trending pre-IPO/unlisted shares as of January 09, 2026
  const watchlist = [
    {
      name: "OYO (Oravel Stays Ltd)",
      price: "₹26 – ₹28",
      demand: "High Demand",
      sector: "Hospitality",
      expectedIPO: "2026",
      change: "+3.7%",
    },
    {
      name: "PhonePe",
      price: "≈ ₹19,968",
      demand: "Very High Demand",
      sector: "Fintech",
      expectedIPO: "2026-2027",
      change: "+0.8%",
    },
    {
      name: "NSE India Ltd",
      price: "₹1,940 – ₹2,400",
      demand: "Strong Interest",
      sector: "Stock Exchange",
      expectedIPO: "Expected 2026",
      change: "+1.2%",
    },
    {
      name: "CSK (Chennai Super Kings)",
      price: "₹212 – ₹215",
      demand: "Popular",
      sector: "Sports",
      expectedIPO: "Unlisted",
      change: "+1.4%",
    },
    {
      name: "Inox Clean Energy",
      price: "≈ ₹550",
      demand: "Rising",
      sector: "Renewable Energy",
      expectedIPO: "Upcoming",
      change: "+2.1%",
    },
    {
      name: "Hero FinCorp",
      price: "TBA",
      demand: "Strong",
      sector: "NBFC",
      expectedIPO: "2026",
      change: "—",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} />

      <main className="md:ml-64 p-4 md:p-8 transition-all">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between mb-6 bg-white p-4 rounded-xl shadow-sm">
          <h1 className="text-lg font-bold text-gray-900">Pre-IPO Watchlist</h1>
          <button onClick={() => setMobileSidebarOpen(true)}>
            <Menu size={24} />
          </button>
        </header>

        {/* Desktop Header */}
        <header className="hidden md:block mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Pre-IPO Watchlist</h1>
          <p className="text-gray-600 mt-1">
            Track your favorite unlisted and upcoming pre-IPO companies
          </p>
        </header>

        {/* Watchlist Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {watchlist.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.sector}</p>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Current Price</span>
                  <span className="font-semibold">{item.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Expected IPO</span>
                  <span className="text-sm">{item.expectedIPO}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Daily Change</span>
                  <span
                    className={`font-medium ${
                      item.change.startsWith("+") ? "text-green-600" : "text-gray-600"
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t flex items-center justify-between">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    item.demand.includes("Very High") || item.demand.includes("High")
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {item.demand}
                </span>
                <button className="text-sm font-semibold text-green-600 hover:underline">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Empty State */}
        {watchlist.length === 0 && (
          <div className="text-center py-12">
            <AlertCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Your watchlist is empty</p>
            <p className="text-gray-400 mt-2">
              Explore pre-IPO stocks and add them here to track
            </p>
          </div>
        )}

        {/* Suggested Pre-IPOs Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <TrendingUp className="text-green-600" />
            Suggested for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SuggestionCard
              name="Swiggy"
              price="≈ ₹390 – ₹410"
              demand="High Demand"
              sector="Food Delivery"
            />
            <SuggestionCard
              name="Tata Capital"
              price="≈ ₹950 – ₹1,100"
              demand="Strong Interest"
              sector="NBFC"
            />
            <SuggestionCard
              name="Bharat FIH (Foxconn India)"
              price="TBA"
              demand="Growing"
              sector="Manufacturing"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

const SuggestionCard = ({ name, price, demand, sector }) => (
  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition">
    <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
    <p className="text-sm text-gray-600 mt-1">Sector: {sector}</p>
    <p className="text-sm text-gray-600 mt-2">Price: {price}</p>

    <div className="mt-6 flex items-center justify-between">
      <span
        className={`text-xs px-3 py-1 rounded-full font-medium ${
          demand.includes("High") ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
        }`}
      >
        {demand}
      </span>
      <button className="flex items-center gap-2 text-sm font-semibold text-green-600 hover:underline">
        <Plus size={18} />
        Add to Watchlist
      </button>
    </div>
  </div>
);

export default PreIPOWatchlist;