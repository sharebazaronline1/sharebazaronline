// src/components/UpcomingIPOSidebar.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchUpcomingIPOs } from "../api/mockApi";

const IPOSidebar = () => {
  const { pathname } = useLocation();
  const [formattedDate, setFormattedDate] = useState("");
  const [sidebarIPOs, setSidebarIPOs] = useState([]);
  const [loading, setLoading] = useState(true);

 const shouldShow = [
  "/",
  "/ipo-tracker",
  "/ipo/ipo-list",
  "/pre-ipo-stocks",
  "/insight-hub",
  "/skill-up",
  "/login"
].includes(pathname) ||  pathname.startsWith("/ipo/") ||
  pathname.startsWith("/insight-hub")||
  pathname.startsWith("/preipo");

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

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const parseDate = (dateStr) => {
          if (!dateStr) return null;
          const [day, month, year] = dateStr.split(" ");
          return new Date(`${day} ${month} ${year}`);
        };

        const liveIPOs = data
          .map((ipo) => {
            const openDate = parseDate(ipo.open);
            const closeDate = parseDate(ipo.close);

            if (!openDate || !closeDate) return null;

            openDate.setHours(0, 0, 0, 0);
            closeDate.setHours(23, 59, 59, 999);

            const isLive = today >= openDate && today <= closeDate;

            return {
              ...ipo,
              openDate,
              closeDate,
              isLive,
            };
          })
          .filter((ipo) => ipo && ipo.isLive)
          .sort((a, b) => b.openDate - a.openDate)
          .slice(0, 10);

        const list = liveIPOs.map((ipo) => ({
          name: ipo.name,
          type: ipo.type?.toUpperCase() === "SME" ? "SME" : "Mainboard",
          shortDates: `${ipo.open.split(" ")[0]}-${ipo.close.split(" ")[0]} ${ipo.open.split(" ")[1]}`,
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
    <div className="hidden xl:block w-48 flex-shrink-0">
     
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden text-xs">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-3 rounded-t-lg">
            <h3 className="font-bold text-sm">Live IPOs</h3>
            <p className="text-xs opacity-90 mt-0.5">{formattedDate}</p>
          </div>

          <div className="divide-y divide-gray-100">
            {loading ? (
              <div className="px-4 py-8 text-center text-gray-500 text-xs">
                Loading...
              </div>
            ) : sidebarIPOs.length === 0 ? (
              <div className="px-4 py-8 text-center text-gray-500 text-xs">
                No live IPOs right now
              </div>
            ) : (
              sidebarIPOs.map((ipo, i) => (
                <div
  key={i}
  className="px-3 py-2 hover:bg-gray-50 transition cursor-pointer"
>
  {/* NAME — full width, always visible */}
  <p className="font-medium text-[11px] text-gray-900 truncate leading-tight">
    {ipo.name}
  </p>

  {/* META — second line, compact */}
  <div className="flex items-center gap-2 mt-1">
    <span
      className={`text-[9px] px-1 py-[1px] rounded border ${
        ipo.type === "Mainboard"
          ? "bg-green-100 text-green-700 border-green-200"
          : "bg-blue-100 text-blue-700 border-blue-200"
      }`}
    >
      {ipo.type}
    </span>

    <span className="text-[9px] text-gray-600 font-medium whitespace-nowrap">
      {ipo.shortDates}
    </span>
  </div>
</div>

              ))
            )}
          </div>

          <div className="bg-gray-50 px-4 py-2 text-center border-t border-gray-200 rounded-b-lg">
            <p className="text-xs text-gray-500">Updated daily • Dec 2025</p>
          </div>
        </div>
 
    </div>
  );
};

export default IPOSidebar;