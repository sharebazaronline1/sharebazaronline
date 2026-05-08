// src/components/UnlistedSharesSidebar.jsx

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "../lib/supabase";
import {useNavigate } from "react-router-dom";
import { fetchPreIPODetails } from "../api/mockApi";

const UnlistedSharesSidebar = () => {
  const { pathname } = useLocation();
  const [formattedDate, setFormattedDate] = useState("");
  const [sidebarUnlisted, setSidebarUnlisted] = useState([]);
  const [loading, setLoading] = useState(true);
const navigate = useNavigate();

  const shouldShow =
    [
      "/",
      "/ipo-tracker",
      "/ipo/ipo-list",
      "/pre-ipo-stocks",
      "/insight-hub",
      "/ipoguide",
      "/preipoguide",
      "/skill-up",
      "/broker-analyzer"
     
    ].includes(pathname) ||
    pathname.startsWith("/ipo/") ||
    pathname.startsWith("/insight-hub") ||
    pathname.startsWith("/preipo") ||
    pathname.startsWith("/how-to-apply-ipo");

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
    // DB prices
    const { data: dbData, error } = await supabase
      .from("pre_ipo_companies")
      .select("name, price")
      .order("updated_at", { ascending: false })
      .limit(10);

    if (error) throw error;

    // Full details with IDs
    const preIPOData = await fetchPreIPODetails();

    const normalize = (str = "") =>
      str
        .toLowerCase()
        .replace(/limited|ltd|unlisted|shares?/gi, "")
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, " ")
        .trim();

    const list = dbData.map((stock) => {
      const matched = preIPOData.find((item) => {
        const dbName = normalize(stock.name);
        const itemName = normalize(item.name);

        return (
          dbName.includes(itemName) ||
          itemName.includes(dbName)
        );
      });

      return {
        id: matched?.id,
        name: stock.name,
        price:
          stock.price != null
            ? `₹${Number(stock.price).toLocaleString("en-IN")}`
            : "Ask",
      };
    });

    setSidebarUnlisted(list);
  } catch (error) {
    console.error(
      "Failed to load unlisted shares sidebar:",
      error
    );

    setSidebarUnlisted([]);
  } finally {
    setLoading(false);
  }
};
    loadUnlistedData();
  }, []);

  if (!shouldShow) return null;

  return (
    <div className="hidden xl:block w-48 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden text-xs">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-3 rounded-t-lg">
          <h3 className="font-bold text-sm">Unlisted Shares</h3>
          <p className="text-xs opacity-90 mt-0.5">{formattedDate}</p>
        </div>

        <div className="divide-y divide-gray-100 max-h-[420px] overflow-y-auto">
          {loading ? (
            <div className="px-4 py-8 text-center text-gray-500 text-xs">
              Loading...
            </div>
          ) : sidebarUnlisted.length === 0 ? (
            <div className="px-4 py-8 text-center text-gray-500 text-xs">
              No unlisted shares available
            </div>
          ) : (
            sidebarUnlisted.map((stock, i) => (
             <div
  key={i}
 onClick={() => {
  if (stock.id) {
    navigate(`/preipo/${stock.id}`);
  }
}}
  className="px-3 py-2 hover:bg-gray-50 transition cursor-pointer flex items-center justify-between gap-2"
>
                <p className="font-medium text-[11px] text-gray-900 truncate">
                  {stock.name}
                </p>

                <span className="text-[10px] px-1.5 py-[1px] rounded border border-gray-200 bg-gray-100 text-gray-700 whitespace-nowrap">
                  {stock.price}
                </span>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-4 py-2 text-center border-t border-gray-200 rounded-b-lg">
          <p className="text-xs text-gray-500">Updated daily • Jan 2026</p>
        </div>
      </div>
    </div>
  );
};

export default UnlistedSharesSidebar;