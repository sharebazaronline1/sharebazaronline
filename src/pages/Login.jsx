// src/pages/Login.jsx
import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
const generateShortId = (uid) => {
  if (!uid) return "SB-GUEST000";
  const short = uid.slice(-12);
  const hash = btoa(short).replace(/[=+/]/g, "").slice(0, 8).toUpperCase();
  return `SB-${hash}`;
};

useEffect(() => {
  const params = new URLSearchParams(location.search);
  const refCode = params.get("ref");
  if (refCode) localStorage.setItem("referral_code", refCode);

const { data: { subscription } } = supabase.auth.onAuthStateChange(
  async (event, session) => {
    if (event !== "SIGNED_IN") return;
    if (!session?.user) return;

    const user = session.user;
    const referralCode = localStorage.getItem("referral_code");

    console.log("REF CODE:", referralCode);

    // 1️⃣ ensure profile exists
    const { data: profileData } = await supabase
  .from("profiles")
  .select("*")
  .eq("id", user.id)
  .maybeSingle();

    if (!profileData) {
      await supabase.from("profiles").insert({
        id: user.id,
        full_name: user.user_metadata?.full_name || "",
        sb_user_id: generateShortId(user.id),
      });
    }

    // 2️⃣ if no referral → go dashboard
    if (!referralCode) {
      navigate("/dashboard", { replace: true });
      return;
    }

    // 3️⃣ find referrer
    const { data: referrer, error: refErr } = await supabase
      .from("profiles")
      .select("id")
      .eq("sb_user_id", referralCode)
      .single();

    console.log("REFERRER:", referrer, refErr);

    if (!referrer) {
      navigate("/dashboard", { replace: true });
      return;
    }

    // 4️⃣ prevent duplicate referral
    const { data: existing } = await supabase
      .from("referrals")
      .select("id")
      .eq("referrer_id", referrer.id)
      .eq("referred_email", user.email)
      .maybeSingle();

    if (!existing) {
      const { error: insertError } = await supabase.from("referrals").insert({
  referrer_id: referrer.id,
  referred_user_id: user.id,   // 👈 VERY IMPORTANT
  referred_name: user.user_metadata?.full_name || "New Friend",
  referred_email: user.email,
  referred_mobile: null,
  status: "pending",
  reward_amount: 0,
});


      if (insertError) {
        console.error("REFERRAL INSERT ERROR:", insertError);
      }
    }

    localStorage.removeItem("referral_code");
    navigate("/dashboard", { replace: true });
  }
);


  return () => subscription.unsubscribe();
}, [navigate, location.search]);




  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
       const { error } = await supabase.auth.signUp({
  email,
  password,
  options: {
    data: {
      referral_code: localStorage.getItem("referral_code"),
    },
    emailRedirectTo: `${window.location.origin}/login`,
  },
});


        if (error) throw error;

        alert("Account created! Please check your email to verify.");
        setIsSignUp(false);
        return;
      }

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

    } catch (error) {
      alert(
        error.message.includes("Invalid login credentials")
          ? "Incorrect email or password"
          : error.message
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/login`,
      },
    });

    if (error) alert(error.message);
  };

  return (
    <div
      className="flex-1 flex items-center justify-end px-12 py-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/login.jpeg')",
        backgroundSize: "70%",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm relative z-10"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-6 pt-8 sm:p-7">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-black text-gray-900">
                {isSignUp ? "Create Account" : "Welcome Back"}
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                {isSignUp
                  ? "Join India’s trusted investment platform"
                  : "Sign in to track IPOs & unlisted shares"}
              </p>
            </div>

            {/* EMAIL / PASSWORD FORM */}
            <form className="space-y-4" onSubmit={handleEmailAuth}>
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="John Doe"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition disabled:opacity-60"
              >
                {loading
                  ? "Please wait..."
                  : isSignUp
                  ? "Create Account"
                  : "Sign In"}
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">or</span>
              </div>
            </div>

            {/* GOOGLE LOGIN */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full py-2.5 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            <p className="mt-6 text-center text-sm text-gray-600">
              {isSignUp ? "Already have an account?" : "New to ShareBazaarOnline?"}{" "}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-semibold text-green-600"
              >
                {isSignUp ? "Sign In" : "Create an account"}
              </button>
            </p>

            <div className="mt-4 text-center">
              <Link to="/" className="text-sm text-gray-500">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
