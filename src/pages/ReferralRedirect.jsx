import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ReferralRedirect = () => {
  const { code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      console.log("REF CODE:", code); // DEBUG
      localStorage.setItem("referral_code", code);
    }
    navigate("/login", { replace: true });
  }, [code, navigate]);

  return null;
};

export default ReferralRedirect;
