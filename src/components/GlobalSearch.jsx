import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import {
  fetchIPOs,
  fetchPreIPOs,
  fetchBrokers,
  fetchBlogs,
  fetchUnlistedShares,
} from "../api/mockApi";
import { buildSearchIndex } from "../utils/buildSearchIndex";

const GlobalSearch = () => {
  const [query, setQuery] = useState("");
  const [searchIndex, setSearchIndex] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const overlayRef = useRef(null);

  useEffect(() => {
    const fetchAllData = async () => {
      const [ipos, preIpos, brokers, blogs, unlistedShares] = await Promise.all([
        fetchIPOs(),
        fetchPreIPOs(),
        fetchBrokers(),
        fetchBlogs(),
      ]);

      setSearchIndex(
        buildSearchIndex(ipos, preIpos, brokers, blogs, unlistedShares)
      );
    };
    fetchAllData();
  }, []);

  const results = searchIndex.filter((item) =>
    (item.title + " " + item.content)
      .toLowerCase()
      .includes(query.toLowerCase())
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
          className="absolute right-0 mt-2 w-80 bg-white border rounded-xl shadow-xl z-50"
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            placeholder="Search IPOs, Pre-IPOs..."
            className="w-full px-4 py-3 border-b outline-none"
          />

          {query.trim() !== "" &&
            results.map((r) => (
              <div
                key={r.id}
                onClick={() => {
                  navigate(`${r.url}#${r.anchor}`);
                  setIsOpen(false);
                  setQuery("");
                }}
                className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
              >
                <p className="font-semibold text-sm">{r.title}</p>
                <p className="text-xs text-gray-500">{r.content}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;
