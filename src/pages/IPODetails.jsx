// src/pages/IPODetails.jsx — FINAL FIXED VERSION
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchIPOs } from '../api/mockApi';
import { Download, ExternalLink, AlertTriangle } from 'lucide-react';

const IPODetails = () => {
  const { id } = useParams();
  const [ipo, setIpo] = useState(null);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    fetchIPOs().then((ipos) => {
      const selectedIpo = ipos.find((i) => i.id === parseInt(id));
      setIpo(selectedIpo);
    });
  }, [id]);

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'about', label: 'About Company' },
    { id: 'objectives', label: 'IPO Objectives' },
    { id: 'financials', label: 'Financials' },
    { id: 'valuation', label: 'Valuation' },
    { id: 'strengths-risks', label: 'Strengths & Risks' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'allocation', label: 'Lot & Allocation' },
    { id: 'subscription', label: 'Subscription' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100; // Adjust for sticky header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  if (!ipo) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-xl text-gray-600">Loading IPO details...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide py-4 gap-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">

        {/* 1. IPO Header */}
        <section id="overview" className="pt-8">
         

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <img src={ipo.logo || "/placeholder-logo.svg"} alt={ipo.name} className="w-20 h-20 object-contain rounded-xl border" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{ipo.name}</h2>
                  <p className="text-gray-600 mt-1">{ipo.fullName || "Mainboard IPO"}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Minimum Investment</p>
                <p className="text-3xl font-bold text-green-600">
                  ₹{(ipo.lot * parseInt(ipo.price.split('-')[0])).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">({ipo.lot} shares)</p>
              </div>
            </div>

            <div className="mt-8 p-5 bg-blue-50 rounded-xl flex items-center gap-3">
              <AlertTriangle size={20} className="text-blue-700" />
              <p className="text-blue-800 font-medium">Quick Verdict: Attractive Pricing</p>
            </div>
          </div>
        </section>

        {/* IPO Details Grid */}
        <section id="overview" className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">IPO Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-sm">
            {[
              { label: "Exchange", value: ipo.type === "Mainboard" ? "NSE & BSE" : "SME" },
              { label: "IPO Type", value: "Book Built" },
              { label: "Face Value", value: "₹1" },
              { label: "Price Band", value: `₹${ipo.price}`, highlight: true },
              { label: "Issue Size", value: "₹300.01 Cr" },
              { label: "Lot Size", value: `${ipo.lot} shares` },
              { label: "Min Investment", value: `₹${(ipo.lot * parseInt(ipo.price.split('-')[0])).toLocaleString()}`, highlight: true },
              { label: "Open Date", value: ipo.open },
              { label: "Close Date", value: ipo.close },
              { label: "Listing Date", value: ipo.listing || "TBA" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-gray-600 text-xs mb-1">{item.label}</p>
                <p className={`font-bold text-lg ${item.highlight ? 'text-blue-600' : 'text-gray-900'}`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* About Company */}
        <section id="about" className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">About {ipo.name}</h3>
          <p className="text-gray-700 leading-relaxed text-base mb-6">
            {ipo.name} is a leading D2C home solutions brand specializing in mattresses, furniture, and home furnishings...
          </p>
          {/* Add more content */}
        </section>

        {/* IPO Objectives */}
        <section id="objectives" className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">IPO Objectives</h3>
          <ul className="space-y-3 text-gray-700">
            <li>• Funding working capital requirements</li>
            <li>• Repayment of borrowings</li>
            <li>• Business expansion and new store openings</li>
            <li>• General corporate purposes</li>
          </ul>
        </section>

        {/* Financials */}
        <section id="financials" className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Highlights</h3>
         
        </section>

        {/* Add other sections with proper id */}
  

      </div>
    </div>
  );
};

export default IPODetails;