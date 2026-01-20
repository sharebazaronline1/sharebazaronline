import { useState, useEffect } from "react";
import {
  Copy,
  Check,
  Share2,
  Users,
  IndianRupee,
  Loader2,
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

// Same generation function used in dropdown (for consistency if needed)
const generateShortId = (uid) => {
  if (!uid) return "SB-GUEST000";
  const short = uid.slice(-12);
  const hash = btoa(short).replace(/[=+/]/g, "").slice(0, 8).toUpperCase();
  return `SB-${hash}`;
};

const Referrals = () => {
  const [copied, setCopied] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [referrals, setReferrals] = useState([]);
  const [totalRewards, setTotalRewards] = useState(0);
  const [loading, setLoading] = useState(true);
  const [referralName, setReferralName] = useState("");
  const [referralEmail, setReferralEmail] = useState("");
  const [referralMobile, setReferralMobile] = useState("");

  useEffect(() => {
    const initializeReferral = async () => {
      setLoading(true);

      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) {
        setLoading(false);
        return;
      }

      const userId = session.user.id;

      // Step 1: Get current profile
      const { data: profile, error: fetchError } = await supabase
        .from("profiles")
        .select("sb_user_id")
        .eq("id", userId)
        .single();

      if (fetchError && fetchError.code !== "PGRST116") {
        console.error("Profile fetch error:", fetchError);
      }

      let code = profile?.sb_user_id;

      // Step 2: If missing → generate and SAVE it once
      if (!code) {
        code = generateShortId(userId);

        const { error: updateError } = await supabase
          .from("profiles")
          .update({ sb_user_id: code })
          .eq("id", userId);

        if (updateError) {
          console.error("Failed to save sb_user_id:", updateError);
          // Fallback — still use generated code (but log issue)
        } else {
          // Confirm it was saved
          console.log("Saved new referral code:", code);
        }
      }

      // Step 3: Set the final code (stored or newly generated)
      setReferralCode(code);

      // Step 4: Load referrals (always use user.id for filtering)
      const { data: refData, error: refError } = await supabase
        .from("referrals")
        .select("*")
        .eq("referrer_id", userId)
        .order("created_at", { ascending: false });

      if (refError) {
        console.error("Referrals fetch error:", refError);
      } else {
        setReferrals(refData || []);
        const sum = refData?.reduce((acc, r) => acc + (Number(r.reward_amount) || 0), 0) || 0;
        setTotalRewards(sum);
      }

      setLoading(false);
    };

    initializeReferral();

    // Re-run when auth changes (safety net)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      initializeReferral();
    });

    return () => subscription.unsubscribe();
  }, []);

  const referralLink = referralCode
    ? `https://sharebazaaronline.com/ref/${referralCode}`
    : "";

  const handleCopy = () => {
    if (!referralLink) return;
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const whatsappShareUrl = referralLink
    ? `https://wa.me/?text=${encodeURIComponent(
        `Join ShareBazaar using my referral link and earn rewards!\n${referralLink}`
      )}`
    : "";

  const handleReferralSubmit = async (e) => {
    e.preventDefault();
    if (!referralName || !referralMobile) {
      alert("Name and Mobile are required");
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase.from("referrals").insert({
      referrer_id: user.id,
      referred_name: referralName,
      referred_email: referralEmail || null,
      referred_mobile: referralMobile,
      status: "pending",
      reward_amount: 0,
    });

    if (error) {
      console.error("Referral insert failed:", error);
      alert("Failed to submit referral");
      return;
    }

    // Refresh list
    const { data: refreshed } = await supabase
      .from("referrals")
      .select("*")
      .eq("referrer_id", user.id)
      .order("created_at", { ascending: false });

    setReferrals(refreshed || []);

    setReferralName("");
    setReferralEmail("");
    setReferralMobile("");
    alert("Referral submitted successfully!");
  };

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

        {/* MAIN CONTENT */}
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

          {/* REFERRAL LINK SECTION */}
          <div className="flex flex-col items-center gap-6">
            {!showLink ? (
              <button
                onClick={() => setShowLink(true)}
                className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium text-lg transition shadow-md"
              >
                Get My Referral Link
              </button>
            ) : (
              <div className="w-full max-w-2xl space-y-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    readOnly
                    value={referralLink || "Loading..."}
                    className="flex-1 border border-gray-300 rounded-lg px-5 py-3.5 text-base font-mono bg-gray-50"
                    placeholder="Your referral link is loading..."
                  />
                  <button
                    onClick={handleCopy}
                    disabled={!referralLink}
                    className={`min-w-[120px] flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-white font-medium transition ${
                      copied ? "bg-green-700" : "bg-green-600 hover:bg-green-700"
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                    {copied ? "Copied!" : "Copy Link"}
                  </button>
                </div>

                {referralLink && (
                  <div className="flex justify-center gap-5 pt-2">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition"
                    >
                      <FaFacebookF className="text-blue-700 text-xl" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(referralLink)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
                    >
                      <FaXTwitter className="text-black text-xl" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(referralLink)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition"
                    >
                      <FaLinkedinIn className="text-blue-700 text-xl" />
                    </a>
                    <a
                      href={whatsappShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center transition"
                    >
                      <FaWhatsapp className="text-green-700 text-xl" />
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* HOW IT WORKS */}
          <div className="border-t pt-10">
            <h3 className="text-xl font-semibold text-center mb-10">
              How it works
            </h3>

            <div className="hidden sm:grid grid-cols-5 items-center text-center max-w-4xl mx-auto gap-2">
              <div className="space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Share2 size={32} />
                </div>
                <p className="text-base font-medium">Share your link</p>
              </div>
              <div className="text-green-400 text-5xl">→</div>
              <div className="space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Users size={32} />
                </div>
                <p className="text-base font-medium">Friends join & order</p>
              </div>
              <div className="text-green-400 text-5xl">→</div>
              <div className="space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <IndianRupee size={32} />
                </div>
                <p className="text-base font-medium">You earn rewards</p>
              </div>
            </div>

            <div className="sm:hidden space-y-10 text-center">
              {[
                { icon: <Share2 size={28} />, text: "Share your referral link" },
                { icon: <Users size={28} />, text: "Friends join and place orders" },
                { icon: <IndianRupee size={28} />, text: "You earn real rewards" },
              ].map((item, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    {item.icon}
                  </div>
                  <p className="text-base font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* REFER VIA EMAIL / MOBILE */}
          <div className="border-t pt-10">
            <h3 className="text-xl font-semibold mb-6">
              Refer via Email or Mobile
            </h3>

            <form onSubmit={handleReferralSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Friend's Name"
                value={referralName}
                onChange={(e) => setReferralName(e.target.value)}
                required
                className="border border-gray-300 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Email (optional)"
                value={referralEmail}
                onChange={(e) => setReferralEmail(e.target.value)}
                className="border border-gray-300 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="tel"
                placeholder="+91 Mobile Number"
                value={referralMobile}
                onChange={(e) => setReferralMobile(e.target.value)}
                required
                className="border border-gray-300 rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <div className="sm:col-span-3 mt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition shadow-md"
                >
                  <Share2 size={18} className="inline mr-2" />
                  Send Referral
                </button>
              </div>
            </form>
          </div>

          {/* REFERRALS & REWARDS OVERVIEW */}
          <div className="border-t pt-10">
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
              <Users size={24} className="text-green-600" />
              Your Referrals & Earnings
            </h3>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-16">
                <Loader2 size={40} className="animate-spin text-green-600 mb-4" />
                <p className="text-gray-600">Loading your referrals...</p>
              </div>
            ) : referrals.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-2xl">
                <Users size={64} className="mx-auto text-gray-400 mb-6" />
                <h4 className="text-xl font-semibold text-gray-700 mb-3">
                  No Referrals Yet
                </h4>
                <p className="text-gray-600 max-w-md mx-auto">
                  Share your unique referral link with friends to start earning rewards!
                </p>
              </div>
            ) : (
              <>
                {/* Total Rewards */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 mb-10 text-center shadow-inner">
                  <p className="text-lg text-gray-700 mb-2">Total Rewards Earned</p>
                  <p className="text-5xl font-bold text-green-700">
                    ₹{totalRewards.toLocaleString("en-IN")}
                  </p>
                </div>

                {/* Referrals List */}
                <div className="space-y-5">
                  {referrals.map((ref, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center text-indigo-700 font-bold text-2xl shrink-0">
                          {ref.referred_name?.charAt(0).toUpperCase() || "?"}
                        </div>
                        <div className="flex-1">
                          <p className="text-lg font-semibold text-gray-900">
                            {ref.referred_name || "New Friend"}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {ref.referred_email || ref.referred_mobile || "No contact added"}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Status</p>
                          <p
                            className={`font-medium mt-1 ${
                              ref.status === "completed"
                                ? "text-green-600"
                                : ref.status === "rejected"
                                ? "text-red-600"
                                : "text-yellow-600"
                            }`}
                          >
                            {ref.status?.toUpperCase() || "PENDING"}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">Reward</p>
                          <p className="font-medium text-green-700 mt-1">
                            ₹{(ref.reward_amount || 0).toLocaleString("en-IN")}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Referrals;