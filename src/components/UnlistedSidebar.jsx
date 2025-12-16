// src/components/UnlistedSharesSidebar.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchUnlistedShares } from "../api/mockApi";

const UnlistedSharesSidebar = () => {
  const { pathname } = useLocation();
  const [formattedDate, setFormattedDate] = useState("");
  const [sidebarUnlisted, setSidebarUnlisted] = useState([]);
  const [loading, setLoading] = useState(true);

  const shouldShow = [
    "/", 
    "/ipo-tracker", 
    "/ipo/ipo-list", 
    "/pre-ipo-stocks"
  ].includes(pathname);

  useEffect(() => {
    const today = new Date();
    setFormattedDate(
      today.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    );
  }, []);

  useEffect(() => {
    const loadUnlistedData = async () => {
      try {
        const data = await fetchUnlistedShares();
        const list = data
          .slice(0, 10)
          .map((stock) => ({
            name: stock.name,
            price: stock.price || "₹" + (stock.buyPrice || "Ask"),
          }));
        setSidebarUnlisted(list);
      } catch (error) {
        console.error("Failed to load unlisted shares sidebar:", error);
      } finally {
        setLoading(false);
      }
    };
    loadUnlistedData();
  }, []);

  if (!shouldShow) return null;

  return (
    <div className="hidden xl:block w-64 flex-shrink-0 pl-8">
      <div className="sticky top-80">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden text-xs">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-3 rounded-t-lg">
            <h3 className="font-bold text-sm">Unlisted Shares</h3>
            <p className="text-xs opacity-90 mt-0.5">{formattedDate}</p>
          </div>

          {/* List */}
          <div className="max-h-48 overflow-y-auto divide-y divide-gray-100">
            {loading ? (
              <div className="px-4 py-6 text-center text-gray-500 text-xs">
                Loading...
              </div>
            ) : sidebarUnlisted.length === 0 ? (
              <div className="px-4 py-6 text-center text-gray-500 text-xs">
                No unlisted shares available
              </div>
            ) : (
              sidebarUnlisted.map((stock, i) => (
                <div
                  key={i}
                  className="px-4 py-2 hover:bg-gray-50 transition cursor-pointer"
                >
                  {/* Name and Price aligned horizontally on the same line */}
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-900 text-xs truncate flex-1">
                      {stock.name}
                    </p>
                    <span className="text-[10px] font-semibold text-gray-700 ml-4">
                      {stock.price}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-4 py-1.5 text-center border-t border-gray-200 rounded-b-lg">
            <p className="text-xs text-gray-500">Updated daily • Dec 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlistedSharesSidebar;