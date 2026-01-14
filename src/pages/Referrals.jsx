// src/pages/Referrals.jsx
import { useState } from "react";
import {
  Copy,
  Check,
  Users,
  IndianRupee,
  Link2,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Sidebar from "../components/Sidebar";
import UserProfileDropdown from "../components/UserProfileDropdown";

const Referrals = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://sharebazaaronline.com/ref/ArrunJDR-2026";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar mobileOpen={false} setMobileOpen={() => {}} />

      <main className="md:ml-64 px-4 sm:px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Rewards & Referrals
          </h1>
          <UserProfileDropdown />
        </div>

        {/* Summary */}
        <div className="bg-white border rounded-xl mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x">
            <div className="p-5">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <IndianRupee size={16} />
                Your wallet
              </div>
              <p className="text-2xl font-semibold mt-2">₹0</p>
              <button className="text-xs text-green-600 mt-1 hover:underline">
                View statement
              </button>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Users size={16} />
                Your points
              </div>
              <p className="text-2xl font-semibold mt-2 text-green-600">
                300.00
              </p>
              <button className="text-xs text-green-600 mt-1 hover:underline">
                View statement
              </button>
            </div>

            <div className="p-5 sm:col-span-2">
              <p className="text-sm text-gray-700">
                Refer a friend and earn{" "}
                <span className="font-semibold text-green-700">
                  300 reward points
                </span>{" "}
                when they open an account.
              </p>
              <button className="text-sm text-green-600 mt-2 hover:underline">
                Read more
              </button>
            </div>
          </div>
        </div>

        {/* Referral link + social icons */}
        <div className="bg-white border rounded-xl p-5 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Link2 size={16} />
              Your referral link
            </div>

            <div className="flex flex-1 flex-col sm:flex-row gap-3">
              <input
                readOnly
                value={referralLink}
                className="flex-1 border rounded-lg px-4 py-2 text-sm bg-gray-50"
              />

              <button
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg
                           bg-green-600 text-white text-sm font-medium
                           hover:bg-green-700 transition"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3 mt-4">
            <span className="text-sm text-gray-600">Share:</span>

            <button
              className="p-2 rounded-lg border hover:bg-gray-100"
              title="Share on Facebook"
            >
              <Facebook size={18} className="text-blue-600" />
            </button>

            <button
              className="p-2 rounded-lg border hover:bg-gray-100"
              title="Share on Twitter"
            >
              <Twitter size={18} className="text-sky-500" />
            </button>

            <button
              className="p-2 rounded-lg border hover:bg-gray-100"
              title="Share on LinkedIn"
            >
              <Linkedin size={18} className="text-blue-700" />
            </button>
          </div>
        </div>

        {/* Refer a friend */}
        <div className="bg-white border rounded-xl p-6 max-w-4xl">
          <div className="flex items-center gap-2 mb-5">
            <Share2 className="text-green-600" size={20} />
            <h2 className="text-lg font-semibold text-gray-900">
              Refer a friend
            </h2>
          </div>

          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />

            <input
              type="email"
              placeholder="Email (optional)"
              className="border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            />

            <input
              type="tel"
              placeholder="+91 Mobile"
              className="border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />

            <div className="lg:col-span-3">
              <button
                type="submit"
                className="w-full sm:w-auto mt-2
                           px-8 py-3 rounded-lg
                           bg-green-600 text-white text-sm font-medium
                           hover:bg-green-700 transition
                           flex items-center justify-center gap-2"
              >
                <Share2 size={16} />
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Referrals;
