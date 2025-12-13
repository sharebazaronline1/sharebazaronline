// src/components/UpcomingIPOSidebar.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchUpcomingIPOs } from "../api/mockApi";

const UpcomingIPOSidebar = () => {
  const { pathname } = useLocation();
  const [formattedDate, setFormattedDate] = useState("");
  const [sidebarIPOs, setSidebarIPOs] = useState([]);
  const [loading, setLoading] = useState(true);

  const shouldShow = ["/", "/ipo-tracker","ipo", "/ipo/ipo-list","/pre-ipo-stocks"].includes(pathname);

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
    const loadSidebarData = async () => {
      try {
        const data = await fetchUpcomingIPOs();
        const list = data
          .filter(
            (ipo) =>
              ipo.status?.toLowerCase() === "live" ||
              ipo.status?.toLowerCase() === "upcoming" ||
              !ipo.status
          )
          .slice(0, 10)
          .map((ipo) => ({
            name: ipo.name,
            type: ipo.type?.toUpperCase() === "SME" ? "SME" : "Mainboard",
           dates:
  ipo.dates ||
  (ipo.open && ipo.close
    ? `${ipo.open} - ${ipo.close}`
    : "Upcoming"),

            statusLabel:
              ipo.status?.toLowerCase() === "live" ? "(Open)" : "", // Separate label for status
          }));
        setSidebarIPOs(list);
      } catch (error) {
        console.error("Failed to load sidebar IPOs:", error);
      } finally {
        setLoading(false);
      }
    };
    loadSidebarData();
  }, []);

  if (!shouldShow) return null;

  return (
    <div className="hidden xl:block w-64 flex-shrink-0 pl-8">
      <div className="sticky top-80">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden text-xs">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-3 rounded-t-lg">
            <h3 className="font-bold text-sm">List Of IPOs</h3>
            <p className="text-xs opacity-90 mt-0.5">{formattedDate}</p>
          </div>

          {/* List */}
          <div className="max-h-56 overflow-y-auto divide-y divide-gray-100">
            {loading ? (
              <div className="px-4 py-8 text-center text-gray-500 text-xs">
                Loading...
              </div>
            ) : sidebarIPOs.length === 0 ? (
              <div className="px-4 py-8 text-center text-gray-500 text-xs">
                No IPOs available
              </div>
            ) : (
              sidebarIPOs.map((ipo, i) => (
                <div
                  key={i}
                  className="px-4 py-3 hover:bg-gray-50 transition cursor-pointer"
                >
                  <p className="font-semibold text-gray-900 text-xs truncate">
                    {ipo.name}
                  </p>
                  <div className="flex justify-between items-center mt-1.5">
                   
                 <span
                  className={`text-[9px] px-1 py-[1px] rounded font-medium leading-none ${
                    ipo.type === "Mainboard"
                      ? "bg-green-100 text-green-700 border border-green-200"
                      : "bg-blue-100 text-blue-700 border border-blue-200"
                  }`}
                >
                  {ipo.type}
                </span>


                 
                    <div className="flex items-center gap-1.5 text-right">
                      <span className="text-[10px] text-gray-600">
                        {ipo.dates}
                      </span>
                     
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-4 py-2 text-center border-t border-gray-200 rounded-b-lg">
            <p className="text-xs text-gray-500">Updated daily • Dec 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingIPOSidebar;