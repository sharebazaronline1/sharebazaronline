// src/components/AdminRoute.jsx
import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { supabase } from "../lib/supabase";

const AdminRoute = () => {
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    // Skip admin check if we're on admin-login
    if (location.pathname === "/admin-login") {
      setIsAdmin(true);
      return;
    }

    const checkAdmin = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
          setIsAdmin(false);
          return;
        }

        const { data: profile, error } = await supabase
          .from("profiles")
          .select("is_admin")
          .eq("id", user.id)
          .single();

        if (error) throw error;

        setIsAdmin(!!profile?.is_admin);
      } catch (err) {
        console.error("Admin check failed:", err);
        setIsAdmin(false);
      }
    };

    checkAdmin();
  }, [location.pathname]);

  if (isAdmin === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 animate-pulse">Checking admin access...</p>
      </div>
    );
  }

  return isAdmin ? <Outlet /> : <Navigate to="/admin-login" replace />;
};

export default AdminRoute;
