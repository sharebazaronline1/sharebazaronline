// Similar structure to Home, but with filters
const IPOTracker = () => {
  // Add state for filters (upcoming/ongoing, main/sme, nse/bse)
  // Use useQuery to fetch filtered data
  return (
    <div>
      <h1 className="text-3xl font-bold">IPO Tracker</h1>
      {/* Filter buttons */}
      <div className="flex gap-4 my-4">
        <button>Upcoming</button>
        <button>Ongoing</button>
        <button>Historic</button>
      </div>
      <div className="flex gap-4 my-4">
        <button>Main Board</button>
        <button>SME</button>
        <button>All</button>
      </div>
      <div className="flex gap-4 my-4">
        <button>NSE</button>
        <button>BSE</button>
      </div>
      {/* Grid of IPOCards */}
    </div>
  )
}

export default IPOTracker