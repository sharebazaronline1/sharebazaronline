import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi"; 
import { fetchIPOs, fetchPreIPOs, fetchBrokers, fetchBlogs, fetchUpcomingIPOs, fetchUnlistedShares } from "../api/mockApi";
import { buildSearchIndex } from "../utils/buildSearchIndex";

const GlobalSearch = () => {
  const [query, setQuery] = useState("");
  const [searchIndex, setSearchIndex] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const overlayRef = useRef(null);

  useEffect(() => {
    const fetchAllData = async () => {
      const [ipos, preIpos, brokers, blogs, upcomingIPOs, unlistedShares] = await Promise.all([
        fetchIPOs(),
        fetchPreIPOs(),
        fetchBrokers(),
        fetchBlogs(),
        fetchUpcomingIPOs(),
        fetchUnlistedShares(),
      ]);

      setSearchIndex(
        buildSearchIndex(ipos, preIpos, brokers, blogs, upcomingIPOs, unlistedShares)
      );
    };

    fetchAllData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const results = searchIndex.filter((item) =>
    (item.title + " " + item.content).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-100"
      >
        <FiSearch className="w-5 h-5 text-gray-600" />
      </button>

      {isOpen && (
        <div
          ref={overlayRef}
          className="absolute right-0 mt-2 w-80 bg-white border rounded-lg shadow-lg max-h-96 overflow-y-auto z-[9999]"
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            placeholder="Search IPOs, Blogs, Brokers..."
            className="w-full px-4 py-2 border-b outline-none"
          />

          {query && (
            <div>
              {results.length === 0 ? (
                <p className="p-3 text-sm text-gray-500">No results found</p>
              ) : (
                results.map((r) => (
                  <div
                    key={r.id}
                    onClick={() => {
                      navigate(r.url);
                      setIsOpen(false);
                      setQuery("");
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <p className="font-semibold text-sm">{r.title}</p>
                    <p className="text-xs text-gray-500 line-clamp-2">{r.content}</p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;
