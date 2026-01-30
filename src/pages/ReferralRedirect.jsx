import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ReferralRedirect = () => {
  const { code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      // store referral code locally
      localStorage.setItem("referral_code", code);
    }

    // redirect to login page
    navigate("/login");
  }, [code, navigate]);

  return null;
};

export default ReferralRedirect;
