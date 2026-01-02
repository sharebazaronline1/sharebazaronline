// src/pages/IPODetails.jsx

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Download, AlertTriangle,
  Home, Building2, Target, BarChart3, TrendingUp,
  Shield, Clock, Ticket, Users, IndianRupee,
  HelpCircle, CheckCircle, XCircle
} from 'lucide-react';
import { fetchIPOs } from '../api/mockApi';

const IPODetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ipo, setIpo] = useState(null);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    fetchIPOs().then((ipos) => {
      setIpo(ipos.find((i) => i.id === parseInt(id)));
    });
    window.scrollTo(0, 0);
  }, [id]);

  const getHigherPrice = (priceStr) => {
    if (!priceStr) return 0;
    const parts = priceStr.toString().split('-');
    return parseInt(parts[parts.length - 1].replace(/[^0-9]/g, '')) || 0;
  };

  if (!ipo) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading IPO details...
      </div>
    );
  }

  const minInvestment =
    (ipo.lot || ipo.minLotSize || 1) * getHigherPrice(ipo.price);

  const sections = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'about', label: 'About', icon: Building2 },
    { id: 'objectives', label: 'Objectives', icon: Target },
    { id: 'financials', label: 'Financials', icon: BarChart3 },
    { id: 'valuation', label: 'Valuation', icon: TrendingUp },
    { id: 'strengths-risks', label: 'Risks', icon: Shield },
    { id: 'timeline', label: 'Timeline', icon: Clock },
    { id: 'allocation', label: 'Lot', icon: Ticket },
    { id: 'subscription', label: 'Subscription', icon: Users },
    { id: 'gmp', label: 'GMP', icon: IndianRupee },
    { id: 'peers', label: 'Peers', icon: BarChart3 },
    { id: 'review', label: 'Review', icon: Shield },
    { id: 'faqs', label: 'FAQs', icon: HelpCircle },
    { id: 'documents', label: 'Docs', icon: Download },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* FIXED HEADER */}
      <div className="fixed inset-x-0 top-16 z-30 bg-white border-b shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-10 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex items-center gap-3">
              {ipo.logo ? (
                <img
                  src={ipo.logo}
                  alt={ipo.name}
                  className="w-10 h-10 sm:w-14 sm:h-14 object-contain rounded-lg border bg-white"
                />
              ) : (
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gray-700 text-white flex items-center justify-center rounded-lg text-lg sm:text-xl font-bold">
                  {ipo.name.charAt(0)}
                </div>
              )}
              <div className="leading-tight">
                <h1 className="text-lg sm:text-2xl font-bold text-gray-900">
                  {ipo.name}
                </h1>
                <p className="text-xs sm:text-sm text-gray-600">
                  {ipo.fullName || 'IPO'}
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-lg sm:text-2xl font-bold text-gray-900">
                ₹{minInvestment.toLocaleString()}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                Minimum Investment
              </p>
            </div>

          </div>
        </div>

        {/* FULL WIDTH BLUE BAR */}
        <div className="fixed inset-x-0 top-[140px] sm:top-[152px] z-20 bg-blue-50 border-b">
          <div className="px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="text-blue-700 w-4 h-4 sm:w-5 sm:h-5" />
              <p className="text-xs sm:text-sm font-medium text-blue-900">
                   Ready to invest in this opportunity? Apply now through our trusted platforms.
              </p>
            </div>
            <button
              onClick={() => navigate('/how-to-apply-ipo')}
              className="px-4 py-2 sm:px-8 sm:py-3 text-xs sm:text-base bg-green-600 text-white font-bold rounded-full"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className="pt-32 sm:pt-20">
        <div className="h-16 sm:h-20" />

        <div className="lg:hidden sticky top-28 z-10 bg-white border-b">
          <div className="flex gap-2 overflow-x-auto px-4 py-3">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`px-3 py-1.5 rounded-full text-xs ${
                  activeSection === id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-full mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-10">

          <aside className="hidden lg:block sticky top-32 border rounded-xl p-6">
            <h3 className="font-bold mb-4">Quick Navigation</h3>
            <div className="space-y-2">
              {sections.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm ${
                    activeSection === id
                      ? 'bg-green-600 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <Icon size={16} /> {label}
                </button>
              ))}
            </div>
          </aside>

          <main className="lg:col-span-3 space-y-12">

            {activeSection === 'overview' && (
              <>
                <h2 className="text-2xl font-bold">Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div><p className="text-gray-500">Price</p><p className="font-medium">₹{ipo.price}</p></div>
                  <div><p className="text-gray-500">Lot Size</p><p className="font-medium">{ipo.lot}</p></div>
                  <div><p className="text-gray-500">Listing</p><p className="font-medium">{ipo.listing}</p></div>
                  <div><p className="text-gray-500">Depository</p><p className="font-medium">{ipo.depository || 'NSDL & CDSL'}</p></div>
                  <div><p className="text-gray-500">Min Investment</p><p className="font-medium">₹{minInvestment.toLocaleString()}</p></div>
                </div>
              </>
            )}

            {activeSection === 'about' && (
              <>
                <h2 className="text-2xl font-bold">About Company</h2>
                <p className="text-gray-700">
                  This is a pre-IPO / unlisted share opportunity. The company is in a growth phase and may go public in the future.
                </p>
              </>
            )}

            {activeSection === 'objectives' && (
              <>
                <h2 className="text-2xl font-bold">IPO Objectives</h2>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Business expansion</li>
                  <li>Working capital requirements</li>
                  <li>Debt reduction</li>
                </ul>
              </>
            )}

            {activeSection === 'financials' && (
              <>
                <h2 className="text-2xl font-bold">Financials</h2>
                <p className="text-gray-600">Financial data will be updated closer to IPO.</p>
              </>
            )}

            {activeSection === 'valuation' && (
              <>
                <h2 className="text-2xl font-bold">Valuation</h2>
                <p className="text-gray-600">Valuation metrics to be disclosed post DRHP.</p>
              </>
            )}

            {activeSection === 'strengths-risks' && (
              <>
                <h2 className="text-2xl font-bold">Strengths & Risks</h2>
                <div className="space-y-3">
                  <p className="flex gap-2"><CheckCircle className="text-green-600" /> Strong brand presence</p>
                  <p className="flex gap-2"><XCircle className="text-red-600" /> Market volatility risk</p>
                </div>
              </>
            )}

            {activeSection === 'gmp' && (
              <>
                <h2 className="text-2xl font-bold">Grey Market Premium</h2>
                <p className="text-4xl font-bold text-gray-400">Not Available</p>
              </>
            )}

            {activeSection === 'documents' && (
              <>
                <h2 className="text-2xl font-bold">Documents</h2>
                <p className="text-gray-600">DRHP / RHP will be added once available.</p>
              </>
            )}

          </main>
        </div>
      </div>
    </div>
  );
};

export default IPODetails;
