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
  MessageCircle,
} from "lucide-react";
import Sidebar from "../components/Sidebar";
import UserProfileDropdown from "../components/UserProfileDropdown";

const Referrals = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://sharebazaaronline.com/ref/ArrunJDR-2026";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `Join ShareBazaar using my referral link and earn rewards! 🎁\n${referralLink}`
  )}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar mobileOpen={false} setMobileOpen={() => {}} />

      <main className="md:ml-64 px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Rewards & Referrals
          </h1>
          <UserProfileDropdown />
        </div>

        {/* Summary Cards */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm mb-8 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x">
            <div className="p-6">
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                <IndianRupee size={16} />
                Your wallet
              </div>
              <p className="text-3xl font-bold text-gray-900">₹0</p>
              <button className="text-xs text-green-600 mt-2 hover:underline">
                Withdrawal
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                <Users size={16} />
                Your points
              </div>
              <p className="text-3xl font-bold text-green-600">300.00</p>
              <button className="text-xs text-green-600 mt-2 hover:underline">
                View statement →
              </button>
            </div>

            <div className="p-6 sm:col-span-2">
              <p className="text-gray-700 leading-relaxed">
                Refer a friend and earn{" "}
                <span className="font-bold text-green-700">300 reward points</span>{" "}
                when they successfully open and verify their account.
              </p>
              <button className="text-sm text-green-600 mt-3 hover:underline">
                Read full terms →
              </button>
            </div>
          </div>
        </div>

        {/* Referral Link Section */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700 min-w-[140px]">
              <Link2 size={18} />
              Your Referral Link
            </div>

            <div className="flex flex-1 flex-col sm:flex-row gap-3">
              <input
                readOnly
                value={referralLink}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <button
                onClick={handleCopy}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all min-w-[120px] ${
                  copied
                    ? "bg-green-700 text-white shadow-md"
                    : "bg-green-600 hover:bg-green-700 text-white hover:shadow-md"
                }`}
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>
          </div>

          {/* Social Share Buttons - More authentic look */}
          <div className="flex items-center gap-5 mt-2">
            <span className="text-sm font-medium text-gray-700">Share via:</span>

            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2]/20 transition"
              aria-label="Share on Facebook"
              title="Share on Facebook"
            >
              <Facebook size={22} className="text-[#1877F2]" />
            </a>

            {/* X (Twitter) */}
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(referralLink)}&text=Join%20ShareBazaar%20using%20my%20referral%20link%20and%20earn%20rewards!%20🎁`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black/10 hover:bg-black/20 transition"
              aria-label="Share on X (Twitter)"
              title="Share on X (Twitter)"
            >
              <Twitter size={22} className="text-black" />
            </a>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(referralLink)}&title=Join%20ShareBazaar&summary=Use%20my%20referral%20link%20to%20earn%20rewards!`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 transition"
              aria-label="Share on LinkedIn"
              title="Share on LinkedIn"
            >
              <Linkedin size={22} className="text-[#0A66C2]" />
            </a>

            {/* WhatsApp - best approximation with lucide + fill */}
            <a
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 transition"
              aria-label="Share on WhatsApp"
              title="Share on WhatsApp"
            >
              <MessageCircle
                size={24}
                className="text-[#25D366] fill-[#25D366]"
              />
            </a>
          </div>
        </div>

        {/* Refer a Friend Form */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-sm max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Share2 className="text-green-600" size={24} />
            <h2 className="text-xl font-bold text-gray-900">Invite a Friend</h2>
          </div>

          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <input
              type="text"
              placeholder="Friend's Full Name"
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none"
              required
            />

            <input
              type="email"
              placeholder="Email (optional)"
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none"
            />

            <input
              type="tel"
              placeholder="+91 Mobile Number"
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none"
              required
            />

            <div className="lg:col-span-3 mt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition shadow-sm hover:shadow-md flex items-center justify-center gap-2 text-base"
              >
                <Share2 size={18} />
                Send Invitation
              </button>
            </div>
          </form>

          <p className="mt-6 text-sm text-gray-500">
            We'll send them an invitation with your referral link automatically.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Referrals;