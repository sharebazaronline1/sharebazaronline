// src/pages/IPODetails.jsx 
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Download, ExternalLink, AlertTriangle,
  Home, Building2, Target, BarChart3, TrendingUp,
  Shield, Clock, Ticket, Users, DollarSign,
  HelpCircle, CheckCircle, XCircle
} from 'lucide-react';
import { fetchIPOs } from '../api/mockApi';

const IPODetails = () => {
  const { id } = useParams();
  const [ipo, setIpo] = useState(null);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    fetchIPOs().then((ipos) => {
      const selected = ipos.find((i) => i.id === parseInt(id));
      setIpo(selected);
    });
    window.scrollTo(0, 0);
  }, [id]);

  const getLowerPrice = (priceStr) => {
    if (!priceStr) return 0;
    if (typeof priceStr === 'number') return priceStr;
    const lower = priceStr.toString().split('-')[0];
    return parseInt(lower.replace(/[^0-9]/g, '')) || 0;
  };

  const sections = [
    { id: 'overview', label: 'IPO Overview', icon: Home },
    { id: 'about', label: 'About Company', icon: Building2 },
    { id: 'objectives', label: 'IPO Objectives', icon: Target },
    { id: 'financials', label: 'Financials', icon: BarChart3 },
    { id: 'valuation', label: 'Valuation', icon: TrendingUp },
    { id: 'strengths-risks', label: 'Strengths & Risks', icon: Shield },
    { id: 'timeline', label: 'Timeline', icon: Clock },
    { id: 'allocation', label: 'Lot & Allocation', icon: Ticket },
    { id: 'subscription', label: 'Subscription', icon: Users },
    { id: 'gmp', label: 'GMP Tracker', icon: DollarSign },
    { id: 'peers', label: 'Peer Comparison', icon: BarChart3 },
    { id: 'review', label: 'Expert Review', icon: Shield },
    { id: 'faqs', label: 'FAQs', icon: HelpCircle },
    { id: 'documents', label: 'Documents', icon: Download },
  ];

  if (!ipo) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="text-xl text-gray-600">Loading IPO details...</div>
      </div>
    );
  }

  const lowerPrice = getLowerPrice(ipo.price);
  const minInvestment = (ipo.lot || ipo.minLotSize || 1) * lowerPrice;

  return (
    <div className="min-h-screen bg-white">

      {/* Fixed Header - Now truly fixed, stays visible at top while scrolling */}
      <div className="fixed inset-x-0 top-12 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              {ipo?.logo ? (
                <img
                  src={ipo.logo}
                  alt="IPO"
                  className="w-14 h-14 object-contain rounded-lg border border-gray-200 bg-white"
                />
              ) : (
                <div className="w-14 h-14 rounded-lg bg-gray-600 text-white flex items-center justify-center font-bold text-2xl shadow-md">
                  {(ipo?.name?.charAt(0) || 'N').toUpperCase()}
                </div>
              )}
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{ipo.name}</h1>
                <p className="text-sm text-gray-600">{ipo.fullName || "Pre-IPO "}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-gray-900">
                ₹{minInvestment.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mt-1">Minimum Investment</p>
              <p className="text-xs text-gray-500">
                /{ipo.lot || ipo.minLotSize || "N/A"} shares
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add top padding to push content below the fixed header */}
      <div className="pt-32">
        {/* Quick Verdict */}
        <div className="bg-blue-50 border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle size={20} className="text-blue-700" />
              <p className="text-blue-900 font-medium">Content need to Be Added</p>
            </div>

            {/* Apply Now Button - Right Side */}
            <button className="px-8 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition shadow-md hover:shadow-lg">
              Apply Now
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-32 bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-5 text-lg">Quick Navigation</h3>
                <div className="space-y-2">
                  {sections.map((s) => {
                    const Icon = s.icon;
                    return (
                      <button key={s.id} onClick={() => setActiveSection(s.id)}
                        className={`w-full text-left px-5 py-3.5 rounded-lg font-medium text-sm flex items-center gap-3 transition-all ${
                          activeSection === s.id ? 'bg-green-500 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'
                        }`}>
                        <Icon size={18} /> {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">

              {/* Overview */}
              {activeSection === 'overview' && (
                <div className="border-b border-gray-200 pb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Overview</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                    <div><p className="text-gray-600">Company</p><p className="font-medium text-lg">{ipo.name}</p></div>
                    <div><p className="text-gray-600">Current Price</p><p className="font-medium text-lg text-blue-600">₹{ipo.price}</p></div>
                    <div><p className="text-gray-600">Min Lot Size</p><p className="font-medium text-lg">{ipo.minLotSize || ipo.lot} shares</p></div>
                    <div><p className="text-gray-600">Min Investment</p><p className="font-medium text-lg text-green-600">₹{minInvestment.toLocaleString()}</p></div>
                    <div><p className="text-gray-600">Depository</p><p className="font-medium text-lg">{ipo.depository || "NSDL & CDSL"}</p></div>
                    <div><p className="text-gray-600">Listing Date</p><p className="font-medium text-lg text-orange-600">{ipo.listing}</p></div>
                  </div>
                </div>
              )}

              {/* About */}
              {activeSection === 'about' && (
                <div className="border-b border-gray-200 pb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">About {ipo.name}</h2>
                  <p className="text-gray-700 leading-relaxed">
                    This is a pre-IPO/unlisted share opportunity. The company is in the growth phase and may go public in the future. Investment in unlisted shares carries higher risk and lower liquidity compared to listed stocks.
                  </p>
                </div>
              )}

              {/* GMP Section */}
              {activeSection === 'gmp' && (
                <div className="border-b border-gray-200 pb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Grey Market Premium</h2>
                  <p className="text-5xl font-bold text-green-600">Not Available</p>
                  <p className="text-lg text-gray-600 mt-4">GMP data is only available for live IPOs</p>
                </div>
              )}

              {/* Add other sections as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPODetails;