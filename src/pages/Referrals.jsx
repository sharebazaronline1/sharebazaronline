import { useState, useEffect } from "react";
import {
  Copy,
  Check,
  Share2,
  Users,
  IndianRupee,
} from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

import Sidebar from "../components/Sidebar";
import UserProfileDropdown from "../components/UserProfileDropdown";
import { supabase } from "../lib/supabase";

const Referrals = () => {
  const [copied, setCopied] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [sbUserId, setSbUserId] = useState("");

  useEffect(() => {
    const fetchSBUserId = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) return;

      const { data } = await supabase
        .from("profiles")
        .select("sb_user_id")
        .eq("id", session.user.id)
        .single();

      if (data?.sb_user_id) {
        setSbUserId(data.sb_user_id);
      }
    };

    fetchSBUserId();
  }, []);

  const referralLink = sbUserId
    ? `https://sharebazaaronline.com/ref/${sbUserId}`
    : "";

  const handleCopy = () => {
    if (!referralLink) return;
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `Join ShareBazaar using my referral link and earn rewards!\n${referralLink}`
  )}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar mobileOpen={false} setMobileOpen={() => {}} />

      <main className="md:ml-64 px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Rewards & Referrals
          </h1>
          <UserProfileDropdown />
        </div>

        {/* SINGLE MAIN BOX */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm max-w-5xl mx-auto p-6 sm:p-8 space-y-10">

          {/* HERO */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Refer Friends & Earn Money
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Invite friends and earn rewards on every successful order
            </p>
          </div>

          {/* REFERRAL LINK */}
          <div className="flex flex-col items-center gap-4">
            {!showLink ? (
              <button
                onClick={() => setShowLink(true)}
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition"
              >
                Get Referral Link
              </button>
            ) : (
              <>
                <div className="flex flex-col sm:flex-row w-full max-w-xl gap-3">
                  <input
                    readOnly
                    value={referralLink}
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm"
                  />
                  <button
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-5 py-2 rounded-lg text-white text-sm ${
                      copied
                        ? "bg-green-700"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>

                {/* 🔥 ACTUAL SOCIAL MEDIA ICONS */}
                <div className="flex justify-center gap-4 pt-2">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center"
                  >
                    <FaFacebookF className="text-blue-600" />
                  </a>

                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(referralLink)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                  >
                    <FaXTwitter className="text-black" />
                  </a>

                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(referralLink)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center"
                  >
                    <FaLinkedinIn className="text-blue-700" />
                  </a>

                  <a
                    href={whatsappShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-green-50 hover:bg-green-100 flex items-center justify-center"
                  >
                    <FaWhatsapp className="text-green-600" />
                  </a>
                </div>
              </>
            )}
          </div>

        {/* HOW IT WORKS */}
<div className="border-t pt-10">
  <h3 className="text-lg font-semibold text-center mb-10">
    How it works
  </h3>

  {/* DESKTOP / TABLET */}
  <div className="hidden sm:grid grid-cols-5 items-center text-center max-w-4xl mx-auto">
    {/* STEP 1 */}
    <div className="space-y-3">
      <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600">
        <Share2 size={26} />
      </div>
      <p className="text-sm font-medium">Share your referral link</p>
    </div>

    {/* ARROW */}
    <div className="flex  justify-center text-green-400 text-3xl">
      →
    </div>

    {/* STEP 2 */}
    <div className="space-y-3">
      <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600">
        <Users size={26} />
      </div>
      <p className="text-sm font-medium">Friends place orders</p>
    </div>

    {/* ARROW */}
    <div className="flex justify-center text-green-400 text-3xl">
      →
    </div>

    {/* STEP 3 */}
    <div className="space-y-3">
      <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600">
        <IndianRupee size={26} />
      </div>
      <p className="text-sm font-medium">You earn rewards</p>
    </div>
  </div>

  {/* MOBILE */}
  <div className="sm:hidden space-y-8 text-center">
    {[
      { icon: <Share2 size={24} />, text: "Share your referral link" },
      { icon: <Users size={24} />, text: "Friends place orders" },
      { icon: <IndianRupee size={24} />, text: "You earn rewards" },
    ].map((item, idx) => (
      <div key={idx} className="space-y-3">
        <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600">
          {item.icon}
        </div>
        <p className="text-sm font-medium">{item.text}</p>
      </div>
    ))}
  </div>
</div>

          {/* EMAIL / MOBILE FORM — KEPT BELOW */}
          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold mb-4">
              Refer via Email or Mobile
            </h3>

            <form className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="border border-gray-300 rounded-lg px-4 py-3 text-sm"
              />
              <input
                type="email"
                placeholder="Email (optional)"
                className="border border-gray-300 rounded-lg px-4 py-3 text-sm"
              />
              <input
                type="tel"
                placeholder="+91 Mobile"
                required
                className="border border-gray-300 rounded-lg px-4 py-3 text-sm"
              />

              <div className="sm:col-span-3 mt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                >
                  <Share2 size={18} />
                  Submit
                </button>
              </div>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Referrals;
