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

  return (
    <div className="min-h-screen bg-white">

      {/* Fixed Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <img src={ipo.logo || "/placeholder-logo.svg"} alt={ipo.name} className="w-14 h-14 object-contain rounded" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{ipo.name} IPO</h1>
                <p className="text-sm text-gray-600">{ipo.fullName}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-gray-900">
                ₹{(ipo.lot * parseInt(ipo.price.split('-')[0])).toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mt-1">Minimum Investment</p>
              <p className="text-xs text-gray-500">/{ipo.lot} shares</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Verdict */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3">
          <AlertTriangle size={20} className="text-blue-700" />
          <p className="text-blue-900 font-medium">Quick Verdict: Attractive Pricing • Strong Growth Potential</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Mobile Tabs */}
        <div className="lg:hidden mb-10">
          <div className="flex flex-wrap gap-3">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <button key={s.id} onClick={() => setActiveSection(s.id)}
                  className={`px-5 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${
                    activeSection === s.id ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                  <Icon size={16} /> {s.label}
                </button>
              );
            })}
          </div>
        </div>

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

            {/* 1. IPO Overview */}
            {activeSection === 'overview' && (
              <div className="border-b border-gray-200 pb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">IPO Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                  <div><p className="text-gray-600">Company Name</p><p className="font-medium text-lg">{ipo.name}</p></div>
                  <div><p className="text-gray-600">Exchange</p><p className="font-medium text-lg">NSE & BSE</p></div>
                  <div><p className="text-gray-600">IPO Type</p><p className="font-medium text-lg">Book Built</p></div>
                  <div><p className="text-gray-600">Face Value</p><p className="font-medium text-lg">₹1</p></div>
                  <div><p className="text-gray-600">Price Band</p><p className="font-medium text-lg text-blue-600">₹{ipo.price}</p></div>
                  <div><p className="text-gray-600">Issue Size</p><p className="font-medium text-lg">₹1,288.89 Cr</p></div>
                  <div><p className="text-gray-600">Lot Size</p><p className="font-medium text-lg">{ipo.lot} shares</p></div>
                  <div><p className="text-gray-600">Min Investment</p><p className="font-medium text-lg text-green-600">₹{(ipo.lot * parseInt(ipo.price.split('-')[0])).toLocaleString()}</p></div>
                  <div><p className="text-gray-600">Opening Date</p><p className="font-medium text-lg">{ipo.open}</p></div>
                  <div><p className="text-gray-600">Closing Date</p><p className="font-medium text-lg">{ipo.close}</p></div>
                  <div><p className="text-gray-600">Listing Date</p><p className="font-medium text-lg">{ipo.listing || "TBA"}</p></div>
                  <div><p className="text-gray-600">Registrar</p><p className="font-medium text-lg">Link Intime</p></div>
                  <div><p className="text-gray-600">Lead Manager</p><p className="font-medium text-lg">Kotak Mahindra</p></div>
                  <div><p className="text-gray-600">Promoters</p><p className="font-medium text-lg">Ankit Garg, Chaitanya R.</p></div>
                </div>
              </div>
            )}

            {/* 2. About Company */}
            {activeSection === 'about' && (
              <div className="border-b border-gray-200 pb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About {ipo.name}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {ipo.name} is India's leading D2C home solutions brand offering premium mattresses, furniture, and furnishings. Founded in 2016, it has grown to 125+ stores and strong online presence.
                </p>
                <h3 className="font-bold text-lg mb-4">Business Segments</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><CheckCircle className="text-green-600" size={20} /> Mattresses & Sleep Solutions</li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-green-600" size={20} /> Furniture (Beds, Sofas, Tables)</li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-green-600" size={20} /> Home Furnishings</li>
                </ul>
              </div>
            )}

            {/* 3. IPO Objectives */}
            {activeSection === 'objectives' && (
              <div className="border-b border-gray-200 pb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">IPO Objectives</h2>
                <ul className="space-y-3 text-gray-700">
                  <li>• Funding working capital requirements</li>
                  <li>• Repayment of borrowings</li>
                  <li>• Business expansion & new store openings</li>
                  <li>• General corporate purposes</li>
                </ul>
              </div>
            )}

            {/* 4. Financial Highlights */}
            {activeSection === 'financials' && (
              <div className="border-b border-gray-200 pb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Financial Highlights</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left">Year</th>
                        <th className="px-4 py-3 text-right">Revenue</th>
                        <th className="px-4 py-3 text-right">EBITDA</th>
                        <th className="px-4 py-3 text-right">PAT</th>
                        <th className="px-4 py-3 text-right">EPS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr><td className="px-4 py-3">FY22</td><td className="text-right">₹812 Cr</td><td className="text-right">₹150 Cr</td><td className="text-right text-red-600">-₹145 Cr</td><td className="text-right">-₹4.50</td></tr>
                      <tr><td className="px-4 py-3">FY23</td><td className="text-right">₹986 Cr</td><td className="text-right">₹180 Cr</td><td className="text-right text-red-600">-₹15 Cr</td><td className="text-right">-₹0.50</td></tr>
                      <tr><td className="px-4 py-3 font-bold">FY24</td><td className="text-right font-bold">₹1,274 Cr</td><td className="text-right font-bold">₹220 Cr</td><td className="text-right text-red-600 font-bold">-₹35 Cr</td><td className="text-right font-bold">-₹1.10</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-4">Revenue CAGR: 24.87% | Losses due to expansion</p>
              </div>
            )}

            {/* 5. Valuation Analysis */}
            {activeSection === 'valuation' && (
              <div className="border-b border-gray-200 pb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Valuation Analysis</h2>
                <div className="space-y-4 text-sm">
                  <p><span className="font-semibold">PE Ratio (upper band):</span> 25x</p>
                  <p><span className="font-semibold">Industry PE:</span> 30x</p>
                  <p><span className="font-semibold">EPS & NAV:</span> ₹-1.10 / ₹100</p>
                  <p><span className="font-semibold">Post-issue Market Cap:</span> ~₹5,000 Cr</p>
                  <p className="text-lg font-bold text-green-600">Valuation: Fairly Valued</p>
                </div>
              </div>
            )}

            {/* 6. Strengths & Risks */}
            {activeSection === 'strengths-risks' && (
              <div className="border-b border-gray-200 pb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Strengths & Risks</h2>
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="font-bold text-green-700 mb-4">Key Strengths</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle className="text-green-600" size={18} /> Strong distribution network</li>
                      <li className="flex items-center gap-2"><CheckCircle className="text-green-600" size={18} /> Experienced promoters</li>
                      <li className="flex items-center gap-2"><CheckCircle className="text-green-600" size={18} /> Steady revenue growth</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-700 mb-4">Key Risks</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2"><XCircle className="text-red-600" size={18} /> Dependence on suppliers</li>
                      <li className="flex items-center gap-2"><XCircle className="text-red-600" size={18} /> Raw material volatility</li>
                      <li className="flex items-center gap-2"><XCircle className="text-red-600" size={18} /> Competitive pressure</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 7. Timeline */}
            {activeSection === 'timeline' && (
              <div className="border-b border-gray-200 pb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">IPO Timeline</h2>
                <div className="space-y-4">
                  <div className="flex justify-between py-3"><p>Open Date</p><p className="font-bold">{ipo.open}</p></div>
                  <div className="flex justify-between py-3"><p>Close Date</p><p className="font-bold">{ipo.close}</p></div>
                  <div className="flex justify-between py-3"><p>Allotment</p><p className="font-bold">11 Dec '25</p></div>
                  <div className="flex justify-between py-3"><p>Listing</p><p className="font-bold">{ipo.listing || "15 Dec '25"}</p></div>
                </div>
              </div>
            )}

            {/* 8. Lot & Allocation */}
            {activeSection === 'allocation' && (
              <div className="border-b border-gray-200 pb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Lot Size & Allocation</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left">Category</th>
                        <th className="px-4 py-3 text-right">Lots</th>
                        <th className="px-4 py-3 text-right">Shares</th>
                        <th className="px-4 py-3 text-right">Amount</th>
                        <th className="px-4 py-3 text-right">% Allocation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr><td className="px-4 py-3">Retail</td><td className="text-right">1</td><td className="text-right">{ipo.lot}</td><td className="text-right">₹{(ipo.lot * parseInt(ipo.price.split('-')[0])).toLocaleString()}</td><td className="text-right">35%</td></tr>
                      <tr><td className="px-4 py-3">HNI/NII</td><td className="text-right">2+</td><td className="text-right">{ipo.lot * 2}+</td><td className="text-right">₹{(ipo.lot * 2 * parseInt(ipo.price.split('-')[0])).toLocaleString()}+</td><td className="text-right">15%</td></tr>
                      <tr><td className="px-4 py-3">QIB</td><td className="text-right">N/A</td><td className="text-right">N/A</td><td className="text-right">N/A</td><td className="text-right">50%</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 9. Subscription */}
            {activeSection === 'subscription' && (
              <div className="border-b border-gray-200 pb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Subscription Status</h2>
                <p className="text-sm text-gray-600 mb-6">As of 08 Dec '25, 02:31 PM</p>
                <div className="max-w-md space-y-4">
                  <div className="flex justify-between py-3"><p>QIB</p><p className="font-bold">0.00x</p></div>
                  <div className="flex justify-between py-3"><p>NII</p><p className="font-bold">0.05x</p></div>
                  <div className="flex justify-between py-3"><p>Retail</p><p className="font-bold">0.55x</p></div>
                  <div className="flex justify-between py-4"><p className="font-bold">Total</p><p className="font-bold text-lg">0.28x</p></div>
                </div>
              </div>
            )}

            {/* 10. GMP Tracker */}
            {activeSection === 'gmp' && (
              <div className="border-b border-gray-200 pb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Grey Market Premium (GMP)</h2>
                <p className="text-5xl font-bold text-green-600">+₹45</p>
                <p className="text-xl text-gray-600 mt-4">Estimated Listing Gain: ~22%</p>
              </div>
            )}

            {/* Final Apply Button */}
            {/* <div className="text-center py-16">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-32 py-6 rounded-full shadow-2xl hover:shadow-3xl transition transform hover:scale-105">
                Apply Now
              </button>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default IPODetails;