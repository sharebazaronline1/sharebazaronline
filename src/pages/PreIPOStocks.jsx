import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fetchIPOs } from "../api/mockApi";

const PreIPOStocks = () => {
  const [ipos, setIPOs] = useState([]);
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 20;
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      const data = await fetchIPOs();


      const upcoming = data.filter(
        (item) => item?.status?.toLowerCase() === "upcoming"
      );

      setIPOs(upcoming);
    };
    load();
  }, []);

  const paginatedData = ipos.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const totalPages = Math.ceil(ipos.length / PAGE_SIZE);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6">

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* TABLE */}
        <div className="lg:col-span-9 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

          {/* Heading */}
          <div className="px-4 sm:px-6 py-5 bg-gray-50 border-b border-gray-200 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Pre-IPO Stocks
            </h2>
          
          </div>

          {/* TABLE WRAP */}
          <div className="p-3 sm:p-6 overflow-x-auto">

            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase border-b border-gray-200">
                  <th className="px-4 py-3">Company</th>
                  <th className="px-4 py-3 text-center">Price</th>
                  <th className="px-4 py-3 text-center">Lot Size</th>
                  <th className="px-4 py-3 text-center">Depository</th>
                  <th className="px-4 py-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 text-sm sm:text-base">
                {paginatedData.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-10 text-gray-500">
                      No Upcoming Pre-IPO Found
                    </td>
                  </tr>
                ) : (
                  paginatedData.map((ipo, i) => (
                    <motion.tr
                      key={ipo.id || i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="hover:bg-gray-50"
                    >
                  
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">

                       
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-gray-300 flex items-center justify-center text-gray-900 font-semibold text-lg">
                            {(ipo?.name ?? "N").charAt(0)}
                          </div>

                          <div>
                            <p className="font-semibold text-gray-900 text-sm sm:text-base">
                              {ipo?.name || "N/A"}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* PRICE */}
                      <td className="px-4 py-4 text-center font-semibold text-gray-900 text-sm">
                        ₹{ipo?.price ?? "-"}
                      </td>

                      {/* LOT SIZE */}
                      <td className="px-4 py-4 text-center font-medium text-gray-900 text-sm">
                        {ipo?.minLotSize ?? "-"}
                      </td>

                      {/* DEPOSITORY */}
                      <td className="px-4 py-4 text-center text-gray-700 text-sm">
                        {ipo?.depository ?? "-"}
                      </td>

                      {/* ACTION BUTTONS */}
                      <td className="px-4 py-4 text-center">
                        <div className="flex justify-center gap-2">
                          <button
                            className="px-3 py-1.5 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                          >
                            Buy
                          </button>
                          <button
                            onClick={() => navigate(`/ipo/${ipo.id}`)}
                            className="px-3 py-1.5 text-sm border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                          >
                            View
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>

            {/* PAGINATION */}
            <div className="flex justify-center items-center mt-6 gap-3">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-3 py-1.5 text-sm border rounded disabled:opacity-40"
              >
                Prev
              </button>

              <p className="text-sm font-medium">
                {page} / {totalPages}
              </p>

              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-3 py-1.5 text-sm border rounded disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* ADS */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24">
            <div className="bg-gray-100 border-dashed border-2 border-gray-300 rounded-xl h-80 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <p className="text-lg font-medium">Ad Space</p>
              
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default PreIPOStocks;
